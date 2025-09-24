"use client";

import React from 'react';
import { Share2, Gift, Users, DollarSign, Trophy } from 'lucide-react';

const ReferralProgram = () => {
  const steps = [
    {
      step: 1,
      title: 'Copy Link',
      description: 'Copy your personalized referral link from your dashboard',
      icon: Share2,
      category: 'Setup'
    },
    {
      step: 2,
      title: 'Share Link',
      description: 'Share it with your friends via email or messages',
      icon: Share2,
      category: 'Distribution'
    },
    {
      step: 3,
      title: 'Friend Joins',
      description: 'Your friends sign up using your link and activate a plan',
      icon: Users,
      category: 'Conversion'
    },
    {
      step: 4,
      title: 'Earn Rewards',
      description: 'Your referral bonus is instantly added to your account',
      icon: DollarSign,
      category: 'Rewards'
    }
  ];

  return (
    <section id="referrals" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-8" 
             style={{ background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl opacity-6" 
             style={{ background: 'radial-gradient(circle, #0099cc 0%, transparent 70%)' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Referral <span style={{ 
              background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Program</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4 leading-relaxed">
            Share FÔMOFI & Earn More Rewards
          </p>
          <p className="text-slate-400 max-w-4xl mx-auto">
            At FÔMOFI, we view growth as a shared opportunity. Our structured referral program allows you to maximize 
            returns while strengthening your network.
          </p>
        </div>

        {/* Multi-Level Earnings Overview */}
        <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-[#00d4ff]/20 shadow-2xl p-8 mb-16 hover:shadow-[#00d4ff]/10 hover:border-[#00d4ff]/40 transition-all duration-500">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-3">
              Maximize Your <span style={{ 
                background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Earning Potential</span>
            </h3>
            <p className="text-slate-300 max-w-3xl mx-auto">
              Build a sustainable income stream through our comprehensive multi-tier referral system
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/60 border border-[#00d4ff]/20 rounded-xl p-6 hover:border-[#00d4ff]/40 transition-all duration-300 hover:scale-105 transform">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[#00d4ff]/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <span className="text-[#00d4ff] font-bold text-2xl">20%</span>
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Direct Referrals</h4>
              <p className="text-slate-400 text-sm">
                Earn up to 20% from users you directly refer to the platform
              </p>
            </div>

            <div className="bg-slate-800/60 border border-[#00d4ff]/20 rounded-xl p-6 hover:border-[#00d4ff]/40 transition-all duration-300 hover:scale-105 transform">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[#00d4ff]/20 rounded-lg flex items-center justify-center">
                  <Share2 className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <span className="text-[#00d4ff] font-bold text-2xl">15%</span>
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Indirect Referrals</h4>
              <p className="text-slate-400 text-sm">
                Earn from referrals made by your direct network members
              </p>
            </div>

            <div className="bg-slate-800/60 border border-[#00d4ff]/20 rounded-xl p-6 hover:border-[#00d4ff]/40 transition-all duration-300 hover:scale-105 transform">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[#00d4ff]/20 rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <span className="text-[#00d4ff] font-bold text-2xl">10%</span>
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Team Rewards</h4>
              <p className="text-slate-400 text-sm">
                Bonus earnings from your extended team&apos;s performance
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button 
              className="font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 border border-[#00d4ff]/20 flex items-center gap-2 mx-auto"
              style={{ 
                background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                color: '#0f172a'
              }}
            >
              <Gift className="w-5 h-5" />
              Start Building Your Network
            </button>
          </div>
        </div>

        {/* How It Works Steps */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              How It <span style={{ 
                background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Works</span>
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Follow these simple steps to start earning referral rewards
            </p>
          </div>

          {/* Connection Line */}
          <div className="relative">
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00d4ff]/20 via-[#00d4ff]/40 to-[#00d4ff]/20"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.step} className="relative group">
                    {/* Step Number Circle */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] rounded-full flex items-center justify-center shadow-lg shadow-[#00d4ff]/25">
                        <span className="text-slate-900 font-bold text-sm">{step.step}</span>
                      </div>
                    </div>

                    <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-[#00d4ff]/20 shadow-2xl p-6 hover:shadow-[#00d4ff]/10 hover:border-[#00d4ff]/40 transition-all duration-500 text-center group-hover:scale-105 transform h-full flex flex-col">
                      {/* Category Badge */}
                      <div className="inline-block bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full px-3 py-1 mb-4">
                        <span className="text-[#00d4ff] text-xs font-medium uppercase tracking-wide">
                          {step.category}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="mb-4 flex justify-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#00d4ff]/20 to-[#00d4ff]/10 rounded-xl flex items-center justify-center group-hover:from-[#00d4ff]/30 group-hover:to-[#00d4ff]/20 transition-all duration-300 shadow-inner">
                          <IconComponent className="w-8 h-8 text-[#00d4ff] group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>

                      {/* Step Indicator */}
                      <div className="mb-2">
                        <span className="text-slate-400 text-sm font-medium">
                          STEP {step.step}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="text-[#00d4ff] text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                        {step.title}
                      </h4>

                      {/* Description */}
                      <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300 flex-grow">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>



        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-[#00d4ff]/20 shadow-2xl p-8 hover:shadow-[#00d4ff]/10 hover:border-[#00d4ff]/40 transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to <span style={{ 
                background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Maximize Your Earnings?</span>
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              With each upgrade, your earning potential expands across deeper levels of your network. By participating, you 
              not only grow your personal portfolio but also contribute to the broader success of the FÔMOFI investment 
              community.
            </p>
            <button 
              className="font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 border border-[#00d4ff]/20"
              style={{ 
                background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                color: '#0f172a'
              }}
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralProgram;