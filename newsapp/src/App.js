import './App.css';
import React, { useState } from "react";
import { Headlines } from './components/Headlines';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Error } from './components/Error';
import { Cricket } from './components/Cricket';
import { Politics } from './components/Politics';
import { Science } from './components/Science';


function App() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Header setSearch={setSearch} />
      <Routes>
        <Route path='/' element={<Headlines search={search} />} />
        <Route path='/.politics' element={<Politics />} />
        <Route path='/cricket' element={<Cricket />} />
        <Route path='/nature' element={<Science />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
