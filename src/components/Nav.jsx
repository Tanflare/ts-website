import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import New from './counter2';
import About from './About';
import App from '../App';
import Work from './Work';
import Contact from './Contact';

import './Nav.css';
class Nav extends Component {
    state = {  }

   

    render() { 
        return ( 
            <nav>
                <div className="navWide">
                    <div className="wideDiv">
                        <a href="#"onClick={home}>HOME</a>
                        <a href="#" id="About" onClick={about}>ABOUT</a>
                        <a href="#" onClick={work}>WORK</a>
                        <a href="#" onClick={contact}>CONTACT</a>
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
console.log("About");
  
}

function home()
{
  //onclick={this.Test()}
ReactDOM.render(<App />, document.getElementById('root'));
console.log("Home");
  
}

function contact()
{
  //onclick={this.Test()}
ReactDOM.render(<Contact />, document.getElementById('root'));
console.log("Contact");
  
}
function work()
{
  //onclick={this.Test()}
ReactDOM.render(<Work />, document.getElementById('root'));
console.log("Contact");
  
}
  
    

export default Nav;

