import React, { Component } from 'react';

import './Work.css';

class Work extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="App">
                <header className="container">
                    <h1 className ="link" onClick={behance}>Behance</h1>
                    <br></br>
                    <h1 className="link" onClick={github}>GitHub</h1>
                </header>
            </div> 
            
        );
    }
}
 
function behance(){
    var win = window.open("https://www.behance.net/Tanflare", '_blank');
      win.focus();
    }

function github(){
    var win = window.open("https://github.com/tanflare", '_blank');
        win.focus();
    }

export default Work;