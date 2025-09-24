'use client';

import { useState } from 'react';
import { FiPlus, FiEye, FiEyeOff, FiClock, FiCheck, FiX, FiDollarSign, FiAward, FiUsers, FiPackage, FiDatabase, FiUpload, FiCreditCard, FiBarChart2, FiPackage as FiMining } from 'react-icons/fi';
import Icon from '@/components/ui/Icon';

interface ActivityHistory {
  date: string;
  type: 'deposit' | 'withdrawal' | 'referral' | 'mining';
  amount: number;
  status: 'completed' | 'pending' | 'failed' | 'processing';
}

const Wallet: React.FC = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [showAddWalletModal, setShowAddWalletModal] = useState(false);
  const [selectedWalletType, setSelectedWalletType] = useState('');

  const referralEarnings = [
    {
      title: 'Direct Referral',
      amount: '0.00',
      icon: <FiDollarSign className="w-6 h-6" />,
      color: 'text-[#00d4ff]',
      bgColor: 'bg-[#00d4ff]/10',
      borderColor: 'border-[#00d4ff]/20'
    },
    {
      title: 'Level Bonus',
      amount: '0.00',
      icon: <FiAward className="w-6 h-6" />,
      color: 'text-[#00b8e6]',
      bgColor: 'bg-[#00b8e6]/10',
      borderColor: 'border-[#00b8e6]/20'
    },
    {
      title: 'Team Bonus',
      amount: '0.00',
      icon: <FiUsers className="w-6 h-6" />,
      color: 'text-[#0099cc]',
      bgColor: 'bg-[#0099cc]/10',
      borderColor: 'border-[#0099cc]/20'
    },
    {
      title: 'Total Earnings',
      amount: '0.00',
      icon: <FiAward className="w-6 h-6" />,
      color: 'text-[#00d4ff]',
      bgColor: 'bg-gradient-to-r from-[#00d4ff]/10 to-[#0099cc]/10',
      borderColor: 'border-[#00d4ff]/20'
    }
  ];

  const miningBalance = [
    {
      title: 'Total Earned Coins',
      amount: '0.00',
      icon: <FiPackage className="w-6 h-6" />,
      color: 'text-[#00d4ff]'
    },
    {
      title: 'Lifetime Coins',
      amount: '0',
      icon: <FiDatabase className="w-6 h-6" />,
      color: 'text-[#00b8e6]'
    },
    {
      title: 'Total Withdraws',
      amount: '0',
      icon: <FiUpload className="w-6 h-6" />,
      color: 'text-[#0099cc]'
    }
  ];

  const walletTypes = [
    { value: 'bitcoin', label: 'Bitcoin (BTC)', icon: <FiDollarSign className="w-5 h-5" /> },
    { value: 'ethereum', label: 'Ethereum (ETH)', icon: <FiDatabase className="w-5 h-5" /> },
    { value: 'usdt', label: 'Tether (USDT)', icon: <FiDollarSign className="w-5 h-5" /> },
    { value: 'bnb', label: 'Binance Coin (BNB)', icon: <FiPackage className="w-5 h-5" /> },
  ];

  const activityHistory: ActivityHistory[] = [
    // Empty for now - will be populated with real data
  ];

  const handleAddWallet = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle wallet addition logic
    setShowAddWalletModal(false);
    setSelectedWalletType('');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Wallet Overview</h1>
            <p className="text-[#94a3b8]">View your wallet balances and history</p>
          </div>
          <button
            onClick={() => setShowBalance(!showBalance)}
            className="flex items-center space-x-2 bg-[#1e293b] hover:bg-[#1e4055] border border-[#334155] rounded-lg px-4 py-2 text-[#94a3b8] hover:text-white transition-colors"
          >
            <Icon icon={showBalance ? FiEyeOff : FiEye} size="sm" />
            <span className="text-sm">{showBalance ? 'Hide' : 'Show'} Balance</span>
          </button>
        </div>
      </div>

      {/* Referral Earnings */}
      <div className="rounded-2xl border border-[#00d4ff]/20 backdrop-blur-sm bg-[#1e293b] p-6">
        <div className="flex items-center space-x-2 mb-6">
          <FiDollarSign className="text-[#00d4ff] w-6 h-6" />
          <h2 className="text-xl font-bold text-white">Referral Earnings</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {referralEarnings.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border ${item.borderColor} ${item.bgColor} backdrop-blur-sm hover:shadow-lg hover:shadow-[#00d4ff]/10 transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${item.bgColor} rounded-full flex items-center justify-center text-2xl`}>
                  {item.icon}
                </div>
                <div className={`text-sm font-medium px-3 py-1 rounded-full bg-[#0f172a] text-white`}>
                  {item.amount}
                </div>
              </div>
              <h3 className="text-white font-medium">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Mining & Balance */}
      <div className="rounded-2xl border border-[#00d4ff]/20 backdrop-blur-sm bg-[#1e293b] p-6">
        <div className="flex items-center space-x-2 mb-6">
          <FiMining className="text-[#00d4ff] w-6 h-6" />
          <h2 className="text-xl font-bold text-white">Mining & Balance</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {miningBalance.map((balance, index) => (
            <div
              key={index}
              className="relative rounded-xl border border-[#334155] p-4 backdrop-blur-sm bg-[#1e293b] transition-all duration-300 hover:scale-[1.02] hover:border-[#00d4ff]/30"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-2xl">{balance.icon}</div>
                <div className={`w-2 h-2 rounded-full ${balance.color.replace('text-', 'bg-')}`}></div>
              </div>
              <div>
                <div className="text-[#94a3b8] text-sm mb-1">{balance.title}</div>
                <div className={`text-xl font-bold ${balance.color}`}>
                  {showBalance ? balance.amount : '****'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Withdraw Wallets */}
      <div className="rounded-2xl border border-[#00d4ff]/20 backdrop-blur-sm bg-[#1e293b] p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <FiCreditCard className="text-[#00d4ff] w-6 h-6" />
            <h2 className="text-xl font-bold text-white">Withdraw Wallets</h2>
          </div>
          <button
            onClick={() => setShowAddWalletModal(true)}
            className="flex items-center space-x-2 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] hover:from-[#00b8e6] hover:to-[#0077a3] text-[#0f172a] font-medium py-2 px-4 rounded-lg transition-all duration-300"
          >
            <Icon icon={FiPlus} size="sm" />
            <span>Add Wallet</span>
          </button>
        </div>

        {/* Add Withdraw Wallet Form */}
        <div className="mb-6">
          <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-4">
            <h3 className="text-white font-medium mb-3">Select Type</h3>
            <select
              value={selectedWalletType}
              onChange={(e) => setSelectedWalletType(e.target.value)}
              className="w-full bg-[#0f172a] border border-[#334155] rounded-lg px-4 py-3 text-white focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] focus:outline-none transition-colors"
            >
              <option value="" className="bg-[#1e293b]">Select Wallet Type</option>
              {walletTypes.map((type) => (
                <option key={type.value} value={type.value} className="bg-[#1e293b]">
                  {type.icon} {type.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Empty State */}
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-gradient-to-br from-[#00d4ff]/10 to-[#0099cc]/10 border border-[#00d4ff]/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiCreditCard className="text-3xl text-[#00d4ff]" />
          </div>
          <h3 className="text-lg font-medium text-white mb-2">No withdraw wallets</h3>
          <p className="text-gray-400 text-sm mb-6">
            Add your first wallet to start receiving withdrawals
          </p>
          <button
            onClick={() => setShowAddWalletModal(true)}
            className="bg-gradient-to-r from-[#00d4ff] to-[#0099cc] hover:from-[#00b8e6] hover:to-[#0077a3] text-[#0f172a] font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#00d4ff]/20"
          >
            Add Withdraw Wallet
          </button>
        </div>
      </div>

      {/* Wallet Activity History */}
      <div className="rounded-2xl border border-[#00d4ff]/20 backdrop-blur-sm bg-[#1e293b] p-6">
        <div className="flex items-center space-x-2 mb-6">
          <FiBarChart2 className="text-[#00d4ff] w-6 h-6" />
          <h2 className="text-xl font-bold text-white">Wallet Activity History</h2>
        </div>
        
        {/* Table Header */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#334155]">
                <th className="text-left py-3 px-4 text-[#94a3b8] font-medium text-sm">DATE</th>
                <th className="text-left py-3 px-4 text-[#94a3b8] font-medium text-sm">TYPE</th>
                <th className="text-left py-3 px-4 text-[#94a3b8] font-medium text-sm">AMOUNT</th>
                <th className="text-left py-3 px-4 text-[#94a3b8] font-medium text-sm">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {activityHistory.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center py-12">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center mb-4">
                        <Icon icon={FiClock} size="lg" className="text-gray-500" />
                      </div>
                      <h3 className="text-lg font-medium text-white mb-2">No wallet activity found</h3>
                      <p className="text-gray-400 text-sm">
                        Your wallet transactions will appear here
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                activityHistory.map((activity, index) => (
                  <tr key={index} className="border-b border-[#334155] hover:bg-[#1e4055]/30 transition-colors">
                    <td className="py-4 px-4 text-white text-sm">{activity.date}</td>
                    <td className="py-4 px-4 text-[#e2e8f0] text-sm capitalize">{activity.type}</td>
                    <td className="py-4 px-4 text-sm">
                      <span className={`font-medium ${activity.type === 'deposit' ? 'text-[#00d4ff]' : 'text-[#f87171]'}`}>
                        {activity.type === 'deposit' ? '+' : '-'}${activity.amount}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        activity.status === 'completed' 
                          ? 'bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20' 
                          : activity.status === 'pending'
                          ? 'bg-amber-400/10 text-amber-400 border border-amber-400/20'
                          : activity.status === 'processing'
                          ? 'bg-blue-400/10 text-blue-400 border border-blue-400/20'
                          : 'bg-red-400/10 text-red-400 border border-red-400/20'
                      }`}>
                        <Icon 
                          icon={
                            activity.status === 'completed' ? FiCheck :
                            activity.status === 'pending' ? FiClock :
                            activity.status === 'processing' ? FiClock : FiX
                          } 
                          size="sm" 
                          className="mr-1.5" 
                        />
                        {activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Wallet Modal */}
      {showAddWalletModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#1e293b] border border-[#00d4ff]/20 rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-white mb-6">Add Withdraw Wallet</h3>
            
            <form onSubmit={handleAddWallet} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Wallet Type
                </label>
                <select
                  value={selectedWalletType}
                  onChange={(e) => setSelectedWalletType(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-colors"
                  required
                >
                  <option value="">Select Wallet Type</option>
                  {walletTypes.map((type) => (
                    <option key={type.value} value={type.value} className="bg-gray-800">
                      {type.icon} {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Wallet Address
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-colors"
                  placeholder="Enter wallet address"
                  required
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddWalletModal(false)}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] hover:from-[#00b8e6] hover:to-[#0077a3] text-[#0f172a] font-medium py-3 px-4 rounded-lg transition-all duration-300"
                >
                  Save Wallet
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wallet;