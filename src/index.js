import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom"
import Kennel from './components/Kennel';

ReactDOM.render(            //renders the class("variable") of Kennel which contains the classes Navbar and appviews
<Router>
    <Kennel />
</Router>, 
document.getElementById('root'));       //targets the id root to place the dom render in its place
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
