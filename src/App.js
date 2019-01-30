import React, { Component } from 'react';
import New from './components/counter2';
import ReactDOM from 'react-dom';

import './App.css';


class App extends Component {
  
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div id="container" >
           <span class="dot"></span>
           <p className = "Tanush" >Tanush YELLOW Samson</p>
           {/* <p className = "Tanush" >Tanush Samson<span id= "cursor">|</span></p> */}
          </div>
        </header>
      </div>
      
      
    );
  }
}

export default App;
