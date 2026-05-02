import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  
  return (
    <footer className="bg-dark text-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/u-me-logo.png" alt="U & Me" className="h-12 w-auto" />
              <span className="text-2xl font-bold text-primary">U & Me</span>
              <span className="text-sm">Couple Cafe</span>
            </Link>
            <p className="text-gray-400">Your 24-hour destination for authentic Indian cuisine. Pure flavor. Pure love.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/menu" className="hover:text-primary">Menu</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2">
              {days.map(day => (
                <li key={day} className="flex justify-between">
                  <span>{day}</span>
                  <span>24 Hour</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>123 Main Street, Downtown, City</p>
            <p>Email: ume@couplecafe.com</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 U & Me Couple Cafe. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer
