import React from 'react'

class Theme extends React.Component {

    constructor(props){
        super(props);
        let isDark = (localStorage.getItem('theme') == 'dark' ? true: false);
        this.state = {theme: [{title: 'Dark mode', description: 'This mode will contain black color to your application', isTurnon: isDark},
        {title: 'Hight Constrast', description: 'This mode will grain high contrast.', isTurnon: false}],
    mode: 'Light'};
    }

    onhandleCheck = (state, key) =>{
        
        const array = this.state.theme.slice();
        if (!state){
            array[key].isTurnon = true;
        }else{
            array[key].isTurnon = false;
        }
        this.setState({array});

        if (key == 0){
            this.toggleDarkmode(array[key].isTurnon);
        }
    }

    toggleDarkmode = (state) => {
        console.log(state);
        if(state){
            localStorage.setItem('theme', 'dark');
        }else{
            localStorage.setItem('theme', 'light')
        }

        console.log(localStorage.getItem('theme'));
    }

    render(){
        return (
            <div>
                <div className="head-title">Theme</div>
                <div>
                {this.state.theme.map((item, key) => (
                        <div key={key}>
                        <div className="setting-block" >
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
                        <hr/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Theme;
