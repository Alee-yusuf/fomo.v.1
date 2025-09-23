'use client';

import { useState } from 'react';
import { FiCopy, FiShare2, FiSend, FiUsers, FiDollarSign, FiTrendingUp, FiAward } from 'react-icons/fi';
import Icon from '@/components/ui/Icon';

const Referrals: React.FC = () => {
  const [referralLink] = useState('https://www.fomofi.com/register?ref=haahilsaeed@gmail.com');
  const [referralCode] = useState('HAAHILSAEED@GMAIL.COM');
  const [copied, setCopied] = useState(false);

  const networkStats = [
    {
      title: 'Direct Referrals',
      count: 0,
      icon: FiUsers,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/30'
    },
    {
      title: 'Level 2 Referrals',
      count: 0,
      icon: FiUsers,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/30'
    },
    {
      title: 'Level 3 Referrals',
      count: 0,
      icon: FiUsers,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderColor: 'border-yellow-400/30'
    },
    {
      title: 'Total Network',
      count: 0,
      icon: FiAward,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/30'
    }
  ];

  const earningsStats = [
    {
      title: 'Direct Referral',
      amount: '0.00',
      icon: '💰',
      color: 'text-lime-400'
    },
    {
      title: 'Level Bonus',
      amount: '0.00',
      icon: '🎯',
      color: 'text-orange-400'
    },
    {
      title: 'Team Bonus',
      amount: '0.00',
      icon: '👥',
      color: 'text-cyan-400'
    },
    {
      title: 'Total Earnings',
      amount: '0.00',
      icon: '🏆',
      color: 'text-green-400'
    }
  ];

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const shareOnTwitter = () => {
    const text = `Join me on FÔMOFI and start earning crypto rewards! 🚀`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(referralLink)}`;
    window.open(url, '_blank');
  };

  const shareViaEmail = () => {
    const subject = 'Join FÔMOFI - Start Earning Crypto Rewards!';
    const body = `Hi there!\n\nI wanted to share this amazing opportunity with you. Join FÔMOFI using my referral link and start earning crypto rewards:\n\n${referralLink}\n\nBest regards!`;
    const url = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Referrals</h1>
        <p className="text-gray-400">Share your referral link with your friends and earn rewards</p>
      </div>

      {/* Referral Network Overview */}
      <div className="rounded-2xl border border-lime-400/30 backdrop-blur-sm bg-black/40 p-6">
        <h2 className="text-xl font-bold text-white mb-6">Referral Network Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {networkStats.map((stat, index) => (
            <div
              key={index}
              className={`
                relative rounded-xl border ${stat.borderColor} p-4 
                backdrop-blur-sm ${stat.bgColor} 
                transition-all duration-300 hover:scale-[1.02]
              `}
            >
              <div className="flex items-center justify-between mb-3">
                <Icon icon={stat.icon} size="lg" className={stat.color} />
                <div className={`w-2 h-2 rounded-full ${stat.color.replace('text-', 'bg-')}`}></div>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-1">{stat.title}</div>
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.count}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Your Referral Earnings */}
      <div className="rounded-2xl border border-green-400/30 backdrop-blur-sm bg-black/40 p-6">
        <h2 className="text-xl font-bold text-white mb-6">💰 Your Referral Earnings</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {earningsStats.map((stat, index) => (
            <div
              key={index}
              className="relative rounded-xl border border-gray-600/30 p-4 backdrop-blur-sm bg-gray-800/20 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-2xl">{stat.icon}</div>
                <Icon icon={FiDollarSign} size="sm" className={stat.color} />
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-1">{stat.title}</div>
                <div className={`text-xl font-bold ${stat.color}`}>${stat.amount}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Share & Earn */}
        <div className="rounded-2xl border border-blue-400/30 backdrop-blur-sm bg-black/40 p-6">
          <h2 className="text-xl font-bold text-white mb-6">🔗 Share & Earn</h2>
          
          {/* Referral Link */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Your Referral Link
            </label>
            <div className="flex">
              <input
                type="text"
                value={referralLink}
                readOnly
                className="flex-1 bg-gray-800/50 border border-gray-600 rounded-l-lg px-4 py-3 text-white text-sm"
              />
              <button
                onClick={() => copyToClipboard(referralLink)}
                className="bg-lime-400 hover:bg-lime-500 text-black font-medium px-4 py-3 rounded-r-lg transition-colors flex items-center space-x-2"
              >
                <Icon icon={FiCopy} size="sm" />
                <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Referral Code */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Your Referral Code
            </label>
            <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-center">
              <div className="text-lime-400 font-mono text-lg font-bold mb-2">{referralCode}</div>
            </div>
          </div>

          {/* QR Code */}
          <div className="mb-6">
            <div className="bg-white rounded-lg p-4 flex items-center justify-center">
              <div className="w-32 h-32 bg-black rounded-lg flex items-center justify-center">
                {/* QR Code Placeholder */}
                <div className="grid grid-cols-8 gap-1">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-1 h-1 ${Math.random() > 0.5 ? 'bg-black' : 'bg-white'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => copyToClipboard(referralLink)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <Icon icon={FiCopy} size="sm" />
              <span className="text-sm">Copy</span>
            </button>
            
            <button
              onClick={shareOnTwitter}
              className="bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <Icon icon={FiShare2} size="sm" />
              <span className="text-sm">Tweet</span>
            </button>
            
            <button
              onClick={shareViaEmail}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <Icon icon={FiSend} size="sm" />
              <span className="text-sm">Send</span>
            </button>
          </div>
        </div>

        {/* Your Bonus Rules */}
        <div className="rounded-2xl border border-purple-400/30 backdrop-blur-sm bg-black/40 p-6">
          <h2 className="text-xl font-bold text-white mb-6">📊 Your Bonus Rules</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800/30 rounded-lg p-4">
              <h3 className="text-lime-400 font-semibold mb-2">Direct Referral Bonus</h3>
              <p className="text-gray-300 text-sm">Earn 10% commission from your direct referrals' investments</p>
            </div>
            
            <div className="bg-gray-800/30 rounded-lg p-4">
              <h3 className="text-orange-400 font-semibold mb-2">Level 2 Bonus</h3>
              <p className="text-gray-300 text-sm">Earn 5% from second level referrals</p>
            </div>
            
            <div className="bg-gray-800/30 rounded-lg p-4">
              <h3 className="text-cyan-400 font-semibold mb-2">Level 3 Bonus</h3>
              <p className="text-gray-300 text-sm">Earn 2% from third level referrals</p>
            </div>
            
            <div className="bg-gray-800/30 rounded-lg p-4">
              <h3 className="text-purple-400 font-semibold mb-2">Team Bonus</h3>
              <p className="text-gray-300 text-sm">Additional rewards based on your team's performance</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-lime-400/10 border border-lime-400/30 rounded-lg">
            <p className="text-lime-400 text-sm">
              💡 <strong>Tip:</strong> Generate a referral code to set your bonus rules later
            </p>
          </div>
        </div>
      </div>

      {/* Your Referral Network Table */}
      <div className="rounded-2xl border border-gray-600/30 backdrop-blur-sm bg-black/40 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">👥 Your Referral Network</h2>
          <button className="bg-lime-400 hover:bg-lime-500 text-black font-medium py-2 px-4 rounded-lg transition-colors text-sm">
            Copy Referral Link
          </button>
        </div>
        
        {/* Table Header */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-600/30">
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">USER</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">EMAIL</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">LEVEL</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">STATUS</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">JOINED</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} className="text-center py-12">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center mb-4">
                      <Icon icon={FiUsers} size="lg" className="text-gray-500" />
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">No referrals yet</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Start sharing your referral link to build your network
                    </p>
                    <button
                      onClick={() => copyToClipboard(referralLink)}
                      className="bg-lime-400 hover:bg-lime-500 text-black font-medium py-2 px-6 rounded-lg transition-colors"
                    >
                      Copy Referral Link
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Referrals;