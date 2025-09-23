'use client';

import { useState } from 'react';
import { FiPlus, FiEdit, FiTrash2, FiEye, FiToggleLeft, FiToggleRight, FiTrendingUp, FiClock, FiDollarSign } from 'react-icons/fi';

interface Plan {
  id: number;
  name: string;
  minAmount: number;
  maxAmount: number;
  apy: number;
  duration: number;
  status: 'active' | 'inactive';
  totalInvestors: number;
  totalInvested: number;
  createdDate: string;
  description: string;
}

const PlansManagement: React.FC = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingPlan, setEditingPlan] = useState<Plan | null>(null);

  const plans: Plan[] = [
    {
      id: 1,
      name: 'Starter Plan',
      minAmount: 100,
      maxAmount: 1000,
      apy: 12,
      duration: 30,
      status: 'active',
      totalInvestors: 245,
      totalInvested: 125000,
      createdDate: '2024-01-15',
      description: 'Perfect for beginners looking to start their investment journey'
    },
    {
      id: 2,
      name: 'Growth Plan',
      minAmount: 1000,
      maxAmount: 5000,
      apy: 18,
      duration: 60,
      status: 'active',
      totalInvestors: 156,
      totalInvested: 380000,
      createdDate: '2024-01-20',
      description: 'Ideal for investors seeking moderate returns with balanced risk'
    },
    {
      id: 3,
      name: 'Premium Plan',
      minAmount: 5000,
      maxAmount: 25000,
      apy: 25,
      duration: 90,
      status: 'active',
      totalInvestors: 89,
      totalInvested: 890000,
      createdDate: '2024-02-01',
      description: 'High-yield investment plan for experienced investors'
    },
    {
      id: 4,
      name: 'VIP Plan',
      minAmount: 25000,
      maxAmount: 100000,
      apy: 35,
      duration: 180,
      status: 'inactive',
      totalInvestors: 23,
      totalInvested: 1250000,
      createdDate: '2024-02-15',
      description: 'Exclusive plan for high-net-worth individuals'
    }
  ];

  const getStatusColor = (status: string) => {
    return status === 'active' 
      ? 'bg-green-400/20 text-green-400' 
      : 'bg-gray-400/20 text-gray-400';
  };

  const togglePlanStatus = (planId: number) => {
    // Toggle plan status logic here
    console.log('Toggling plan status for plan:', planId);
  };

  const deletePlan = (planId: number) => {
    // Delete plan logic here
    console.log('Deleting plan:', planId);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Investment Plans</h1>
          <p className="text-gray-400">Create and manage investment plans for your platform</p>
        </div>
        <button 
          onClick={() => setShowCreateModal(true)}
          className="flex items-center space-x-2 bg-gradient-to-r from-red-400 to-orange-500 hover:from-red-500 hover:to-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
        >
          <FiPlus className="w-5 h-5" />
          <span>Create New Plan</span>
        </button>
      </div>

      {/* Plans Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="rounded-2xl border border-gray-600/30 backdrop-blur-sm bg-black/40 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-400/20 rounded-lg">
              <FiTrendingUp className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-green-400 text-sm font-medium">+12%</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">{plans.length}</div>
          <div className="text-gray-400 text-sm">Total Plans</div>
        </div>

        <div className="rounded-2xl border border-gray-600/30 backdrop-blur-sm bg-black/40 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-400/20 rounded-lg">
              <FiDollarSign className="w-6 h-6 text-green-400" />
            </div>
            <span className="text-green-400 text-sm font-medium">+8%</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">
            ${plans.reduce((sum, plan) => sum + plan.totalInvested, 0).toLocaleString()}
          </div>
          <div className="text-gray-400 text-sm">Total Invested</div>
        </div>

        <div className="rounded-2xl border border-gray-600/30 backdrop-blur-sm bg-black/40 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-400/20 rounded-lg">
              <FiClock className="w-6 h-6 text-purple-400" />
            </div>
            <span className="text-green-400 text-sm font-medium">+15%</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">
            {plans.reduce((sum, plan) => sum + plan.totalInvestors, 0)}
          </div>
          <div className="text-gray-400 text-sm">Active Investors</div>
        </div>

        <div className="rounded-2xl border border-gray-600/30 backdrop-blur-sm bg-black/40 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-yellow-400/20 rounded-lg">
              <FiTrendingUp className="w-6 h-6 text-yellow-400" />
            </div>
            <span className="text-green-400 text-sm font-medium">+5%</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">
            {Math.round(plans.reduce((sum, plan) => sum + plan.apy, 0) / plans.length)}%
          </div>
          <div className="text-gray-400 text-sm">Average APY</div>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div key={plan.id} className="rounded-2xl border border-gray-600/30 backdrop-blur-sm bg-black/40 p-6 hover:border-red-400/50 transition-all duration-300">
            {/* Plan Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(plan.status)}`}>
                  {plan.status}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => togglePlanStatus(plan.id)}
                  className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-colors"
                >
                  {plan.status === 'active' ? (
                    <FiToggleRight className="w-5 h-5 text-green-400" />
                  ) : (
                    <FiToggleLeft className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Plan Details */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">APY</span>
                <span className="text-green-400 font-bold text-lg">{plan.apy}%</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Duration</span>
                <span className="text-white font-medium">{plan.duration} days</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Min Amount</span>
                <span className="text-white font-medium">${plan.minAmount.toLocaleString()}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Max Amount</span>
                <span className="text-white font-medium">${plan.maxAmount.toLocaleString()}</span>
              </div>
            </div>

            {/* Plan Stats */}
            <div className="border-t border-gray-600/30 pt-4 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-blue-400 font-bold text-lg">{plan.totalInvestors}</div>
                  <div className="text-gray-400 text-xs">Investors</div>
                </div>
                <div>
                  <div className="text-green-400 font-bold text-lg">${(plan.totalInvested / 1000).toFixed(0)}K</div>
                  <div className="text-gray-400 text-xs">Invested</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-6 line-clamp-2">{plan.description}</p>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <button className="flex-1 flex items-center justify-center space-x-2 bg-blue-400/20 hover:bg-blue-400/30 text-blue-400 py-2 px-4 rounded-lg transition-colors">
                <FiEye className="w-4 h-4" />
                <span className="text-sm">View</span>
              </button>
              <button 
                onClick={() => setEditingPlan(plan)}
                className="flex-1 flex items-center justify-center space-x-2 bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-400 py-2 px-4 rounded-lg transition-colors"
              >
                <FiEdit className="w-4 h-4" />
                <span className="text-sm">Edit</span>
              </button>
              <button 
                onClick={() => deletePlan(plan.id)}
                className="flex items-center justify-center bg-red-400/20 hover:bg-red-400/30 text-red-400 py-2 px-3 rounded-lg transition-colors"
              >
                <FiTrash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Create/Edit Plan Modal */}
      {(showCreateModal || editingPlan) && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl border border-gray-600/30 p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                {editingPlan ? 'Edit Plan' : 'Create New Plan'}
              </h2>
              <button 
                onClick={() => {
                  setShowCreateModal(false);
                  setEditingPlan(null);
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Plan Name</label>
                  <input
                    type="text"
                    defaultValue={editingPlan?.name || ''}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
                    placeholder="Enter plan name"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">APY (%)</label>
                  <input
                    type="number"
                    defaultValue={editingPlan?.apy || ''}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
                    placeholder="Enter APY percentage"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Minimum Amount ($)</label>
                  <input
                    type="number"
                    defaultValue={editingPlan?.minAmount || ''}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
                    placeholder="Enter minimum amount"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Maximum Amount ($)</label>
                  <input
                    type="number"
                    defaultValue={editingPlan?.maxAmount || ''}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
                    placeholder="Enter maximum amount"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Duration (Days)</label>
                  <input
                    type="number"
                    defaultValue={editingPlan?.duration || ''}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
                    placeholder="Enter duration in days"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Status</label>
                  <select
                    defaultValue={editingPlan?.status || 'active'}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Description</label>
                <textarea
                  rows={4}
                  defaultValue={editingPlan?.description || ''}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors resize-none"
                  placeholder="Enter plan description"
                />
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-red-400 to-orange-500 hover:from-red-500 hover:to-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
                >
                  {editingPlan ? 'Update Plan' : 'Create Plan'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowCreateModal(false);
                    setEditingPlan(null);
                  }}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlansManagement;