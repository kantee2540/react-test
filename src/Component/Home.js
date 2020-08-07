import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        const apiUrl = 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f6c13d309a454aa0bc778f45c5736073'
        axios.get(apiUrl)
        .then(response => {
            this.setState({
                isLoaded: true,
                items: response.data["articles"]
            });
        }).catch(function (error) {
            console.log(error)
        }).then(function () {
            
        })

        //Orginal
        // fetch(apiUrl)
        // .then((response) => response.json())
        // .then((data) => {
        //     this.setState({
        //         isLoaded: true,
        //         items: data["articles"]
        //     });
        //     //console.log(data["articles"]);
        // },
        // (error) => {
        //     this.setState({
        //         isLoaded: true,
        //         error
        //     });
        // })
    }

    render(){
        const { error, isLoaded, items } = this.state
        return(
            <div className="home">
                {!isLoaded ? <Loading/> : ''}
                <div className="row">
                    <div className="col-3 d-none d-md-block">
                        <ul className="sidebar">
                            <li>
                                <a href="#">
                                    <span className="icon">
                                        <i className="far fa-clock"></i> 
                                    </span>
                                    Most recent
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="icon">
                                        <i className="fas fa-history"></i>
                                    </span>
                                    Latest Update
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <span className="icon">
                                        <i className="fas fa-flag"></i>
                                    </span>
                                    Page
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <span className="icon">
                                        <i className="fas fa-users"></i>
                                    </span>
                                    Community
                                </a>
                            </li>
                        </ul>
                        Created from 2020
                    </div>
                    <div className="col-12 col-md-9 row">
                        {items.map((item, index)=>(
                        <div className="col-6" key={index}>
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
                </div>
            </div>
        )
    }
}

export default Home;

class Loading extends Component{
    render(){
        return(
            <div class="loading">Loading!</div>
        )
    }
}