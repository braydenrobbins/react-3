import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css'

import { useStateContext } from './StateProvider'


import TodoList from './TodoList';
import {ThemeProvider} from 'styled-components';
import StateProvider from './StateProvider'

const theme = {
  headingBlack: '#222',
  bodyBlack: '#444',
}

 export const genericContext = React.createContext();

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StateProvider>
          <TodoList />
        </StateProvider>
      </ThemeProvider>
    );
  }
}

export default App;
