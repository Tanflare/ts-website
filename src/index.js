import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import New from './components/counter2';
import Nav from './components/Nav';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Nav />, document.getElementById('navbar'));
//ReactDOM.render(<New />, document.getElementById('root'));



// const element = <h1>Hello World</h1>;
// //console.log(element.toString());
// ReactDOM.render(element, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
