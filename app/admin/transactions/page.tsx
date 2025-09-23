'use client';

import { useState } from 'react';
import { FiSearch, FiDownload, FiEye, FiCheck, FiX, FiClock, FiTrendingUp, FiTrendingDown, FiDollarSign } from 'react-icons/fi';

interface Transaction {
  id: string;
  userId: number;
  userName: string;
  userEmail: string;
  type: 'deposit' | 'withdrawal' | 'referral' | 'investment' | 'profit';
  amount: number;
  status: 'pending' | 'completed' | 'failed' | 'cancelled';
  date: string;
  txHash?: string;
  method: string;
  description: string;
}

const TransactionsManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');

  const transactions: Transaction[] = [
    {
      id: 'TXN001',
      userId: 1,
      userName: 'John Doe',
      userEmail: 'john@example.com',
      type: 'deposit',
      amount: 1500,
      status: 'completed',
      date: '2024-03-20 14:30:00',
      txHash: '0x1234...abcd',
      method: 'USDT BEP20',
      description: 'Investment deposit for Growth Plan'
    },
    {
      id: 'TXN002',
      userId: 2,
      userName: 'Sarah Wilson',
      userEmail: 'sarah@example.com',
      type: 'withdrawal',
      amount: 850,
      status: 'pending',
      date: '2024-03-20 12:15:00',
      method: 'USDT BEP20',
      description: 'Profit withdrawal request'
    },
    {
      id: 'TXN003',
      userId: 3,
      userName: 'Mike Johnson',
      userEmail: 'mike@example.com',
      type: 'referral',
      amount: 75,
      status: 'completed',
      date: '2024-03-20 10:45:00',
      method: 'Internal',
      description: 'Level 1 referral commission'
    },
    {
      id: 'TXN004',
      userId: 4,
      userName: 'Emma Davis',
      userEmail: 'emma@example.com',
      type: 'investment',
      amount: 2500,
      status: 'completed',
      date: '2024-03-20 09:20:00',
      method: 'USDT BEP20',
      description: 'Premium Plan investment'
    },
    {
      id: 'TXN005',
      userId: 1,
      userName: 'John Doe',
      userEmail: 'john@example.com',
      type: 'profit',
      amount: 45,
      status: 'completed',
      date: '2024-03-20 08:00:00',
      method: 'Internal',
      description: 'Daily profit from Growth Plan'
    },
    {
      id: 'TXN006',
      userId: 5,
      userName: 'Alex Brown',
      userEmail: 'alex@example.com',
      type: 'withdrawal',
      amount: 1200,
      status: 'failed',
      date: '2024-03-19 16:30:00',
      method: 'USDT BEP20',
      description: 'Withdrawal failed - insufficient balance'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'deposit':
        return 'bg-green-400/20 text-green-400';
      case 'withdrawal':
        return 'bg-red-400/20 text-red-400';
      case 'referral':
        return 'bg-blue-400/20 text-blue-400';
      case 'investment':
        return 'bg-purple-400/20 text-purple-400';
      case 'profit':
        return 'bg-yellow-400/20 text-yellow-400';
      default:
        return 'bg-gray-400/20 text-gray-400';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-400/20 text-green-400';
      case 'pending':
        return 'bg-yellow-400/20 text-yellow-400';
      case 'failed':
        return 'bg-red-400/20 text-red-400';
      case 'cancelled':
        return 'bg-gray-400/20 text-gray-400';
      default:
        return 'bg-gray-400/20 text-gray-400';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'deposit':
        return <FiTrendingUp className="w-4 h-4" />;
      case 'withdrawal':
        return <FiTrendingDown className="w-4 h-4" />;
      case 'referral':
      case 'investment':
      case 'profit':
        return <FiDollarSign className="w-4 h-4" />;
      default:
        return <FiDollarSign className="w-4 h-4" />;
    }
  };

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.userEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || transaction.type === typeFilter;
    const matchesStatus = statusFilter === 'all' || transaction.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  // Calculate stats
  const totalTransactions = transactions.length;
  const completedTransactions = transactions.filter(t => t.status === 'completed').length;
  const pendingTransactions = transactions.filter(t => t.status === 'pending').length;
  const totalVolume = transactions
    .filter(t => t.status === 'completed')
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Transaction Management</h1>
          <p className="text-gray-400">Monitor and manage all platform transactions</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
            <FiDownload className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="rounded-2xl border border-gray-600/30 backdrop-blur-sm bg-black/40 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-400/20 rounded-lg">
              <FiDollarSign className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-green-400 text-sm font-medium">+12%</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">{totalTransactions}</div>
          <div className="text-gray-400 text-sm">Total Transactions</div>
        </div>

        <div className="rounded-2xl border border-gray-600/30 backdrop-blur-sm bg-black/40 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-400/20 rounded-lg">
              <FiCheck className="w-6 h-6 text-green-400" />
            </div>
            <span className="text-green-400 text-sm font-medium">+8%</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">{completedTransactions}</div>
          <div className="text-gray-400 text-sm">Completed</div>
        </div>

        <div className="rounded-2xl border border-gray-600/30 backdrop-blur-sm bg-black/40 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-yellow-400/20 rounded-lg">
              <FiClock className="w-6 h-6 text-yellow-400" />
            </div>
            <span className="text-yellow-400 text-sm font-medium">+3</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">{pendingTransactions}</div>
          <div className="text-gray-400 text-sm">Pending</div>
        </div>

        <div className="rounded-2xl border border-gray-600/30 backdrop-blur-sm bg-black/40 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-400/20 rounded-lg">
              <FiTrendingUp className="w-6 h-6 text-purple-400" />
            </div>
            <span className="text-green-400 text-sm font-medium">+15%</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">${totalVolume.toLocaleString()}</div>
          <div className="text-gray-400 text-sm">Total Volume</div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by user, email, or transaction ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
          />
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
          >
            <option value="all">All Types</option>
            <option value="deposit">Deposits</option>
            <option value="withdrawal">Withdrawals</option>
            <option value="referral">Referrals</option>
            <option value="investment">Investments</option>
            <option value="profit">Profits</option>
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
          >
            <option value="all">All Status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <select
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
          >
            <option value="all">All Time</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="rounded-2xl border border-gray-600/30 backdrop-blur-sm bg-black/40 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800/50">
              <tr>
                <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">TRANSACTION</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">USER</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">TYPE</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">AMOUNT</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">STATUS</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">METHOD</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">DATE</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-gray-700/30 hover:bg-gray-800/20">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${getTypeColor(transaction.type)}`}>
                        {getTypeIcon(transaction.type)}
                      </div>
                      <div>
                        <div className="text-white font-medium">{transaction.id}</div>
                        <div className="text-gray-400 text-sm truncate max-w-[200px]">
                          {transaction.description}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <div className="text-white font-medium">{transaction.userName}</div>
                      <div className="text-gray-400 text-sm">{transaction.userEmail}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(transaction.type)}`}>
                      {transaction.type}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className={`font-bold ${
                      transaction.type === 'deposit' || transaction.type === 'referral' || transaction.type === 'profit' 
                        ? 'text-green-400' 
                        : 'text-red-400'
                    }`}>
                      {transaction.type === 'withdrawal' ? '-' : '+'}${transaction.amount.toLocaleString()}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-300">{transaction.method}</td>
                  <td className="py-4 px-6 text-gray-300 text-sm">
                    {new Date(transaction.date).toLocaleDateString()}
                    <div className="text-gray-500 text-xs">
                      {new Date(transaction.date).toLocaleTimeString()}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 rounded-lg bg-blue-400/20 text-blue-400 hover:bg-blue-400/30 transition-colors">
                        <FiEye className="w-4 h-4" />
                      </button>
                      {transaction.status === 'pending' && (
                        <>
                          <button className="p-2 rounded-lg bg-green-400/20 text-green-400 hover:bg-green-400/30 transition-colors">
                            <FiCheck className="w-4 h-4" />
                          </button>
                          <button className="p-2 rounded-lg bg-red-400/20 text-red-400 hover:bg-red-400/30 transition-colors">
                            <FiX className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-gray-800/30 px-6 py-4 flex items-center justify-between">
          <div className="text-gray-400 text-sm">
            Showing {filteredTransactions.length} of {transactions.length} transactions
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm">
              Previous
            </button>
            <button className="px-3 py-2 bg-red-400 text-white rounded-lg text-sm">
              1
            </button>
            <button className="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm">
              2
            </button>
            <button className="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsManagement;