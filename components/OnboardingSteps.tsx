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
    <section className="bg-black py-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            HOW TO <span className="text-lime-400">GET STARTED</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            OUR STEP-BY-STEP GUIDE TO GETTING STARTED WITH FOMOFI.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connection Line - Hidden on mobile, visible on larger screens */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-lime-400/20 via-lime-400/40 to-lime-400/20"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative group">
                  {/* Step Number Circle */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-black font-bold text-sm">{index + 1}</span>
                    </div>
                  </div>

                  {/* Connection Dots for Mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-2 h-2 bg-lime-400/60 rounded-full"></div>
                    </div>
                  )}

                  {/* Card */}
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
                        STEP {index + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lime-400 text-xl font-bold mb-3 group-hover:text-lime-300 transition-colors duration-300">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 flex-grow">
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
                                ? 'bg-lime-400' 
                                : 'bg-gray-600'
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-lime-400/10 to-lime-400/20 border border-lime-400/30 rounded-lg px-6 py-3">
            <Rocket className="w-5 h-5 text-lime-400" />
            <span className="text-lime-400 font-medium">
              Ready to start your journey? Follow these 5 simple steps!
            </span>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-lime-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-lime-400/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default OnboardingSteps;