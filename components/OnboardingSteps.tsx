import React from 'react';
import { UserPlus, CreditCard, MousePointer, TrendingUp, Folder, Rocket } from 'lucide-react';

const OnboardingSteps = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description: "Use your email to create an account and log into your dashboard.",
      category: "Account Setup"
    },
    {
      icon: CreditCard,
      title: "Pick a Plan",
      description: "Choose an investment plan that suits your budget.",
      category: "Plan Selection"
    },
    {
      icon: MousePointer,
      title: "Tap to Mine",
      description: "Engage daily by tapping the 'Mine' button every 24 hours to earn coins.",
      category: "Daily Activity"
    },
    {
      icon: TrendingUp,
      title: "Earn More",
      description: "Upgrade your plan or refer friends to climb up the star level and earn more.",
      category: "Growth Strategy"
    },
    {
      icon: Folder,
      title: "Withdraw",
      description: "All earnings and bonuses can be cashed out every 48 hours from your wallet.",
      category: "Cash Out"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-8" 
             style={{ background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl opacity-6" 
             style={{ background: 'radial-gradient(circle, #0099cc 0%, transparent 70%)' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            How to <span style={{ 
              background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Get Started</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Our step-by-step guide to getting started with FÔMOFI and begin your investment journey.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connection Line - Hidden on mobile, visible on larger screens */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00d4ff]/20 via-[#00d4ff]/40 to-[#00d4ff]/20"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative group">
                  {/* Step Number Circle */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] rounded-full flex items-center justify-center shadow-lg shadow-[#00d4ff]/25">
                      <span className="text-slate-900 font-bold text-sm">{index + 1}</span>
                    </div>
                  </div>

                  {/* Connection Dots for Mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-2 h-2 bg-[#00d4ff]/60 rounded-full"></div>
                    </div>
                  )}

                  {/* Card */}
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
                        STEP {index + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-[#00d4ff] text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300 flex-grow">
                      {step.description}
                    </p>

                    {/* Progress Indicator */}
                    <div className="mt-4 flex justify-center">
                      <div className="flex space-x-1">
                        {steps.map((_, stepIndex) => (
                          <div
                            key={stepIndex}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              stepIndex <= index 
                                ? 'bg-[#00d4ff]' 
                                : 'bg-slate-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00d4ff]/10 to-[#00d4ff]/20 border border-[#00d4ff]/30 rounded-lg px-6 py-3 hover:bg-gradient-to-r hover:from-[#00d4ff]/20 hover:to-[#00d4ff]/30 transition-all duration-300">
            <Rocket className="w-5 h-5 text-[#00d4ff]" />
            <span className="text-[#00d4ff] font-medium">
              Ready to start your journey? Follow these 5 simple steps!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingSteps;