import { Routes, Route } from 'react-router';
import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
// import { Contact2 } from './components/Contact2';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Sidebar } from './components/Sidebar';
import { Error } from './components/Error';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='*' element={<Sidebar/>}>
        </Route>
      </Routes>
      {/* <Routes>
        <Route path='/about' element={<Sidebar text="about" />}>
        </Route>
      </Routes>
      <Routes>
        <Route path='/contact' element={<Sidebar text="contact" />}>
        </Route>
      </Routes> */}

      <Routes>
        <Route index element={<Home />} />

        <Route path='/about'>
          <Route index element={<About />} />
          <Route path=':id' element={<Content />}></Route>
        </Route>

        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
