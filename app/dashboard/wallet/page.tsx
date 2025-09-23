'use client';

import { useState } from 'react';
import { FiPlus, FiEye, FiEyeOff, FiTrendingUp, FiTrendingDown, FiClock, FiCheck } from 'react-icons/fi';
import Icon from '@/components/ui/Icon';

const Wallet: React.FC = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [showAddWalletModal, setShowAddWalletModal] = useState(false);
  const [selectedWalletType, setSelectedWalletType] = useState('');

  const referralEarnings = [
    {
      title: 'Direct Referral',
      amount: '0.00',
      icon: '💰',
      color: 'text-lime-400',
      bgColor: 'bg-lime-400/10',
      borderColor: 'border-lime-400/30'
    },
    {
      title: 'Level Bonus',
      amount: '0.00',
      icon: '🎯',
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
      borderColor: 'border-orange-400/30'
    },
    {
      title: 'Team Bonus',
      amount: '0.00',
      icon: '👥',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
      borderColor: 'border-cyan-400/30'
    },
    {
      title: 'Total Earnings',
      amount: '0.00',
      icon: '🏆',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/30'
    }
  ];

  const miningBalance = [
    {
      title: 'Total Earned Coins',
      amount: '0.00',
      icon: '⛏️',
      color: 'text-yellow-400'
    },
    {
      title: 'Lifetime Coins',
      amount: '0',
      icon: '🪙',
      color: 'text-blue-400'
    },
    {
      title: 'Total Withdraws',
      amount: '0',
      icon: '📤',
      color: 'text-purple-400'
    }
  ];

  const walletTypes = [
    { value: 'bitcoin', label: 'Bitcoin (BTC)', icon: '₿' },
    { value: 'ethereum', label: 'Ethereum (ETH)', icon: 'Ξ' },
    { value: 'usdt', label: 'Tether (USDT)', icon: '₮' },
    { value: 'bnb', label: 'Binance Coin (BNB)', icon: 'B' },
  ];

  const activityHistory = [
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
            <p className="text-gray-400">View your wallet balances and history</p>
          </div>
          <button
            onClick={() => setShowBalance(!showBalance)}
            className="flex items-center space-x-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-gray-300 transition-colors"
          >
            <Icon icon={showBalance ? FiEyeOff : FiEye} size="sm" />
            <span className="text-sm">{showBalance ? 'Hide' : 'Show'} Balance</span>
          </button>
        </div>
      </div>

      {/* Referral Earnings */}
      <div className="rounded-2xl border border-lime-400/30 backdrop-blur-sm bg-black/40 p-6">
        <h2 className="text-xl font-bold text-white mb-6">💰 Referral Earnings</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {referralEarnings.map((earning, index) => (
            <div
              key={index}
              className={`
                relative rounded-xl border ${earning.borderColor} p-4 
                backdrop-blur-sm ${earning.bgColor} 
                transition-all duration-300 hover:scale-[1.02]
              `}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-2xl">{earning.icon}</div>
                <div className={`w-2 h-2 rounded-full ${earning.color.replace('text-', 'bg-')}`}></div>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-1">{earning.title}</div>
                <div className={`text-xl font-bold ${earning.color}`}>
                  {showBalance ? `$${earning.amount}` : '****'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mining & Balance */}
      <div className="rounded-2xl border border-yellow-400/30 backdrop-blur-sm bg-black/40 p-6">
        <h2 className="text-xl font-bold text-white mb-6">⛏️ Mining & Balance</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {miningBalance.map((balance, index) => (
            <div
              key={index}
              className="relative rounded-xl border border-gray-600/30 p-4 backdrop-blur-sm bg-gray-800/20 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-2xl">{balance.icon}</div>
                <Icon icon={FiTrendingUp} size="sm" className={balance.color} />
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-1">{balance.title}</div>
                <div className={`text-xl font-bold ${balance.color}`}>
                  {showBalance ? balance.amount : '****'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Withdraw Wallets */}
      <div className="rounded-2xl border border-purple-400/30 backdrop-blur-sm bg-black/40 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">👛 Withdraw Wallets</h2>
          <button
            onClick={() => setShowAddWalletModal(true)}
            className="flex items-center space-x-2 bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
          >
            <Icon icon={FiPlus} size="sm" />
            <span>Add Wallet</span>
          </button>
        </div>

        {/* Add Withdraw Wallet Form */}
        <div className="mb-6">
          <div className="bg-gray-800/30 rounded-lg p-4">
            <h3 className="text-white font-medium mb-3">Select Type</h3>
            <select
              value={selectedWalletType}
              onChange={(e) => setSelectedWalletType(e.target.value)}
              className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors"
            >
              <option value="">Select Wallet Type</option>
              {walletTypes.map((type) => (
                <option key={type.value} value={type.value} className="bg-gray-800">
                  {type.icon} {type.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Empty State */}
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">👛</span>
          </div>
          <h3 className="text-lg font-medium text-white mb-2">No withdraw wallets</h3>
          <p className="text-gray-400 text-sm mb-6">
            Add your first wallet to start receiving withdrawals
          </p>
          <button
            onClick={() => setShowAddWalletModal(true)}
            className="bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            Add Withdraw Wallet
          </button>
        </div>
      </div>

      {/* Wallet Activity History */}
      <div className="rounded-2xl border border-gray-600/30 backdrop-blur-sm bg-black/40 p-6">
        <h2 className="text-xl font-bold text-white mb-6">📊 Wallet Activity History</h2>
        
        {/* Table Header */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-600/30">
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">DATE</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">TYPE</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">AMOUNT</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">STATUS</th>
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
                  <tr key={index} className="border-b border-gray-700/30 hover:bg-gray-800/20">
                    <td className="py-4 px-4 text-white text-sm">{activity.date}</td>
                    <td className="py-4 px-4 text-gray-300 text-sm">{activity.type}</td>
                    <td className="py-4 px-4 text-sm">
                      <span className={activity.type === 'deposit' ? 'text-green-400' : 'text-red-400'}>
                        {activity.type === 'deposit' ? '+' : '-'}${activity.amount}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        activity.status === 'completed' 
                          ? 'bg-green-400/20 text-green-400' 
                          : activity.status === 'pending'
                          ? 'bg-yellow-400/20 text-yellow-400'
                          : 'bg-red-400/20 text-red-400'
                      }`}>
                        {activity.status}
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
          <div className="bg-black/90 border border-purple-400/30 rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-white mb-6">Add Withdraw Wallet</h3>
            
            <form onSubmit={handleAddWallet} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Wallet Type
                </label>
                <select
                  value={selectedWalletType}
                  onChange={(e) => setSelectedWalletType(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors"
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
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors"
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
                  className="flex-1 bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300"
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