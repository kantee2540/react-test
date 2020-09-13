import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import './Home.css';
import axios from 'axios';

const key = 'f6c13d309a454aa0bc778f45c5736073';

class Home extends Component{

    constructor(props){
        super(props);
        var countrySetting = localStorage.getItem('news_country');
        this.apiUrl = 'https://newsapi.org/v2/top-headlines';
        this.params = {'category': 'general', 'country': countrySetting};
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        axios.get(this.apiUrl, {
            params: {
                apiKey: key,
                category: this.params['category'],
                country: this.params['country']
            }
        })
        .then(response => {
            this.setState({
                isLoaded: true,
                items: response.data["articles"]
            });
        }).catch(error => {
            this.setState({
                error: error.message
            });
            console.log(error);
        }).then(function () {
            
        })
    }

    changeCategory(value){
        this.setState({
            isLoaded: false
        })
        this.params['category'] = value;
        this.componentDidMount();
    }

    render(){
        const { error, isLoaded, items } = this.state
        return(
            <div className="home">
                {!isLoaded ? <Loading message={!error ? 'Loading...': error}/> : ''}

                <Row>
                    <Col md={3} className="d-none d-md-flex sidebar-col">
                        <div className="sidebar-content">
                            <ul className="sidebar">
                                <li>
                                    <Link to="/" className="sidebar-link" onClick={this.changeCategory.bind(this, 'business')}>
                                        <span className="icon">
                                            <i className="fas fa-briefcase"></i>
                                        </span>
                                        Business
                                    </Link>
                                </li>
                                <li>
                                    <Link  to="/" className="sidebar-link" onClick={this.changeCategory.bind(this, 'entertainment')}>
                                        <span className="icon">
                                            <i className="fas fa-wine-bottle"></i>
                                        </span>
                                        Entertainment
                                    </Link>
                                </li>
                                <li>
                                    <Link  to="/" className="sidebar-link" onClick={this.changeCategory.bind(this, 'general')}>
                                        <span className="icon">
                                            <i className="fas fa-newspaper"></i>
                                        </span>
                                        General
                                    </Link>
                                </li>
                                <li>
                                    <Link  to="/" className="sidebar-link" onClick={this.changeCategory.bind(this, 'health')}>
                                        <span className="icon">
                                            <i className="fas fa-heartbeat"></i>
                                        </span>
                                        Health
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="sidebar-link" onClick={this.changeCategory.bind(this, 'science')}>
                                        <span className="icon">
                                            <i className="fas fa-atom"></i>
                                        </span>
                                        Science
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="sidebar-link" onClick={this.changeCategory.bind(this, 'sports')}>
                                        <span className="icon">
                                            <i className="fas fa-running"></i> 
                                        </span>
                                        Sports
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="sidebar-link" onClick={this.changeCategory.bind(this, 'technology')}>
                                        <span className="icon">
                                            <i className="fas fa-tv"></i>
                                        </span>
                                        Technology
                                    </Link>
                                </li>
                            </ul>
                            Created from 2020
                        </div>
                    </Col>
                    <Col xs={12} md={{span: 9, offset: 3}} xl={{span: 9, offset: 3}} className="content-col">
                        <div className="row">
                            {items.map((item, index)=>(
                            <div className="col-12 col-sm-6" key={index}>
                                <div className="post">
                                    <img src={item['urlToImage']}/>
                                    <div className="description">
                                        <div className="title">{item['title']}</div>
                                        <div className="sub-title">
                                            {item['description']}
                                        </div>
                                        <div className="d-flex bd-highlight">
                                            <div className="author ">
                                                <span>
                                                    <i className="fas fa-user"></i>
                                                </span>
                                                {item['author']}
                                            </div>
                                            <div className="ml-auto">
                                                <b className="news-origin">{item['source']['name']}</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home;

class Loading extends Component{
    render(){
        return(
            <div className="loading">{this.props.message}</div>
        )
    }
}