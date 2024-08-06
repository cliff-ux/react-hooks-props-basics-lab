import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/directors">Directors</NavLink>
    <NavLink to="/actors">Actors</NavLink>
  </nav>
);

export default NavBar;




















// import React from "react";

// function NavBar() {
//   return (
//     <nav>
//       <a href="#home">Home</a>
//       <a href="#about">About</a>
//     </nav>
//   );
// }

// export default NavBar;
