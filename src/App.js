import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className = "App" >
       <Header />
       <Home/>
       <About/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
