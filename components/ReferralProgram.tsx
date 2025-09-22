"use client";

import React, { useState } from 'react';
import { Users, Copy, Check, Share2, DollarSign, Link, Gift, Star, Trophy, Award } from 'lucide-react';

interface ReferralPackage {
  name: string;
  earnings: string;
  directReferrals: string;
  indirectReferrals: string;
  teamReferrals: string;
  benefits: string[];
  icon: any;
  popular?: boolean;
}

const ReferralProgram = () => {
  const [copied, setCopied] = useState(false);
  
  const referralCode = 'FOMO-REF-123456';
  const referralLink = `https://fomof.net/register?ref=${referralCode}`;

  const referralPackages = [
    {
      name: 'Silver Package',
      earnings: 'Up to 5% Referral Earnings',
      directReferrals: '5% Direct Referrals',
      indirectReferrals: '4% Indirect Referrals',
      teamReferrals: '3% Team Referrals',
      benefits: ['Basic referral dashboard', 'Email notifications', 'Monthly reports'],
      icon: Award
    },
    {
      name: 'Gold Package',
      earnings: 'Up to 8% Referral Earnings',
      directReferrals: '8% Direct Referrals',
      indirectReferrals: '6% Indirect Referrals',
      teamReferrals: '4% Team Referrals',
      benefits: ['Advanced analytics', 'Priority support', 'Weekly reports', 'Bonus rewards'],
      icon: Star,
      popular: true
    },
    {
      name: 'Diamond Package',
      earnings: 'Up to 20% Referral Earnings',
      directReferrals: '20% Direct Referrals',
      indirectReferrals: '15% Indirect Referrals',
      teamReferrals: '10% Team Referrals',
      benefits: ['VIP dashboard', 'Personal manager', 'Daily reports', 'Exclusive events', 'Custom rates'],
      icon: Trophy
    }
  ];

  const steps = [
    {
      step: 1,
      title: 'Copy Link',
      description: 'Copy your personalized referral link from your dashboard',
      icon: Copy,
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

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section className="bg-black py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-lime-400/10 border border-lime-400/30 rounded-full px-4 py-2 mb-4">
            <span className="text-lime-400 text-sm font-medium uppercase tracking-wide">
              Earn More Together
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            REFERRAL <span className="text-lime-400">PROGRAM</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-4">
            SHARE FOMOFI & EARN MORE REWARDS
          </p>
          <p className="text-gray-400 max-w-4xl mx-auto">
            At FOMOFI, we view growth as a shared opportunity. Our structured referral program allows you to maximize 
            returns while strengthening your network.
          </p>
        </div>

        {/* Multi-Level Earnings Overview */}
        <div className="bg-gradient-to-r from-black via-lime-400/5 to-black border border-lime-400/30 rounded-2xl p-8 mb-16 hover:border-lime-400/50 transition-all duration-300">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/30 rounded-full px-4 py-2 mb-4">
              <DollarSign className="w-4 h-4 text-lime-400" />
              <span className="text-lime-400 text-sm font-medium uppercase tracking-wide">
                Multi-Level Earnings
              </span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-3">
              MAXIMIZE YOUR <span className="text-lime-400">EARNING POTENTIAL</span>
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Build a sustainable income stream through our comprehensive multi-tier referral system
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black/50 border border-lime-400/20 rounded-xl p-6 hover:border-lime-400/40 transition-all duration-300 hover:scale-105 transform">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-lime-400/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-lime-400" />
                </div>
                <span className="text-lime-400 font-bold text-2xl">20%</span>
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Direct Referrals</h4>
              <p className="text-gray-400 text-sm">
                Earn up to 20% from users you directly refer to the platform
              </p>
            </div>

            <div className="bg-black/50 border border-lime-400/20 rounded-xl p-6 hover:border-lime-400/40 transition-all duration-300 hover:scale-105 transform">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-lime-400/20 rounded-lg flex items-center justify-center">
                  <Share2 className="w-6 h-6 text-lime-400" />
                </div>
                <span className="text-lime-400 font-bold text-2xl">15%</span>
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Indirect Referrals</h4>
              <p className="text-gray-400 text-sm">
                Earn from referrals made by your direct network members
              </p>
            </div>

            <div className="bg-black/50 border border-lime-400/20 rounded-xl p-6 hover:border-lime-400/40 transition-all duration-300 hover:scale-105 transform">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-lime-400/20 rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-lime-400" />
                </div>
                <span className="text-lime-400 font-bold text-2xl">10%</span>
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Team Rewards</h4>
              <p className="text-gray-400 text-sm">
                Bonus earnings from your extended team's performance
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="px-8 py-3 bg-lime-400 hover:bg-lime-300 text-black font-bold rounded-lg transition-all duration-300 hover:scale-105 transform flex items-center gap-2 mx-auto">
              <Gift className="w-5 h-5" />
              Start Building Your Network
            </button>
          </div>
        </div>

        {/* How It Works Steps */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              HOW IT <span className="text-lime-400">WORKS</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Follow these simple steps to start earning referral rewards
            </p>
          </div>

          {/* Connection Line */}
          <div className="relative">
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-lime-400/20 via-lime-400/40 to-lime-400/20"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.step} className="relative group">
                    {/* Step Number Circle */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-black font-bold text-sm">{step.step}</span>
                      </div>
                    </div>

                    <div className="bg-black border border-lime-400/30 rounded-xl p-6 hover:border-lime-400 hover:shadow-lg hover:shadow-lime-400/10 transition-all duration-300 text-center group-hover:scale-105 transform h-full flex flex-col">
                      {/* Category Badge */}
                      <div className="inline-block bg-lime-400/10 border border-lime-400/30 rounded-full px-3 py-1 mb-4">
                        <span className="text-lime-400 text-xs font-medium uppercase tracking-wide">
                          {step.category}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="mb-4 flex justify-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-lime-400/20 to-lime-400/10 rounded-xl flex items-center justify-center group-hover:from-lime-400/30 group-hover:to-lime-400/20 transition-all duration-300 shadow-inner">
                          <IconComponent className="w-8 h-8 text-lime-400 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>

                      {/* Step Indicator */}
                      <div className="mb-2">
                        <span className="text-gray-400 text-sm font-medium">
                          STEP {step.step}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="text-lime-400 text-xl font-bold mb-3 group-hover:text-lime-300 transition-colors duration-300">
                        {step.title}
                      </h4>

                      {/* Description */}
                      <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 flex-grow">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Referral Packages */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              REFERRAL <span className="text-lime-400">PACKAGES</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Choose the package that fits your goals and start maximizing your earnings
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {referralPackages.map((pkg, index) => {
              const IconComponent = pkg.icon;
              return (
                <div
                  key={index}
                  className={`bg-black border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group hover:scale-105 transform relative h-full flex flex-col ${
                    pkg.popular 
                      ? 'border-lime-400 shadow-lg shadow-lime-400/10' 
                      : 'border-lime-400/30 hover:border-lime-400 hover:shadow-lime-400/10'
                  }`}
                >
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-lime-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                        MOST POPULAR
                      </div>
                    </div>
                  )}

                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-lime-400/20 to-lime-400/10 rounded-xl flex items-center justify-center group-hover:from-lime-400/30 group-hover:to-lime-400/20 transition-all duration-300">
                      <IconComponent className="w-10 h-10 text-lime-400" />
                    </div>
                  </div>

                  {/* Package Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-lime-400 mb-2">{pkg.name}</h3>
                    <p className="text-white font-semibold text-lg">{pkg.earnings}</p>
                  </div>

                  {/* Referral Rates */}
                  <div className="space-y-3 mb-6 flex-grow">
                    <div className="bg-lime-400/5 border border-lime-400/20 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">Direct Referrals</span>
                        <span className="text-lime-400 font-bold">{pkg.directReferrals}</span>
                      </div>
                    </div>
                    <div className="bg-lime-400/5 border border-lime-400/20 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">Indirect Referrals</span>
                        <span className="text-lime-400 font-bold">{pkg.indirectReferrals}</span>
                      </div>
                    </div>
                    <div className="bg-lime-400/5 border border-lime-400/20 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">Team Referrals</span>
                        <span className="text-lime-400 font-bold">{pkg.teamReferrals}</span>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold mb-3">Package Benefits:</h4>
                    {pkg.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-lime-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-lime-400/10 to-lime-400/20 border border-lime-400/30 rounded-2xl p-8">
            <div className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/30 rounded-full px-4 py-2 mb-4">
              <Gift className="w-4 h-4 text-lime-400" />
              <span className="text-lime-400 text-sm font-medium uppercase tracking-wide">
                Start Earning
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              READY TO <span className="text-lime-400">MAXIMIZE YOUR EARNINGS?</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              With each upgrade, your earning potential expands across deeper levels of your network. By participating, you 
              not only grow your personal portfolio but also contribute to the broader success of the FOMOFI investment 
              community.
            </p>
            <button className="px-8 py-3 bg-lime-400 hover:bg-lime-300 text-black font-bold rounded-lg transition-all duration-300 hover:scale-105 transform">
              Get Started Today
            </button>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-lime-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/6 w-40 h-40 bg-lime-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 left-1/3 w-24 h-24 bg-lime-400/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default ReferralProgram;