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

        {/* Navigation - Desktop and Mobile */}
        <nav className={`flex md:hidden items-center space-x-8 ${isMenuOpen || window.innerWidth > 776 ? 'flex' : 'block'}`}>
          {['Home', 'About Us', 'Services', 'Case Study', 'Blog', 'Contact'].map((item) => (
            <Link key={item} to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-700 hover:text-brand-blue font-medium" onClick={closeMenu}>
              {item}
            </Link>
          ))}
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
    </header>
  );
};

export default Header;
