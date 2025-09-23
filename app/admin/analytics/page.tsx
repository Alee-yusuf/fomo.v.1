'use client';

import { useState } from 'react';
import { FiTrendingUp, FiTrendingDown, FiUsers, FiDollarSign, FiPieChart, FiBarChart, FiDownload, FiCalendar } from 'react-icons/fi';

const AnalyticsDashboard: React.FC = () => {
  const [dateRange, setDateRange] = useState('30d');
  const [chartType, setChartType] = useState('revenue');

  // Mock data for analytics
  const analyticsData = {
    overview: {
      totalRevenue: 125000,
      revenueGrowth: 12.5,
      totalUsers: 1250,
      userGrowth: 8.3,
      totalInvestments: 890000,
      investmentGrowth: 15.2,
      totalWithdrawals: 45000,
      withdrawalGrowth: -5.1
    },
    revenueChart: [
      { month: 'Jan', revenue: 15000, investments: 120000 },
      { month: 'Feb', revenue: 18000, investments: 145000 },
      { month: 'Mar', revenue: 22000, investments: 180000 },
      { month: 'Apr', revenue: 19000, investments: 165000 },
      { month: 'May', revenue: 25000, investments: 210000 },
      { month: 'Jun', revenue: 28000, investments: 235000 }
    ],
    userGrowth: [
      { month: 'Jan', users: 850 },
      { month: 'Feb', users: 920 },
      { month: 'Mar', users: 1050 },
      { month: 'Apr', users: 1150 },
      { month: 'May', users: 1200 },
      { month: 'Jun', users: 1250 }
    ],
    planDistribution: [
      { name: 'Starter Plan', value: 45, color: '#10b981' },
      { name: 'Growth Plan', value: 30, color: '#3b82f6' },
      { name: 'Premium Plan', value: 20, color: '#f59e0b' },
      { name: 'VIP Plan', value: 5, color: '#ef4444' }
    ],
    topReferrers: [
      { name: 'John Doe', referrals: 25, earnings: 1250 },
      { name: 'Sarah Wilson', referrals: 18, earnings: 900 },
      { name: 'Mike Johnson', referrals: 15, earnings: 750 },
      { name: 'Emma Davis', referrals: 12, earnings: 600 },
      { name: 'Alex Brown', referrals: 10, earnings: 500 }
    ]
  };

  const StatCard = ({ title, value, growth, icon: Icon, color }: {
    title: string;
    value: string | number;
    growth: number;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
  }) => (
    <div className="rounded-2xl border border-gray-600/30 backdrop-blur-sm bg-black/40 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 ${color} rounded-lg`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className={`flex items-center space-x-1 text-sm font-medium ${
          growth >= 0 ? 'text-green-400' : 'text-red-400'
        }`}>
          {growth >= 0 ? <FiTrendingUp className="w-4 h-4" /> : <FiTrendingDown className="w-4 h-4" />}
          <span>{Math.abs(growth)}%</span>
        </div>
      </div>
      <div className="text-2xl font-bold text-white mb-1">
        {typeof value === 'number' ? value.toLocaleString() : value}
      </div>
      <div className="text-gray-400 text-sm">{title}</div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>
          <p className="text-gray-400">Comprehensive platform analytics and insights</p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <button className="flex items-center space-x-2 bg-gradient-to-r from-red-400 to-orange-500 hover:from-red-500 hover:to-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300">
            <FiDownload className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Revenue"
          value={`$${analyticsData.overview.totalRevenue.toLocaleString()}`}
          growth={analyticsData.overview.revenueGrowth}
          icon={FiDollarSign}
          color="bg-green-400/20 text-green-400"
        />
        <StatCard
          title="Total Users"
          value={analyticsData.overview.totalUsers}
          growth={analyticsData.overview.userGrowth}
          icon={FiUsers}
          color="bg-blue-400/20 text-blue-400"
        />
        <StatCard
          title="Total Investments"
          value={`$${analyticsData.overview.totalInvestments.toLocaleString()}`}
          growth={analyticsData.overview.investmentGrowth}
          icon={FiTrendingUp}
          color="bg-purple-400/20 text-purple-400"
        />
        <StatCard
          title="Total Withdrawals"
          value={`$${analyticsData.overview.totalWithdrawals.toLocaleString()}`}
          growth={analyticsData.overview.withdrawalGrowth}
          icon={FiTrendingDown}
          color="bg-red-400/20 text-red-400"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="rounded-2xl border border-gray-600/30 backdrop-blur-sm bg-black/40 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Revenue & Investments</h3>
            <select
              value={chartType}
              onChange={(e) => setChartType(e.target.value)}
              className="bg-gray-800/50 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
            >
              <option value="revenue">Revenue</option>
              <option value="investments">Investments</option>
              <option value="both">Both</option>
            </select>
          </div>
          
          {/* Simple Bar Chart Representation */}
          <div className="space-y-4">
            {analyticsData.revenueChart.map((data, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 text-gray-400 text-sm">{data.month}</div>
                <div className="flex-1 flex items-center space-x-2">
                  {(chartType === 'revenue' || chartType === 'both') && (
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-green-400 text-xs">Revenue</span>
                        <span className="text-green-400 text-xs">${data.revenue.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-green-400 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(data.revenue / 30000) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}
                  {(chartType === 'investments' || chartType === 'both') && (
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-blue-400 text-xs">Investments</span>
                        <span className="text-blue-400 text-xs">${(data.investments / 1000).toFixed(0)}K</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-blue-400 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(data.investments / 250000) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Growth Chart */}
        <div className="rounded-2xl border border-gray-600/30 backdrop-blur-sm bg-black/40 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">User Growth</h3>
            <div className="flex items-center space-x-2 text-green-400 text-sm">
              <FiTrendingUp className="w-4 h-4" />
              <span>+{analyticsData.overview.userGrowth}%</span>
            </div>
          </div>
          
          {/* Line Chart Representation */}
          <div className="space-y-4">
            {analyticsData.userGrowth.map((data, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 text-gray-400 text-sm">{data.month}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-purple-400 text-xs">Users</span>
                    <span className="text-purple-400 text-xs">{data.users}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-purple-400 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(data.users / 1300) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Plan Distribution & Top Referrers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Plan Distribution */}
        <div className="rounded-2xl border border-gray-600/30 backdrop-blur-sm bg-black/40 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Plan Distribution</h3>
            <FiPieChart className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="space-y-4">
            {analyticsData.planDistribution.map((plan, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: plan.color }}
                  />
                  <span className="text-gray-300">{plan.name}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-500"
                      style={{ 
                        width: `${plan.value}%`,
                        backgroundColor: plan.color
                      }}
                    />
                  </div>
                  <span className="text-white font-medium w-12 text-right">{plan.value}%</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-600/30">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">
                {analyticsData.planDistribution.reduce((sum, plan) => sum + plan.value, 0)}%
              </div>
              <div className="text-gray-400 text-sm">Total Coverage</div>
            </div>
          </div>
        </div>

        {/* Top Referrers */}
        <div className="rounded-2xl border border-gray-600/30 backdrop-blur-sm bg-black/40 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Top Referrers</h3>
            <FiBarChart className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="space-y-4">
            {analyticsData.topReferrers.map((referrer, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {referrer.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-medium">{referrer.name}</div>
                    <div className="text-gray-400 text-sm">{referrer.referrals} referrals</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-bold">${referrer.earnings}</div>
                  <div className="text-gray-400 text-sm">earned</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity & Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Metrics */}
        <div className="lg:col-span-2 rounded-2xl border border-gray-600/30 backdrop-blur-sm bg-black/40 p-6">
          <h3 className="text-xl font-bold text-white mb-6">Performance Metrics</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">94.5%</div>
              <div className="text-gray-400 text-sm">Platform Uptime</div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div className="bg-green-400 h-2 rounded-full w-[94.5%]" />
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">2.3s</div>
              <div className="text-gray-400 text-sm">Avg Response Time</div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div className="bg-blue-400 h-2 rounded-full w-[75%]" />
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">98.2%</div>
              <div className="text-gray-400 text-sm">Success Rate</div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div className="bg-purple-400 h-2 rounded-full w-[98.2%]" />
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Transaction Volume</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Deposits</span>
                  <span className="text-green-400 font-medium">$125,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Withdrawals</span>
                  <span className="text-red-400 font-medium">$45,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Net Flow</span>
                  <span className="text-blue-400 font-medium">$80,000</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">User Engagement</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Daily Active Users</span>
                  <span className="text-green-400 font-medium">856</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Session Duration</span>
                  <span className="text-blue-400 font-medium">12m 34s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Bounce Rate</span>
                  <span className="text-yellow-400 font-medium">23.5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-2xl border border-gray-600/30 backdrop-blur-sm bg-black/40 p-6">
          <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
          
          <div className="space-y-4">
            <button className="w-full flex items-center space-x-3 bg-blue-400/20 hover:bg-blue-400/30 text-blue-400 p-3 rounded-lg transition-colors">
              <FiUsers className="w-5 h-5" />
              <span>View All Users</span>
            </button>
            
            <button className="w-full flex items-center space-x-3 bg-green-400/20 hover:bg-green-400/30 text-green-400 p-3 rounded-lg transition-colors">
              <FiDollarSign className="w-5 h-5" />
              <span>Process Withdrawals</span>
            </button>
            
            <button className="w-full flex items-center space-x-3 bg-purple-400/20 hover:bg-purple-400/30 text-purple-400 p-3 rounded-lg transition-colors">
              <FiTrendingUp className="w-5 h-5" />
              <span>Manage Plans</span>
            </button>
            
            <button className="w-full flex items-center space-x-3 bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-400 p-3 rounded-lg transition-colors">
              <FiCalendar className="w-5 h-5" />
              <span>Schedule Report</span>
            </button>
            
            <button className="w-full flex items-center space-x-3 bg-red-400/20 hover:bg-red-400/30 text-red-400 p-3 rounded-lg transition-colors">
              <FiDownload className="w-5 h-5" />
              <span>Export Data</span>
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-600/30">
            <div className="text-center">
              <div className="text-lg font-bold text-white mb-1">System Status</div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm">All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;