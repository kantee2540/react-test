import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import './Menu.css'
import { NavLink, Link } from 'react-router-dom'

class Menu extends Component {

  constructor(props){
    super(props);
  }
  

  render() {
    return (
      <div className="container-fluid menu-bar">
        <div className="d-flex justify-content-between">
          <div>
            <b className="head-nav">NEWS</b>
          </div>
          <div className="head-link d-none d-md-block">
            <ul>
              <li>
                <NavLink activeClassName="head-link-active" to="/" exact={true}><i className="fas fa-newspaper"></i></NavLink>
              </li>
              <li>
                <NavLink activeClassName="head-link-active" to="/post"><i class="fas fa-mail-bulk"></i></NavLink>
              </li>
              <li>
                <NavLink activeClassName="head-link-active" to="/about"><i className="fas fa-info-circle"></i></NavLink>
              </li>
              <li>
                <NavLink activeClassName="head-link-active" to="/product" ><i className="fas fa-shopping-cart"></i></NavLink>
              </li>
              <li>
                <NavLink activeClassName="head-link-active" to="/contactus"><i className="fas fa-phone"></i></NavLink>
              </li>
            </ul>
          </div>
          <div className="account d-block d-md-none">
            <ul>
              <li>
                  <a href="#">
                    <i class="fas fa-bars"></i>
                  </a>
              </li>
            </ul>
          </div>
          <div className="account d-none d-md-block">
            <ul>
              <li>
                <div className="dropdown">
                  <a className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-user-circle"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    
                    {/* <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Sign out</a> */}
                    
                        <div className="profile"><i className="fas fa-user-circle user-profile"></i></div>
                      
                        <div className="dropdown-title">
                          <b>Sign in to community</b>
                        </div>
                        <div className="dropdown-description">Let's share with us. sign up today if you're new.</div>
                        <div className="signin-button">
                          <Link className="dropdown-item signin-btn" to="/login">Sign in</Link>
                        </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu