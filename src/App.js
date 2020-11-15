import React from 'react';
import './App.css';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import CoverPage from './pages/CoverPage';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      
      <Route exact path="/" component={CoverPage} />
      <Route exact path ="/about" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />

    </Router>

  );
}

export default App;
