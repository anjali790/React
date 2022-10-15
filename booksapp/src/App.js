import './App.css';
import { Routes, Route } from 'react-router-dom';
import { BookList } from './components/BookList';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookDetails } from './components/BookDetails';
import { Favourites } from './components/Favourites';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className='App'>
      <Navbar setSearch={setSearch}/>
      <Routes>
        <Route path="/" element={<BookList search={search}/>} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
