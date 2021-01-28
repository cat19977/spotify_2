import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, useHistory} from 'react-router-dom';
import App from './Components/App';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';


 
ReactDOM.render(
  
  <Router>
    <App/>
  </Router>
  ,
  document.getElementById('root')
);
