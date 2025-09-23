'use client';

import { useState } from 'react';
import { FiSearch, FiFilter, FiDownload, FiPlus, FiEye, FiEdit, FiTrash2, FiUserCheck, FiUserX, FiMail, FiMoreVertical } from 'react-icons/fi';

interface User {
  id: number;
  name: string;
  email: string;
  joinDate: string;
  status: 'active' | 'inactive' | 'suspended';
  totalInvestment: string;
  referrals: number;
  lastLogin: string;
  kycStatus: 'verified' | 'pending' | 'rejected';
}

const UserManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);


  const users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      joinDate: '2024-01-15',
      status: 'active',
      totalInvestment: '$2,500',
      referrals: 5,
      lastLogin: '2 hours ago',
      kycStatus: 'verified'
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      email: 'sarah@example.com',
      joinDate: '2024-02-20',
      status: 'active',
      totalInvestment: '$1,800',
      referrals: 3,
      lastLogin: '1 day ago',
      kycStatus: 'pending'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      joinDate: '2024-01-08',
      status: 'suspended',
      totalInvestment: '$950',
      referrals: 1,
      lastLogin: '5 days ago',
      kycStatus: 'rejected'
    },
    {
      id: 4,
      name: 'Emma Davis',
      email: 'emma@example.com',
      joinDate: '2024-03-10',
      status: 'active',
      totalInvestment: '$3,200',
      referrals: 8,
      lastLogin: '30 minutes ago',
      kycStatus: 'verified'
    },
    {
      id: 5,
      name: 'Alex Brown',
      email: 'alex@example.com',
      joinDate: '2024-02-28',
      status: 'inactive',
      totalInvestment: '$0',
      referrals: 0,
      lastLogin: '2 weeks ago',
      kycStatus: 'pending'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-400/20 text-green-400';
      case 'inactive':
        return 'bg-gray-400/20 text-gray-400';
      case 'suspended':
        return 'bg-red-400/20 text-red-400';
      default:
        return 'bg-gray-400/20 text-gray-400';
    }
  };

  const getKycStatusColor = (status: string) => {
    switch (status) {
      case 'verified':
        return 'bg-green-400/20 text-green-400';
      case 'pending':
        return 'bg-yellow-400/20 text-yellow-400';
      case 'rejected':
        return 'bg-red-400/20 text-red-400';
      default:
        return 'bg-gray-400/20 text-gray-400';
    }
  };

  const handleSelectUser = (userId: number) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const handleSelectAll = () => {
    if (selectedUsers.length === users.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(users.map(user => user.id));
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">User Management</h1>
          <p className="text-gray-400">Manage and monitor all platform users</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
            <FiDownload className="w-4 h-4" />
            <span>Export</span>
          </button>
          <button className="flex items-center space-x-2 bg-gradient-to-r from-red-400 to-orange-500 hover:from-red-500 hover:to-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300">
            <FiPlus className="w-4 h-4" />
            <span>Add User</span>
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search users by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
          />
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="suspended">Suspended</option>
          </select>
          <button className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg transition-colors">
            <FiFilter className="w-4 h-4" />
            <span>More Filters</span>
          </button>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedUsers.length > 0 && (
        <div className="bg-red-400/10 border border-red-400/30 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <span className="text-red-400 font-medium">
              {selectedUsers.length} user{selectedUsers.length > 1 ? 's' : ''} selected
            </span>
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors">
                <FiUserCheck className="w-4 h-4" />
                <span>Activate</span>
              </button>
              <button className="flex items-center space-x-2 bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg transition-colors">
                <FiUserX className="w-4 h-4" />
                <span>Suspend</span>
              </button>
              <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                <FiMail className="w-4 h-4" />
                <span>Send Email</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Users Table */}
      <div className="rounded-2xl border border-gray-600/30 backdrop-blur-sm bg-black/40 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800/50">
              <tr>
                <th className="text-left py-4 px-6">
                  <input
                    type="checkbox"
                    checked={selectedUsers.length === users.length}
                    onChange={handleSelectAll}
                    className="w-4 h-4 text-red-400 bg-gray-800 border-gray-600 rounded focus:ring-red-400"
                  />
                </th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">USER</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">STATUS</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">INVESTMENT</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">REFERRALS</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">KYC</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">LAST LOGIN</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-gray-700/30 hover:bg-gray-800/20">
                  <td className="py-4 px-6">
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => handleSelectUser(user.id)}
                      className="w-4 h-4 text-red-400 bg-gray-800 border-gray-600 rounded focus:ring-red-400"
                    />
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-red-400 to-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {user.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <div className="text-white font-medium">{user.name}</div>
                        <div className="text-gray-400 text-sm">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-green-400 font-medium">{user.totalInvestment}</td>
                  <td className="py-4 px-6 text-blue-400 font-medium">{user.referrals}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getKycStatusColor(user.kycStatus)}`}>
                      {user.kycStatus}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-300 text-sm">{user.lastLogin}</td>
                  <td className="py-4 px-6">
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
                      <button className="p-2 rounded-lg bg-gray-600/20 text-gray-400 hover:bg-gray-600/30 transition-colors">
                        <FiMoreVertical className="w-4 h-4" />
                      </button>
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
            Showing {filteredUsers.length} of {users.length} users
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
              3
            </button>
            <button className="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-green-400/10 border border-green-400/30 rounded-lg p-4">
          <div className="text-green-400 text-2xl font-bold">
            {users.filter(u => u.status === 'active').length}
          </div>
          <div className="text-gray-400 text-sm">Active Users</div>
        </div>
        <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4">
          <div className="text-yellow-400 text-2xl font-bold">
            {users.filter(u => u.kycStatus === 'pending').length}
          </div>
          <div className="text-gray-400 text-sm">Pending KYC</div>
        </div>
        <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
          <div className="text-blue-400 text-2xl font-bold">
            {users.reduce((sum, u) => sum + u.referrals, 0)}
          </div>
          <div className="text-gray-400 text-sm">Total Referrals</div>
        </div>
        <div className="bg-red-400/10 border border-red-400/30 rounded-lg p-4">
          <div className="text-red-400 text-2xl font-bold">
            {users.filter(u => u.status === 'suspended').length}
          </div>
          <div className="text-gray-400 text-sm">Suspended Users</div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;