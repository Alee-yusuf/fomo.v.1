// TODO: Replace sample plans with actual investment plans from API
// TODO: Integrate with payment system

'use client';

import { useState } from 'react';
import PlanCard, { Plan } from './PlanCard';

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
        ? 'bg-gray-400 text-black' 
        : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800',
      gold: isActive 
        ? 'bg-yellow-400 text-black' 
        : 'text-yellow-400 hover:text-yellow-300 hover:bg-yellow-900/20',
      diamond: isActive 
        ? 'bg-blue-400 text-white' 
        : 'text-blue-400 hover:text-blue-300 hover:bg-blue-900/20'
    };
    return colors[categoryId as keyof typeof colors] || colors.silver;
  };

  const getIconComponent = (iconType: string) => {
    switch (iconType) {
      case 'silver':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
          </svg>
        );
      case 'gold':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        );
      case 'diamond':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 2l2 6h8l2-6h-12zm-2 8l6 12 6-12H4zm1.5-2h13L17 6H7l-1.5 2z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  const handlePlanSelect = (planId: string) => {
    // TODO: Implement plan selection logic
    console.log('Selected plan:', planId);
    // Navigate to investment form or open modal
  };

  return (
    <section id="plans" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Investment Plans
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our diverse multi-tiered investment plans give you the freedom to choose exactly how you invest and earn.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="rounded-full p-1 border border-gray-700" style={{backgroundColor: '#1a1a1a'}}>
            <div className="flex space-x-1">
              {planCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center space-x-2 ${
                    getTabColors(category.id, activeTab === category.id)
                  }`}
                >
                  {getIconComponent(category.icon)}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="text-center mb-8">
          {getCurrentCategory() && (
            <>
              <div className="flex items-center justify-center space-x-3 mb-2">
                <div className={`${getCurrentCategory()?.id === 'silver' ? 'text-gray-400' : getCurrentCategory()?.id === 'gold' ? 'text-yellow-400' : 'text-blue-400'}`}>
                  {getIconComponent(getCurrentCategory()!.icon)}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {getCurrentCategory()!.name}
                </h3>
              </div>
              <p className="text-gray-300 max-w-2xl mx-auto">
                {getCurrentCategory()!.description}
              </p>
            </>
          )}
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