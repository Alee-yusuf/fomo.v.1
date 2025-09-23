'use client';

import { useState } from 'react';
import { FiAlertTriangle, FiCheck, FiClock, FiX } from 'react-icons/fi';
import Icon from '@/components/ui/Icon';

interface WithdrawalHistory {
  date: string;
  amount: string;
  status: 'completed' | 'pending' | 'processing' | 'failed';
}

const Withdraw: React.FC = () => {
  const [selectedWalletType, setSelectedWalletType] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  const availableBalances = [
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
      title: 'Total Available',
      amount: '0.00',
      icon: '🏆',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/30'
    }
  ];

  const walletTypes = [
    { value: 'bitcoin', label: 'Bitcoin (BTC)', icon: '₿' },
    { value: 'ethereum', label: 'Ethereum (ETH)', icon: 'Ξ' },
    { value: 'usdt', label: 'Tether (USDT)', icon: '₮' },
    { value: 'bnb', label: 'Binance Coin (BNB)', icon: 'B' },
  ];

  const withdrawHistory: WithdrawalHistory[] = [
    // Empty for now - will be populated with real data
  ];

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle withdrawal logic
    console.log('Withdrawal requested:', {
      walletType: selectedWalletType,
      amount: withdrawAmount,
      address: walletAddress
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Withdraw</h1>
        <p className="text-gray-400">Withdraw coins from your account</p>
      </div>

      {/* Available Balances */}
      <div className="rounded-2xl border border-green-400/30 backdrop-blur-sm bg-black/40 p-6">
        <h2 className="text-xl font-bold text-white mb-6">💰 Available Balances</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {availableBalances.map((balance, index) => (
            <div
              key={index}
              className={`
                relative rounded-xl border ${balance.borderColor} p-4 
                backdrop-blur-sm ${balance.bgColor} 
                transition-all duration-300 hover:scale-[1.02]
              `}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-2xl">{balance.icon}</div>
                <div className={`w-2 h-2 rounded-full ${balance.color.replace('text-', 'bg-')}`}></div>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-1">{balance.title}</div>
                <div className={`text-xl font-bold ${balance.color}`}>${balance.amount}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Withdraw Coins */}
        <div className="rounded-2xl border border-red-400/30 backdrop-blur-sm bg-black/40 p-6">
          <h2 className="text-xl font-bold text-white mb-6">📤 Withdraw Coins</h2>
          
          <form onSubmit={handleWithdraw} className="space-y-6">
            {/* Select Wallet to Withdraw From */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Select Wallet to Withdraw From
              </label>
              <select
                value={selectedWalletType}
                onChange={(e) => setSelectedWalletType(e.target.value)}
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
                required
              >
                <option value="">Choose wallet type...</option>
                {walletTypes.map((type) => (
                  <option key={type.value} value={type.value} className="bg-gray-800">
                    {type.icon} {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Amount / Coins */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Amount / Coins
              </label>
              <input
                type="number"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
                placeholder="Enter Amount"
                min="0"
                step="0.01"
                required
              />
            </div>

            {/* Select Withdrawal Destination */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Select Withdrawal Destination
              </label>
              <select
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
                required
              >
                <option value="">Choose your withdrawal method...</option>
                <option value="wallet" className="bg-gray-800">Crypto Wallet</option>
                <option value="bank" className="bg-gray-800">Bank Account</option>
                <option value="paypal" className="bg-gray-800">PayPal</option>
              </select>
            </div>

            {/* Wallet Address */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Wallet Address
              </label>
              <input
                type="text"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
                placeholder="Enter wallet address"
                required
              />
            </div>

            {/* Warning Message */}
            <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Icon icon={FiAlertTriangle} size="sm" className="text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-yellow-400 text-sm font-medium mb-1">
                    ⚠️ No withdraw wallet found. Please add a valid address to your wallet type before making a withdrawal.
                  </p>
                  <p className="text-gray-300 text-xs">
                    Make sure to double-check your wallet address before submitting the withdrawal request.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button
                type="button"
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Submit Withdrawal
              </button>
            </div>
          </form>
        </div>

        {/* Withdrawal History */}
        <div className="rounded-2xl border border-gray-600/30 backdrop-blur-sm bg-black/40 p-6">
          <h2 className="text-xl font-bold text-white mb-6">📊 Withdrawal History</h2>
          
          {/* Table Header */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-600/30">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">DATE</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">COINS</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {withdrawHistory.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="text-center py-12">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center mb-4">
                          <Icon icon={FiClock} size="lg" className="text-gray-500" />
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2">No withdrawals yet</h3>
                        <p className="text-gray-400 text-sm">
                          Your withdrawal history will appear here
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  withdrawHistory.map((withdrawal, index) => (
                    <tr key={index} className="border-b border-gray-700/30 hover:bg-gray-800/20">
                      <td className="py-4 px-4 text-white text-sm">{withdrawal.date}</td>
                      <td className="py-4 px-4 text-gray-300 text-sm">{withdrawal.amount}</td>
                      <td className="py-4 px-4 text-sm">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          withdrawal.status === 'completed' 
                            ? 'bg-green-400/20 text-green-400' 
                            : withdrawal.status === 'pending'
                            ? 'bg-yellow-400/20 text-yellow-400'
                            : withdrawal.status === 'processing'
                            ? 'bg-blue-400/20 text-blue-400'
                            : 'bg-red-400/20 text-red-400'
                        }`}>
                          <Icon 
                            icon={
                              withdrawal.status === 'completed' ? FiCheck :
                              withdrawal.status === 'pending' ? FiClock :
                              withdrawal.status === 'processing' ? FiClock : FiX
                            } 
                            size="sm" 
                            className="mr-1" 
                          />
                          {withdrawal.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Withdrawal Guidelines */}
          <div className="mt-6 space-y-3">
            <h3 className="text-white font-medium">Withdrawal Guidelines:</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start space-x-2">
                <span className="text-lime-400 mt-1">•</span>
                <span>Minimum withdrawal amount: $10</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-lime-400 mt-1">•</span>
                <span>Processing time: 24-48 hours</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-lime-400 mt-1">•</span>
                <span>Network fees may apply</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-lime-400 mt-1">•</span>
                <span>Ensure wallet address is correct</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;