import React from 'react'
import { NavLink, BrowserRouter, Switch, Route } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import './Setting.css'

import General from './General'
import Theme from './Theme'

export default function Setting() {
    return (
        <div>
            <BrowserRouter basename="/settings">
                <Row>
                    <Col md={3} className="d-none d-md-block">
                        <ul className="sidebar">
                            <li>
                                <NavLink activeClassName="active" exact to="/">
                                    <span className="icon">
                                        <i className="fas fa-cog"></i>
                                    </span>
                                    General 
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/theme">
                                    <span className="icon">
                                        <i className="fas fa-brush"></i>
                                    </span>
                                    Theme
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/security">
                                    <span className="icon">
                                        <i className="fas fa-shield-alt"></i>
                                    </span>
                                    Security
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/language">
                                    <span className="icon">
                                        <i className="fas fa-language"></i>
                                    </span>
                                    Language
                                </NavLink>
                            </li>
                            <hr/>
                            <li>
                                <NavLink activeClassName="active" to="/recentlogin">
                                    <span className="icon">
                                        <i className="fas fa-clock"></i>
                                    </span>
                                    Recent Login
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/help">
                                    <span className="icon">
                                        <i className="fas fa-question-circle"></i>
                                    </span>
                                    Help & Supports
                                </NavLink>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} md={9} className="setting-content">
                        
                        <Switch>
                            <Route exact path="/">
                                <General/>
                            </Route>
                            <Route exact path="/theme">
                                <Theme/>
                            </Route>
                        </Switch>
                        
                    </Col>
                </Row>
            </BrowserRouter>
        </div>
    )
}
