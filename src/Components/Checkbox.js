import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import GetJoks from './getJoks'
var checkedMap =new Map();


export class Checkboxx extends Component {
    constructor(props) {
        super(props)

        this.state = {
            joketypes: [],
            check: false.toString(),
            click:false
        }
    }


    componentDidMount() {
        fetch('http://api.icndb.com/categories')
            .then((response) => { return response.json(); })
            .then((data) => {
                this.setState({
                    joketypes: data.value
                })
            })
    }

    

    handleChangeCheckbox = (event) => {
       
        const element = document.getElementsByName(event.target.name)
        // console.log(element[0],"==================")
        // console.log(element[0].checked,"true/false")
        // console.log(element);
        
        checkedMap.set(element[0].name, element[0].checked)
        this.setState({
            [event.target.name]: event.target.checked
        })
        
    }

    // jokeClickHandler = () => {
        
    // }
    render() {
        console.log(checkedMap);
        return (
            
            <Container>
            <h1>Welcome To JOke World</h1>
            {this.state.joketypes.map(type =>
                
                <label key={type}>
                {type}
                <Checkbox name={type}  check={this.state.check} onClick={this.handleChangeCheckbox} />
                </label>
                
                
                )}
                <br /><br />
                
                <GetJoks joksList={this.state.joketypes.map(type => checkedMap.get(type) ? <h1>{type}</h1> :null)}/>



            </Container>
        )
    }
}

export default Checkboxx










// <Checkbox checked={this.state.nerdy} onChange={this.handleChangeCheckbox}  name="nerdy" />
// <label>nerdy</label>
// <Checkbox checked={this.state.explicit} onChange={this.handleChangeCheckbox}  name="explicit" />
// <label>explicit</label>