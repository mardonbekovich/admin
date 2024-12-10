import React, { useState } from 'react';
import a from './Header.module.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen,] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  
  return (
    <>
      <header className={a.header}>
        <div className={a.container}>
          {/* Logo */}
          <div className={a.logo}>
            <img src="https://yt3.googleusercontent.com/05lhMeAH6tZrPIUsp2yHNz3DwzhKbDUQcxcY0_qeXVyZttR_pktBzw0FcLUSR6D4fVqsEgL3ZO0=s900-c-k-c0x00ffffff-no-rj" alt="Logo" />
          </div>

          {/* Hamburger Icon */}
          <div className={a.hamburger} onClick={toggleMenu}>
            <span className={a.bar}></span>
            <span className={a.bar}></span>
            <span className={a.bar}></span>
          </div>

          {/* Navigation Menu */}
          <nav className={`${a.nav} ${isMenuOpen ? a.open : ''}`}>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
    </>
  );
};

export default Header;
