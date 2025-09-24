'use client';

import { useState } from 'react';
import { FiCopy, FiUpload, FiCheck, FiClock, FiX, FiAlertCircle, FiCreditCard, FiFileText, FiDollarSign } from 'react-icons/fi';
import Icon from '@/components/ui/Icon';

interface Transaction {
  id: string;
  date: string;
  amount: string;
  status: 'completed' | 'pending' | 'processing' | 'failed';
}

const Deposits: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [paymentProof, setPaymentProof] = useState<File | null>(null);
  const [copied, setCopied] = useState(false);

  const depositAddress = 'BC542797AA6B4964EC3C3324798833C3C367';
  const currentBalance = '0.00';
  const pendingDeposits = '0';

  const packages = [
    { value: '100', label: '$100 USDT', popular: false },
    { value: '500', label: '$500 USDT', popular: true },
    { value: '1000', label: '$1000 USDT', popular: false },
    { value: '2500', label: '$2500 USDT', popular: false },
    { value: '5000', label: '$5000 USDT', popular: false },
    { value: 'custom', label: 'Custom Amount', popular: false },
  ];

  const recentTransactions: Transaction[] = [
    // Empty for now - will be populated with real data
  ];

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleSubmitDeposit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle deposit submission logic
    console.log('Deposit submitted:', {
      selectedPackage,
      transactionId,
      paymentProof: paymentProof?.name
    });
  };

  const clearForm = () => {
    setSelectedPackage('');
    setTransactionId('');
    setPaymentProof(null);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Deposits</h1>
            <p className="text-[#94a3b8]">Manage and track your deposits</p>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-right">
              <div className="text-xs text-[#94a3b8]">Current Balance</div>
              <div className="text-[#00d4ff] font-bold text-lg">${currentBalance}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-[#94a3b8]">Pending</div>
              <div className="text-[#00b8e6] font-bold text-lg">{pendingDeposits}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Deposit Address Section */}
      <div className="rounded-2xl border border-[#00d4ff]/20 backdrop-blur-sm bg-[#1e293b] p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <FiCreditCard className="text-[#00d4ff] w-6 h-6" />
            <h2 className="text-xl font-bold text-white">Deposit Address (USDT BEP20)</h2>
          </div>
          <div className="bg-[#00d4ff]/20 text-[#00d4ff] px-3 py-1 rounded-full text-sm font-medium">
            BEP20 Network
          </div>
        </div>
        
        <div className="mt-6 mb-6 p-4 bg-[#00d4ff]/10 border border-[#00d4ff]/20 rounded-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <FiAlertCircle className="h-5 w-5 text-[#00d4ff]" />
            </div>
            <div className="ml-3 flex-1">
              <h3 className="text-sm font-medium text-white">Important Notice</h3>
              <div className="mt-1 text-sm text-[#94a3b8]">
                <p>Please ensure you are sending USDT on the BEP20 network only. Sending other tokens or using other networks may result in permanent loss of funds.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Wallet Address */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Wallet Address
            </label>
            <div className="bg-[#0f172a] border border-[#334155] p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-mono text-gray-300 break-all">{depositAddress}</span>
                <button
                  onClick={() => copyToClipboard(depositAddress)}
                  className="ml-4 p-2 rounded-lg hover:bg-[#1e4055] transition-colors"
                  aria-label="Copy to clipboard"
                >
                  <Icon icon={copied ? FiCheck : FiCopy} className={copied ? 'text-[#00d4ff]' : 'text-[#94a3b8] hover:text-white'} />
                </button>
              </div>
            </div>
            {copied && (
              <p className="text-green-400 text-sm flex items-center">
                <Icon icon={FiCheck} size="sm" className="mr-1" />
                Address copied to clipboard!
              </p>
            )}
          </div>

          {/* QR Code */}
          <div className="flex justify-center">
            <div className="bg-white rounded-xl p-4">
              <div className="w-48 h-48 bg-black rounded-lg flex items-center justify-center">
                {/* QR Code Placeholder */}
                <div className="grid grid-cols-12 gap-1">
                  {Array.from({ length: 144 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-1 h-1 ${Math.random() > 0.5 ? 'bg-black' : 'bg-white'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Make a New Deposit */}
        <div className="rounded-2xl border border-[#00d4ff]/20 backdrop-blur-sm bg-[#1e293b] p-6">
          <div className="flex items-center space-x-2">
            <FiDollarSign className="text-[#00d4ff] w-6 h-6" />
            <h2 className="text-xl font-bold text-white">Submit Deposit</h2>
          </div>
          
          <form onSubmit={handleSubmitDeposit} className="space-y-6">
            {/* Select Package */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Select Package
              </label>
              <div className="grid grid-cols-2 gap-3">
                {packages.map((pkg) => (
                  <button
                    key={pkg.value}
                    type="button"
                    onClick={() => setSelectedPackage(pkg.value)}
                    className={`
                      relative p-3 rounded-lg border transition-all duration-300 text-sm font-medium
                      ${selectedPackage === pkg.value
                        ? 'border-[#00d4ff] bg-[#00d4ff]/10 text-[#00d4ff]'
                        : 'border-[#334155] bg-[#0f172a] text-[#94a3b8] hover:border-[#00d4ff]'
                      }
                    `}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-2 -right-2 bg-[#00d4ff] text-black text-xs px-2 py-1 rounded-full font-bold">
                        Popular
                      </div>
                    )}
                    {pkg.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Transaction ID */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Transaction ID
              </label>
              <input
                type="text"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                className="w-full bg-[#0f172a] border border-[#334155] rounded-lg px-4 py-3 text-white focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-colors"
                placeholder="Enter your transaction ID"
                required
              />
            </div>

            {/* Payment Proof */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Payment Proof
              </label>
              <div className="w-full bg-[#0f172a] border-2 border-dashed border-[#334155] rounded-lg px-4 py-10 text-center cursor-pointer hover:border-[#00d4ff] hover:bg-[#1e4055]/30 transition-colors">
                <div className="flex flex-col items-center">
                  <FiUpload className="text-[#00d4ff] text-2xl mb-2" />
                  <span className="text-[#00d4ff] font-medium">Click to upload</span>
                  <span className="text-[#94a3b8] text-sm mt-1">or drag and drop</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button
                type="button"
                onClick={clearForm}
                className="flex-1 bg-[#334155] hover:bg-[#475569] text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] hover:from-[#00b8e6] hover:to-[#0077a3] text-[#0f172a] font-medium py-3 px-4 rounded-lg transition-colors hover:shadow-lg hover:shadow-[#00d4ff]/20"
              >
                Submit Deposit
              </button>
            </div>
          </form>
        </div>

        {/* Recent Transactions */}
        <div className="rounded-2xl border border-[#00d4ff]/20 backdrop-blur-sm bg-[#1e293b] p-6">
          <div className="flex items-center space-x-2 mb-6">
            <FiFileText className="text-[#00d4ff] w-6 h-6" />
            <h2 className="text-xl font-bold text-white">Recent Transactions</h2>
          </div>
          
          {/* Table Header */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#1e4055]">
                  <th className="text-left py-3 px-4 text-[#94a3b8] font-medium text-sm">DATE</th>
                  <th className="text-left py-3 px-4 text-[#94a3b8] font-medium text-sm">AMOUNT</th>
                  <th className="text-left py-3 px-4 text-[#94a3b8] font-medium text-sm">STATUS</th>
                  <th className="text-right py-3 px-4 text-[#94a3b8] font-medium text-sm">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center py-12">
                      <div className="mt-2 text-sm text-[#94a3b8]">
                        No transactions yet
                      </div>
                    </td>
                  </tr>
                ) : (
                  recentTransactions.map((transaction, index) => (
                    <tr key={index} className="border-b border-[#1e4055] hover:bg-[#1e4055]/20">
                      <td className="py-4 px-4 text-white text-sm font-mono">{transaction.id}</td>
                      <td className="py-4 px-4 text-[#94a3b8] text-sm">{transaction.date}</td>
                      <td className="py-4 px-4 text-[#00d4ff] text-sm font-medium">${transaction.amount}</td>
                      <td className="py-4 px-4 text-sm">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          transaction.status === 'completed' 
                            ? 'bg-green-400/20 text-green-400' 
                            : transaction.status === 'pending'
                            ? 'bg-yellow-400/20 text-yellow-400'
                            : transaction.status === 'processing'
                            ? 'bg-blue-400/20 text-blue-400'
                            : 'bg-red-400/20 text-red-400'
                        }`}>
                          <Icon 
                            icon={
                              transaction.status === 'completed' ? FiCheck :
                              transaction.status === 'pending' ? FiClock :
                              transaction.status === 'processing' ? FiClock : FiX
                            } 
                            size="sm" 
                            className="mr-1" 
                          />
                          {transaction.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Deposit Guidelines */}
          <div className="mt-6 space-y-3">
            <h3 className="text-white font-medium">Deposit Guidelines:</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start space-x-2">
                <span className="text-lime-400 mt-1">•</span>
                <span>Minimum deposit: $100 USDT</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-lime-400 mt-1">•</span>
                <span>Only BEP20 network supported</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-lime-400 mt-1">•</span>
                <span>Processing time: 1-3 confirmations</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-lime-400 mt-1">•</span>
                <span>Always provide transaction ID and proof</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposits;