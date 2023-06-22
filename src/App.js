import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SocialMedia from './components/SocialMedia';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Experience from './pages/Experience';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Portfolio/>
      <Experience/>
      <SocialMedia/>
    </div>
  );
}

export default App;
