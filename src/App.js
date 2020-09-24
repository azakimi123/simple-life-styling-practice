import React from 'react';
import Landing from './Components/Landing/Landing';
import Posts from './Components/Posts/Posts';
import About from './Components/About/About';
import Nav from './Components/Navigation/Nav';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <About />
      <Posts />
      <Footer />
    </div>
  );
}

export default App;
