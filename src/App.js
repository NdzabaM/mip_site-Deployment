import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Schedule from './components/pages/Schedule';
import Pastors from './components/pages/Pastors';
import About from './components/pages/About';
import Mission from './components/pages/Mission';
import Gallery from './components/pages/Gallery';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/dias-e-horarios-dos-cultos' element={<Schedule />}/>
        <Route path='/pastores' exact element={<Pastors />}/>
        <Route path='/enderecos-e-contatos' exact element={<About />}/>
        <Route path='/sobre-nos' exact element={<Mission />}/>
        <Route path='/galeria' exact element={<Gallery />}/>


      </Routes>
      </Router>
    </>
  );
}

export default App;
