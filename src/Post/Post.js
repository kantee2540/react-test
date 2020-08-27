import React, { Component } from 'react';
import { Row, Col, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
        this.fetchData();
    }

    fetchData(){
        axios.get("http://localhost:8000/post")
        .then(response => {
            this.setState({
                isLoaded: true,
                items: response.data
            });
        })
        .catch(error => {
            this.setState({
                error: error.message
            });
        });
    }

    render(){
        const { error, isLoaded, items } = this.state
        return(
            <div>
                
                {!isLoaded ? <Loading message={!error ? "Loading" : error}/>: ''}
                <div className="head-content">
                    <span className="head-title">Post</span>
                    <a href="#" className="head-button"><i className="fas fa-redo"></i></a>
                </div>
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

                <PostModal/>

            </div>
        )
    }

    
}

export default Post;

class Loading extends React.Component{
    render(){
        return(
            <div className="loading">{this.props.message}</div>
        )
    }
    
}

function PostModal(){

    var message = "";
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const postMessage = () => {
        var mes = message;

        const formData = new FormData();
        formData.append('message', mes);
        
        axios.post('http://localhost:8000/post/add', formData,{
            headers: {
            'Content-type': 'multipart/form-data',
            'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.status == 200){
                handleClose();
                this.fetchData();
            }
        }).catch(error =>{
            console.log(error);
        });
    }

    const handleUpdatevalue = (event) => {
        message = event.target.value;
    }
    
    return(
        <>
            <a className="float-button" href="#" onClick={handleShow}>
                <i className="fas fa-pen"></i>
            </a>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Post Message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <textarea className="post-textarea form-control" rows="5" onChange={handleUpdatevalue.bind(this)} placeholder="Say something..."></textarea>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Discard
                </Button>
                <Button variant="primary" onClick={postMessage}>
                    Post
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}