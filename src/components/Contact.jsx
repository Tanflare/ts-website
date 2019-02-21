import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="App">
                <header className="container">
                    {/* <h1 className="text">Under Construction</h1> */}
                    <div className="grid-container">
                        <div className="grid-item"><img src="%PUBLIC_URL%/LN.pn" height="70px" onClick={linkedin}></img></div>
                        <div className="grid-item">2</div>
                        <div className="grid-item">3</div>  
                    </div>
                    <h1>*Under Contruction*</h1>
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

