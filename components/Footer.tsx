import React from 'react';
import { Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6" style={{ backgroundColor: '#0f172a' }}>
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Container */}
        <div className="bg-slate-900/95 backdrop-blur-xl rounded-3xl border border-[#00d4ff]/20 shadow-2xl p-8 md:p-12 hover:shadow-[#00d4ff]/10 hover:border-[#00d4ff]/40 transition-all duration-500">
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            {/* Left Side - Brand and Contact Info */}
            <div className="flex-1 max-w-md">
              <h3 className="text-3xl font-bold mb-8 text-white">
                FÔMO<span style={{ 
                  background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>FI</span>
              </h3>
              
              <div className="space-y-6 text-slate-300">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00d4ff]/20 to-[#00d4ff]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-[#00d4ff]/30 group-hover:to-[#00d4ff]/20 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-[#00d4ff]" />
                  </div>
                  <div className="leading-relaxed">
                    <p className="font-semibold text-white mb-1">Address:</p>
                    <div className="text-slate-400">
                      <div>128 Baker Street, Marylebone</div>
                      <div>NW1 6XE London, United Kingdom</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00d4ff]/20 to-[#00d4ff]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-[#00d4ff]/30 group-hover:to-[#00d4ff]/20 transition-all duration-300">
                    <Mail className="w-6 h-6 text-[#00d4ff]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Contact us at:</p>
                    <a 
                      href="mailto:support@fomofi.com" 
                      className="text-[#00d4ff] hover:text-white transition-colors duration-300 flex items-center gap-1"
                    >
                      support@fomofi.com
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="mt-8">
                <p className="text-white font-semibold mb-4">Follow Us:</p>
                <div className="flex flex-wrap gap-3">
                  {/* Facebook */}
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-[#00d4ff]/20 to-[#00d4ff]/10 rounded-xl flex items-center justify-center hover:from-[#00d4ff]/30 hover:to-[#00d4ff]/20 transition-all duration-300 hover:scale-110 transform group">
                    <svg className="w-5 h-5 fill-[#00d4ff] group-hover:fill-white transition-colors duration-300" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  
                  {/* Instagram */}
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-[#00d4ff]/20 to-[#00d4ff]/10 rounded-xl flex items-center justify-center hover:from-[#00d4ff]/30 hover:to-[#00d4ff]/20 transition-all duration-300 hover:scale-110 transform group">
                    <svg className="w-5 h-5 fill-[#00d4ff] group-hover:fill-white transition-colors duration-300" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>

                  {/* Twitter/X */}
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-[#00d4ff]/20 to-[#00d4ff]/10 rounded-xl flex items-center justify-center hover:from-[#00d4ff]/30 hover:to-[#00d4ff]/20 transition-all duration-300 hover:scale-110 transform group">
                    <svg className="w-5 h-5 fill-[#00d4ff] group-hover:fill-white transition-colors duration-300" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>

                  {/* TikTok */}
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-[#00d4ff]/20 to-[#00d4ff]/10 rounded-xl flex items-center justify-center hover:from-[#00d4ff]/30 hover:to-[#00d4ff]/20 transition-all duration-300 hover:scale-110 transform group">
                    <svg className="w-5 h-5 fill-[#00d4ff] group-hover:fill-white transition-colors duration-300" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-[#00d4ff]/20 to-[#00d4ff]/10 rounded-xl flex items-center justify-center hover:from-[#00d4ff]/30 hover:to-[#00d4ff]/20 transition-all duration-300 hover:scale-110 transform group">
                    <svg className="w-5 h-5 fill-[#00d4ff] group-hover:fill-white transition-colors duration-300" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-[#00d4ff]/20 to-[#00d4ff]/10 rounded-xl flex items-center justify-center hover:from-[#00d4ff]/30 hover:to-[#00d4ff]/20 transition-all duration-300 hover:scale-110 transform group">
                    <svg className="w-5 h-5 fill-[#00d4ff] group-hover:fill-white transition-colors duration-300" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>

                  {/* Telegram */}
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-[#00d4ff]/20 to-[#00d4ff]/10 rounded-xl flex items-center justify-center hover:from-[#00d4ff]/30 hover:to-[#00d4ff]/20 transition-all duration-300 hover:scale-110 transform group">
                    <svg className="w-5 h-5 fill-[#00d4ff] group-hover:fill-white transition-colors duration-300" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-[#00d4ff]/20 to-[#00d4ff]/10 rounded-xl flex items-center justify-center hover:from-[#00d4ff]/30 hover:to-[#00d4ff]/20 transition-all duration-300 hover:scale-110 transform group">
                    <svg className="w-5 h-5 fill-[#00d4ff] group-hover:fill-white transition-colors duration-300" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Link Columns */}
            <div className="flex flex-col sm:flex-row gap-12 lg:gap-16">
              {/* Company Column */}
              <div className="min-w-[160px]">
                <h4 className="text-xl font-bold text-white mb-6">Company</h4>
                <ul className="space-y-4 text-slate-300">
                  <li>
                    <a href="#" className="hover:text-[#00d4ff] transition-colors duration-300 flex items-center gap-2 group">
                      About Us
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#00d4ff] transition-colors duration-300 flex items-center gap-2 group">
                      Privacy Policy
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#00d4ff] transition-colors duration-300 flex items-center gap-2 group">
                      Terms of Service
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#00d4ff] transition-colors duration-300 flex items-center gap-2 group">
                      Cookies Policy
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#00d4ff] transition-colors duration-300 flex items-center gap-2 group">
                      FAQs
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Platform Column */}
              <div className="min-w-[160px]">
                <h4 className="text-xl font-bold text-white mb-6">Platform</h4>
                <ul className="space-y-4 text-slate-300">
                  <li>
                    <a href="#" className="hover:text-[#00d4ff] transition-colors duration-300 flex items-center gap-2 group">
                      Dashboard
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#00d4ff] transition-colors duration-300 flex items-center gap-2 group">
                      Referrals
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#00d4ff] transition-colors duration-300 flex items-center gap-2 group">
                      Investment Plans
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#00d4ff] transition-colors duration-300 flex items-center gap-2 group">
                      Terms & Conditions
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#00d4ff] transition-colors duration-300 flex items-center gap-2 group">
                      Risk Warning Policy
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-[#00d4ff]/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-sm">
                © 2024 FÔMOFI. All rights reserved. | Empowering smart investments worldwide.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <a href="#" className="text-slate-400 hover:text-[#00d4ff] transition-colors duration-300">
                  Security
                </a>
                <a href="#" className="text-slate-400 hover:text-[#00d4ff] transition-colors duration-300">
                  Support
                </a>
                <a href="#" className="text-slate-400 hover:text-[#00d4ff] transition-colors duration-300">
                  Status
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;