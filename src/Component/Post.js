import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
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
        axios.get("http://localhost:8000/post")
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
        const { error, isLoaded, items } = this.state
        return(
            <div>
                
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

                <PostModal/>

            </div>
        )
    }

    
}

export default Post;

function Loading(){
    return(
        <div className="loading">Loading</div>
    )
    
}

function PostModal(){

    var message = "";
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const postMessage = () => {
        var mes = message;
        console.log(mes);
        axios.post("http://localhost:8000/post/add", {
            message: mes
            
        },{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => {
            if (response.status == 200){
                handleClose();
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