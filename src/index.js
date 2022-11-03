import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Switch,Route,  BrowserRouter as Router } from 'react-router-dom'
import {Home} from './Home';
import {Portfolio} from './Portfolio';
import {Works} from './Works'
import {NoFound} from './NoFound';
import Header from './Header'
import Navbar from './Navbar'
import {Footer} from './Footer'
import Divider from '@material-ui/core/Divider';



ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Divider />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
