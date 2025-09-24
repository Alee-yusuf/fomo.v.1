'use client';

import { useState } from 'react';
import { FiAlertTriangle, FiCheck, FiClock, FiX, FiDollarSign, FiAward, FiUsers, FiCreditCard, FiDollarSign as FiDollar, FiFileText } from 'react-icons/fi';
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
      title: 'Total Available',
      amount: '0.00',
icon: <FiAward className="w-6 h-6" />,
      color: 'text-[#00d4ff]',
      bgColor: 'bg-gradient-to-r from-[#00d4ff]/10 to-[#0099cc]/10',
      borderColor: 'border-[#00d4ff]/20',
      gradient: 'bg-gradient-to-r from-[#00d4ff] to-[#0099cc] bg-clip-text text-transparent'
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
        <p className="text-[#94a3b8]">Withdraw coins from your account</p>
      </div>

      {/* Available Balances */}
      <div className="rounded-2xl border border-[#00d4ff]/20 backdrop-blur-sm bg-[#1e293b] p-6">
        <div className="flex items-center space-x-2 mb-6">
          <FiDollar className="text-[#00d4ff] w-6 h-6" />
          <h2 className="text-xl font-bold text-white">Available Balances</h2>
        </div>
        
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
        <div className="rounded-2xl border border-[#00d4ff]/20 backdrop-blur-sm bg-[#1e293b] p-6">
          <div className="flex items-center space-x-2 mb-6">
        <FiCreditCard className="text-[#00d4ff] w-6 h-6" />
        <h2 className="text-xl font-bold text-white">Withdraw Funds</h2>
      </div>
          
          <form onSubmit={handleWithdraw} className="space-y-6">
            {/* Select Wallet to Withdraw From */}
            <div>
              <label className="block text-sm font-medium text-[#94a3b8] mb-2">
                Select Wallet Type
              </label>
              <select
                value={selectedWalletType}
                onChange={(e) => setSelectedWalletType(e.target.value)}
                className="w-full bg-[#0f172a] border border-[#334155] rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent focus:outline-none transition-colors"
                required
              >
                <option value="" className="bg-[#1e293b]">Select a wallet type</option>
                {walletTypes.map((type) => (
                  <option key={type.value} value={type.value} className="bg-[#1e293b]">
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Amount / Coins */}
            <div>
              <label className="block text-sm font-medium text-[#94a3b8] mb-2">
                Withdrawal Amount
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full bg-[#0f172a] border border-[#334155] rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent focus:outline-none pr-24 transition-colors"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="text-[#94a3b8] text-sm">USDT</span>
                </div>
              </div>
            </div>

            {/* Select Withdrawal Destination */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Select Withdrawal Destination
              </label>
              <select
                className="w-full bg-[#0f172a] border border-[#334155] rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent focus:outline-none transition-colors"
                required
              >
                <option value="">Choose your withdrawal method...</option>
                <option value="wallet" className="bg-[#1e293b]">Crypto Wallet</option>
                <option value="bank" className="bg-[#1e293b]">Bank Account</option>
                <option value="paypal" className="bg-[#1e293b]">PayPal</option>
              </select>
            </div>

            {/* Wallet Address */}
            <div>
              <label className="block text-sm font-medium text-[#94a3b8] mb-2">
                Wallet Address
              </label>
              <input
                type="text"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                placeholder="Enter your wallet address"
                className="w-full bg-[#0f172a] border border-[#334155] rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent focus:outline-none transition-colors"
                required
              />
            </div>

            {/* Warning Message */}
            <div className="bg-[#00d4ff]/10 border border-[#00d4ff]/20 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Icon icon={FiAlertTriangle} size="sm" className="text-[#00d4ff] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="flex items-start space-x-2 text-yellow-400 mb-4">
                    <FiAlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>No withdraw wallet found. Please add a valid address to your wallet type before making a withdrawal.</span>
                  </div>
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
                className="w-full bg-gradient-to-r from-[#00d4ff] to-[#0099cc] hover:from-[#00b8e6] hover:to-[#0077a3] text-[#0f172a] font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#00d4ff]/20"
              >
                Request Withdrawal
              </button>
            </div>
          </form>
        </div>

        {/* Withdrawal History */}
        <div className="rounded-2xl border border-[#00d4ff]/20 backdrop-blur-sm bg-[#1e293b] p-6">
          <div className="flex items-center space-x-2 mb-6">
        <FiFileText className="text-[#00d4ff] w-6 h-6" />
        <h2 className="text-xl font-bold text-white">Withdrawal History</h2>
      </div>
          
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
                        <div className="bg-[#00d4ff]/10 border border-[#00d4ff]/20 rounded-lg p-4 mb-4">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 mt-0.5">
                              <FiAlertTriangle className="text-[#00d4ff]" />
                            </div>
                            <div className="ml-3">
                              <h3 className="text-sm font-medium text-[#94a3b8]">Minimum withdrawal amount: 50 USDT</h3>
                              <div className="mt-1 text-sm text-[#94a3b8]">
                                <p>Processing time: 1-24 hours</p>
                                <p>Network fee: 1% (min $1)</p>
                              </div>
                            </div>
                          </div>
                        </div>
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