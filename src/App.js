import React, { Component } from 'react';
import Search from './components/Search';
import Navbar from './components/layouts/Navbar'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">  
          
          <Navbar /> 
          <Search />
          
      </div>
    );
  }
}

export default App;
