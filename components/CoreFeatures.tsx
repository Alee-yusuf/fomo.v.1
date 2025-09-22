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
    <section className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            CORE <span className="text-lime-400">FEATURES</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            OUR CORE FEATURES THAT MAKE FOMOFI UNIQUE.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-black border border-lime-400/30 rounded-lg p-6 hover:border-lime-400/50 transition-colors duration-300"
              >
                {/* Icon */}
                <div className="mb-4">
                  <IconComponent className="w-8 h-8 text-lime-400" />
                </div>

                {/* Title */}
                <h3 className="text-lime-400 text-xl font-semibold mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
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