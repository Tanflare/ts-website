import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import New from './counter2';
import About from './About';
import App from '../App';
import Work from './Work';
import Contact from './Contact';
import MetaTags from 'react-meta-tags';

import './Nav.css';
class Nav extends Component {
    state = {currentTime: "Hello"}
  
    render() { 
        return ( 
            <nav>
                <div className="navWide">
                    <MetaTags>
                        <title>Tanush Samson</title>
                        <meta name="description" content="Portfolio Website for Tanush Samson" />
                        <meta property="og:title" content="Tanush Samson" />
                        {/* <meta property="og:image" content="%PUBLIC_URL%/favicon2.ico" /> */}
                    </MetaTags>
                    <div className="wideDiv">
                        <a href="#" id="Home" onClick={home}>HOME</a>
                        <a href="#" id="About" onClick={about}>ABOUT</a>
                        {/* <a href="#" id="Work" onClick={work}>WORK</a>
                        <a href="#" id="Contact" onClick={contact}>CONTACT</a> */}
                    </div>
                </div>
            </nav>
         );
    }
}


function about()
{
ReactDOM.render(<About />, document.getElementById('root'));
console.log("About");
document.getElementById("About").style.color = "#e74f4f";
clear("Home") 
}

//MODIFIED TO ONLY HAVE TWO NAV BAR ITEMS
function clear(a){
    document.getElementById(a).style.color = "white";
  }
// function clear(a,b,c){
//   document.getElementById(a).style.color = "white";
//   document.getElementById(b).style.color = "white";
//   document.getElementById(c).style.color = "white";
// }

function home()
{
  //onclick={this.Test()}
ReactDOM.render(<App />, document.getElementById('root'));
console.log("Home");
document.getElementById("Home").style.color = "#e74f4f";
clear("About") 
}

// function contact()
// {
//   //onclick={this.Test()}
// ReactDOM.render(<Contact />, document.getElementById('root'));
// console.log("Contact");
// document.getElementById("Contact").style.color = "#e74f4f";
// clear("Home", "Work", "About")   
// }

// function work()
// {
//   //onclick={this.Test()}
// ReactDOM.render(<Work />, document.getElementById('root'));
// console.log("Contact");
// document.getElementById("Work").style.color = "#e74f4f";
// clear("Home", "About", "Contact")  
// }
  
    

export default Nav;

