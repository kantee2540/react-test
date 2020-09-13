import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { lightThemeChange, darkThemeChange } from './ThemeReducer'
import { Link } from 'react-router-dom'

function Theme(){
    const dispatch = useDispatch();
    let isDark = localStorage.getItem('theme') == 'dark' ? true: false;

    // const [theme, toggleTheme] = useDarkMode();
    const [themeSetting, setThemeSetting] = useState([
    {title: 'Dark mode', description: 'This mode will contain black color to your application', isTurnon: isDark},
    {title: 'Automantically Dark mode', description: 'When your pc has set to dark the application will appear dark automantically', isTurnon: false},
    {title: 'Hight Constrast', description: 'This mode will grain high contrast.', isTurnon: false}]);
    
    const onhandleCheck = (state, key) =>{
        const array = themeSetting.slice();
        if (!state){
            array[key].isTurnon = true;
        }else{
            array[key].isTurnon = false;
        }

        setThemeSetting(array);
    
        if (key === 0){
            if (array[key].isTurnon){
                dispatch(darkThemeChange());
                localStorage.setItem('theme', 'dark');
            }else{
                dispatch(lightThemeChange());
                localStorage.setItem('theme', 'light');
            }
        }
    }
    
    return (
        <div>
            <div className="head-title">
                <Link to="/" className="setting-back d-inline d-md-none"><i class="fas fa-arrow-left"></i></Link>
                Theme
            </div>
            <div>
            {themeSetting.map((item, key) => (
                    <div key={key}>
                    <div className="setting-block" >
                        <div className="setting-detail">
                            <div className="setting-title">{item.title}</div>
                            <div className="setting-description">{item.description}</div>
                        </div>
                        <div className="toggle-content">
                            <label className="toggle-switch">
                                <input type="checkbox" checked={item.isTurnon? true :false} 
                                onChange={onhandleCheck.bind(this, item.isTurnon, key)}/>
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Theme;
