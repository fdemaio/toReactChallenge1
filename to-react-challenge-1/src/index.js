import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import About from './About';
import Target from './Target';
import Members from './Members';
import Resources from './Resources';
import Fundamentals from './Fundamentals';
import AdvancedTopics from './AdvancedTopics';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Main />
    <About />
    <Target />
    <Members />
    <Resources />
    <Fundamentals />
    <AdvancedTopics />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
