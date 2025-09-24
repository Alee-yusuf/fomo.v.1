"use client";

import React, { useState } from 'react';
import { Mail, Check, AlertCircle, TrendingUp, Gift, BookOpen, Users, Send } from 'lucide-react';

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
    } catch {
      setError('Failed to subscribe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-8" 
               style={{ background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)' }}></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl opacity-6" 
               style={{ background: 'radial-gradient(circle, #0099cc 0%, transparent 70%)' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="bg-slate-900/95 backdrop-blur-xl rounded-3xl border border-[#00d4ff]/20 shadow-2xl p-8 md:p-12 hover:shadow-[#00d4ff]/10 hover:border-[#00d4ff]/40 transition-all duration-500">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#00d4ff]/25" style={{ 
              background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)'
            }}>
              <Check className="w-10 h-10 text-slate-900" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">
              Successfully <span style={{ 
                background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Subscribed!</span>
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed text-lg">
              Thank you for joining the FÔMOFI community! You&apos;ll receive exclusive investment insights, 
              market updates, and premium offers directly in your inbox.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="px-8 py-3 border border-[#00d4ff]/30 text-[#00d4ff] hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/50 font-semibold rounded-lg transition-all duration-300 hover:scale-105 transform"
            >
              Subscribe Another Email
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-8" 
             style={{ background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl opacity-6" 
             style={{ background: 'radial-gradient(circle, #0099cc 0%, transparent 70%)' }}></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 rounded-full blur-3xl opacity-4" 
             style={{ background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="bg-slate-900/95 backdrop-blur-xl rounded-3xl border border-[#00d4ff]/20 shadow-2xl p-8 md:p-12 hover:shadow-[#00d4ff]/10 hover:border-[#00d4ff]/40 transition-all duration-500">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Join The <span style={{ 
                background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>FÔMOFI Insider</span> List
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-4 leading-relaxed">
              Get exclusive investment insights, market analysis, and early access to premium features 
              delivered straight to your inbox.
            </p>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Join thousands of smart investors who trust FÔMOFI for their financial growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">What You&apos;ll Receive:</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#00d4ff]/20 to-[#00d4ff]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-[#00d4ff]/30 group-hover:to-[#00d4ff]/20 transition-all duration-300">
                    <TrendingUp className="w-7 h-7 text-[#00d4ff]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">Weekly Market Insights</h4>
                    <p className="text-slate-400 leading-relaxed">
                      Professional analysis of market trends and investment opportunities from our expert team
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#00d4ff]/20 to-[#00d4ff]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-[#00d4ff]/30 group-hover:to-[#00d4ff]/20 transition-all duration-300">
                    <Gift className="w-7 h-7 text-[#00d4ff]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">Exclusive Offers</h4>
                    <p className="text-slate-400 leading-relaxed">
                      Special promotions, bonus rewards, and early access to new investment plans
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#00d4ff]/20 to-[#00d4ff]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-[#00d4ff]/30 group-hover:to-[#00d4ff]/20 transition-all duration-300">
                    <BookOpen className="w-7 h-7 text-[#00d4ff]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">Educational Resources</h4>
                    <p className="text-slate-400 leading-relaxed">
                      Investment strategies, tips, and educational content to maximize your returns
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="mt-10 pt-8 border-t border-[#00d4ff]/20">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div
                        key={i}
                        className="w-12 h-12 bg-gradient-to-br from-[#00d4ff]/30 to-[#00d4ff]/20 rounded-full border-2 border-slate-900 flex items-center justify-center shadow-lg"
                      >
                        <Users className="w-6 h-6 text-[#00d4ff]" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Join 10,000+ Smart Investors</p>
                    <p className="text-slate-400">Who trust FÔMOFI&apos;s investment platform</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subscription Form */}
            <div>
              <div className="bg-slate-800/60 border border-[#00d4ff]/20 rounded-2xl p-8 hover:border-[#00d4ff]/40 transition-all duration-300">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#00d4ff]/20 to-[#00d4ff]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <Mail className="w-10 h-10 text-[#00d4ff]" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Get <span style={{ 
                      background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>Started Today</span>
                  </h3>
                </div>

                <div className="space-y-6">
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
                      className={`w-full px-6 py-4 bg-slate-900/80 border rounded-xl focus:ring-2 focus:ring-[#00d4ff]/50 focus:border-[#00d4ff] transition-all duration-300 text-white placeholder-slate-400 text-lg ${
                        emailError ? 'border-red-500' : 'border-[#00d4ff]/30'
                      }`}
                    />
                    {emailError && (
                      <p className="mt-3 text-sm text-red-400 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        {emailError}
                      </p>
                    )}
                  </div>

                  {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                      <p className="text-sm text-red-400 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        {error}
                      </p>
                    </div>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="w-full px-6 py-4 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
                    style={{ 
                      background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                      color: '#0f172a'
                    }}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                        Subscribing...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Subscribe to Newsletter
                      </>
                    )}
                  </button>

                  {/* Privacy Notice */}
                  <p className="text-xs text-slate-500 text-center leading-relaxed">
                    By subscribing, you agree to our{' '}
                    <a href="#" className="text-[#00d4ff] hover:underline">
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
    </section>
  );
};

export default NewsletterSubscribe;