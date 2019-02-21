import React, { Component } from 'react';

import './Work.css';

class Work extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="App">
                <header className="container">
                    <div class="row">
                    <div class="col content">some content</div>
                    <div class="col content raw">some other content</div>
                    </div>
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