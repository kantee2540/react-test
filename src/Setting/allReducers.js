import { themeReducer } from './ThemeReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    theme: themeReducer
});

export default allReducers;