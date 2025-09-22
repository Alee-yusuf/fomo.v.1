"use client";

import React from 'react';
import { CreditCard, Shield, Clock, DollarSign, Zap, Lock, Eye, AlertTriangle, QrCode } from 'lucide-react';

const PaymentInfo = () => {


  const paymentMethods = [
    {
      name: 'TRC20 USDT',
      description: 'Tether on TRON network - Lightning fast with ultra-low fees',
      network: 'TRON (TRC20)',
      minDeposit: 100,
      maxDeposit: 100000,
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
      description: 'Click "Deposit" in your dashboard to generate your unique TRC20 USDT address',
      icon: QrCode,
      category: 'Setup'
    },
    {
      step: 2,
      title: 'Send USDT',
      description: 'Transfer USDT from your wallet to the generated address using TRC20 network',
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
    <section className="bg-black py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-lime-400/10 border border-lime-400/30 rounded-full px-4 py-2 mb-4">
            <span className="text-lime-400 text-sm font-medium uppercase tracking-wide">
              Secure Payments
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            PAYMENT <span className="text-lime-400">INFORMATION</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-4">
            FAST, SECURE & RELIABLE DEPOSITS
          </p>
          <p className="text-gray-400 max-w-4xl mx-auto">
            We support TRC20 USDT deposits for lightning-fast, secure, and cost-effective transactions. 
            Start your investment journey with as little as $100 USDT.
          </p>
        </div>

        {/* Payment Method Showcase */}
        <div className="bg-gradient-to-r from-black via-lime-400/5 to-black border border-lime-400/30 rounded-2xl p-8 mb-16 hover:border-lime-400/50 transition-all duration-300">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/30 rounded-full px-4 py-2 mb-4">
              <CreditCard className="w-4 h-4 text-lime-400" />
              <span className="text-lime-400 text-sm font-medium uppercase tracking-wide">
                Supported Payment
              </span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-3">
              ACCEPT <span className="text-lime-400">TRC20 USDT ONLY</span>
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Experience the fastest and most secure way to fund your FOMOFI investment account
            </p>
          </div>

          {paymentMethods.map((method, index) => (
            <div key={index} className="max-w-4xl mx-auto">
              {/* Recommended Badge */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center px-4 py-2 bg-lime-400 text-black rounded-full text-sm font-bold">
                  <Shield className="w-4 h-4 mr-2" />
                  RECOMMENDED PAYMENT METHOD
                </div>
              </div>

              {/* Method Card */}
              <div className="bg-black/50 border border-lime-400/20 rounded-2xl p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left Side - Method Info */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-lime-400/20 rounded-xl flex items-center justify-center">
                        <DollarSign className="w-8 h-8 text-lime-400" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-lime-400">{method.name}</h4>
                        <p className="text-gray-300">{method.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-lime-400/5 border border-lime-400/20 rounded-lg p-4">
                        <div className="text-gray-400 text-sm mb-1">Network</div>
                        <div className="text-lime-400 font-bold">{method.network}</div>
                      </div>
                      <div className="bg-lime-400/5 border border-lime-400/20 rounded-lg p-4">
                        <div className="text-gray-400 text-sm mb-1">Processing</div>
                        <div className="text-lime-400 font-bold">{method.processingTime}</div>
                      </div>
                      <div className="bg-lime-400/5 border border-lime-400/20 rounded-lg p-4">
                        <div className="text-gray-400 text-sm mb-1">Min Deposit</div>
                        <div className="text-white font-bold">${method.minDeposit} USDT</div>
                      </div>
                      <div className="bg-lime-400/5 border border-lime-400/20 rounded-lg p-4">
                        <div className="text-gray-400 text-sm mb-1">Max Deposit</div>
                        <div className="text-white font-bold">${method.maxDeposit.toLocaleString()} USDT</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Features */}
                  <div>
                    <h5 className="text-white font-bold text-lg mb-4">Why Choose TRC20 USDT?</h5>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-lime-400/20 rounded-lg flex items-center justify-center">
                          <Zap className="w-4 h-4 text-lime-400" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">Ultra Fast</div>
                          <div className="text-gray-400 text-sm">Instant transactions with 1-3 minute processing</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-lime-400/20 rounded-lg flex items-center justify-center">
                          <DollarSign className="w-4 h-4 text-lime-400" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">Zero Fees</div>
                          <div className="text-gray-400 text-sm">No deposit fees, maximum value transfer</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-lime-400/20 rounded-lg flex items-center justify-center">
                          <Shield className="w-4 h-4 text-lime-400" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">Bank Grade Security</div>
                          <div className="text-gray-400 text-sm">Blockchain-secured transactions</div>
                        </div>
                      </div>
                    </div>

                    <button className="w-full px-6 py-3 bg-lime-400 hover:bg-lime-300 text-black font-bold rounded-lg transition-all duration-300 hover:scale-105 transform">
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
              HOW TO <span className="text-lime-400">DEPOSIT</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Follow these simple steps to fund your account and start earning
            </p>
          </div>

          {/* Connection Line */}
          <div className="relative">
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-lime-400/20 via-lime-400/40 to-lime-400/20"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {depositSteps.map((step) => {
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

        {/* Security & Important Notes */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Security Features */}
          <div className="bg-black border border-lime-400/30 rounded-2xl p-8 hover:border-lime-400/50 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/30 rounded-full px-4 py-2 mb-4">
                <Shield className="w-4 h-4 text-lime-400" />
                <span className="text-lime-400 text-sm font-medium uppercase tracking-wide">
                  Security Features
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                BANK-GRADE <span className="text-lime-400">SECURITY</span>
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {securityFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-lime-400/5 border border-lime-400/20 rounded-lg p-4 hover:border-lime-400/40 transition-all duration-300 hover:scale-105 transform">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-lime-400/20 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-lime-400" />
                      </div>
                      <span className="text-white font-semibold">{feature.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 p-4 bg-lime-400/10 border border-lime-400/30 rounded-lg">
              <p className="text-lime-400 text-sm font-medium text-center">
                Your funds are protected by institutional-grade security measures and insurance coverage
              </p>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-black border border-orange-400/30 rounded-2xl p-8 hover:border-orange-400/50 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-orange-400/10 border border-orange-400/30 rounded-full px-4 py-2 mb-4">
                <AlertTriangle className="w-4 h-4 text-orange-400" />
                <span className="text-orange-400 text-sm font-medium uppercase tracking-wide">
                  Important Notes
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                CRITICAL <span className="text-orange-400">INFORMATION</span>
              </h3>
            </div>

            <div className="space-y-4">
              <div className="bg-orange-400/5 border border-orange-400/20 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm">Only send TRC20 USDT to the generated address</span>
                </div>
              </div>
              <div className="bg-orange-400/5 border border-orange-400/20 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm">Sending other tokens may result in permanent loss</span>
                </div>
              </div>
              <div className="bg-orange-400/5 border border-orange-400/20 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm">Minimum deposit amount is $100 USDT</span>
                </div>
              </div>
              <div className="bg-orange-400/5 border border-orange-400/20 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm">Deposits processed after 1 network confirmation</span>
                </div>
              </div>
              <div className="bg-orange-400/5 border border-orange-400/20 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm">Contact support if delayed beyond 30 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-lime-400/10 to-lime-400/20 border border-lime-400/30 rounded-2xl p-8">
            <div className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/30 rounded-full px-4 py-2 mb-4">
              <CreditCard className="w-4 h-4 text-lime-400" />
              <span className="text-lime-400 text-sm font-medium uppercase tracking-wide">
                24/7 Support
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              NEED HELP WITH <span className="text-lime-400">DEPOSITS?</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our expert support team is available 24/7 to assist you with any deposit-related questions 
              or technical issues. Get instant help whenever you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-lime-400 hover:bg-lime-300 text-black font-bold rounded-lg transition-all duration-300 hover:scale-105 transform">
                Contact Support
              </button>
              <button className="px-8 py-3 border border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black font-bold rounded-lg transition-all duration-300 hover:scale-105 transform">
                View FAQ
              </button>
            </div>
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

export default PaymentInfo;