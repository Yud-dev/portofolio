import dev from '/src/assets/DEV.png'
import About from '../Components/About'
import Contact from '../Components/Contact'
import {Link} from 'react-router-dom';
const Navbar =() => {
  return (
  
     <div className="navbar py-7 flex items-center justify-between" >
     <div className="logo">
   <img src={dev} alt="Hero" className="w-10 rounded-md " />
  </div>
  



  
    <ul className="menu flex items-center gap-10 ">
      <li>
      <Link to="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Home</Link>
      </li>
      <li>
      <Link to="/about" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">About</Link>
      </li>
      {/* <li><a href="#services" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Services</a></li> */}
      <li>
      <Link to="/contact" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Contact</Link>
      </li>
    </ul>
  
    </div>

  
  )
  }
 export default Navbar;