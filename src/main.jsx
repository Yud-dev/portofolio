import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Landingpage from './Components/Landingpage.jsx'; 
import About from './Components/About.jsx';
import "remixicon/fonts/remixicon.css";
import Contact from './Components/Contact.jsx'
import Landingpage from './Components/Landingpage.jsx'; // Pastikan path ini sesuai dengan struktur folder Anda

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Landingpage />} /> */}
        <Route path="/" element={<Landingpage />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);