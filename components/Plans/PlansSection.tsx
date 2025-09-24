'use client';

import { useState } from 'react';
import PlanCard, { Plan } from './PlanCard';
import { FiCircle, FiStar, FiHexagon } from 'react-icons/fi';

interface PlanCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  plans: Plan[];
}

const PlansSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('silver');

  // TODO: Replace with API data
  const [planCategories] = useState<PlanCategory[]>([
    {
      id: 'silver',
      name: 'Silver Plan',
      description: 'Start your investment journey with our Silver coin plans',
      icon: 'silver',
      color: 'silver',
      plans: [
        {
          id: 'silver-starter',
          name: 'Silver Starter',
          description: 'Perfect entry point for new investors',
          minInvestment: 20,
          maxInvestment: 20,
          apy: 0, // Will show coins instead
          duration: 30,
          features: [
            'Duration 30 days',
            '1 Silver coin daily',
            'Total 30 Silver coins'
          ],
          coinType: 'Silver',
          dailyCoins: 1,
          totalCoins: 30
        },
        {
          id: 'silver-basic',
          name: 'Silver Basic',
          description: 'Extended silver investment plan',
          minInvestment: 50,
          maxInvestment: 50,
          apy: 0,
          duration: 90,
          features: [
            'Duration 90 days',
            '1 Silver coin daily',
            'Total 90 Silver coins'
          ],
          coinType: 'Silver',
          dailyCoins: 1,
          totalCoins: 90
        },
        {
          id: 'silver-plus',
          name: 'Silver Plus',
          description: 'Enhanced silver plan with double rewards',
          minInvestment: 100,
          maxInvestment: 100,
          apy: 0,
          duration: 100,
          features: [
            'Duration 100 days',
            '2 Silver coins daily',
            'Total 200 Silver coins'
          ],
          coinType: 'Silver',
          dailyCoins: 2,
          totalCoins: 200
        },
        {
          id: 'silver-pro',
          name: 'Silver Pro',
          description: 'Premium silver investment option',
          minInvestment: 200,
          maxInvestment: 200,
          apy: 0,
          duration: 120,
          features: [
            'Duration 120 days',
            '4 Silver coins daily',
            'Total 480 Silver coins'
          ],
          coinType: 'Silver',
          dailyCoins: 4,
          totalCoins: 480,
          isPopular: true
        }
      ]
    },
    {
      id: 'gold',
      name: 'Gold Plan',
      description: 'Upgrade to Gold coins for better returns',
      icon: 'gold',
      color: 'gold',
      plans: [
        {
          id: 'gold-basic',
          name: 'Gold Basic',
          description: 'Start earning Gold coins',
          minInvestment: 500,
          maxInvestment: 500,
          apy: 0,
          duration: 90,
          features: [
            'Duration 90 days',
            '1 Gold coin daily',
            'Total 90 Gold coins'
          ],
          coinType: 'Gold',
          dailyCoins: 1,
          totalCoins: 90
        },
        {
          id: 'gold-plus',
          name: 'Gold Plus',
          description: 'Double Gold coin rewards',
          minInvestment: 1000,
          maxInvestment: 1000,
          apy: 0,
          duration: 100,
          features: [
            'Duration 100 days',
            '2 Gold coins daily',
            'Total 200 Gold coins'
          ],
          coinType: 'Gold',
          dailyCoins: 2,
          totalCoins: 200,
          isRecommended: true
        },
        {
          id: 'gold-pro',
          name: 'Gold Pro',
          description: 'Maximum Gold coin earnings',
          minInvestment: 2000,
          maxInvestment: 2000,
          apy: 0,
          duration: 120,
          features: [
            'Duration 120 days',
            '4 Gold coins daily',
            'Total 480 Gold coins'
          ],
          coinType: 'Gold',
          dailyCoins: 4,
          totalCoins: 480
        }
      ]
    },
    {
      id: 'diamond',
      name: 'Diamond Plan',
      description: 'Elite Diamond coins for serious investors',
      icon: 'diamond',
      color: 'diamond',
      plans: [
        {
          id: 'diamond-basic',
          name: 'Diamond Basic',
          description: 'Enter the Diamond tier',
          minInvestment: 5000,
          maxInvestment: 5000,
          apy: 0,
          duration: 90,
          features: [
            'Duration 90 days',
            '1 Diamond coin daily',
            'Total 90 Diamond coins'
          ],
          coinType: 'Diamond',
          dailyCoins: 1,
          totalCoins: 90
        },
        {
          id: 'diamond-plus',
          name: 'Diamond Plus',
          description: 'Enhanced Diamond rewards',
          minInvestment: 10000,
          maxInvestment: 10000,
          apy: 0,
          duration: 100,
          features: [
            'Duration 100 days',
            '2 Diamond coins daily',
            'Total 200 Diamond coins'
          ],
          coinType: 'Diamond',
          dailyCoins: 2,
          totalCoins: 200
        },
        {
          id: 'diamond-pro',
          name: 'Diamond Pro',
          description: 'Ultimate Diamond investment',
          minInvestment: 20000,
          maxInvestment: 20000,
          apy: 0,
          duration: 120,
          features: [
            'Duration 120 days',
            '4 Diamond coins daily',
            'Total 480 Diamond coins'
          ],
          coinType: 'Diamond',
          dailyCoins: 4,
          totalCoins: 480,
          isPopular: true
        }
      ]
    }
  ]);

  const getCurrentPlans = (): Plan[] => {
    const category = planCategories.find(cat => cat.id === activeTab);
    return category?.plans || [];
  };

  const getCurrentCategory = (): PlanCategory | undefined => {
    return planCategories.find(cat => cat.id === activeTab);
  };

  const getTabColors = (categoryId: string, isActive: boolean) => {
    const colors = {
      silver: isActive 
        ? 'bg-gradient-to-r from-slate-400 to-slate-500 text-slate-900 shadow-lg' 
        : 'text-slate-300 hover:text-white hover:bg-slate-700/50',
      gold: isActive 
        ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 shadow-lg' 
        : 'text-yellow-400 hover:text-yellow-300 hover:bg-yellow-500/10',
      diamond: isActive 
        ? 'bg-gradient-to-r from-[#00d4ff] to-[#0099cc] text-slate-900 shadow-lg shadow-[#00d4ff]/25' 
        : 'text-[#00d4ff] hover:text-white hover:bg-[#00d4ff]/10'
    };
    return colors[categoryId as keyof typeof colors] || colors.silver;
  };

  const getIconComponent = (iconType: string) => {
    switch (iconType) {
      case 'silver':
        return <FiCircle className="w-5 h-5" />;
      case 'gold':
        return <FiStar className="w-5 h-5" />;
      case 'diamond':
        return <FiHexagon className="w-5 h-5" />;
      default:
        return <FiCircle className="w-5 h-5" />;
    }
  };

  const handlePlanSelect = (planId: string) => {
    // TODO: Implement plan selection logic
    console.log('Selected plan:', planId);
    // Navigate to investment form or open modal
  };

  return (
    <section id="plans" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
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
            Investment <span style={{ 
              background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Plans</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Our diverse multi-tiered investment plans give you the freedom to choose exactly how you invest and earn.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="relative rounded-2xl p-1.5 border border-[#00d4ff]/20 bg-slate-800/40 backdrop-blur-sm">
            <div className="flex space-x-2 relative">
              {/* Sliding Background Indicator */}
              <div 
                className="absolute top-0 bottom-0 rounded-xl transition-all duration-500 ease-out"
                style={{
                  left: `${planCategories.findIndex(cat => cat.id === activeTab) * (100 / planCategories.length)}%`,
                  width: `${100 / planCategories.length}%`,
                  background: activeTab === 'silver' 
                    ? 'linear-gradient(135deg, #94a3b8 0%, #64748b 100%)'
                    : activeTab === 'gold'
                    ? 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)'
                    : 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                  boxShadow: activeTab === 'diamond' ? '0 0 20px rgba(0, 212, 255, 0.3)' : 'none'
                }}
              />
              
              {planCategories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`relative z-10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 ${
                    activeTab === category.id 
                      ? 'text-slate-900' 
                      : getTabColors(category.id, false)
                  }`}
                >
                  {getIconComponent(category.icon)}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>



        {/* Plans Grid - Centered */}
        <div className="w-full px-4">
          <div className={`grid gap-6 max-w-7xl mx-auto ${
            activeTab === 'silver' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' 
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}>
            {getCurrentPlans().map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                onSelect={handlePlanSelect}
              />
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default PlansSection;