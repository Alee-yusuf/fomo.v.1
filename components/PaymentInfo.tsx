"use client";

import React from 'react';
import { DollarSign, Shield, Clock, Zap, Eye, Lock, QrCode } from 'lucide-react';

const PaymentInfo = () => {


  const paymentMethods = [
    {
      name: 'BEP20 USDT',
      description: 'Tether on Binance Smart Chain - Lightning fast with ultra-low fees',
      network: 'BSC (BEP20)',
      minDeposit: 20,
      maxDeposit: 20000,
      processingTime: '1-3 minutes',
      fees: 'Zero deposit fees',
      recommended: true,
      icon: DollarSign
    }
  ];

  const depositSteps = [
    {
      step: 1,
      title: 'Generate Address',
      description: 'Click "Deposit" in your dashboard to generate your unique BEP20 USDT address',
      icon: QrCode,
      category: 'Setup'
    },
    {
      step: 2,
      title: 'Send USDT',
      description: 'Transfer USDT from your wallet to the generated address using BEP20 network',
      icon: Zap,
      category: 'Transfer'
    },
    {
      step: 3,
      title: 'Wait Confirmation',
      description: 'Your deposit will be credited automatically after 1 network confirmation',
      icon: Clock,
      category: 'Processing'
    },
    {
      step: 4,
      title: 'Start Investing',
      description: 'Choose your investment plan and begin earning maximum returns',
      icon: DollarSign,
      category: 'Action'
    }
  ];

  const securityFeatures = [
    { name: 'Cold Storage', icon: Shield },
    { name: 'Multi-Signature', icon: Lock },
    { name: '24/7 Monitoring', icon: Eye },
    { name: 'Insurance Coverage', icon: Shield }
  ];



  return (
    <section id="payment-info" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
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
            Payment <span style={{ 
              background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Information</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4 leading-relaxed">
            Fast, Secure & Reliable Deposits
          </p>
          <p className="text-slate-400 max-w-4xl mx-auto">
            We support BEP20 USDT deposits for lightning-fast, secure, and cost-effective transactions. 
            Start your investment journey with as little as $20 USDT.
          </p>
        </div>

        {/* Payment Method Showcase */}
        <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-[#00d4ff]/20 shadow-2xl p-8 mb-16 hover:shadow-[#00d4ff]/10 hover:border-[#00d4ff]/40 transition-all duration-500">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-3">
              Accept <span style={{ 
                background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>BEP20 USDT Only</span>
            </h3>
            <p className="text-slate-300 max-w-3xl mx-auto">
              Experience the fastest and most secure way to fund your FÔMOFI investment account
            </p>
          </div>

          {paymentMethods.map((method, index) => (
            <div key={index} className="max-w-4xl mx-auto">
              {/* Method Card */}
              <div className="bg-slate-800/60 border border-[#00d4ff]/20 rounded-2xl p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left Side - Method Info */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#00d4ff]/20 to-[#00d4ff]/10 rounded-xl flex items-center justify-center shadow-lg">
                        <DollarSign className="w-8 h-8 text-[#00d4ff]" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-[#00d4ff]">{method.name}</h4>
                        <p className="text-slate-300">{method.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-[#00d4ff]/5 border border-[#00d4ff]/20 rounded-lg p-4">
                        <div className="text-slate-400 text-sm mb-1">Network</div>
                        <div className="text-[#00d4ff] font-bold">{method.network}</div>
                      </div>
                      <div className="bg-[#00d4ff]/5 border border-[#00d4ff]/20 rounded-lg p-4">
                        <div className="text-slate-400 text-sm mb-1">Processing</div>
                        <div className="text-[#00d4ff] font-bold">{method.processingTime}</div>
                      </div>
                      <div className="bg-[#00d4ff]/5 border border-[#00d4ff]/20 rounded-lg p-4">
                        <div className="text-slate-400 text-sm mb-1">Min Deposit</div>
                        <div className="text-white font-bold">${method.minDeposit} USDT</div>
                      </div>
                      <div className="bg-[#00d4ff]/5 border border-[#00d4ff]/20 rounded-lg p-4">
                        <div className="text-slate-400 text-sm mb-1">Max Deposit</div>
                        <div className="text-white font-bold">${method.maxDeposit.toLocaleString()} USDT</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Features */}
                  <div>
                    <h5 className="text-white font-bold text-lg mb-4">Why Choose BEP20 USDT?</h5>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#00d4ff]/20 rounded-lg flex items-center justify-center">
                          <Zap className="w-4 h-4 text-[#00d4ff]" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">Ultra Fast</div>
                          <div className="text-slate-400 text-sm">Instant transactions with 1-3 minute processing</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#00d4ff]/20 rounded-lg flex items-center justify-center">
                          <DollarSign className="w-4 h-4 text-[#00d4ff]" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">Zero Fees</div>
                          <div className="text-slate-400 text-sm">No deposit fees, maximum value transfer</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#00d4ff]/20 rounded-lg flex items-center justify-center">
                          <Shield className="w-4 h-4 text-[#00d4ff]" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">Bank Grade Security</div>
                          <div className="text-slate-400 text-sm">Blockchain-secured transactions</div>
                        </div>
                      </div>
                    </div>

                    <button 
                      className="w-full font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 border border-[#00d4ff]/20"
                      style={{ 
                        background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                        color: '#0f172a'
                      }}
                    >
                      Start Deposit Process
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How to Deposit Steps */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              <span style={{ 
                background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>How to Deposit</span>
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Follow these simple steps to fund your account and start earning
            </p>
          </div>

          {/* Connection Line */}
          <div className="relative">
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00d4ff]/20 via-[#00d4ff]/40 to-[#00d4ff]/20"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {depositSteps.map((step) => {
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

        {/* Security & Important Notes */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Security Features */}
          <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-[#00d4ff]/20 shadow-2xl p-8 hover:shadow-[#00d4ff]/10 hover:border-[#00d4ff]/40 transition-all duration-500">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                Bank-Grade <span style={{ 
                  background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Security</span>
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {securityFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-[#00d4ff]/5 border border-[#00d4ff]/20 rounded-lg p-4 hover:border-[#00d4ff]/40 transition-all duration-300 hover:scale-105 transform">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#00d4ff]/20 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-[#00d4ff]" />
                      </div>
                      <span className="text-white font-semibold">{feature.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 p-4 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-lg">
              <p className="text-[#00d4ff] text-sm font-medium text-center">
                Your funds are protected by institutional-grade security measures and insurance coverage
              </p>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-orange-400/30 shadow-2xl p-8 hover:shadow-orange-400/10 hover:border-orange-400/50 transition-all duration-500">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                Critical <span className="text-orange-400">Information</span>
              </h3>
            </div>

            <div className="space-y-4">
              <div className="bg-orange-400/5 border border-orange-400/20 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-300 text-sm">Only send BEP20 USDT to the generated address</span>
                </div>
              </div>
              <div className="bg-orange-400/5 border border-orange-400/20 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-300 text-sm">Sending other tokens may result in permanent loss</span>
                </div>
              </div>
              <div className="bg-orange-400/5 border border-orange-400/20 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-300 text-sm">Minimum deposit amount is $20 USDT</span>
                </div>
              </div>
              <div className="bg-orange-400/5 border border-orange-400/20 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-300 text-sm">Deposits processed after 1 network confirmation</span>
                </div>
              </div>
              <div className="bg-orange-400/5 border border-orange-400/20 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-300 text-sm">Contact support if delayed beyond 30 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-[#00d4ff]/20 shadow-2xl p-8 hover:shadow-[#00d4ff]/10 hover:border-[#00d4ff]/40 transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Help with <span style={{ 
                background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Deposits?</span>
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Our expert support team is available 24/7 to assist you with any deposit-related questions 
              or technical issues. Get instant help whenever you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 border border-[#00d4ff]/20"
                style={{ 
                  background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                  color: '#0f172a'
                }}
              >
                Contact Support
              </button>
              <button className="px-8 py-3 border-2 border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-slate-900 font-bold rounded-lg transition-all duration-300 hover:scale-105 transform">
                View FAQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentInfo;