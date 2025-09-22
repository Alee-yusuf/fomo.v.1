'use client';

import { useState } from 'react';

import Icon from './ui/Icon';
import { FiMenu, FiX } from 'react-icons/fi';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#plans', label: 'Plans' },
    { href: '#calculator', label: 'Calculator' },
    { href: '#faqs', label: 'FAQs' },
    { href: '#features', label: 'Features' },
    { href: '#terms', label: 'Terms of Service' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-lime-400 w-full">
      <div className="container mx-auto px-4 max-w-7xl">
        <nav className="flex items-center justify-between py-4" aria-label="Main navigation">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-lime-400 tracking-wide">FÔMOFI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-lime-400 transition-colors font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Dashboard Button */}
          <div className="hidden lg:flex items-center">
            <button className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold px-6 py-2 rounded-md transition-colors text-sm">
              Dashboard
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-900 transition-colors text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <Icon icon={isMenuOpen ? FiX : FiMenu} size="md" />
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-lime-400 bg-black">
            <div className="py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-white hover:text-lime-400 hover:bg-gray-900 transition-colors text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-4 border-t border-lime-400">
                <button className="w-full bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold px-6 py-3 rounded-md transition-colors text-sm">
                  Dashboard
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;