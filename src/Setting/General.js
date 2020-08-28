import React from 'react'
import { Link } from 'react-router-dom'

class General extends React.Component {

    constructor(props){
        super(props);
        this.state = {generalSettings: [{title: 'Display Name', description: 'Lorem ipsum dolor sit amet', isTurnon: false},
        {title: 'Data Saving', description: 'Lorem ipsum dolor sit amet', isTurnon: false},
        {title: 'Censor explicit content', description: 'Lorem ipsum dolor sit amet', isTurnon: false},
        {title: 'Remember this device', description: 'Lorem ipsum dolor sit amet', isTurnon: false},
        {title: 'Allow cookie for this broswer', description: 'Lorem ipsum dolor sit amet', isTurnon: false}]};
    }

    onhandleCheck = (state, key) =>{
        
        const array = this.state.generalSettings.slice();
        if (!state){
            array[key].isTurnon = true;
        }else{
            array[key].isTurnon = false;
        }
        
        this.setState({array});
    }

    render(){
        return (
            <div>
                <div className="head-title">General</div>
                <div>
                    {this.state.generalSettings.map((item, key) => (
                        <>
                        <div className="setting-block" key={key}>
                            <div className="setting-detail">
                                <div className="setting-title">{item.title}</div>
                                <div className="setting-description">{item.description}</div>
                            </div>
                            <div className="toggle-content">
                                <label className="toggle-switch">
                                    <input type="checkbox" checked={item.isTurnon? true :false} 
                                    onChange={this.onhandleCheck.bind(this, item.isTurnon, key)}/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                        </div>
                        <hr/>
                        </>
                    ))}
                    <Link to="/theme" className="setting-block setting-link">
                        <div className="setting-detail">
                            <div className="setting-title">Theme</div>
                            <div className="setting-description">Change theme to your favor appearance</div>
                        </div>
                        <div className="toggle-content">
                            <i class="fas fa-angle-right"></i>
                        </div>
                    </Link>
                    <hr/>
                    <Link to="/security" className="setting-block setting-link">
                        <div className="setting-detail">
                            <div className="setting-title">Security</div>
                            <div className="setting-description">Configuration of security for your account</div>
                        </div>
                        <div className="toggle-content">
                            <i class="fas fa-angle-right"></i>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default General;