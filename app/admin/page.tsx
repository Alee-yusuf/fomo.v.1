'use client';

import { useState } from 'react';
import { FiUsers, FiDollarSign, FiTrendingUp, FiTrendingDown, FiActivity, FiAlertCircle, FiCheckCircle, FiClock, FiEye, FiEdit, FiTrash2 } from 'react-icons/fi';

const AdminDashboard: React.FC = () => {
  const [timeRange, setTimeRange] = useState('7d');

  const systemStats = [
    {
      title: 'Total Users',
      value: '1,247',
      change: '+12.5%',
      trend: 'up',
      icon: FiUsers,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/30'
    },
    {
      title: 'Active Investments',
      value: '$458,920',
      change: '+8.2%',
      trend: 'up',
      icon: FiDollarSign,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/30'
    },
    {
      title: 'Total Revenue',
      value: '$89,456',
      change: '+15.3%',
      trend: 'up',
      icon: FiTrendingUp,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/30'
    },
    {
      title: 'Pending Withdrawals',
      value: '23',
      change: '-5.1%',
      trend: 'down',
      icon: FiClock,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderColor: 'border-yellow-400/30'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'user_registration',
      user: 'John Doe',
      action: 'New user registered',
      time: '2 minutes ago',
      status: 'success'
    },
    {
      id: 2,
      type: 'deposit',
      user: 'Sarah Wilson',
      action: 'Deposited $500 USDT',
      time: '5 minutes ago',
      status: 'success'
    },
    {
      id: 3,
      type: 'withdrawal',
      user: 'Mike Johnson',
      action: 'Withdrawal request $200',
      time: '10 minutes ago',
      status: 'pending'
    },
    {
      id: 4,
      type: 'referral',
      user: 'Emma Davis',
      action: 'Earned referral commission',
      time: '15 minutes ago',
      status: 'success'
    },
    {
      id: 5,
      type: 'plan_purchase',
      user: 'Alex Brown',
      action: 'Purchased Gold Plan',
      time: '20 minutes ago',
      status: 'success'
    }
  ];

  const topUsers = [
    {
      id: 1,
      name: 'Robert Smith',
      email: 'robert@example.com',
      totalInvestment: '$5,200',
      referrals: 15,
      status: 'active'
    },
    {
      id: 2,
      name: 'Lisa Anderson',
      email: 'lisa@example.com',
      totalInvestment: '$3,800',
      referrals: 12,
      status: 'active'
    },
    {
      id: 3,
      name: 'David Wilson',
      email: 'david@example.com',
      totalInvestment: '$2,900',
      referrals: 8,
      status: 'active'
    },
    {
      id: 4,
      name: 'Jennifer Lee',
      email: 'jennifer@example.com',
      totalInvestment: '$2,500',
      referrals: 6,
      status: 'active'
    }
  ];

  const pendingActions = [
    {
      id: 1,
      type: 'withdrawal',
      user: 'Michael Brown',
      amount: '$450',
      time: '1 hour ago',
      priority: 'high'
    },
    {
      id: 2,
      type: 'kyc_verification',
      user: 'Anna Taylor',
      amount: 'KYC Documents',
      time: '2 hours ago',
      priority: 'medium'
    },
    {
      id: 3,
      type: 'deposit_verification',
      user: 'James Wilson',
      amount: '$1,200',
      time: '3 hours ago',
      priority: 'high'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <FiCheckCircle className="w-4 h-4 text-green-400" />;
      case 'pending':
        return <FiClock className="w-4 h-4 text-yellow-400" />;
      case 'error':
        return <FiAlertCircle className="w-4 h-4 text-red-400" />;
      default:
        return <FiActivity className="w-4 h-4 text-gray-400" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-400 bg-red-400/10';
      case 'medium':
        return 'text-yellow-400 bg-yellow-400/10';
      case 'low':
        return 'text-green-400 bg-green-400/10';
      default:
        return 'text-gray-400 bg-gray-400/10';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-gray-400">System overview and management</p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white text-sm focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
          >
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
          </select>
        </div>
      </div>

      {/* System Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {systemStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={index}
              className={`
                relative rounded-2xl border ${stat.borderColor} p-6 
                backdrop-blur-sm ${stat.bgColor} 
                transition-all duration-300 hover:scale-[1.02]
              `}
            >
              <div className="flex items-center justify-between mb-4">
                <IconComponent className={`w-8 h-8 ${stat.color}`} />
                <div className={`flex items-center space-x-1 text-sm ${
                  stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {stat.trend === 'up' ? <FiTrendingUp className="w-4 h-4" /> : <FiTrendingDown className="w-4 h-4" />}
                  <span>{stat.change}</span>
                </div>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-1">{stat.title}</div>
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Recent Activities */}
        <div className="xl:col-span-2 rounded-2xl border border-gray-600/30 backdrop-blur-sm bg-black/40 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Recent Activities</h2>
            <button className="text-red-400 hover:text-red-300 text-sm font-medium">
              View All
            </button>
          </div>
          
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <div className="flex items-center space-x-4">
                  {getStatusIcon(activity.status)}
                  <div>
                    <div className="text-white font-medium">{activity.user}</div>
                    <div className="text-gray-400 text-sm">{activity.action}</div>
                  </div>
                </div>
                <div className="text-gray-400 text-sm">{activity.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Actions */}
        <div className="rounded-2xl border border-red-400/30 backdrop-blur-sm bg-black/40 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Pending Actions</h2>
            <div className="w-6 h-6 bg-red-400 rounded-full flex items-center justify-center">
              <span className="text-black text-xs font-bold">{pendingActions.length}</span>
            </div>
          </div>
          
          <div className="space-y-4">
            {pendingActions.map((action) => (
              <div key={action.id} className="p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-medium">{action.user}</div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(action.priority)}`}>
                    {action.priority}
                  </span>
                </div>
                <div className="text-gray-400 text-sm mb-2">{action.type.replace('_', ' ')}</div>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-medium">{action.amount}</span>
                  <span className="text-gray-400 text-xs">{action.time}</span>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-4 bg-gradient-to-r from-red-400 to-orange-500 hover:from-red-500 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300">
            Review All Pending
          </button>
        </div>
      </div>

      {/* Top Users */}
      <div className="rounded-2xl border border-green-400/30 backdrop-blur-sm bg-black/40 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Top Performing Users</h2>
          <button className="text-green-400 hover:text-green-300 text-sm font-medium">
            View All Users
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-600/30">
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">USER</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">INVESTMENT</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">REFERRALS</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">STATUS</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {topUsers.map((user) => (
                <tr key={user.id} className="border-b border-gray-700/30 hover:bg-gray-800/20">
                  <td className="py-4 px-4">
                    <div>
                      <div className="text-white font-medium">{user.name}</div>
                      <div className="text-gray-400 text-sm">{user.email}</div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-green-400 font-medium">{user.totalInvestment}</td>
                  <td className="py-4 px-4 text-blue-400 font-medium">{user.referrals}</td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-400/20 text-green-400">
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 rounded-lg bg-blue-400/20 text-blue-400 hover:bg-blue-400/30 transition-colors">
                        <FiEye className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30 transition-colors">
                        <FiEdit className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg bg-red-400/20 text-red-400 hover:bg-red-400/30 transition-colors">
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;