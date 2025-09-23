'use client';

import { useState } from 'react';
import { FiMenu, FiX, FiHome, FiUser, FiUsers, FiCreditCard, FiDownload, FiUpload, FiLogOut } from 'react-icons/fi';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: FiHome },
    { href: '/dashboard/profile', label: 'Profile', icon: FiUser },
    { href: '/dashboard/referrals', label: 'Referrals', icon: FiUsers },
    { href: '/dashboard/wallet', label: 'Wallet', icon: FiCreditCard },
    { href: '/dashboard/withdraw', label: 'Withdraw', icon: FiDownload },
    { href: '/dashboard/deposits', label: 'Deposits', icon: FiUpload },
  ];

  return (
    <div className="min-h-screen bg-black flex">
      {/* Mobile Menu Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-50 h-screen w-64 bg-black/90 backdrop-blur-sm border-r border-lime-400/30
        transform transition-transform duration-300 ease-in-out flex-shrink-0 flex flex-col
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:sticky lg:z-auto
      `}>
        {/* Logo */}
        <div className="flex items-center justify-between p-5 border-b border-lime-400/30">
          <span className="text-2xl font-bold text-lime-400 tracking-wide">FÔMOFI</span>
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-900 transition-colors text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* User Info */}
        <div className="p-5 border-b border-lime-400/30">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-lime-400 to-green-500 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">H</span>
            </div>
            <div>
              <div className="text-white font-medium text-sm">Haahil</div>
              <div className="text-gray-400 text-xs">haahilsaeed@gmail.com</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto custom-scrollbar">
          <div className="space-y-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-lime-400 hover:bg-lime-400/10 transition-colors group"
                >
                  <IconComponent className="w-5 h-5 group-hover:text-lime-400" />
                  <span className="font-medium">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Logout */}
          <div className="mt-8 pt-4 border-t border-lime-400/30">
            <button className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-red-400 hover:bg-red-400/10 transition-colors group w-full">
              <FiLogOut className="w-5 h-5 group-hover:text-red-400" />
              <span className="font-medium">Sign Out</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-black/90 backdrop-blur-sm border-b border-lime-400/30">
          <div className="flex items-center justify-end px-6 py-4">
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-900 transition-colors text-white"
              onClick={() => setIsSidebarOpen(true)}
            >
              <FiMenu className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-4">
              {/* Balance Display */}
              <div className="hidden sm:flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-xs text-gray-400">Total Balance</div>
                  <div className="text-lime-400 font-bold">$0.00</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400">Mined Coins</div>
                  <div className="text-white font-bold">0</div>
                </div>
              </div>

              {/* Profile Dropdown */}
              <div className="w-8 h-8 bg-gradient-to-r from-lime-400 to-green-500 rounded-full flex items-center justify-center cursor-pointer">
                <span className="text-black font-bold text-xs">H</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;