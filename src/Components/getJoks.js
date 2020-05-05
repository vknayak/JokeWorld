import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import axios from 'axios'
export class getJoks extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            joks:[],     
        }
    }
    GetData=()=>{
        const {joksList}=this.props;

        joksList.map(item =>
            { if (item !=null){
            axios.get(`http://api.icndb.com/jokes/random?limitTo=${item.props.children}`)
            .then(res=>{
                this.setState({
                    joks: this.state.joks.concat(res.data.value.joke)
                })
            })
        }else{
            console.log("not found")
        }
        }
        )
    }
    render() {
        const {joksList}=this.props;
        return (
            <div>
                <Button variant="contained" color="secondary" onClick={this.GetData}>Get Jokes</Button>
                
                {this.state.joks.map((jok)=>(
                    <p>{jok}</p>
                ))}
                {this.state.joks.length> 0 ?
                <Button variant="contained" color="secondary" onClick={this.GetData}>read more</Button>
                :''}
            </div>
        )
    }
}

export default getJoks
