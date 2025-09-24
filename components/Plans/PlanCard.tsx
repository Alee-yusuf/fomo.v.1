import { FiCheck, FiStar, FiClock, FiDollarSign } from 'react-icons/fi';
import Icon from '../ui/Icon';

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
          gradient: 'from-slate-400/20 via-slate-500/10 to-slate-600/20',
          border: 'border-slate-400/30',
          accent: 'text-slate-400',
          badge: 'bg-gradient-to-r from-slate-400 to-slate-500 text-slate-900',
          glow: 'shadow-slate-400/20',
          button: 'bg-gradient-to-r from-slate-400 to-slate-500 hover:from-slate-500 hover:to-slate-600 text-slate-900'
        };
      case 'Gold':
        return {
          gradient: 'from-yellow-400/20 via-yellow-500/10 to-amber-500/20',
          border: 'border-yellow-400/30',
          accent: 'text-yellow-400',
          badge: 'bg-gradient-to-r from-yellow-400 to-amber-500 text-yellow-900',
          glow: 'shadow-yellow-400/20',
          button: 'bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-yellow-900'
        };
      case 'Diamond':
        return {
          gradient: 'from-[#00d4ff]/20 via-[#0099cc]/10 to-blue-500/20',
          border: 'border-[#00d4ff]/30',
          accent: 'text-[#00d4ff]',
          badge: 'bg-gradient-to-r from-[#00d4ff] to-[#0099cc] text-slate-900',
          glow: 'shadow-[#00d4ff]/20',
          button: 'bg-gradient-to-r from-[#00d4ff] to-[#0099cc] hover:from-[#0099cc] hover:to-blue-500 text-slate-900'
        };
      default:
        return {
          gradient: 'from-[#00d4ff]/20 via-[#0099cc]/10 to-blue-500/20',
          border: 'border-[#00d4ff]/30',
          accent: 'text-[#00d4ff]',
          badge: 'bg-gradient-to-r from-[#00d4ff] to-[#0099cc] text-slate-900',
          glow: 'shadow-[#00d4ff]/20',
          button: 'bg-gradient-to-r from-[#00d4ff] to-[#0099cc] hover:from-[#0099cc] hover:to-blue-500 text-slate-900'
        };
    }
  };

  const theme = getPlanTheme(coinType);

  return (
    <div className="group relative h-full">
      {/* Main card */}
      <div 
        className={`relative rounded-2xl border ${theme.border} p-8 transition-all duration-500 hover:scale-[1.02] w-full h-full backdrop-blur-sm bg-slate-800/60 hover:bg-slate-800/80 shadow-xl hover:shadow-2xl ${theme.glow} flex flex-col`}
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
        <div className="text-center mb-6 flex-shrink-0">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
            <p className="text-slate-300 text-sm">{description}</p>
          </div>
          
          {/* Price Display */}
          <div className="mb-6">
            <div className="flex items-baseline justify-center mb-2">
              <span className="text-4xl font-bold text-white">
                ${minInvestment.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center justify-center space-x-4 text-sm text-slate-400">
              <div className="flex items-center space-x-1">
                <FiClock className="w-4 h-4" />
                <span>{duration} days</span>
              </div>
            </div>
          </div>

          {/* Investment Range */}
          <div className={`${theme.border} border rounded-lg p-3 mb-6 bg-slate-700/30`}>
            <div className="text-xs text-slate-400 mb-1">Investment Range</div>
            <div className="text-white font-medium">
              ${minInvestment.toLocaleString()} - ${maxInvestment.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Content Area - Flexible */}
        <div className="flex-grow flex flex-col">
          {/* Features List */}
          <div className="mb-6 flex-grow">
            <h4 className="text-white font-semibold mb-4">
              Features
            </h4>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="text-slate-300 text-sm flex items-center">
                  <FiCheck className={`w-4 h-4 mr-3 ${theme.accent}`} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coin Information */}
          {(dailyCoins || totalCoins) && (
            <div className="mb-6 p-4 rounded-lg bg-slate-700/30 border border-slate-600/30">
              <div className="text-center">
                {dailyCoins && (
                  <div className="mb-2">
                    <div className="text-lg font-bold text-white">{dailyCoins}</div>
                    <div className="text-xs text-slate-400">Daily Coins</div>
                  </div>
                )}
                {totalCoins && (
                  <div>
                    <div className="text-lg font-bold text-white">{totalCoins}</div>
                    <div className="text-xs text-slate-400">Total Coins</div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* CTA Button - Always at bottom */}
        <div className="mt-auto">
          <button
            className={`w-full ${theme.button} font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl text-sm uppercase tracking-wide`}
            onClick={() => onSelect(id)}
          >
            <div className="flex items-center justify-center space-x-2">
              <FiDollarSign className="w-4 h-4" />
              <span>Start Investing</span>
            </div>
          </button>
        </div>

        {/* Recommended Badge */}
        {isRecommended && !isPopular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
            <div className={`${theme.badge} px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2 shadow-lg`}>
              <Icon icon={FiStar} size="sm" />
              <span>RECOMMENDED</span>
            </div>
          </div>
        )}

        {/* Subtle gradient borders */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${theme.gradient} opacity-60`}></div>
          <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${theme.gradient} opacity-60`}></div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;