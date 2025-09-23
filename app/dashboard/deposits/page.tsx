'use client';

import { useState } from 'react';
import { FiCopy, FiUpload, FiCheck, FiClock, FiX, FiAlertCircle } from 'react-icons/fi';
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

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPaymentProof(file);
    }
  };

  const handleSubmitDeposit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle deposit submission logic
    console.log('Deposit submitted:', {
      package: selectedPackage,
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
            <p className="text-gray-400">Manage and track your deposits</p>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-right">
              <div className="text-xs text-gray-400">Current Balance</div>
              <div className="text-lime-400 font-bold text-lg">${currentBalance}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-400">Pending</div>
              <div className="text-yellow-400 font-bold text-lg">{pendingDeposits}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Deposit Address Section */}
      <div className="rounded-2xl border border-blue-400/30 backdrop-blur-sm bg-black/40 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">💰 Deposit Address (USDT BEP20)</h2>
          <div className="bg-blue-400/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
            BEP20 Network
          </div>
        </div>
        
        <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-3">
            <Icon icon={FiAlertCircle} size="sm" className="text-yellow-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-yellow-400 text-sm font-medium mb-1">Important Notice</p>
              <p className="text-gray-300 text-sm">
                <strong>Send only USDT via BEP20 network to this address.</strong> Sending USDT via TRC20, ERC20 or other networks will result in loss of funds.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Wallet Address */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Wallet Address
            </label>
            <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-white font-mono text-sm break-all">{depositAddress}</span>
                <button
                  onClick={() => copyToClipboard(depositAddress)}
                  className="ml-3 bg-blue-400 hover:bg-blue-500 text-white p-2 rounded-lg transition-colors flex-shrink-0"
                >
                  <Icon icon={FiCopy} size="sm" />
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
        <div className="rounded-2xl border border-green-400/30 backdrop-blur-sm bg-black/40 p-6">
          <h2 className="text-xl font-bold text-white mb-6">📈 Make a New Deposit</h2>
          
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
                        ? 'border-green-400 bg-green-400/10 text-green-400'
                        : 'border-gray-600 bg-gray-800/30 text-gray-300 hover:border-gray-500'
                      }
                    `}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-2 -right-2 bg-orange-400 text-black text-xs px-2 py-1 rounded-full font-bold">
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
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors"
                placeholder="Enter your transaction ID"
                required
              />
            </div>

            {/* Payment Proof */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Payment Proof
              </label>
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-gray-500 transition-colors">
                <input
                  type="file"
                  onChange={handleFileUpload}
                  accept="image/*,.pdf"
                  className="hidden"
                  id="payment-proof"
                />
                <label htmlFor="payment-proof" className="cursor-pointer">
                  <Icon icon={FiUpload} size="lg" className="text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm mb-1">
                    {paymentProof ? paymentProof.name : 'Drag and drop your files or click to upload'}
                  </p>
                  <p className="text-gray-500 text-xs">PNG, JPG or PDF up to 10MB</p>
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button
                type="button"
                onClick={clearForm}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-xl transition-colors"
              >
                Clear Form
              </button>
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Submit Deposit
              </button>
            </div>
          </form>
        </div>

        {/* Recent Transactions */}
        <div className="rounded-2xl border border-gray-600/30 backdrop-blur-sm bg-black/40 p-6">
          <h2 className="text-xl font-bold text-white mb-6">📊 Recent Transactions</h2>
          
          {/* Table Header */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-600/30">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">ID</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">DATE</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">AMOUNT</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center py-12">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center mb-4">
                          <Icon icon={FiClock} size="lg" className="text-gray-500" />
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2">No transactions yet</h3>
                        <p className="text-gray-400 text-sm">
                          Your deposit history will appear here
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  recentTransactions.map((transaction, index) => (
                    <tr key={index} className="border-b border-gray-700/30 hover:bg-gray-800/20">
                      <td className="py-4 px-4 text-white text-sm font-mono">{transaction.id}</td>
                      <td className="py-4 px-4 text-gray-300 text-sm">{transaction.date}</td>
                      <td className="py-4 px-4 text-green-400 text-sm font-medium">${transaction.amount}</td>
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