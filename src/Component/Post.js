import React, { Component } from 'react';
import axios from 'axios';
import './Post.css'

class Post extends Component{

    constructor(props){
        super(props);
        this.postvalue = {}
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

    createPost() {
        
    }

    render(){
        const { error, isLoaded, items } = this.state
        return(
            <div>
                <a className="float-button" href="#" data-toggle="modal" data-target="#createpost">
                    <i className="fas fa-pen"></i>
                </a>
                {!isLoaded ? <Loading/>: ''}
                <h1>Post</h1>
                <div className="row">
                    {items.map((item, index) => (
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={index}>
                            <div className="post-item">
                                {item['message']}
                                <hr/>
                                <div className="row post-action">
                                    <a className="col-4" href="#"><i className="far fa-heart"></i></a>
                                    <a className="col-4" href="#"><i className="far fa-comment"></i></a>
                                    <a className="col-4" href="#"><i className="far fa-share-square"></i></a>
                                    <a className="col-4" href="#"><i className="fas fa-align-justify"></i></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="modal fade" id="createpost" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Create post</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <textarea className="post-textarea form-control" rows="5" placeholder="Say something..."></textarea>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Discard</button>
                        <button type="button" className="btn btn-primary">Post</button>
                    </div>
                    </div>
                </div>
                </div>

            </div>
        )
    }
}

export default Post;

class Loading extends Post{
    render(){
        return(
            <div className="loading">Loading</div>
        )
    }
}