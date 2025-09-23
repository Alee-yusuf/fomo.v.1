'use client';

import { FiPlay, FiPause, FiVolume2, FiVolumeX, FiMaximize } from 'react-icons/fi';
import { useState } from 'react';
import Icon from '@/components/ui/Icon';

const Dashboard: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const stats = [
    {
      title: 'Active Plan',
      value: 'None',
      icon: '📊',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderColor: 'border-yellow-400/30'
    },
    {
      title: 'Mined Coins',
      value: '0',
      icon: '⛏️',
      color: 'text-lime-400',
      bgColor: 'bg-lime-400/10',
      borderColor: 'border-lime-400/30'
    },
    {
      title: 'Withdraw Coins',
      value: '0.00',
      icon: '💰',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/30'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Welcome back! Here's your mining overview.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`
              relative rounded-2xl border ${stat.borderColor} p-6 
              backdrop-blur-sm bg-black/40 hover:bg-black/60 
              transition-all duration-300 hover:scale-[1.02]
              ${stat.bgColor}
            `}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl">{stat.icon}</div>
              <div className={`w-2 h-2 rounded-full ${stat.color.replace('text-', 'bg-')}`}></div>
            </div>
            <div>
              <div className="text-gray-400 text-sm mb-1">{stat.title}</div>
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
          <div className="rounded-2xl border border-lime-400/30 p-6 backdrop-blur-sm bg-black/40">
            <h2 className="text-xl font-bold text-white mb-6">Quick Start Guide</h2>
            
            {/* Video Player */}
            <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-orange-200 via-yellow-100 to-orange-300 aspect-video mb-4">
              {/* Video Placeholder with Illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Desk Scene */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Background elements */}
                  <div className="absolute top-8 left-8 w-16 h-20 bg-blue-200 rounded-lg opacity-80"></div> {/* Lamp */}
                  <div className="absolute top-12 left-10 w-12 h-8 bg-yellow-300 rounded-full"></div> {/* Lamp light */}
                  
                  {/* Desk */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-amber-800 rounded-t-3xl"></div>
                  
                  {/* Monitor */}
                  <div className="relative z-10 w-32 h-20 bg-gray-800 rounded-lg border-4 border-gray-700">
                    <div className="w-full h-16 bg-blue-400 rounded-sm m-1 flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded opacity-80"></div>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full"></div>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-gray-700 rounded-full"></div>
                  </div>
                  
                  {/* Character */}
                  <div className="absolute bottom-24 right-20 z-10">
                    {/* Head */}
                    <div className="w-12 h-12 bg-orange-300 rounded-full relative mb-1">
                      <div className="absolute top-3 left-2 w-2 h-2 bg-black rounded-full"></div>
                      <div className="absolute top-3 right-2 w-2 h-2 bg-black rounded-full"></div>
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-black rounded-full"></div>
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-black rounded-full"></div>
                    </div>
                    {/* Body */}
                    <div className="w-16 h-20 bg-blue-500 rounded-lg relative">
                      <div className="absolute top-2 left-2 w-3 h-8 bg-orange-300 rounded-full"></div>
                      <div className="absolute top-2 right-2 w-3 h-8 bg-orange-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                    >
                      <Icon icon={isVideoPlaying ? FiPause : FiPlay} size="md" className="text-white ml-0.5" />
                    </button>
                    
                    <button
                      className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      onClick={() => setIsMuted(!isMuted)}
                    >
                      <Icon icon={isMuted ? FiVolumeX : FiVolume2} size="sm" className="text-white" />
                    </button>

                    <div className="text-white text-sm">0:00 / 2:15</div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Icon icon={FiMaximize} size="sm" className="text-white" />
                    </button>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-2 w-full bg-white/20 rounded-full h-1">
                  <div className="bg-lime-400 h-1 rounded-full w-0 transition-all duration-300"></div>
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-sm text-center">
              Learn how to get started and deposit coins.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-6">
          {/* Mine Now Button */}
          <div className="rounded-2xl border border-lime-400/30 p-6 backdrop-blur-sm bg-black/40 text-center">
            <div className="mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-lime-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⛏️</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Start Mining</h3>
              <p className="text-gray-400 text-sm">Begin your mining journey today</p>
            </div>
            <button className="w-full bg-gradient-to-r from-lime-400 to-green-500 hover:from-lime-500 hover:to-green-600 text-black font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
              MINE NOW
            </button>
          </div>

          {/* Deposit Button */}
          <div className="rounded-2xl border border-blue-400/30 p-6 backdrop-blur-sm bg-black/40 text-center">
            <div className="mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Make Deposit</h3>
              <p className="text-gray-400 text-sm">Fund your account to start earning</p>
            </div>
            <button className="w-full bg-gradient-to-r from-blue-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
              DEPOSIT NOW
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