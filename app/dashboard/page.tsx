'use client';

import { FiBarChart2, FiDollarSign, FiUpload, FiPackage } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import QuizSystem from '@/components/Quiz/QuizSystem';

const Dashboard: React.FC = () => {
  const [userPlan, setUserPlan] = useState({
    id: 'free-tier',
    dailyCoins: 1, // Default value, will be updated based on user's plan
    lastQuizCompleted: null as string | null
  });
  const [dailyRewardClaimed, setDailyRewardClaimed] = useState(false);

  // Load user data from localStorage on component mount
  useEffect(() => {
    const savedUserData = localStorage.getItem('userData');
    if (savedUserData) {
      const userData = JSON.parse(savedUserData);
      setUserPlan(prev => ({
        ...prev,
        ...userData.plan,
        lastQuizCompleted: userData.lastQuizCompleted || null
      }));
      
      // Check if user already completed the quiz today
      if (userData.lastQuizCompleted) {
        const lastCompleted = new Date(userData.lastQuizCompleted);
        const today = new Date();
        if (
          lastCompleted.getDate() === today.getDate() &&
          lastCompleted.getMonth() === today.getMonth() &&
          lastCompleted.getFullYear() === today.getFullYear()
        ) {
          setDailyRewardClaimed(true);
        }
      }
    }
  }, []);

  const stats = [
    {
      title: 'Active Plan',
      value: userPlan.id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      icon: <FiBarChart2 className="text-2xl" />,
      color: 'text-[#00d4ff]',
      bgColor: 'bg-[#00d4ff]/10',
      borderColor: 'border-[#00d4ff]/20'
    },
    {
      title: 'Mined Coins',
      value: '0',
      icon: <FiPackage className="text-2xl" />,
      color: 'text-[#00b8e6]',
      bgColor: 'bg-[#00b8e6]/10',
      borderColor: 'border-[#00b8e6]/20'
    },
    {
      title: 'Withdraw Coins',
      value: '0.00',
      icon: <FiDollarSign className="text-2xl" />,
      color: 'text-[#0099cc]',
      bgColor: 'bg-[#0099cc]/10',
      borderColor: 'border-[#0099cc]/20'
    }
  ];

  const handleQuizComplete = async (success: boolean) => {
    if (success) {
      // In a real app, you would make an API call to update the user's balance
      // For now, we'll just update the local state
      setDailyRewardClaimed(true);
      
      // Update last completed date
      const today = new Date().toISOString();
      const updatedUserData = {
        ...userPlan,
        lastQuizCompleted: today,
        // In a real app, you would also update the user's coin balance here
      };
      
      setUserPlan(updatedUserData);
      
      // Save to localStorage
      localStorage.setItem('userData', JSON.stringify({
        ...JSON.parse(localStorage.getItem('userData') || '{}'),
        lastQuizCompleted: today
      }));
    }
  };

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-[#94a3b8]">Welcome back! Here&apos;s your daily crypto quiz.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`
              relative rounded-2xl border ${stat.borderColor} p-6 
              backdrop-blur-sm bg-[#1e293b] hover:bg-[#1e293b]/80 
              transition-all duration-300 hover:scale-[1.02] shadow-lg
              ${stat.bgColor}
            `}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl">{stat.icon}</div>
              <div className={`w-2 h-2 rounded-full ${stat.color.replace('text-', 'bg-')}`}></div>
            </div>
            <div>
              <div className="text-[#94a3b8] text-sm mb-1">{stat.title}</div>
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            </div>
            
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${stat.color.replace('text-', 'from-')} to-transparent opacity-50`}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Quick Start Guide */}
        <div className="xl:col-span-2">
          <div className="rounded-2xl border border-[#00d4ff]/20 p-6 backdrop-blur-sm bg-[#1e293b]">
            <h2 className="text-xl font-bold text-white mb-6">Daily Crypto Quiz</h2>
            
            <div className="mb-4">
              {dailyRewardClaimed ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Quiz Completed for Today!</h3>
                  <p className="text-gray-400 mb-6">You&apos;ve earned your {userPlan.dailyCoins} coin{userPlan.dailyCoins !== 1 ? 's' : ''} for today.</p>
                  <p className="text-sm text-gray-500">Come back tomorrow for a new quiz!</p>
                </div>
              ) : (
                <QuizSystem 
                  userPlan={userPlan} 
                  onComplete={handleQuizComplete} 
                />
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-6">
          {/* Deposit Button */}
          <div className="rounded-2xl border border-blue-400/30 p-6 backdrop-blur-sm bg-black/40 text-center">
            <div className="mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <FiUpload className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Make Deposit</h3>
              <p className="text-gray-400 text-sm">Fund your account to start earning</p>
            </div>
            <button className="w-full bg-gradient-to-r from-blue-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
              DEPOSIT NOW
            </button>
          </div>

          {/* Upgrade Plan */}
          <div className="rounded-2xl border border-purple-400/30 p-6 backdrop-blur-sm bg-black/40 text-center">
            <div className="mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Upgrade Plan</h3>
              <p className="text-gray-400 text-sm">Earn more coins with a better plan</p>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
              UPGRADE NOW
            </button>
          </div>
        </div>
      </div>

      {/* Achievement Badge */}
      <div className="fixed bottom-8 right-8 z-30">
        <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
          <span className="text-3xl">⭐</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;