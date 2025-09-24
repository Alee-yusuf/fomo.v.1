"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQ = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: '1',
      category: 'Getting Started',
      question: 'How do I create an account and start investing?',
      answer: 'Creating an account is simple. Click "Sign Up", provide your email and basic information, complete KYC verification, and you can start investing within minutes. The minimum investment is $100 USDT.'
    },
    {
      id: '2',
      category: 'Getting Started',
      question: 'What is the minimum investment amount?',
      answer: 'The minimum investment amount is $100 USDT for our Starter Plan. This makes our platform accessible to investors of all levels, from beginners to experienced traders.'
    },
    {
      id: '3',
      category: 'Payments',
      question: 'What payment methods do you accept?',
      answer: 'We currently accept TRC20 USDT deposits. This provides fast, secure, and low-cost transactions on the TRON network. Deposits are processed within 1-3 minutes after network confirmation.'
    },
    {
      id: '4',
      category: 'Payments',
      question: 'How long do deposits and withdrawals take?',
      answer: 'Deposits are processed within 1-3 minutes after 1 network confirmation. Withdrawals are processed within 24 hours during business days, and within 48 hours on weekends.'
    },
    {
      id: '5',
      category: 'Returns',
      question: 'How are returns calculated and distributed?',
      answer: 'Returns are calculated based on your chosen investment plan and are distributed daily to your account. You can withdraw your profits anytime or reinvest them to compound your returns.'
    },
    {
      id: '6',
      category: 'Returns',
      question: 'Are the advertised returns guaranteed?',
      answer: 'While we strive to meet our target returns, all investments carry risk and returns are not guaranteed. Our historical performance shows consistent results, but past performance does not guarantee future results.'
    },
    {
      id: '7',
      category: 'Security',
      question: 'How do you protect my funds and personal information?',
      answer: 'We use bank-level security including cold storage for funds, multi-signature wallets, 2FA authentication, and SSL encryption. Your personal data is protected according to international privacy standards.'
    },
    {
      id: '8',
      category: 'Security',
      question: 'Is the platform regulated and compliant?',
      answer: 'Yes, we operate in compliance with international financial regulations and maintain proper licensing. We also undergo regular security audits and maintain insurance coverage for user funds.'
    },
    {
      id: '9',
      category: 'Referrals',
      question: 'How does the referral program work?',
      answer: 'Our referral program offers up to 20% commission on your referrals&apos; investments. The more people you refer, the higher your commission rate becomes. Commissions are paid daily to your account.'
    },
    {
      id: '10',
      category: 'Support',
      question: 'How can I contact customer support?',
      answer: 'Our customer support team is available 24/7 via live chat, email, and phone. Premium plan members get priority support with dedicated account managers.'
    }
  ];



  const toggleItem = (itemId: string) => {
    setOpenItem(prev => prev === itemId ? null : itemId);
  };



  return (
    <section id="faq" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-8" 
             style={{ background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl opacity-6" 
             style={{ background: 'radial-gradient(circle, #0099cc 0%, transparent 70%)' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Frequently Asked <span style={{ 
              background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Questions</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-6 leading-relaxed">
            Everything you need to know about FÔMOFI investment platform, security, and getting started
          </p>
          <p className="text-slate-400 max-w-3xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Our support team is available 24/7 to help you succeed.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6 mb-20">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-slate-900/95 backdrop-blur-xl rounded-3xl border border-[#00d4ff]/20 shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-[#00d4ff]/20 hover:border-[#00d4ff]/40 group hover:scale-[1.02] transform"
            >
              <button
                className="w-full px-8 py-8 text-left flex items-start justify-between focus:outline-none focus:ring-2 focus:ring-[#00d4ff]/50 focus:ring-inset"
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItem === item.id}
                aria-controls={`faq-answer-${item.id}`}
              >
                <div className="flex-1 pr-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ 
                      background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                      color: '#0f172a'
                    }}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="inline-block bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full px-4 py-1 text-xs font-medium text-[#00d4ff] uppercase tracking-wide">
                      {item.category}
                    </div>
                  </div>
                  <div className="text-xl font-bold text-white group-hover:text-[#00d4ff] transition-colors duration-300 leading-tight">
                    {item.question}
                  </div>
                </div>
                <div className="flex-shrink-0 mt-2">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#00d4ff]/20 to-[#00d4ff]/10 rounded-2xl flex items-center justify-center group-hover:from-[#00d4ff]/30 group-hover:to-[#00d4ff]/20 transition-all duration-300 shadow-inner">
                    {openItem === item.id ? (
                      <ChevronUp className="w-6 h-6 text-[#00d4ff] group-hover:scale-110 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-[#00d4ff] group-hover:scale-110 transition-transform duration-300" />
                    )}
                  </div>
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openItem === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div
                  id={`faq-answer-${item.id}`}
                  className="px-8 pb-8"
                >
                  <div className="border-t border-[#00d4ff]/10 pt-6">
                    <div className="bg-gradient-to-r from-[#00d4ff]/5 to-transparent rounded-2xl p-6 border-l-4 border-[#00d4ff]/30 transform transition-all duration-300">
                      <p className="text-slate-300 leading-relaxed text-lg">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="text-center">
          <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-[#00d4ff]/20 shadow-2xl p-8 hover:shadow-[#00d4ff]/10 hover:border-[#00d4ff]/40 transition-all duration-500">
            <h3 className="text-3xl font-bold text-white mb-4">
              Still Have <span style={{ 
                background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Questions?</span>
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Can&apos;t find the answer you&apos;re looking for? Our expert customer support 
              team is here to help you 24/7 with personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-3 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform flex items-center gap-2 justify-center"
                style={{ 
                  background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                  color: '#0f172a'
                }}
              >
                <MessageCircle className="w-5 h-5" />
                Contact Support
              </button>
              <button className="px-8 py-3 border border-[#00d4ff]/30 text-[#00d4ff] hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/50 font-semibold rounded-lg transition-all duration-300 hover:scale-105 transform flex items-center gap-2 justify-center">
                <HelpCircle className="w-5 h-5" />
                Browse Help Center
              </button>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default FAQ;