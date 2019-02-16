import React, { Component } from 'react';

import './Work.css';

class Work extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="App">
                <header className="container">
                    <h1><a href="https://www.behance.net/Tanflare" className="link">Behance</a></h1>
                    <br></br>
                    <h1><a href="https://github.com/tanflare" className="link">GitHub</a></h1>
                </header>
            </div> 
            
        );
    }
}
 
export default Work;