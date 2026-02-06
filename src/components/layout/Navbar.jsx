import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa'
import Button from '../ui/Button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'About', path: '#about', scroll: true },
    { name: 'Skills', path: '#skills', scroll: true },
    { name: 'Experience', path: '#experience', scroll: true },
    { name: 'Education', path: '#education', scroll: true },
    { name: 'Dashboards', path: '/dashboards', scroll: false },
    { name: 'Contact', path: '#contact', scroll: true },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold gradient-text">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.scroll ? (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.path.substring(1))}
                  className="text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
                >
                  {link.name}
                </Link>
              )
            ))}
            <Button 
              href="/cv/resume.pdf" 
              download 
              variant="primary"
              className="text-sm"
            >
              <FaDownload className="mr-2" />
              Download CV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-primary-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-3">
            {navLinks.map((link) => (
              link.scroll ? (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.path.substring(1))}
                  className="block w-full text-left py-2 text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
                >
                  {link.name}
                </Link>
              )
            ))}
            <Button 
              href="/cv/resume.pdf" 
              download 
              variant="primary"
              className="w-full text-sm mt-4"
            >
              <FaDownload className="mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
