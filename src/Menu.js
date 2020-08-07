import React, { Component } from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

class Menu extends Component {
  render() {
    return (
      <div className="container-fluid menu-bar">
        <div className="d-flex justify-content-between">
          <div>
            <b className="head-nav">NEWS</b>
          </div>
          <div className="head-link">
            <ul>
              <li>
                <Link to="/"><i className="fas fa-newspaper"></i></Link>
              </li>
              <li>
                <Link to="/about"><i className="fas fa-info-circle"></i></Link>
              </li>
              <li>
                <Link to="/product"><i className="fas fa-shopping-cart"></i></Link>
              </li>
              <li>
                <Link to="/contactus"><i className="fas fa-phone"></i></Link>
              </li>
            </ul>
          </div>
          <div className="account">
            <ul>
              <li>
                <div className="dropdown">
                  <a className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-user-circle"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Profile</a>
                    <a className="dropdown-item" href="#">Account</a>
                    <div class="dropdown-divider"></div>
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
