
function themeReducer (state = 'light', action) {
  switch (action.type){
    case "DARK":
        state = 'dark'
        return state
    case "LIGHT":
        state = 'light'
        return state
    default:
        state = localStorage.getItem('theme') || 'light'
        return state
  }
}

const lightThemeChange = () => {
    return {
        type: 'LIGHT'
    };
};

const darkThemeChange = () => {
    return {
        type: 'DARK'
    };
};

export { themeReducer, lightThemeChange, darkThemeChange };