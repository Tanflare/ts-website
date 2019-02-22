import React, { Component } from 'react';

import './Work.css';

class Work extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="App">
                <div className="container">
                <div className="wrapper">
                    <div class="row">
                    
                    
                    <span className="dot"></span>
                    <div class="col content"> <h1 className ="link" onClick={behance}>Behance</h1></div>
                    
                    <div class="col content raw"> <h1 className ="link" onClick={github}>Github</h1></div>
                    </div>
                    <br></br>
                    <div class="row">
                    <div class="col content"> <h1 className ="link" onClick={behance}>Something</h1></div>
                    <div class="col content raw"> <h1 className ="link" onClick={github}>Something Else</h1></div>
                    </div>
                    </div>
                </div>
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