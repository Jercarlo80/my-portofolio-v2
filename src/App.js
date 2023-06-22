import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SocialMedia from './components/SocialMedia';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Home/>
      <AboutMe/>
      <SocialMedia/>
    </div>
  );
}

export default App;
