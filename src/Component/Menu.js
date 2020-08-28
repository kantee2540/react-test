import React, { ReactDOM, Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import './Menu.css'
import { NavLink, Link } from 'react-router-dom'

class Menu extends Component {

  constructor(props){
    super(props);
    this.state = { isShowSidebar: false };
  }
  
  openSidebar = () =>{
    if (!this.state.isShowSidebar){
      this.setState({ isShowSidebar: true });
    }else{
      this.setState({ isShowSidebar: false });
    }
  }

  clicked = () => {
    this.setState({ isShowSidebar: false });
  }

  render() {
    const { isShowSidebar } = this.state
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
                <NavLink activeClassName="head-link-active" to="/post"><i className="fas fa-mail-bulk"></i></NavLink>
              </li>
              <li>
                <NavLink activeClassName="head-link-active" to="/about"><i className="fas fa-info-circle"></i></NavLink>
              </li>
              <li>
                <NavLink activeClassName="head-link-active" to="/product" ><i className="fas fa-shopping-cart"></i></NavLink>
              </li>
              <li>
                <NavLink activeClassName="head-link-active" to="/settings"><i className="fas fa-cog"></i></NavLink>
              </li>
            </ul>
          </div>
          <div className="account d-block d-md-none">
            <ul>
              <li>
                  <a href="#" onClick={this.openSidebar}>
                    <i className={isShowSidebar ? 'fas fa-times' : 'fas fa-bars'}></i>
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
        <div className="d-flex d-md-block">
          <div className={"sidebar-m " + (isShowSidebar ? 'visible' : 'hidden')}>
            <ul>
              <li><NavLink to="/" onClick={this.clicked}><i className="fas fa-newspaper"></i>News</NavLink></li>
              <li><NavLink to="/post" onClick={this.clicked}><i className="fas fa-mail-bulk"></i>Post</NavLink></li>
              <li><NavLink to="/about" onClick={this.clicked}><i className="fas fa-info-circle"></i>About</NavLink></li>
              <li><NavLink to="/product" onClick={this.clicked}><i className="fas fa-shopping-cart"></i>Product</NavLink></li>
              <li><NavLink to="/settings" onClick={this.clicked}><i className="fas fa-cog"></i>Setting</NavLink></li>
              <hr/>
              <li><NavLink to="/login" onClick={this.clicked}><i className="fas fa-user-circle"></i>Sign in</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu