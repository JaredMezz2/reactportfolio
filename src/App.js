import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactGA from "react-ga4";

import './App.css';
import Home from "./Pages/home";

function App() {
  ReactGA.initialize(process.env.REACT_APP_GA)

  return (
    <div className="App">
        <Home></Home>
    </div>
  );
}

export default App;
