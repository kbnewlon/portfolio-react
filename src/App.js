import React from 'react';
import './App.css';
import Portfolio  from './component/Portfolio/index';
import About from './component/About/index';
import Footer from './component/Footer/index'
import Header from './component/Header/index';
import Navbar from './component/Navbar/index';
import { HashRouter as Router, Route } from "react-router-dom";


function App() {
  return (
  <Router>
    <Route exact path="/" component = {About} />
    <Route exact path ="/portfolio" component = {Portfolio} />
      <Navbar />
      <Header />
      <About />
      <Project />
      
     
    
      <Footer />
      </Router>
    
  );
}

export default App;
