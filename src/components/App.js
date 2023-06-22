// import logo from './logo.svg';
import React from 'react';
import './App.css';
import TopComponent from './top';
import Services from './services';
import Stats from './stats';
import About from './about';
import Sponsors from './sponsors';
import Users from './users';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <TopComponent/>
      <Services/>
      <Stats/>
      <About/>
      <Sponsors/>
      <Users/>
      <Footer/>
    </div>
  );
}

export default App;
