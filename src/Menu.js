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
                <Link to="/"><i class="fas fa-newspaper"></i></Link>
              </li>
              <li>
                <Link to="/about"><i class="fas fa-info-circle"></i></Link>
              </li>
              <li>
                <Link to="/product"><i class="fas fa-shopping-cart"></i></Link>
              </li>
              <li>
                <Link to="/contactus"><i class="fas fa-phone"></i></Link>
              </li>
            </ul>
          </div>
          <div className="account">
            <ul>
              <li>
                <a href="#"><i class="fas fa-user-circle"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu
