import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import "./comp.css"
export class getJoks extends Component {
    constructor(props) {
        super(props)

        this.state = {
            joks: [],
        }
    }
    GetData = () => {
        const { joksList } = this.props;

        joksList.map(item => {
            if (item != null) {
                axios.get(`http://api.icndb.com/jokes/random?limitTo=${item.props.children}`)
                    .then(res => {
                        this.setState({
                            joks: this.state.joks.concat(res.data.value.joke)
                        })
                    })
            } else {
                console.log("not found")
            }
        }
        )
    }
    render() {
        // const {joksList}=this.props;
        return (
            <div>
                <Button variant="contained" color="secondary" onClick={this.GetData}>Get Jokes</Button>
                <br />
                <br />
                {this.state.joks.length > 0 ?
                    <Button variant="contained" color="secondary" onClick={this.GetData} >read more</Button>
                    : ''}
                <Container maxWidth="md">
                    <Grid container spacing={3}>

                        {this.state.joks.map((jok) => (
                            <Grid item xs={6} sm={4} >
                            <div className="shadow">
                                <Card >
                                    <CardContent ><Typography >{jok}</Typography></CardContent>
                                </Card>
                            </div>
                            </Grid>

                        ))}
                    </Grid>


                </Container>
            </div>
        )
    }
}

export default getJoks
