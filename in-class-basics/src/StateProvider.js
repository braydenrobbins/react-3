import React, { createContext, useState, useContext } from 'react';

const state = createContext();

const {Provider} = state;

export const useStateContext = function() {
    const {theme, changeTheme} = useContext(state);

    return  {
        theme, 
        changeTheme
    }
} 

function stateProvider({children}) {

    const [theme, setTheme] = useState('light');

    function changeTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <Provider value={{
            theme,
            changeTheme
        }}>
            {children}
        </Provider>
    )
}

export default stateProvider;