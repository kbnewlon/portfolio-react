import React from 'react';
import './App.css';
import Project from './component/Project/index';
import About from './component/About/index';
import Footer from './component/Footer/index'
import Header from './component/Header/index';
import Navbar from './component/Navbar/index';



function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Project />
      <Footer />

    </div>
  );
}

export default App;
