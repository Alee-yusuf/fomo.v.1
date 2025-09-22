"use client";

import React, { useState } from 'react';
import { Mail, Check, AlertCircle, TrendingUp, Gift, BookOpen, Users } from 'lucide-react';

interface NewsletterForm {
  email: string;
}

const NewsletterSubscribe = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!email) return 'Email is required';
    if (!emailRegex.test(email)) return 'Invalid email address';
    return null;
  };

  const handleSubmit = async () => {
    const emailValidation = validateEmail(email);
    if (emailValidation) {
      setEmailError(emailValidation);
      return;
    }
    
    setEmailError(null);
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Newsletter subscription:', { email });
      setIsSubmitted(true);
      setEmail('');
    } catch (err) {
      setError('Failed to subscribe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="bg-black py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-lime-400/10 to-lime-400/20 border border-lime-400/30 rounded-2xl p-8 md:p-12">
            <div className="w-20 h-20 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-black" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              SUCCESSFULLY <span className="text-lime-400">SUBSCRIBED!</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Thank you for joining the FOMOFI community! You'll receive exclusive investment insights, 
              market updates, and premium offers directly in your inbox.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="px-8 py-3 border border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black font-bold rounded-lg transition-all duration-300 hover:scale-105 transform"
            >
              Subscribe Another Email
            </button>
          </div>
        </div>
        
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-lime-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/6 w-40 h-40 bg-lime-400/5 rounded-full blur-3xl"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-r from-black via-lime-400/5 to-black border border-lime-400/30 rounded-2xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-block bg-lime-400/10 border border-lime-400/30 rounded-full px-4 py-2 mb-4">
              <span className="text-lime-400 text-sm font-medium uppercase tracking-wide">
                Stay Connected
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              JOIN THE <span className="text-lime-400">FOMOFI INSIDER</span> LIST
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Get exclusive investment insights, market analysis, and early access to premium features 
              delivered straight to your inbox.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Benefits */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">What You'll Receive:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-lime-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-lime-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Weekly Market Insights</h4>
                    <p className="text-gray-400 text-sm">
                      Professional analysis of market trends and investment opportunities from our expert team
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-lime-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Gift className="w-6 h-6 text-lime-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Exclusive Offers</h4>
                    <p className="text-gray-400 text-sm">
                      Special promotions, bonus rewards, and early access to new investment plans
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-lime-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-lime-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Educational Resources</h4>
                    <p className="text-gray-400 text-sm">
                      Investment strategies, tips, and educational content to maximize your returns
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="mt-8 pt-6 border-t border-lime-400/20">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 bg-lime-400/30 rounded-full border-2 border-black flex items-center justify-center"
                      >
                        <Users className="w-5 h-5 text-lime-400" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-white font-semibold">Join 10,000+ Smart Investors</p>
                    <p className="text-gray-400 text-sm">Who trust FOMOFI for market insights</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subscription Form */}
            <div>
              <div className="bg-black/50 border border-lime-400/30 rounded-xl p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-lime-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-lime-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    GET <span className="text-lime-400">STARTED TODAY</span>
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailError) setEmailError(null);
                      }}
                      onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                      className={`w-full px-4 py-4 bg-black border rounded-lg focus:ring-2 focus:ring-lime-400/50 focus:border-lime-400 transition-all duration-300 text-white placeholder-gray-400 ${
                        emailError ? 'border-red-500' : 'border-lime-400/30'
                      }`}
                    />
                    {emailError && (
                      <p className="mt-2 text-sm text-red-400 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {emailError}
                      </p>
                    )}
                  </div>

                  {error && (
                    <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                      <p className="text-sm text-red-400 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        {error}
                      </p>
                    </div>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="w-full px-6 py-4 bg-lime-400 hover:bg-lime-300 text-black font-bold rounded-lg transition-all duration-300 hover:scale-105 transform disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                        Subscribing...
                      </div>
                    ) : (
                      'Subscribe to Newsletter'
                    )}
                  </button>

                  {/* Privacy Notice */}
                  <p className="text-xs text-gray-500 text-center leading-relaxed">
                    By subscribing, you agree to our{' '}
                    <a href="#" className="text-lime-400 hover:underline">
                      Privacy Policy
                    </a>{' '}
                    and consent to receive marketing emails. Unsubscribe anytime with one click.
                  </p>
                </div>
              </div>
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

export default NewsletterSubscribe;