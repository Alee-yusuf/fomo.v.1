import React from 'react';
import { Download, Gift, User, Shield, TrendingUp, Users } from 'lucide-react';

const CoreFeatures = () => {
  const features = [
    {
      icon: Download,
      title: "Tap-to-Earn",
      description: "Simply tap the mine button every 24 hours to earn your digital coins. Easy and consistent rewards for daily activity."
    },
    {
      icon: Gift,
      title: "Real Rewards",
      description: "Get phones, laptops, smartwatches or cars just by being active. Convert your coins into tangible rewards."
    },
    {
      icon: User,
      title: "Expert-backed",
      description: "All earnings come from crypto & forex trading done by expert traders. Your rewards are backed by real market gains."
    },
    {
      icon: Shield,
      title: "Safe & Reliable",
      description: "Secure and transparent cloud-based platform with no hidden fees or shady schemes."
    },
    {
      icon: TrendingUp,
      title: "Stacked Earnings",
      description: "Refer friends to enjoy multi level referral rewards, or upgrade your plan for higher returns."
    },
    {
      icon: Users,
      title: "Organic Growth",
      description: "Earn coins steadily over time, with bonuses for long-term holding and smart investment strategies."
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
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
            Core <span style={{ 
              background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Features</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Our core features that make FÔMOFI unique and powerful for your investment journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-[#00d4ff]/20 shadow-2xl p-6 hover:shadow-[#00d4ff]/10 hover:scale-105 hover:border-[#00d4ff]/40 transition-all duration-500 group"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-[#00d4ff]/25 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-slate-900" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[#00d4ff] text-xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;