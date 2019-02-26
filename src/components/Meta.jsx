import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';

class Meta extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="wrapper">
                <MetaTags>
                    <title>Page 1</title>
                    <meta name="description" content="Some description." />
                    <meta property="og:title" content="Tanush Samson Portfolio Website" />
                    <meta property="og:image" content="%PUBLIC_URL%/favicon2.ico" />
                </MetaTags>
                <div className="content"> Some Content </div>
            </div>
         );
    }
}
 
export default Meta;