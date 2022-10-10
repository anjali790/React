import './App.css';
import React from "react";
import { Home } from './components/Home';
import { Product } from './components/Product';
import { About } from './components/About';
import { Content } from './components/Content';
import { Contact } from './components/Contact';
import {Login} from './components/Login';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/about/:id' element={<Content />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  );
}
export default App;