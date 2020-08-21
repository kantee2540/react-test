import React, { Component } from 'react'
import './Menu.css'
import { NavLink } from 'react-router-dom'

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
                    <a className="dropdown-item" href="#">Profile</a>
                    <a className="dropdown-item" href="#">Account</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Sign out</a>
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
