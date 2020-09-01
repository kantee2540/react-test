import { themeReducer } from './themeReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    theme: themeReducer
});

export default allReducers;