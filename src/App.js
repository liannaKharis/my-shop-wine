import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import Contact from "./Contact";
import bokal from "./bokal.png";



function App() {
  return ( <Router>
   <nav>
     <Link to ="/"  className="link logo"><img className='bokal' src={bokal} alt="bokal" width="45px"/> TIME for WINE</Link>
     <Link to ="/about" className="link">О нас</Link>
     <Link to ="/shop" className="link">Каталог</Link>
     <Link to ="/contact" className="link">Контакты</Link>
   </nav>
   <Routes>
     <Route path = "/" element = {<Home/>}/>
     <Route path = "/about" element = {<About/>}/>
     <Route path = "/shop" element = {<Shop/>} />
     <Route path = "/contact" element = {<Contact/>} />
   </Routes>
  </Router>
  );
}

export default App;
