import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src="/u-me-logo.png" alt="U & Me" className="h-12 w-auto" />
          <span className="text-2xl font-bold text-primary">U & Me</span>
          <span className="text-sm text-dark">Couple Cafe</span>
        </Link>
        
        <div className="hidden md:flex gap-6">
          <Link to="/" className="text-dark hover:text-primary">Home</Link>
          <Link to="/about" className="text-dark hover:text-primary">About</Link>
          <Link to="/menu" className="text-dark hover:text-primary">Menu</Link>
          <Link to="/contact" className="text-dark hover:text-primary">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
