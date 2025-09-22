// Enhanced PlanCard with modern UI improvements
// Features: Glassmorphism design, smooth animations, better visual hierarchy

import Button from '../ui/Button';
import Icon from '../ui/Icon';
import { FiCheck, FiStar, FiTrendingUp, FiClock, FiDollarSign } from 'react-icons/fi';

export interface Plan {
  id: string;
  name: string;
  description: string;
  minInvestment: number;
  maxInvestment: number;
  apy: number;
  duration: number; // in days
  features: string[];
  isPopular?: boolean;
  isRecommended?: boolean;
  coinType?: string;
  dailyCoins?: number;
  totalCoins?: number;
}

interface PlanCardProps {
  plan: Plan;
  onSelect: (planId: string) => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, onSelect }) => {
  const {
    id,
    name,
    description,
    minInvestment,
    maxInvestment,
    apy,
    duration,
    features,
    isPopular,
    isRecommended,
    coinType,
    dailyCoins,
    totalCoins
  } = plan;

  const getPlanTheme = (type?: string) => {
    switch (type) {
      case 'Silver':
        return {
          gradient: 'from-slate-500/20 via-gray-600/10 to-slate-700/20',
          border: 'border-slate-400/30',
          accent: 'text-slate-300',
          badge: 'bg-gradient-to-r from-slate-400 to-slate-500 text-white',
          glow: 'shadow-slate-500/10',
          button: 'bg-gradient-to-r from-slate-400 to-slate-500 hover:from-slate-500 hover:to-slate-600'
        };
      case 'Gold':
        return {
          gradient: 'from-yellow-500/20 via-amber-600/10 to-orange-500/20',
          border: 'border-yellow-400/40',
          accent: 'text-yellow-300',
          badge: 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black',
          glow: 'shadow-yellow-500/15',
          button: 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black'
        };
      case 'Diamond':
        return {
          gradient: 'from-blue-500/20 via-cyan-600/10 to-purple-500/20',
          border: 'border-cyan-400/40',
          accent: 'text-cyan-300',
          badge: 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white',
          glow: 'shadow-cyan-500/15',
          button: 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600'
        };
      default:
        return {
          gradient: 'from-lime-500/20 via-green-600/10 to-emerald-500/20',
          border: 'border-lime-400/40',
          accent: 'text-lime-300',
          badge: 'bg-gradient-to-r from-lime-400 to-green-500 text-black',
          glow: 'shadow-lime-500/15',
          button: 'bg-gradient-to-r from-lime-400 to-green-500 hover:from-lime-500 hover:to-green-600 text-black'
        };
    }
  };

  const theme = getPlanTheme(coinType);

  return (
    <div className="group relative">
      {/* Main card */}
      <div 
        className={`relative rounded-2xl border ${theme.border} p-8 transition-all duration-300 hover:scale-[1.02] w-full sm:max-w-80 backdrop-blur-sm bg-black/40 hover:bg-black/60`}
      >
        {/* Badge */}
        {isPopular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
            <div className={`${theme.badge} px-6 py-2 rounded-full text-sm font-bold flex items-center justify-center space-x-2 shadow-lg min-w-[203px] whitespace-nowrap`}>
              <Icon icon={FiStar} size="sm" />
              <span>MOST POPULAR</span>
            </div>
          </div>
        )}

        {/* Plan Header */}
        <div className="text-center mb-8">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
            <p className="text-gray-400 text-sm">{description}</p>
          </div>
          
          {/* Price Display */}
          <div className="mb-6">
            <div className="flex items-baseline justify-center mb-2">
              <span className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                ${minInvestment.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <FiTrendingUp className="w-4 h-4" />
                <span>{apy}% APY</span>
              </div>
              <div className="flex items-center space-x-1">
                <FiClock className="w-4 h-4" />
                <span>{duration} days</span>
              </div>
            </div>
          </div>

          {/* Investment Range */}
          <div className={`${theme.border} border rounded-lg p-3 mb-6 bg-white/5`}>
            <div className="text-xs text-gray-400 mb-1">Investment Range</div>
            <div className="text-white font-medium">
              ${minInvestment.toLocaleString()} - ${maxInvestment.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="mb-8">
          <h4 className="text-white font-semibold mb-4 flex items-center">
            <FiCheck className="w-4 h-4 mr-2 text-green-400" />
            Features
          </h4>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="text-gray-300 text-sm flex items-start">
                <div className={`w-1.5 h-1.5 rounded-full ${theme.accent} mt-2 mr-3 flex-shrink-0`}></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Coin Information */}
        {(dailyCoins || totalCoins) && (
          <div className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10">
            <div className="text-center">
              {dailyCoins && (
                <div className="mb-2">
                  <div className="text-lg font-bold text-white">{dailyCoins}</div>
                  <div className="text-xs text-gray-400">Daily Coins</div>
                </div>
              )}
              {totalCoins && (
                <div>
                  <div className="text-lg font-bold text-white">{totalCoins}</div>
                  <div className="text-xs text-gray-400">Total Coins</div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* CTA Button */}
        <button
          className={`w-full ${theme.button} font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl text-sm uppercase tracking-wide`}
          onClick={() => onSelect(id)}
        >
          <div className="flex items-center justify-center space-x-2">
            <FiDollarSign className="w-4 h-4" />
            <span>Start Investing</span>
          </div>
        </button>

        {/* Recommended Badge */}
        {isRecommended && !isPopular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
            <div className={`${theme.badge} px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2 shadow-lg`}>
              <Icon icon={FiStar} size="sm" />
              <span>RECOMMENDED</span>
            </div>
          </div>
        )}

        {/* Subtle animation lines */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${theme.gradient} opacity-50`}></div>
          <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${theme.gradient} opacity-50`}></div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;