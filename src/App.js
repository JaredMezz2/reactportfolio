import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from "./Pages/home";

function App() {
  return (
    <div className="App">
        <Home></Home>
    </div>
  );
}

export default App;
