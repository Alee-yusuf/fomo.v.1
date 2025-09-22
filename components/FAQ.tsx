"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

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

  const categories = Array.from(new Set(faqItems.map(item => item.category)));

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <section className="bg-black py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-lime-400/10 border border-lime-400/30 rounded-full px-4 py-2 mb-4">
            <span className="text-lime-400 text-sm font-medium uppercase tracking-wide">
              Help Center
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            FREQUENTLY ASKED <span className="text-lime-400">QUESTIONS</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-4">
            GET INSTANT ANSWERS TO YOUR QUESTIONS
          </p>
          <p className="text-gray-400 max-w-4xl mx-auto">
            Find answers to common questions about our investment platform, security measures, 
            and how to get started with FOMOFI.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-lime-400/10 border border-lime-400/30 text-lime-400 rounded-full text-sm font-medium hover:bg-lime-400/20 hover:border-lime-400/50 transition-all duration-300"
                onClick={() => {
                  const categoryItems = faqItems
                    .filter(item => item.category === category)
                    .map(item => item.id);
                  setOpenItems(categoryItems);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="bg-black border border-lime-400/20 rounded-xl overflow-hidden transition-all duration-300 hover:border-lime-400/40 hover:shadow-lg hover:shadow-lime-400/5"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-lime-400/50 focus:ring-inset group"
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItems.includes(item.id)}
                aria-controls={`faq-answer-${item.id}`}
              >
                <div className="flex-1">
                  <div className="inline-block bg-lime-400/10 border border-lime-400/30 rounded-full px-3 py-1 text-xs font-medium text-lime-400 uppercase tracking-wide mb-3">
                    {item.category}
                  </div>
                  <div className="text-lg font-semibold text-white group-hover:text-lime-400 transition-colors duration-300">
                    {item.question}
                  </div>
                </div>
                <div className="ml-6 flex-shrink-0">
                  <div className="w-10 h-10 bg-lime-400/20 rounded-lg flex items-center justify-center group-hover:bg-lime-400/30 transition-all duration-300">
                    {openItems.includes(item.id) ? (
                      <ChevronUp className="w-5 h-5 text-lime-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-lime-400" />
                    )}
                  </div>
                </div>
              </button>
              
              {openItems.includes(item.id) && (
                <div
                  id={`faq-answer-${item.id}`}
                  className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-lime-400/10"
                >
                  <div className="pt-4">
                    {item.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-lime-400/10 to-lime-400/20 border border-lime-400/30 rounded-2xl p-8">
            <div className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/30 rounded-full px-4 py-2 mb-4">
              <MessageCircle className="w-4 h-4 text-lime-400" />
              <span className="text-lime-400 text-sm font-medium uppercase tracking-wide">
                24/7 Support
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              STILL HAVE <span className="text-lime-400">QUESTIONS?</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Can&apos;t find the answer you&apos;re looking for? Our expert customer support 
              team is here to help you 24/7 with personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-lime-400 hover:bg-lime-300 text-black font-bold rounded-lg transition-all duration-300 hover:scale-105 transform">
                Contact Support
              </button>
              <button className="px-8 py-3 border border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black font-bold rounded-lg transition-all duration-300 hover:scale-105 transform">
                Browse Help Center
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-lime-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/6 w-40 h-40 bg-lime-400/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default FAQ;