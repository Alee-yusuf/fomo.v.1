'use client';

import { useState } from 'react';
import { FiMenu, FiX, FiBarChart, FiUsers, FiBriefcase, FiDollarSign, FiShare2, FiDownload, FiUpload, FiTrendingUp, FiSettings, FiShield, FiLogOut } from 'react-icons/fi';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { href: '/admin', label: 'Dashboard', icon: FiBarChart },
    { href: '/admin/users', label: 'Users', icon: FiUsers },
    { href: '/admin/plans', label: 'Plans', icon: FiBriefcase },
    { href: '/admin/transactions', label: 'Transactions', icon: FiDollarSign },
    { href: '/admin/referrals', label: 'Referrals', icon: FiShare2 },
    { href: '/admin/withdrawals', label: 'Withdrawals', icon: FiDownload },
    { href: '/admin/deposits', label: 'Deposits', icon: FiUpload },
    { href: '/admin/analytics', label: 'Analytics', icon: FiTrendingUp },
    { href: '/admin/settings', label: 'Settings', icon: FiSettings },
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

      {/* Admin Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-50 h-screen w-64 bg-black/90 backdrop-blur-sm border-r border-red-400/30
        transform transition-transform duration-300 ease-in-out flex-shrink-0 flex flex-col
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:sticky lg:z-auto
      `}>
        {/* Admin Logo */}
        <div className="flex items-center justify-between p-4 border-b border-red-400/30">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-red-400 to-orange-500 rounded-lg flex items-center justify-center">
              <FiShield className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-red-400 tracking-wide">ADMIN</span>
              <div className="text-xs text-gray-400">FÔMOFI Panel</div>
            </div>
          </div>
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-900 transition-colors text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Admin Info */}
        <div className="p-4 border-b border-red-400/30">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-red-400 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <div>
              <div className="text-white font-medium text-sm">Admin User</div>
              <div className="text-gray-400 text-xs">Super Administrator</div>
            </div>
          </div>
        </div>

        {/* Admin Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto custom-scrollbar">
          <div className="space-y-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-red-400 hover:bg-red-400/10 transition-colors group"
                >
                  <IconComponent className="w-5 h-5 group-hover:text-red-400" />
                  <span className="font-medium">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Admin Logout */}
          <div className="mt-8 pt-4 border-t border-red-400/30">
            <button className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-red-400 hover:bg-red-400/10 transition-colors group w-full">
              <FiLogOut className="w-5 h-5 group-hover:text-red-400" />
              <span className="font-medium">Sign Out</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Admin Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Admin Top Bar */}
        <header className="sticky top-0 z-30 bg-black/90 backdrop-blur-sm border-b border-red-400/30">
          <div className="flex items-center justify-end px-6 py-4">
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-900 transition-colors text-white"
              onClick={() => setIsSidebarOpen(true)}
            >
              <FiMenu className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-6">
              {/* System Stats */}
              <div className="hidden sm:flex items-center space-x-6">
                <div className="text-right">
                  <div className="text-xs text-gray-400">Total Users</div>
                  <div className="text-red-400 font-bold">1,247</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400">Active Plans</div>
                  <div className="text-orange-400 font-bold">89</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400">Total Revenue</div>
                  <div className="text-green-400 font-bold">$45,892</div>
                </div>
              </div>

              {/* Admin Profile */}
              <div className="w-8 h-8 bg-gradient-to-r from-red-400 to-orange-500 rounded-full flex items-center justify-center cursor-pointer">
                <span className="text-white font-bold text-xs">A</span>
              </div>
            </div>
          </div>
        </header>

        {/* Admin Page Content */}
        <main className="flex-1 p-6 overflow-auto custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;