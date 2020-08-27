import React from 'react';
import { Row, Col, Form , Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends React.Component{
    render(){
        return(
            <div id="login">
                <Row>
                    <Col md={5} lg={7}></Col>
                    <Col md={7} lg={5}>
                    <div className="login-content">
                        <h1>Login</h1>
                        <Form>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control placeholder="Username"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"/>
                            </Form.Group>
                            <div className="btn-content">
                                <Button className="app-button">Sign in</Button>
                                <Button className="app-button-gray" variant="light">Register</Button>
                            </div>
                        </Form>
                    </div>
                    </Col>
                </Row>
                
                
            </div>
        )
    }
}

export default Login;