import React from 'react'
import { NavLink, Link, BrowserRouter, Switch, Route } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import './Setting.css'

import General from './General'
import Theme from './Theme'
import News from './News'
import Language from './Language'

class Setting extends React.Component {

    render(){
        return (
            <div>
                <BrowserRouter basename="/settings">
                    <Row>
                        <Col md={3} lg={3} className="d-none d-md-flex setting-menu"style={{position: 'fixed', width: 350}}>
                            <ul className="sidebar">
                                <li>
                                    <SettingMenuLink path="/" settingName={"General"} iconClass={"fas fa-cog"} exact={true}/>
                                </li>
                                <li>
                                    <SettingMenuLink path="/theme" settingName={"Theme"} iconClass={"fas fa-brush"}/>
                                </li>
                                <li>
                                    <SettingMenuLink path="/security" settingName={"Security"} iconClass={"fas fa-shield-alt"}/>
                                </li>
                                <li>
                                    <SettingMenuLink path="/language" settingName={"Language"} iconClass={"fas fa-language"}/>
                                </li>
                                <hr/>
                                <li>
                                    <SettingMenuLink path="/news" settingName={"News"} iconClass={"fas fa-newspaper"}/>
                                </li>
                                <li>
                                    <SettingMenuLink path="/post" settingName={"Post"} iconClass={"fas fa-mail-bulk"}/>
                                </li>
                                <hr/>
                                <li>
                                    <SettingMenuLink path="/recentlogin" settingName={"Recent Login"} iconClass={"fas fa-clock"}/>
                                </li>
                                <li>
                                    <SettingMenuLink path="/help" settingName={"Help & Support"} iconClass={"fas fa-question-circle"}/>
                                </li>
                            </ul>
                        </Col>
                        <Col xs={12} md={{span: 9, offset: 3}} lg={{span: 9, offset: 3}} className="setting-content">
                            
                            <Switch>
                                <Route exact path="/">
                                    <General/>
                                </Route>
                                <Route exact path="/theme">
                                    <Theme/>
                                </Route>
                                <Route path="/news">
                                    <News/>
                                </Route>
                                <Route path="/language">
                                    <Language/>
                                </Route>
                            </Switch>
                            
                        </Col>
                    </Row>
                </BrowserRouter>
            </div>
        )
    }
}

class SettingMenuLink extends React.Component{
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

class SettingLink extends React.Component{
    render(){
        return(
            <Link to={this.props.path} className="setting-block setting-link">
                <div className="setting-detail">
                    <div className="setting-title">{this.props.title}</div>
                    <div className="setting-description">{this.props.description}</div>
                </div>
                <div className="toggle-content">
                    <i className="fas fa-angle-right"></i>
                </div>
            </Link>
        )
    }
}

class SettingDescription extends React.Component{
    render(){
        return(
            <div className="setting-block">
                <div className="setting-description">{this.props.description}<br/>{this.props.description2}</div>
            </div>
        )
    }
}

export { Setting, SettingLink, SettingDescription }
