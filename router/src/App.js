import './App.css';
import React from "react";
import { Home } from './components/Home';
import { About } from './components/About';
import { Content } from './components/Content';
import { Contact } from './components/Contact';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/about/:id' element={<Content />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}
export default App;