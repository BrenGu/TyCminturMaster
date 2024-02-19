import Navbar from './subcomponentes/Navbar';
import React from 'react';
import Logo from "../utils/images/logo-san-luis.png";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
            <img
              id="logoscroll"
              src={Logo}
              alt="San Luis"
              className="img-brand"
            />
          </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;