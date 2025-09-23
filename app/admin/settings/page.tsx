'use client';

import { useState } from 'react';
import { FiSave, FiRefreshCw, FiShield, FiMail, FiDatabase, FiKey, FiToggleLeft, FiToggleRight, FiAlertTriangle, FiCheck } from 'react-icons/fi';

interface SettingsState {
  general: {
    platformName: string;
    platformDescription: string;
    maintenanceMode: boolean;
    registrationEnabled: boolean;
    kycRequired: boolean;
    minWithdrawal: number;
    maxWithdrawal: number;
    withdrawalFee: number;
  };
  security: {
    twoFactorRequired: boolean;
    sessionTimeout: number;
    maxLoginAttempts: number;
    passwordMinLength: number;
    requireSpecialChars: boolean;
    ipWhitelist: string;
    apiRateLimit: number;
  };
  email: {
    smtpHost: string;
    smtpPort: number;
    smtpUser: string;
    smtpPassword: string;
    fromName: string;
    fromEmail: string;
  };
  referral: {
    level1Commission: number;
    level2Commission: number;
    level3Commission: number;
    maxReferralLevels: number;
    referralBonusEnabled: boolean;
    minimumReferrals: number;
  };
}

const AdminSettings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState<SettingsState>({
    general: {
      platformName: 'FÔMOFI',
      platformDescription: 'Advanced cryptocurrency investment platform',
      maintenanceMode: false,
      registrationEnabled: true,
      kycRequired: true,
      minWithdrawal: 50,
      maxWithdrawal: 10000,
      withdrawalFee: 2.5
    },
    security: {
      twoFactorRequired: true,
      sessionTimeout: 30,
      maxLoginAttempts: 5,
      passwordMinLength: 8,
      requireSpecialChars: true,
      ipWhitelist: '',
      apiRateLimit: 100
    },
    email: {
      smtpHost: 'smtp.gmail.com',
      smtpPort: 587,
      smtpUser: 'noreply@fomofi.com',
      smtpPassword: '••••••••',
      fromName: 'FÔMOFI Team',
      fromEmail: 'noreply@fomofi.com'
    },
    referral: {
      level1Commission: 10,
      level2Commission: 5,
      level3Commission: 2,
      maxReferralLevels: 3,
      referralBonusEnabled: true,
      minimumReferrals: 5
    }
  });

  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  const tabs = [
    { id: 'general', name: 'General Settings', icon: FiRefreshCw },
    { id: 'security', name: 'Security', icon: FiShield },
    { id: 'email', name: 'Email Configuration', icon: FiMail },
    { id: 'referral', name: 'Referral System', icon: FiKey },
    { id: 'database', name: 'Database & Backup', icon: FiDatabase }
  ];

  const handleSave = async () => {
    setSaveStatus('saving');
    // Simulate API call
    setTimeout(() => {
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 2000);
    }, 1000);
  };

  const toggleSetting = (category: keyof SettingsState, setting: string) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: !(prev[category] as Record<string, unknown>)[setting]
      }
    }));
  };

  const updateSetting = (category: keyof SettingsState, setting: string, value: string | number | boolean) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: value
      }
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">System Settings</h1>
          <p className="text-gray-400">Configure platform settings and system parameters</p>
        </div>
        <button 
          onClick={handleSave}
          disabled={saveStatus === 'saving'}
          className="flex items-center space-x-2 bg-gradient-to-r from-red-400 to-orange-500 hover:from-red-500 hover:to-orange-600 disabled:opacity-50 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
        >
          {saveStatus === 'saving' ? (
            <FiRefreshCw className="w-5 h-5 animate-spin" />
          ) : saveStatus === 'saved' ? (
            <FiCheck className="w-5 h-5" />
          ) : (
            <FiSave className="w-5 h-5" />
          )}
          <span>
            {saveStatus === 'saving' ? 'Saving...' : saveStatus === 'saved' ? 'Saved!' : 'Save Changes'}
          </span>
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-600/30">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-red-400 text-red-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Settings Content */}
      <div className="rounded-2xl border border-gray-600/30 backdrop-blur-sm bg-black/40 p-6">
        {/* General Settings */}
        {activeTab === 'general' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-6">General Platform Settings</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Platform Name</label>
                <input
                  type="text"
                  value={settings.general.platformName}
                  onChange={(e) => updateSetting('general', 'platformName', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Minimum Withdrawal ($)</label>
                <input
                  type="number"
                  value={settings.general.minWithdrawal}
                  onChange={(e) => updateSetting('general', 'minWithdrawal', Number(e.target.value))}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Maximum Withdrawal ($)</label>
                <input
                  type="number"
                  value={settings.general.maxWithdrawal}
                  onChange={(e) => updateSetting('general', 'maxWithdrawal', Number(e.target.value))}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Withdrawal Fee (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={settings.general.withdrawalFee}
                  onChange={(e) => updateSetting('general', 'withdrawalFee', Number(e.target.value))}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Platform Description</label>
              <textarea
                rows={3}
                value={settings.general.platformDescription}
                onChange={(e) => updateSetting('general', 'platformDescription', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors resize-none"
              />
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Platform Controls</h4>
              
              <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                <div>
                  <div className="text-white font-medium">Maintenance Mode</div>
                  <div className="text-gray-400 text-sm">Temporarily disable platform access</div>
                </div>
                <button
                  onClick={() => toggleSetting('general', 'maintenanceMode')}
                  className="flex items-center"
                >
                  {settings.general.maintenanceMode ? (
                    <FiToggleRight className="w-8 h-8 text-red-400" />
                  ) : (
                    <FiToggleLeft className="w-8 h-8 text-gray-400" />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                <div>
                  <div className="text-white font-medium">User Registration</div>
                  <div className="text-gray-400 text-sm">Allow new user registrations</div>
                </div>
                <button
                  onClick={() => toggleSetting('general', 'registrationEnabled')}
                  className="flex items-center"
                >
                  {settings.general.registrationEnabled ? (
                    <FiToggleRight className="w-8 h-8 text-green-400" />
                  ) : (
                    <FiToggleLeft className="w-8 h-8 text-gray-400" />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                <div>
                  <div className="text-white font-medium">KYC Required</div>
                  <div className="text-gray-400 text-sm">Require KYC verification for withdrawals</div>
                </div>
                <button
                  onClick={() => toggleSetting('general', 'kycRequired')}
                  className="flex items-center"
                >
                  {settings.general.kycRequired ? (
                    <FiToggleRight className="w-8 h-8 text-green-400" />
                  ) : (
                    <FiToggleLeft className="w-8 h-8 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Security Settings */}
        {activeTab === 'security' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-6">Security Configuration</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Session Timeout (minutes)</label>
                <input
                  type="number"
                  value={settings.security.sessionTimeout}
                  onChange={(e) => updateSetting('security', 'sessionTimeout', Number(e.target.value))}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Max Login Attempts</label>
                <input
                  type="number"
                  value={settings.security.maxLoginAttempts}
                  onChange={(e) => updateSetting('security', 'maxLoginAttempts', Number(e.target.value))}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Password Min Length</label>
                <input
                  type="number"
                  value={settings.security.passwordMinLength}
                  onChange={(e) => updateSetting('security', 'passwordMinLength', Number(e.target.value))}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">API Rate Limit (per minute)</label>
                <input
                  type="number"
                  value={settings.security.apiRateLimit}
                  onChange={(e) => updateSetting('security', 'apiRateLimit', Number(e.target.value))}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">IP Whitelist (one per line)</label>
              <textarea
                rows={4}
                value={settings.security.ipWhitelist}
                onChange={(e) => updateSetting('security', 'ipWhitelist', e.target.value)}
                placeholder="192.168.1.1&#10;10.0.0.1"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors resize-none font-mono"
              />
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Security Features</h4>
              
              <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                <div>
                  <div className="text-white font-medium">Two-Factor Authentication Required</div>
                  <div className="text-gray-400 text-sm">Force 2FA for all admin accounts</div>
                </div>
                <button
                  onClick={() => toggleSetting('security', 'twoFactorRequired')}
                  className="flex items-center"
                >
                  {settings.security.twoFactorRequired ? (
                    <FiToggleRight className="w-8 h-8 text-green-400" />
                  ) : (
                    <FiToggleLeft className="w-8 h-8 text-gray-400" />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                <div>
                  <div className="text-white font-medium">Require Special Characters</div>
                  <div className="text-gray-400 text-sm">Passwords must contain special characters</div>
                </div>
                <button
                  onClick={() => toggleSetting('security', 'requireSpecialChars')}
                  className="flex items-center"
                >
                  {settings.security.requireSpecialChars ? (
                    <FiToggleRight className="w-8 h-8 text-green-400" />
                  ) : (
                    <FiToggleLeft className="w-8 h-8 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Email Configuration */}
        {activeTab === 'email' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-6">Email Configuration</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">SMTP Host</label>
                <input
                  type="text"
                  value={settings.email.smtpHost}
                  onChange={(e) => updateSetting('email', 'smtpHost', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">SMTP Port</label>
                <input
                  type="number"
                  value={settings.email.smtpPort}
                  onChange={(e) => updateSetting('email', 'smtpPort', Number(e.target.value))}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">SMTP Username</label>
                <input
                  type="text"
                  value={settings.email.smtpUser}
                  onChange={(e) => updateSetting('email', 'smtpUser', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">SMTP Password</label>
                <input
                  type="password"
                  value={settings.email.smtpPassword}
                  onChange={(e) => updateSetting('email', 'smtpPassword', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">From Name</label>
                <input
                  type="text"
                  value={settings.email.fromName}
                  onChange={(e) => updateSetting('email', 'fromName', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">From Email</label>
                <input
                  type="email"
                  value={settings.email.fromEmail}
                  onChange={(e) => updateSetting('email', 'fromEmail', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
                />
              </div>
            </div>

            <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <FiAlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />
                <div>
                  <div className="text-yellow-400 font-medium">Email Configuration Notice</div>
                  <div className="text-gray-300 text-sm mt-1">
                    Make sure to test email configuration after saving changes. Invalid settings may prevent system emails from being sent.
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Test Email Configuration
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Reset to Default
              </button>
            </div>
          </div>
        )}

        {/* Referral System */}
        {activeTab === 'referral' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-6">Referral System Configuration</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Level 1 Commission (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={settings.referral.level1Commission}
                  onChange={(e) => updateSetting('referral', 'level1Commission', Number(e.target.value))}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Level 2 Commission (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={settings.referral.level2Commission}
                  onChange={(e) => updateSetting('referral', 'level2Commission', Number(e.target.value))}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Level 3 Commission (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={settings.referral.level3Commission}
                  onChange={(e) => updateSetting('referral', 'level3Commission', Number(e.target.value))}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Maximum Referral Levels</label>
                <input
                  type="number"
                  value={settings.referral.maxReferralLevels}
                  onChange={(e) => updateSetting('referral', 'maxReferralLevels', Number(e.target.value))}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Minimum Referrals for Bonus</label>
                <input
                  type="number"
                  value={settings.referral.minimumReferrals}
                  onChange={(e) => updateSetting('referral', 'minimumReferrals', Number(e.target.value))}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
                />
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
              <div>
                <div className="text-white font-medium">Referral Bonus System</div>
                <div className="text-gray-400 text-sm">Enable additional bonuses for top referrers</div>
              </div>
              <button
                onClick={() => toggleSetting('referral', 'referralBonusEnabled')}
                className="flex items-center"
              >
                {settings.referral.referralBonusEnabled ? (
                  <FiToggleRight className="w-8 h-8 text-green-400" />
                ) : (
                  <FiToggleLeft className="w-8 h-8 text-gray-400" />
                )}
              </button>
            </div>
          </div>
        )}

        {/* Database & Backup */}
        {activeTab === 'database' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-6">Database & Backup Management</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <FiDatabase className="w-6 h-6 text-blue-400" />
                  <h4 className="text-lg font-semibold text-white">Database Status</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Connection Status</span>
                    <span className="text-green-400 font-medium">Connected</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Database Size</span>
                    <span className="text-white font-medium">2.4 GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Last Backup</span>
                    <span className="text-white font-medium">2 hours ago</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-400/10 border border-green-400/30 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <FiShield className="w-6 h-6 text-green-400" />
                  <h4 className="text-lg font-semibold text-white">Backup Settings</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Auto Backup</span>
                    <span className="text-green-400 font-medium">Enabled</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Frequency</span>
                    <span className="text-white font-medium">Daily</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Retention</span>
                    <span className="text-white font-medium">30 days</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Database Operations</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <button className="flex flex-col items-center space-y-2 bg-blue-400/20 hover:bg-blue-400/30 text-blue-400 p-4 rounded-lg transition-colors">
                  <FiDatabase className="w-6 h-6" />
                  <span className="text-sm font-medium">Create Backup</span>
                </button>
                
                <button className="flex flex-col items-center space-y-2 bg-green-400/20 hover:bg-green-400/30 text-green-400 p-4 rounded-lg transition-colors">
                  <FiRefreshCw className="w-6 h-6" />
                  <span className="text-sm font-medium">Restore Backup</span>
                </button>
                
                <button className="flex flex-col items-center space-y-2 bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-400 p-4 rounded-lg transition-colors">
                  <FiShield className="w-6 h-6" />
                  <span className="text-sm font-medium">Optimize DB</span>
                </button>
                
                <button className="flex flex-col items-center space-y-2 bg-red-400/20 hover:bg-red-400/30 text-red-400 p-4 rounded-lg transition-colors">
                  <FiAlertTriangle className="w-6 h-6" />
                  <span className="text-sm font-medium">Maintenance</span>
                </button>
              </div>
            </div>

            <div className="bg-red-400/10 border border-red-400/30 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <FiAlertTriangle className="w-5 h-5 text-red-400 mt-0.5" />
                <div>
                  <div className="text-red-400 font-medium">Critical Operations Warning</div>
                  <div className="text-gray-300 text-sm mt-1">
                    Database operations can affect platform performance. Always create a backup before performing maintenance operations.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSettings;