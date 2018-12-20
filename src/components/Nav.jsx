import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import New from './counter2';
import About from './About';
import App from '../App';

import './Nav.css';
class Nav extends Component {
    state = {  }

   

    render() { 
        return ( 
            <nav>
                <div className="navWide">
                    <div className="wideDiv">
                        <a href="#" id="About" onClick={about}>ABOUT</a>
                        <a href="#">WORK</a>
                        <a href="#">CONTACT</a>
                        <a href="#"onClick={home}>HomeREMOVE LATER</a>
                    </div>
                </div>
            </nav>
         );
    }
}
 

function about()
{
  //onclick={this.Test()}
ReactDOM.render(<About />, document.getElementById('root'));
console.log("HEllo");
  
}

function home()
{
  //onclick={this.Test()}
ReactDOM.render(<App />, document.getElementById('root'));
console.log("HEllo");
  
}
    

export default Nav;

