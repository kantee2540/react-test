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
                                <SettingLink path="/" settingName={"General"} iconClass={"fas fa-cog"} exact={true}/>
                            </li>
                            <li>
                                <SettingLink path="/theme" settingName={"Theme"} iconClass={"fas fa-brush"}/>
                            </li>
                            <li>
                                <SettingLink path="/security" settingName={"Security"} iconClass={"fas fa-shield-alt"}/>
                            </li>
                            <li>
                                <SettingLink path="/language" settingName={"Language"} iconClass={"fas fa-language"}/>
                            </li>
                            <hr/>
                            <li>
                                <SettingLink path="/news" settingName={"News"} iconClass={"fas fa-newspaper"}/>
                            </li>
                            <li>
                                <SettingLink path="/post" settingName={"Post"} iconClass={"fas fa-mail-bulk"}/>
                            </li>
                            <hr/>
                            <li>
                                <SettingLink path="/recentlogin" settingName={"Recent Login"} iconClass={"fas fa-clock"}/>
                            </li>
                            <li>
                                <SettingLink path="/help" settingName={"Help & Support"} iconClass={"fas fa-question-circle"}/>
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

class SettingLink extends React.Component{
    render(){
        return (
            <NavLink className="sidebar-link" activeClassName="active" to={this.props.path} exact={this.props.exact || false}>
                <span className="icon">
                    <i className={this.props.iconClass}></i>
                </span>
                {this.props.settingName}
            </NavLink>
        )
    }
}
