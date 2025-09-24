'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Plan {
  id: string;
  name: string;
  description: string;
  minInvestment: number;
  maxInvestment: number;
  duration: number;
  coinType: string;
  dailyCoins: number;
  totalCoins: number;
  category: string;
}

interface PlanCategory {
  id: string;
  name: string;
  plans: Plan[];
}

const planCategories: PlanCategory[] = [
  {
    id: 'silver',
    name: 'Silver Plan',
    plans: [
      {
        id: 'silver-starter',
        name: 'Silver Starter',
        description: 'Perfect entry point for new investors',
        minInvestment: 20,
        maxInvestment: 20,
        duration: 30,
        coinType: 'Silver',
        dailyCoins: 1,
        totalCoins: 30,
        category: 'silver'
      },
      {
        id: 'silver-basic',
        name: 'Silver Basic',
        description: 'Extended silver investment plan',
        minInvestment: 50,
        maxInvestment: 50,
        duration: 90,
        coinType: 'Silver',
        dailyCoins: 1,
        totalCoins: 90,
        category: 'silver'
      },
      {
        id: 'silver-plus',
        name: 'Silver Plus',
        description: 'Enhanced silver plan with double rewards',
        minInvestment: 100,
        maxInvestment: 100,
        duration: 100,
        coinType: 'Silver',
        dailyCoins: 2,
        totalCoins: 200,
        category: 'silver'
      },
      {
        id: 'silver-pro',
        name: 'Silver Pro',
        description: 'Premium silver investment option',
        minInvestment: 200,
        maxInvestment: 200,
        duration: 120,
        coinType: 'Silver',
        dailyCoins: 4,
        totalCoins: 480,
        category: 'silver'
      }
    ]
  },
  {
    id: 'gold',
    name: 'Gold Plan',
    plans: [
      {
        id: 'gold-basic',
        name: 'Gold Basic',
        description: 'Start earning Gold coins',
        minInvestment: 500,
        maxInvestment: 500,
        duration: 90,
        coinType: 'Gold',
        dailyCoins: 1,
        totalCoins: 90,
        category: 'gold'
      },
      {
        id: 'gold-plus',
        name: 'Gold Plus',
        description: 'Double Gold coin rewards',
        minInvestment: 1000,
        maxInvestment: 1000,
        duration: 100,
        coinType: 'Gold',
        dailyCoins: 2,
        totalCoins: 200,
        category: 'gold'
      },
      {
        id: 'gold-pro',
        name: 'Gold Pro',
        description: 'Maximum Gold coin earnings',
        minInvestment: 2000,
        maxInvestment: 2000,
        duration: 120,
        coinType: 'Gold',
        dailyCoins: 4,
        totalCoins: 480,
        category: 'gold'
      }
    ]
  },
  {
    id: 'diamond',
    name: 'Diamond Plan',
    plans: [
      {
        id: 'diamond-basic',
        name: 'Diamond Basic',
        description: 'Enter the Diamond tier',
        minInvestment: 5000,
        maxInvestment: 5000,
        duration: 90,
        coinType: 'Diamond',
        dailyCoins: 1,
        totalCoins: 90,
        category: 'diamond'
      },
      {
        id: 'diamond-plus',
        name: 'Diamond Plus',
        description: 'Enhanced Diamond rewards',
        minInvestment: 10000,
        maxInvestment: 10000,
        duration: 100,
        coinType: 'Diamond',
        dailyCoins: 2,
        totalCoins: 200,
        category: 'diamond'
      },
      {
        id: 'diamond-pro',
        name: 'Diamond Pro',
        description: 'Ultimate Diamond investment',
        minInvestment: 20000,
        maxInvestment: 20000,
        duration: 120,
        coinType: 'Diamond',
        dailyCoins: 4,
        totalCoins: 480,
        category: 'diamond'
      }
    ]
  }
];

export default function InvestmentCalculator() {
  const [selectedCategory, setSelectedCategory] = useState<string>('silver');
  const [selectedPlan, setSelectedPlan] = useState<Plan>(planCategories[0].plans[0]);
  const [investmentAmount, setInvestmentAmount] = useState<number>(20);
  const [startDate, setStartDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState<string>('');
  const [chartData, setChartData] = useState<{
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
      borderWidth: number;
      fill: boolean;
      tension: number;
    }[];
  } | null>(null);

  const generateChartData = useCallback(() => {
    const labels = [];
    const data = [];
    let currentAmount = investmentAmount;

    for (let i = 0; i <= selectedPlan.duration; i += 5) {
      labels.push(`Day ${i}`);
      data.push(currentAmount);
      currentAmount += (selectedPlan.dailyCoins * 5); // Simplified calculation based on daily coins
    }

    setChartData({
      labels,
      datasets: [
        {
          label: 'Projected Gains',
          data,
          borderColor: '#00d4ff',
          backgroundColor: 'rgba(0, 212, 255, 0.1)',
          borderWidth: 2,
          fill: true,
          tension: 0.4,
        },
      ],
    });
  }, [selectedPlan.duration, selectedPlan.dailyCoins, investmentAmount]);

  useEffect(() => {
    const start = new Date(startDate);
    const end = new Date(start);
    end.setDate(start.getDate() + selectedPlan.duration);
    setEndDate(end.toISOString().split('T')[0]);
  }, [startDate, selectedPlan]);

  useEffect(() => {
    generateChartData();
  }, [selectedPlan, investmentAmount, startDate, generateChartData]);

  const calculateStats = () => {
    const dailyEarning = selectedPlan.dailyCoins;
    const totalCoins = selectedPlan.totalCoins;
    const roi = ((totalCoins / investmentAmount) * 100);
    
    return {
      dailyEarning: dailyEarning.toString(),
      totalCoins: totalCoins.toString(),
      roi: roi.toFixed(1),
      days: selectedPlan.duration,
    };
  };

  const getCurrentCategoryPlans = () => {
    const category = planCategories.find(cat => cat.id === selectedCategory);
    return category?.plans || [];
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const category = planCategories.find(cat => cat.id === categoryId);
    if (category && category.plans.length > 0) {
      setSelectedPlan(category.plans[0]);
      setInvestmentAmount(category.plans[0].minInvestment);
    }
  };

  const handlePlanChange = (planId: string) => {
    const allPlans = planCategories.flatMap(cat => cat.plans);
    const plan = allPlans.find(p => p.id === planId);
    if (plan) {
      setSelectedPlan(plan);
      setInvestmentAmount(plan.minInvestment);
    }
  };

  const stats = calculateStats();

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#00d4ff',
          font: {
            size: 10,
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#00d4ff',
          font: {
            size: 10,
          },
        },
      },
    },
  };

  return (
    <section id="calculator" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
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
            Investment <span style={{ 
              background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Calculator</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Calculate your potential earnings and plan your investment strategy with our interactive calculator.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8 mb-8">
        {/* Left Panel - Select Plan */}
        <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-[#00d4ff]/20 shadow-2xl p-6 hover:shadow-[#00d4ff]/10 transition-all duration-500">
          <div className="flex items-center mb-6">
            <div className="w-4 h-4 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] rounded mr-2"></div>
            <h3 className="text-[#00d4ff] font-semibold text-lg">Select Plan</h3>
          </div>

          <div className="space-y-6">
            {/* Plan Category Selection */}
            <div>
              <label className="block text-sm text-gray-400 mb-3">Plan Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full bg-slate-800/80 border border-[#00d4ff]/30 rounded-lg px-4 py-3 text-white focus:border-[#00d4ff] focus:outline-none transition-all duration-300 hover:border-[#00d4ff]/50 hover:bg-slate-800/90"
              >
                {planCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Specific Plan Selection */}
            <div>
              <label className="block text-sm text-gray-400 mb-3">Specific Plan</label>
              <select
                value={selectedPlan.id}
                onChange={(e) => handlePlanChange(e.target.value)}
                className="w-full bg-slate-800/80 border border-[#00d4ff]/30 rounded-lg px-4 py-3 text-white focus:border-[#00d4ff] focus:outline-none transition-all duration-300 hover:border-[#00d4ff]/50 hover:bg-slate-800/90"
              >
                {getCurrentCategoryPlans().map((plan) => (
                  <option key={plan.id} value={plan.id}>
                    {plan.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Plan Details */}
            <div>
              <label className="block text-sm text-slate-400 mb-3">Plan Details</label>
              <div className="bg-slate-800/60 border border-slate-600/50 rounded-lg px-4 py-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-300 text-sm">Investment:</span>
                  <span className="text-white font-medium">${selectedPlan.minInvestment}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300 text-sm">Duration:</span>
                  <span className="text-white font-medium">{selectedPlan.duration} days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300 text-sm">Daily Coins:</span>
                  <span className="text-[#00d4ff] font-medium">{selectedPlan.dailyCoins}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300 text-sm">Total Coins:</span>
                  <span className="text-[#00d4ff] font-medium">{selectedPlan.totalCoins}</span>
                </div>
              </div>
            </div>

            {/* Plan Description */}
            <div className="bg-[#00d4ff]/10 border border-[#00d4ff]/20 rounded-lg p-4">
              <p className="text-slate-300 text-sm">{selectedPlan.description}</p>
            </div>
          </div>
        </div>

        {/* Center Panel - Earnings Chart */}
        <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-[#00d4ff]/20 shadow-2xl p-6 hover:shadow-[#00d4ff]/10 transition-all duration-500">
          <div className="mb-6">
            <div className="text-3xl font-bold text-white">${investmentAmount}</div>
            <div className="text-sm text-slate-400">Investment Amount</div>
          </div>

          <div className="flex items-center mb-6">
            <div className="w-4 h-4 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] rounded mr-2"></div>
            <h3 className="text-[#00d4ff] font-semibold text-lg">Earnings Projection</h3>
          </div>

          <div className="h-64 md:h-80">
            {chartData && (
              <Line data={chartData} options={chartOptions} />
            )}
          </div>
        </div>

        {/* Right Panel - Investment Details */}
        <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-[#00d4ff]/20 shadow-2xl p-6 hover:shadow-[#00d4ff]/10 transition-all duration-500">
          <div className="flex items-center mb-6">
            <div className="w-4 h-4 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] rounded mr-2"></div>
            <h3 className="text-[#00d4ff] font-semibold text-lg">Investment Details</h3>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm text-slate-400 mb-3">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full bg-slate-800/80 border border-[#00d4ff]/30 rounded-lg px-4 py-3 text-white focus:border-[#00d4ff] focus:outline-none transition-all duration-300 hover:border-[#00d4ff]/50"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-400 mb-3">End Date</label>
              <input
                type="date"
                value={endDate}
                readOnly
                className="w-full bg-slate-800/60 border border-[#00d4ff]/20 rounded-lg px-4 py-3 text-slate-400 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-400 mb-3">Duration</label>
              <div className="bg-slate-800/60 border border-slate-600/50 rounded-lg px-4 py-3">
                <div className="text-right text-xl font-bold text-white">{selectedPlan.duration} days</div>
              </div>
            </div>

            <div>
              <label className="block text-sm text-slate-400 mb-3">Investment Amount</label>
              <div className="bg-slate-800/60 border border-slate-600/50 rounded-lg px-4 py-3">
                <div className="text-right text-xl font-bold text-[#00d4ff]">${selectedPlan.minInvestment}</div>
                <div className="text-right text-xs text-slate-400 mt-1">Fixed amount for this plan</div>
              </div>
            </div>

            <div>
              <label className="block text-sm text-slate-400 mb-3">Daily Coins</label>
              <div className="bg-[#00d4ff]/10 border border-[#00d4ff]/20 rounded-lg px-4 py-3">
                <div className="text-right text-xl font-bold text-[#00d4ff]">{stats.dailyEarning} coins</div>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Bottom Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-[#00d4ff]/20 shadow-2xl p-6 text-center hover:shadow-[#00d4ff]/10 hover:scale-105 transition-all duration-500">
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-slate-900 font-bold text-lg">$</span>
              </div>
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-[#00d4ff] mb-1">{stats.dailyEarning}</div>
            <div className="text-sm text-slate-400">Daily Coins</div>
          </div>

          <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-[#00d4ff]/20 shadow-2xl p-6 text-center hover:shadow-[#00d4ff]/10 hover:scale-105 transition-all duration-500">
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-slate-900 font-bold text-lg">C</span>
              </div>
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-[#00d4ff] mb-1">{stats.totalCoins}</div>
            <div className="text-sm text-slate-400">Total Coins</div>
          </div>

          <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-[#00d4ff]/20 shadow-2xl p-6 text-center hover:shadow-[#00d4ff]/10 hover:scale-105 transition-all duration-500">
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-slate-900 font-bold text-lg">%</span>
              </div>
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-[#00d4ff] mb-1">{stats.roi}%</div>
            <div className="text-sm text-slate-400">ROI</div>
          </div>

          <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-[#00d4ff]/20 shadow-2xl p-6 text-center hover:shadow-[#00d4ff]/10 hover:scale-105 transition-all duration-500">
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-slate-900 font-bold text-lg">D</span>
              </div>
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-[#00d4ff] mb-1">{stats.days}</div>
            <div className="text-sm text-slate-400">Days</div>
          </div>
        </div>
      </div>
    </section>
  );
}