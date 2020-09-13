import React from 'react'
import { SettingLink } from './Setting'

class General extends React.Component {

    constructor(props){
        super(props);
        this.state = {generalSettings: [{title: 'Display Name', description: 'Lorem ipsum dolor sit amet', isTurnon: false},
        {title: 'Data Saving', description: 'Lorem ipsum dolor sit amet', isTurnon: false},
        {title: 'Censor explicit content', description: 'Lorem ipsum dolor sit amet', isTurnon: false},
        {title: 'Remember this device', description: 'Lorem ipsum dolor sit amet', isTurnon: false},
        {title: 'Allow cookie for this broswer', description: 'Lorem ipsum dolor sit amet', isTurnon: false}],
        menuNavigation: [{title: 'Theme', path: "/theme", description: "Change theme to your favor appearance"},
                        {title: 'Security', path: '/security', description: "Configuration of security for your account"},
                        {title: 'Language', path: '/language', description: "Configuration language and region"},
                        {title: 'News', path: '/news', description: 'Configuration the reference of news from your region'}]};
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
                <div className="head-title">
                    General
                </div>
                <div>
                    {this.state.generalSettings.map((item, key) => (
                        <div key={key}>
                            <div className="setting-block">
                                <div className="setting-detail">
                                    <div className="setting-title">{item.title}</div>
                                    <div className="setting-description">{item.description}</div>
                                </div>
                                <div className="toggle-content">
                                    <label className="toggle-switch">
                                        <input type="checkbox" checked={item.isTurnon? true :false} 
                                        onChange={this.onhandleCheck.bind(this, item.isTurnon, key)}/>
                                        <span className="slider"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    ))}
                    {this.state.menuNavigation.map((item, key) => (
                        <div key={key}>
                        <SettingLink path={item.path} title={item.title} description={item.description}/>
                        </div>
                    ))}

                </div>
            </div>
        )
    }
}

export default General;