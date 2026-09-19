import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//  import App from './App.jsx'

import Landingpage from './Components/Landingpage.jsx'
import About from './Components/About.jsx'
 import "remixicon/fonts/remixicon.css";

 function App () {
return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
)
 }
 export default App;


  
