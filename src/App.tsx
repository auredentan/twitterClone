import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './pages/withTheme';
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>

      <div className="App">
        <Home />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
