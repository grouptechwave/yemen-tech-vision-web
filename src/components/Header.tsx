
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm w-full">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-blue-light">
            Yemen<span className="text-brand-orange">Innovators</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-brand-blue font-medium">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-brand-blue font-medium">About Us</Link>
          <Link to="/services" className="text-gray-700 hover:text-brand-blue font-medium">Services</Link>
          <Link to="/case-study" className="text-gray-700 hover:text-brand-blue font-medium">Case Study</Link>
          <Link to="/blog" className="text-gray-700 hover:text-brand-blue font-medium">Blog</Link>
          <Link to="/contact" className="text-gray-700 hover:text-brand-blue font-medium">Contact</Link>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-brand-blue hover:bg-brand-blue-light">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-brand-blue font-medium py-2" onClick={closeMenu}>Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-brand-blue font-medium py-2" onClick={closeMenu}>About Us</Link>
            <Link to="/services" className="text-gray-700 hover:text-brand-blue font-medium py-2" onClick={closeMenu}>Services</Link>
            <Link to="/case-study" className="text-gray-700 hover:text-brand-blue font-medium py-2" onClick={closeMenu}>Case Study</Link>
            <Link to="/blog" className="text-gray-700 hover:text-brand-blue font-medium py-2" onClick={closeMenu}>Blog</Link>
            <Link to="/contact" className="text-gray-700 hover:text-brand-blue font-medium py-2" onClick={closeMenu}>Contact</Link>
            <Button className="bg-brand-blue hover:bg-brand-blue-light w-full" onClick={closeMenu}>Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
