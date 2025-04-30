import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const NavItem = ({ to, children, onClick }) => (
  <Link to={to} className="text-gray-700 hover:text-brand-blue font-medium py-2" onClick={onClick}>
    {children}
  </Link>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = ['Home', 'About Us', 'Services', 'Case Study', 'Blog', 'Contact'];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm w-full">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-blue-light">
            Yemen<span className="text-brand-orange">Innovators</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="md:hidden flex flex-col space-y-4">
          {navItems.map((item) => (
            <NavItem key={item} to={`/${item.toLowerCase().replace(' ', '-')}`} onClick={closeMenu}>
              {item}
            </NavItem>
          ))}
          <Button className="bg-brand-blue hover:bg-brand-blue-light w-full" onClick={closeMenu}>
            Get Started
          </Button>
        </nav>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavItem key={item} to={`/${item.toLowerCase().replace(' ', '-')}`} onClick={closeMenu}>
              {item}
            </NavItem>
          ))}
          <Button className="bg-brand-blue hover:bg-brand-blue-light">Get Started</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
