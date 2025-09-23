'use client';

import { useState } from 'react';
import { FiSearch, FiDownload, FiEye, FiCheck, FiX, FiClock, FiAlertTriangle, FiDollarSign } from 'react-icons/fi';

interface WithdrawalRequest {
  id: string;
  userId: number;
  userName: string;
  userEmail: string;
  amount: number;
  walletAddress: string;
  walletType: string;
  status: 'pending' | 'approved' | 'rejected' | 'processing' | 'completed';
  requestDate: string;
  processedDate?: string;
  adminNote?: string;
  txHash?: string;
  priority: 'low' | 'medium' | 'high';
}

const WithdrawalsManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [selectedRequests, setSelectedRequests] = useState<string[]>([]);
  const [selectedRequest, setSelectedRequest] = useState<WithdrawalRequest | null>(null);

  const withdrawalRequests: WithdrawalRequest[] = [
    {
      id: 'WD001',
      userId: 1,
      userName: 'John Doe',
      userEmail: 'john@example.com',
      amount: 1500,
      walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
      walletType: 'USDT BEP20',
      status: 'pending',
      requestDate: '2024-03-20 14:30:00',
      priority: 'high'
    },
    {
      id: 'WD002',
      userId: 2,
      userName: 'Sarah Wilson',
      userEmail: 'sarah@example.com',
      amount: 850,
      walletAddress: '0xabcdef1234567890abcdef1234567890abcdef12',
      walletType: 'USDT BEP20',
      status: 'processing',
      requestDate: '2024-03-20 12:15:00',
      processedDate: '2024-03-20 15:30:00',
      priority: 'medium'
    },
    {
      id: 'WD003',
      userId: 3,
      userName: 'Mike Johnson',
      userEmail: 'mike@example.com',
      amount: 2200,
      walletAddress: '0x9876543210fedcba9876543210fedcba98765432',
      walletType: 'USDT BEP20',
      status: 'completed',
      requestDate: '2024-03-19 16:45:00',
      processedDate: '2024-03-19 18:20:00',
      txHash: '0xabc123def456...',
      priority: 'low'
    },
    {
      id: 'WD004',
      userId: 4,
      userName: 'Emma Davis',
      userEmail: 'emma@example.com',
      amount: 750,
      walletAddress: '0xfedcba0987654321fedcba0987654321fedcba09',
      walletType: 'USDT BEP20',
      status: 'rejected',
      requestDate: '2024-03-19 10:20:00',
      processedDate: '2024-03-19 11:45:00',
      adminNote: 'Insufficient verification documents',
      priority: 'medium'
    },
    {
      id: 'WD005',
      userId: 5,
      userName: 'Alex Brown',
      userEmail: 'alex@example.com',
      amount: 3500,
      walletAddress: '0x1111222233334444555566667777888899990000',
      walletType: 'USDT BEP20',
      status: 'pending',
      requestDate: '2024-03-20 08:15:00',
      priority: 'high'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-400/20 text-yellow-400';
      case 'approved':
        return 'bg-blue-400/20 text-blue-400';
      case 'processing':
        return 'bg-purple-400/20 text-purple-400';
      case 'completed':
        return 'bg-green-400/20 text-green-400';
      case 'rejected':
        return 'bg-red-400/20 text-red-400';
      default:
        return 'bg-gray-400/20 text-gray-400';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-400/20 text-red-400';
      case 'medium':
        return 'bg-yellow-400/20 text-yellow-400';
      case 'low':
        return 'bg-green-400/20 text-green-400';
      default:
        return 'bg-gray-400/20 text-gray-400';
    }
  };

  const handleSelectRequest = (requestId: string) => {
    setSelectedRequests(prev => 
      prev.includes(requestId) 
        ? prev.filter(id => id !== requestId)
        : [...prev, requestId]
    );
  };

  const handleSelectAll = () => {
    if (selectedRequests.length === withdrawalRequests.length) {
      setSelectedRequests([]);
    } else {
      setSelectedRequests(withdrawalRequests.map(req => req.id));
    }
  };

  const filteredRequests = withdrawalRequests.filter(request => {
    const matchesSearch = request.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.userEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || request.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || request.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  // Calculate stats
  const pendingRequests = withdrawalRequests.filter(r => r.status === 'pending').length;
  const processingRequests = withdrawalRequests.filter(r => r.status === 'processing').length;
  const completedRequests = withdrawalRequests.filter(r => r.status === 'completed').length;
  const totalAmount = withdrawalRequests
    .filter(r => r.status === 'completed')
    .reduce((sum, r) => sum + r.amount, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Withdrawal Management</h1>
          <p className="text-gray-400">Process and manage withdrawal requests</p>
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
            <div className="p-3 bg-yellow-400/20 rounded-lg">
              <FiClock className="w-6 h-6 text-yellow-400" />
            </div>
            <span className="text-yellow-400 text-sm font-medium">+{pendingRequests}</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">{pendingRequests}</div>
          <div className="text-gray-400 text-sm">Pending Requests</div>
        </div>

        <div className="rounded-2xl border border-gray-600/30 backdrop-blur-sm bg-black/40 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-400/20 rounded-lg">
              <FiAlertTriangle className="w-6 h-6 text-purple-400" />
            </div>
            <span className="text-purple-400 text-sm font-medium">{processingRequests}</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">{processingRequests}</div>
          <div className="text-gray-400 text-sm">Processing</div>
        </div>

        <div className="rounded-2xl border border-gray-600/30 backdrop-blur-sm bg-black/40 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-400/20 rounded-lg">
              <FiCheck className="w-6 h-6 text-green-400" />
            </div>
            <span className="text-green-400 text-sm font-medium">+{completedRequests}</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">{completedRequests}</div>
          <div className="text-gray-400 text-sm">Completed</div>
        </div>

        <div className="rounded-2xl border border-gray-600/30 backdrop-blur-sm bg-black/40 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-400/20 rounded-lg">
              <FiDollarSign className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-green-400 text-sm font-medium">+15%</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">${totalAmount.toLocaleString()}</div>
          <div className="text-gray-400 text-sm">Total Processed</div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by user, email, or withdrawal ID..."
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
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="processing">Processing</option>
            <option value="completed">Completed</option>
            <option value="rejected">Rejected</option>
          </select>
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
          >
            <option value="all">All Priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedRequests.length > 0 && (
        <div className="bg-red-400/10 border border-red-400/30 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <span className="text-red-400 font-medium">
              {selectedRequests.length} request{selectedRequests.length > 1 ? 's' : ''} selected
            </span>
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors">
                <FiCheck className="w-4 h-4" />
                <span>Bulk Approve</span>
              </button>
              <button className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors">
                <FiX className="w-4 h-4" />
                <span>Bulk Reject</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Withdrawals Table */}
      <div className="rounded-2xl border border-gray-600/30 backdrop-blur-sm bg-black/40 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800/50">
              <tr>
                <th className="text-left py-4 px-6">
                  <input
                    type="checkbox"
                    checked={selectedRequests.length === withdrawalRequests.length}
                    onChange={handleSelectAll}
                    className="w-4 h-4 text-red-400 bg-gray-800 border-gray-600 rounded focus:ring-red-400"
                  />
                </th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">REQUEST</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">USER</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">AMOUNT</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">WALLET</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">STATUS</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">PRIORITY</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">DATE</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.map((request) => (
                <tr key={request.id} className="border-b border-gray-700/30 hover:bg-gray-800/20">
                  <td className="py-4 px-6">
                    <input
                      type="checkbox"
                      checked={selectedRequests.includes(request.id)}
                      onChange={() => handleSelectRequest(request.id)}
                      className="w-4 h-4 text-red-400 bg-gray-800 border-gray-600 rounded focus:ring-red-400"
                    />
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-red-400/20 rounded-lg">
                        <FiDollarSign className="w-4 h-4 text-red-400" />
                      </div>
                      <div>
                        <div className="text-white font-medium">{request.id}</div>
                        <div className="text-gray-400 text-sm">Withdrawal Request</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-red-400 to-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xs">
                          {request.userName.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <div className="text-white font-medium">{request.userName}</div>
                        <div className="text-gray-400 text-sm">{request.userEmail}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-red-400 font-bold text-lg">
                      ${request.amount.toLocaleString()}
                    </div>
                    <div className="text-gray-400 text-sm">{request.walletType}</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-gray-300 font-mono text-sm">
                      {request.walletAddress.slice(0, 8)}...{request.walletAddress.slice(-6)}
                    </div>
                    <div className="text-gray-400 text-xs">{request.walletType}</div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(request.priority)}`}>
                      {request.priority}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-300 text-sm">
                    {new Date(request.requestDate).toLocaleDateString()}
                    <div className="text-gray-500 text-xs">
                      {new Date(request.requestDate).toLocaleTimeString()}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => setSelectedRequest(request)}
                        className="p-2 rounded-lg bg-blue-400/20 text-blue-400 hover:bg-blue-400/30 transition-colors"
                      >
                        <FiEye className="w-4 h-4" />
                      </button>
                      {request.status === 'pending' && (
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
            Showing {filteredRequests.length} of {withdrawalRequests.length} requests
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

      {/* Withdrawal Details Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl border border-gray-600/30 p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Withdrawal Details</h2>
              <button 
                onClick={() => setSelectedRequest(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              {/* Request Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Request ID</label>
                  <div className="text-white font-mono">{selectedRequest.id}</div>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Amount</label>
                  <div className="text-red-400 font-bold text-xl">${selectedRequest.amount.toLocaleString()}</div>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Status</label>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedRequest.status)}`}>
                    {selectedRequest.status}
                  </span>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Priority</label>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(selectedRequest.priority)}`}>
                    {selectedRequest.priority}
                  </span>
                </div>
              </div>

              {/* User Info */}
              <div className="border-t border-gray-600/30 pt-6">
                <h3 className="text-lg font-bold text-white mb-4">User Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">Name</label>
                    <div className="text-white">{selectedRequest.userName}</div>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">Email</label>
                    <div className="text-white">{selectedRequest.userEmail}</div>
                  </div>
                </div>
              </div>

              {/* Wallet Info */}
              <div className="border-t border-gray-600/30 pt-6">
                <h3 className="text-lg font-bold text-white mb-4">Wallet Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">Wallet Type</label>
                    <div className="text-white">{selectedRequest.walletType}</div>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">Wallet Address</label>
                    <div className="text-white font-mono bg-gray-800/50 p-3 rounded-lg break-all">
                      {selectedRequest.walletAddress}
                    </div>
                  </div>
                </div>
              </div>

              {/* Admin Actions */}
              {selectedRequest.status === 'pending' && (
                <div className="border-t border-gray-600/30 pt-6">
                  <h3 className="text-lg font-bold text-white mb-4">Admin Actions</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-400 text-sm font-medium mb-2">Admin Note</label>
                      <textarea
                        rows={3}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors resize-none"
                        placeholder="Add a note for this withdrawal..."
                      />
                    </div>
                    <div className="flex items-center space-x-4">
                      <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                        Approve Withdrawal
                      </button>
                      <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                        Reject Withdrawal
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WithdrawalsManagement;