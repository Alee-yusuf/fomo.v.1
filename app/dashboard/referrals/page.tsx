'use client';

import { useState } from 'react';
import { FiCopy, FiShare2, FiUsers, FiDollarSign, FiAward, FiBarChart2, FiLink2, FiCheck, FiSend, FiUser } from 'react-icons/fi';
import Icon from '@/components/ui/Icon';

const Referrals: React.FC = () => {
  const [referralLink] = useState('https://www.fomofi.com/register?ref=haahilsaeed@gmail.com');
  const [referralCode] = useState('HAAHILSAEED@GMAIL.COM');
  const [copied, setCopied] = useState(false);

  interface NetworkStat {
    title: string;
    count: number;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    bgColor: string;
    borderColor: string;
    gradient?: string;
  }

  const networkStats: NetworkStat[] = [
    {
      title: 'Direct Referrals',
      count: 0,
      icon: FiUsers,
      color: 'text-[#00d4ff]',
      bgColor: 'bg-[#00d4ff]/10',
      borderColor: 'border-[#00d4ff]/20',
      gradient: ''
    },
    {
      title: 'Level 2 Referrals',
      count: 0,
      icon: FiUsers,
      color: 'text-[#00b8e6]',
      bgColor: 'bg-[#00b8e6]/10',
      borderColor: 'border-[#00b8e6]/20',
      gradient: ''
    },
    {
      title: 'Level 3 Referrals',
      count: 0,
      icon: FiUsers,
      color: 'text-[#0099cc]',
      bgColor: 'bg-[#0099cc]/10',
      borderColor: 'border-[#0099cc]/20',
      gradient: ''
    },
    {
      title: 'Total Network',
      count: 0,
      icon: FiAward,
      color: 'text-[#00d4ff]',
      bgColor: 'bg-gradient-to-r from-[#00d4ff]/10 to-[#0099cc]/10',
      borderColor: 'border-[#00d4ff]/20',
      gradient: 'bg-gradient-to-r from-[#00d4ff] to-[#0099cc] bg-clip-text text-transparent'
    }
  ];

  const earningsStats = [
    {
      title: 'Direct Referral',
      amount: '0.00',
      icon: <FiDollarSign className="w-6 h-6" />,
      color: 'text-[#00d4ff]'
    },
    {
      title: 'Level Bonus',
      amount: '0.00',
      icon: <FiAward className="w-6 h-6" />,
      color: 'text-[#00b8e6]'
    },
    {
      title: 'Team Bonus',
      amount: '0.00',
      icon: <FiUsers className="w-6 h-6" />,
      color: 'text-[#0099cc]'
    },
    {
      title: 'Total Earnings',
      amount: '0.00',
      icon: <FiAward className="w-6 h-6" />,
      color: 'text-[#00d4ff]',
      gradient: 'bg-gradient-to-r from-[#00d4ff] to-[#0099cc] bg-clip-text text-transparent'
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
    const text = `Join me on FÔMOFI and start earning crypto rewards!`;
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
        <h1 className="text-3xl font-bold text-white mb-2">Referral Program</h1>
        <p className="text-[#94a3b8]">Invite friends and earn rewards together</p>
      </div>

      {/* Network Stats */}
      <div className="rounded-2xl border border-[#00d4ff]/20 backdrop-blur-sm bg-[#1e293b] p-6">
        <div className="flex items-center space-x-2 mb-6">
          <FiBarChart2 className="text-[#00d4ff] w-6 h-6" />
          <h2 className="text-xl font-bold text-white">Your Network Stats</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {networkStats.map((stat, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-xl border ${stat.borderColor} ${stat.bgColor} hover:shadow-lg hover:shadow-[#00d4ff]/10 transition-all duration-300`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#94a3b8]">{stat.title}</p>
                  <p className={`text-2xl font-bold ${stat.color} ${stat.gradient || ''}`}>
                    {stat.count.toLocaleString()}
                  </p>
                </div>
                <div className={`p-3 rounded-full ${stat.bgColor} ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Earnings Overview */}
      <div className="rounded-2xl border border-[#00d4ff]/20 backdrop-blur-sm bg-[#1e293b] p-6">
        <div className="flex items-center space-x-2 mb-6">
          <FiDollarSign className="text-[#00d4ff] w-6 h-6" />
          <h2 className="text-xl font-bold text-white">Earnings Overview</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {earningsStats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-[#0f172a] border border-[#334155] p-4 rounded-xl hover:border-[#00d4ff] transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#94a3b8]">{stat.title}</p>
                  <p className={`text-2xl font-bold ${stat.color} ${stat.gradient || ''}`}>
                    ${stat.amount}
                  </p>
                </div>
                <div className={`text-2xl ${stat.color}`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Referral Link */}
        <div className="rounded-2xl border border-[#00d4ff]/20 backdrop-blur-sm bg-[#1e293b] p-6">
          <div className="flex items-center space-x-2 mb-6">
            <FiLink2 className="text-[#00d4ff] w-6 h-6" />
            <h2 className="text-xl font-bold text-white">Your Referral Link</h2>
          </div>
          
          <div className="bg-[#0f172a] border border-[#334155] p-4 rounded-lg mb-4">
            <div className="flex items-center justify-between">
              <span className="text-[#94a3b8] break-all text-sm">{referralLink}</span>
              <button
                onClick={() => copyToClipboard(referralLink)}
                className="ml-4 p-2 rounded-lg hover:bg-[#1e4055] transition-colors"
                aria-label="Copy to clipboard"
              >
                <Icon icon={copied ? FiCheck : FiCopy} className={copied ? 'text-[#00d4ff]' : 'text-[#94a3b8] hover:text-white'} />
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={shareOnTwitter}
              className="flex-1 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] hover:from-[#00b8e6] hover:to-[#0077a3] text-[#0f172a] font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-[#00d4ff]/20"
            >
              <FiShare2 />
              <span>Share on Twitter</span>
            </button>
            <button
              onClick={shareViaEmail}
              className="flex-1 bg-[#334155] hover:bg-[#475569] text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <FiSend />
              <span>Share via Email</span>
            </button>
          </div>
        </div>

        {/* Referral Code */}
        <div className="rounded-2xl border border-[#00d4ff]/20 backdrop-blur-sm bg-[#1e293b] p-6">
          <div className="flex items-center space-x-2 mb-6">
            <FiUser className="text-[#00d4ff] w-6 h-6" />
            <h2 className="text-xl font-bold text-white">Your Referral Code</h2>
          </div>
          
          <div className="bg-gradient-to-r from-[#00d4ff]/10 to-[#0099cc]/10 border border-[#00d4ff]/20 p-6 rounded-lg text-center mb-6">
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00d4ff] to-[#0099cc] mb-2">{referralCode}</div>
            <p className="text-[#94a3b8] text-sm">Share this code with friends</p>
          </div>

          <div className="bg-[#00d4ff]/10 border border-[#00d4ff]/20 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-0.5">
                <FiAward className="text-[#00d4ff]" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-[#94a3b8]">Earn 10% commission</h3>
                <div className="mt-1 text-sm text-[#94a3b8]">
                  <p>Get 10% of all deposits made by your referrals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Your Referral Network Table */}
      <div className="rounded-2xl border border-[#00d4ff]/20 backdrop-blur-sm bg-[#1e293b] p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2 mb-6">
            <FiUsers className="text-[#00d4ff] w-6 h-6" />
            <h2 className="text-xl font-bold text-white">Your Referral Network</h2>
          </div>
          <button className="bg-[#00d4ff] hover:bg-[#00b8e6] text-[#0f172a] font-medium py-2 px-4 rounded-lg transition-colors text-sm">
            Copy Referral Link
          </button>
        </div>
        
        {/* Table Header */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#334155]">
                <th className="text-left py-3 px-4 text-[#94a3b8] font-medium text-sm">USER</th>
                <th className="text-left py-3 px-4 text-[#94a3b8] font-medium text-sm">EMAIL</th>
                <th className="text-left py-3 px-4 text-[#94a3b8] font-medium text-sm">LEVEL</th>
                <th className="text-left py-3 px-4 text-[#94a3b8] font-medium text-sm">STATUS</th>
                <th className="text-left py-3 px-4 text-[#94a3b8] font-medium text-sm">JOINED</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} className="text-center py-12">
                  <div className="flex flex-col items-center">
                    <div className="bg-[#00d4ff]/10 border border-[#00d4ff]/20 rounded-lg p-4 mb-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-0.5">
                          <FiUsers className="text-[#00d4ff]" />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-[#94a3b8]">No referrals yet</h3>
                          <div className="mt-1 text-sm text-[#94a3b8]">
                            <p>Start sharing your referral link to build your network</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(referralLink)}
                      className="bg-[#00d4ff] hover:bg-[#00b8e6] text-[#0f172a] font-medium py-2 px-6 rounded-lg transition-colors"
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