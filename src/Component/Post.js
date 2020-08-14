import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component{

    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount(){
        axios.get("http://localhost:8080/Post")
        .then(response => {
            this.setState({
                isLoaded: true,
                items: response.data
            });
            console.log(response.data);
        })
        .catch(error => {
            this.setState({
                error: error
            });
        });
    }

    render(){
        return(
            <div>
                <h1>Post</h1>
            </div>
        )
    }
}

export default Post;