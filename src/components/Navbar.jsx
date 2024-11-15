// components/Navbar.js
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link className="text-2xl font-bold text-blue-600" href="/">
           MyWebsite
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link className="text-gray-800 hover:text-blue-600 font-bold" href="/">
             Home
          </Link>
          <Link className="text-gray-800 hover:text-blue-600 font-bold" href="/services">
            Services
          </Link>
          <Link className="text-gray-800 hover:text-blue-600 font-bold" href="/blog">
            Blog
          </Link>
          <Link className="text-gray-800 hover:text-blue-600 font-bold" href="/contact">
            Contact
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleNav} aria-label="Toggle Menu">
            {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 font-bold" href="/">
             Home
          </Link>
          <Link  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 font-bold" href="/services">
            Services
          </Link>
          <Link  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 font-bold" href="/blog">
            Blog
          </Link>
          <Link  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 font-bold" href="/contact">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
