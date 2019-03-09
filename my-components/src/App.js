import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { ThemeProvider } from 'styled-components';

import Button from './Button';

const theme = {
  danger: 'red',
  success: 'green',
  primary: 'blue',
  warning: 'yellow', 
}


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className='App'>
          <Button>
            Click Me
          </Button>
          <Button use='danger'>
            Don't Touch Me
          </Button>
          <Button use='success'>
            Success!
          </Button>
          <Button use='primary'>
            Primary Action
          </Button>
          <Button use='warning'>
            Watch Out
          </Button>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
