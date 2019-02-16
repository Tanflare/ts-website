import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="App">
                <header className="container">
                    {/* <h1 className="text">Under Construction</h1> */}
                    <div class="grid-container">
                        <div class="grid-item"><img src="../LN.png" height="70px" onClick={linkedin}></img></div>
                        <div class="grid-item">2</div>
                        <div class="grid-item">3</div>  
                    </div>
                </header>
            </div> 
         );
    }
}
 
function linkedin(){
var win = window.open("https://www.linkedin.com/in/tanush-samson/", '_blank');
  win.focus();
}

export default Contact;

