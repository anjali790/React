import React from 'react';
// import Header from './components/Header/Header';
// import { Layout } from './components/Layout/Layout';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {

  return (
     <div>
       <Navbar />
       <div class="container-fluid" id="main">
         <div class="row row-offcanvas row-offcanvas-left">
           <Sidebar />
           <Dashboard />
         </div>
       </div> 
      {/* <Layout/> */}
      {/* <Header/> */}
    </div>
  );
}

export default App