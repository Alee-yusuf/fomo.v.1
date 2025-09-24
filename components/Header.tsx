'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Icon from './ui/Icon';
import { FiMenu, FiX } from 'react-icons/fi';
import { smoothScroll } from '@/utils/smoothScroll';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'plans', label: 'Plans' },
    { id: 'calculator', label: 'Calculator' },
    { id: 'features', label: 'Features' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'payment-info', label: 'Payment Info' },
    { id: 'referrals', label: 'Referral Program' },
    { id: 'faq', label: 'FAQs' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b w-full shadow-2xl backdrop-blur-lg" style={{ backgroundColor: '#0f172a', borderColor: '#1e293b' }}>
      <div className="container mx-auto px-4 max-w-7xl">
        <nav className="flex items-center justify-between py-4" aria-label="Main navigation">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold tracking-wide" style={{ 
              background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>FÔMOFI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => isHomePage 
                  ? smoothScroll(link.id)
                  : window.location.href = `/#${link.id}`
                }
                className="text-slate-300 transition-all duration-300 font-medium text-sm hover:text-[#00d4ff] relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Desktop Dashboard Button */}
          <div className="hidden lg:flex items-center">
            <button 
              className="font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 text-sm shadow-lg hover:shadow-2xl hover:scale-105 border border-[#00d4ff]/20"
              style={{ 
                background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                color: '#0f172a'
              }}
            >
              Dashboard
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg transition-all duration-300 text-slate-300 hover:text-[#00d4ff] hover:bg-slate-800/50 hover:scale-105"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <Icon icon={isMenuOpen ? FiX : FiMenu} size="md" />
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-700" style={{ backgroundColor: '#0f172a' }}>
            <div className="py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    if (isHomePage) {
                      smoothScroll(link.id);
                    } else {
                      window.location.href = `/#${link.id}`;
                    }
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 text-slate-300 hover:text-[#00d4ff] hover:bg-slate-800/30 transition-all duration-300 text-sm"
                >
                  {link.label}
                </button>
              ))}
              <div className="px-4 pt-4 border-t border-slate-700">
                <button 
                  className="w-full font-semibold px-6 py-3 rounded-lg transition-all duration-300 text-sm shadow-lg hover:shadow-2xl hover:scale-105 border border-[#00d4ff]/20"
                  style={{ 
                    background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                    color: '#0f172a'
                  }}
                >
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