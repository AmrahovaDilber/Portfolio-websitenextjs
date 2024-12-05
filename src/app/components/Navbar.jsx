'use client'
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import NavLink from "./NavLink";

const navLinks = [
  { href: "#home", title: "Home" },
  { href: "#projects", title: "Projects" },
  { href: "#resume", title: "Resume" },
  { href: "#skills", title: "Skills" },
  { href: "#contact", title: "Contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative">
     
      <button 
        onClick={toggleMenu}
        className="md:hidden absolute top-0 right-0 z-50  text-white"
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? (
          <FaTimes className="h-6 w-6 " />
        ) : (
          <FaBars className="h-6 w-6" />
        )}
      </button>

      <ul className="hidden md:flex space-x-4 sm:space-x-6 lg:space-x-12">
        {navLinks.map((link) => (
          <li 
            key={link.href} 
            className="text-white font-semibold text-sm sm:text-md lg:text-lg"
          >
            <NavLink href={link.href} title={link.title} />
          </li>
        ))}
      </ul>


      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center">
          <ul className="space-y-8 text-center">
            {navLinks.map((link) => (
              <li 
                key={link.href} 
                className="text-white text-2xl font-bold"
                onClick={toggleMenu}
              >
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;