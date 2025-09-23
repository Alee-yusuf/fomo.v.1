'use client';

import { useState } from 'react';
import { FiEdit2, FiEye, FiEyeOff } from 'react-icons/fi';
import Icon from '@/components/ui/Icon';

const Profile: React.FC = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [profileData, setProfileData] = useState({
    handle: 'Haahil',
    email: 'haahilsaeed@gmail.com',
    bio: '',
    country: 'Afghanistan',
    phoneNumber: '+92 344 7897893'
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const countries = [
    'Afghanistan', 'Pakistan', 'India', 'United States', 'United Kingdom', 
    'Canada', 'Australia', 'Germany', 'France', 'Japan', 'China', 'Brazil'
  ];

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle profile update logic
    console.log('Profile updated:', profileData);
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password change logic
    console.log('Password change requested');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Profile</h1>
        <p className="text-gray-400">Manage your account settings</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Profile Information */}
        <div className="rounded-2xl border border-lime-400/30 backdrop-blur-sm bg-black/40">
          <div className="p-6 border-b border-lime-400/20">
            <h2 className="text-xl font-bold text-white">Profile Information</h2>
          </div>
          
          <form onSubmit={handleProfileUpdate} className="p-6 space-y-6">
            {/* Handle */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Handle
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={profileData.handle}
                  onChange={(e) => setProfileData({...profileData, handle: e.target.value})}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-colors"
                  placeholder="Enter your handle"
                />
                <Icon icon={FiEdit2} size="sm" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                value={profileData.email}
                onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-colors"
                placeholder="Enter your email"
              />
            </div>

            {/* Bio */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Bio
              </label>
              <textarea
                value={profileData.bio}
                onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                rows={3}
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-colors resize-none"
                placeholder="Tell us about yourself"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Country
              </label>
              <select
                value={profileData.country}
                onChange={(e) => setProfileData({...profileData, country: e.target.value})}
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-colors"
              >
                {countries.map((country) => (
                  <option key={country} value={country} className="bg-gray-800">
                    {country}
                  </option>
                ))}
              </select>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={profileData.phoneNumber}
                onChange={(e) => setProfileData({...profileData, phoneNumber: e.target.value})}
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-colors"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Update Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-lime-400 to-green-500 hover:from-lime-500 hover:to-green-600 text-black font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Update Profile
            </button>
          </form>
        </div>

        {/* Change Password */}
        <div className="rounded-2xl border border-orange-400/30 backdrop-blur-sm bg-black/40">
          <div className="p-6 border-b border-orange-400/20">
            <h2 className="text-xl font-bold text-white">Change Password</h2>
          </div>
          
          <form onSubmit={handlePasswordChange} className="p-6 space-y-6">
            {/* Current Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Current Password
              </label>
              <div className="relative">
                <input
                  type={showCurrentPassword ? 'text' : 'password'}
                  value={passwordData.currentPassword}
                  onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 pr-12 text-white placeholder-gray-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-colors"
                  placeholder="Enter current password"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <Icon icon={showCurrentPassword ? FiEyeOff : FiEye} size="sm" />
                </button>
              </div>
            </div>

            {/* New Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 pr-12 text-white placeholder-gray-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-colors"
                  placeholder="Enter new password"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <Icon icon={showNewPassword ? FiEyeOff : FiEye} size="sm" />
                </button>
              </div>
            </div>

            {/* Confirm New Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 pr-12 text-white placeholder-gray-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-colors"
                  placeholder="Confirm new password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <Icon icon={showConfirmPassword ? FiEyeOff : FiEye} size="sm" />
                </button>
              </div>
            </div>

            {/* Change Password Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>

      {/* Withdraw Wallets Section */}
      <div className="rounded-2xl border border-purple-400/30 backdrop-blur-sm bg-black/40">
        <div className="p-6 border-b border-purple-400/20">
          <h2 className="text-xl font-bold text-white">Withdraw Wallets</h2>
          <p className="text-gray-400 text-sm mt-1">
            Manage wallets to receive funds from the dedicated wallet type for better organization and control.
          </p>
        </div>
        
        <div className="p-6">
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👛</span>
            </div>
            <h3 className="text-lg font-medium text-white mb-2">No wallets yet</h3>
            <p className="text-gray-400 text-sm mb-6">
              Start by adding your first withdrawal wallet
            </p>
            <button className="bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
              Manage Wallets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;