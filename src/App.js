import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SocialMedia from './components/SocialMedia';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Portfolio/>
      <SocialMedia/>
    </div>
  );
}

export default App;
