'use client';

import { useState } from 'react';
import { FiEdit2, FiEye, FiEyeOff, FiUser, FiGlobe } from 'react-icons/fi';
import Icon from '@/components/ui/Icon';

const Profile = () => {
  // Password visibility states
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handle profile update form submission
  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your profile update logic here
    console.log('Updating profile:', profileData);
  };

  // Handle password change form submission
  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your password change logic here
    console.log('Changing password');
    
    // Reset form
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  // Profile data state
  const [profileData, setProfileData] = useState({
    handle: 'Haahil',
    email: 'haahilsaeed@gmail.com',
    bio: 'Crypto enthusiast and blockchain developer',
    country: 'Afghanistan',
    phoneNumber: '+92 344 7897893',
    profileImage: '/images/avatar-placeholder.png',
    memberSince: 'Jan 2023',
    lastActive: 'Just now'
  });

  // Password form state
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });


  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 
    'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria',
    'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados',
    'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia',
    'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria',
    'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon',
    'Canada', 'Central African Republic', 'Chad', 'Chile', 'China',
    'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba',
    'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica',
    'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Estonia',
    'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon',
    'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada',
    'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'Hungary',
    'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel',
    'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya',
    'Kiribati', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia',
    'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein',
    'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia',
    'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania',
    'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco',
    'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar',
    'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand',
    'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia',
    'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea',
    'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar',
    'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia',
    'Saint Vincent and the Grenadines', 'Samoa', 'San Marino',
    'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia',
    'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia',
    'Solomon Islands', 'Somalia', 'South Africa', 'South Korea',
    'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden',
    'Switzerland', 'Syria', 'Tajikistan', 'Tanzania', 'Thailand',
    'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia',
    'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine',
    'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay',
    'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam',
    'Yemen', 'Zambia', 'Zimbabwe'
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#0099cc] bg-clip-text text-transparent">
              Profile Settings
            </h1>
            <p className="mt-2 text-lg text-[#94a3b8] max-w-2xl">
              Manage your personal information, security settings, and account preferences
            </p>
          </div>
        </div>
        <div className="mt-6 border-t border-[#1e293b] pt-6"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="rounded-2xl border border-[#00d4ff]/20 backdrop-blur-sm bg-[#1e293b] p-6 flex flex-col items-center h-fit sticky top-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#00d4ff]/10">
            <div className="relative mb-6 group">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#0099cc] p-1.5">
                <div className="w-full h-full rounded-full bg-[#0f172a] p-1.5">
                  <div 
                    className="w-full h-full rounded-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105" 
                    style={{ 
                      backgroundImage: `url(${profileData.profileImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  ></div>
                </div>
              </div>
              <button 
                className="absolute -bottom-1 right-1 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] text-[#0f172a] p-2.5 rounded-full hover:scale-110 transition-all duration-300 shadow-lg shadow-[#00d4ff]/20"
                onClick={() => {/* Handle image upload */}}
              >
                <FiEdit2 size={18} className="shrink-0" />
              </button>
            </div>
            <h2 className="text-2xl font-bold text-white mt-4 text-center">{profileData.handle}</h2>
            <p className="text-[#94a3b8] text-sm mb-6 flex items-center mt-1">
              <FiGlobe className="mr-1.5" size={14} />
              {profileData.country}
            </p>
            
            <div className="w-full bg-[#0f172a]/50 rounded-xl p-5 mb-6 space-y-3 border border-[#1e3a8a]/30">
              <div className="flex justify-between items-center">
                <span className="text-[#94a3b8] text-sm font-medium">Member Since</span>
                <span className="text-white font-medium">{profileData.memberSince}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#94a3b8] text-sm font-medium">Last Active</span>
                <span className="text-white font-medium">{profileData.lastActive}</span>
              </div>
              <div className="pt-3 mt-3 border-t border-[#1e3a8a]/30">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#94a3b8]">Account Status</span>
                  <span className="px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium">
                    Active
                  </span>
                </div>
              </div>
            </div>
            
            <button className="w-full group relative overflow-hidden bg-gradient-to-r from-[#00d4ff] to-[#0099cc] hover:from-[#00b8e6] hover:to-[#0077a3] text-[#0f172a] font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center">
              <span className="relative z-10 flex items-center">
                <span>Upgrade to Pro</span>
                <span className="ml-2 text-xs bg-[#0f172a]/20 px-2.5 py-1 rounded-full font-semibold">
                  PRO
                </span>
              </span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>
        
        <div className="lg:col-span-3 space-y-6">
          {/* Profile Information */}
          <div className="rounded-2xl border border-[#00d4ff]/20 backdrop-blur-sm bg-[#1e293b]">
            <div className="p-6 border-b border-[#00d4ff]/20">
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-[#00d4ff]/10 mr-3">
                  <FiUser className="text-[#00d4ff]" size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Profile Information</h2>
                  <p className="text-sm text-[#94a3b8] mt-1">Update your personal details and contact information</p>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleProfileUpdate} className="p-6 pt-4 space-y-6">
              {/* Handle */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                  Handle
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={profileData.handle}
                    onChange={(e) => setProfileData({...profileData, handle: e.target.value})}
                    className="w-full bg-[#0f172a] border border-[#1e3a8a]/30 rounded-xl px-4 py-3 text-white placeholder-[#64748b] focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff]/50 transition-all duration-200 hover:border-[#00d4ff]/40"
                    placeholder="Enter your handle"
                  />
                  <Icon icon={FiEdit2} size="sm" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#94a3b8]" />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                  Email
                </label>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                  className="w-full bg-[#0f172a] border border-[#1e3a8a]/30 rounded-xl px-4 py-3 text-white placeholder-[#64748b] focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff]/50 transition-all duration-200 hover:border-[#00d4ff]/40"
                  placeholder="Enter your email"
                />
              </div>

              {/* Bio */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                  Bio
                </label>
                <textarea
                  value={profileData.bio}
                  onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                  rows={3}
                  className="w-full bg-[#0f172a] border border-[#1e3a8a]/30 rounded-xl px-4 py-3 text-white placeholder-[#64748b] focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff]/50 transition-all duration-200 hover:border-[#00d4ff]/40 resize-none min-h-[120px]"
                  placeholder="Tell us about yourself"
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                  Country
                </label>
                <select
                  value={profileData.country}
                  onChange={(e) => setProfileData({...profileData, country: e.target.value})}
                  className="w-full bg-[#0f172a] border border-[#1e3a8a]/30 rounded-xl px-4 py-3 text-white focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff]/50 transition-all duration-200 hover:border-[#00d4ff]/40"
                >
                  {countries.map((country) => (
                    <option key={country} value={country} className="bg-[#0f172a]">
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={profileData.phoneNumber}
                  onChange={(e) => setProfileData({...profileData, phoneNumber: e.target.value})}
                  className="w-full bg-[#0f172a] border border-[#1e3a8a]/30 rounded-xl px-4 py-3 text-white placeholder-[#64748b] focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff]/50 transition-all duration-200 hover:border-[#00d4ff]/40"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Update Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-[#00d4ff] to-[#0099cc] hover:from-[#00b8e6] hover:to-[#0077a3] text-[#0f172a] font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#00d4ff]/20"
                >
                  Update Profile
                </button>
              </div>
            </form>
          </div>

          {/* Change Password */}
          <div className="rounded-2xl border border-[#00d4ff]/20 backdrop-blur-sm bg-[#1e293b]">
            <div className="p-6 border-b border-[#00d4ff]/20">
              <h2 className="text-xl font-bold text-white">Security Settings</h2>
            </div>
            
            <form onSubmit={handlePasswordChange} className="p-6 space-y-6">
              {/* Current Password */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={showCurrentPassword ? 'text' : 'password'}
                    value={passwordData.currentPassword}
                    onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                    className="w-full bg-[#0f172a] border border-[#334155] rounded-lg px-4 py-3 pr-12 text-white placeholder-[#64748b] focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-colors"
                    placeholder="Enter current password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#94a3b8] cursor-pointer hover:text-white transition-colors"
                  >
                    <Icon icon={showCurrentPassword ? FiEyeOff : FiEye} size="sm" />
                  </button>
                </div>
              </div>

              {/* New Password */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showNewPassword ? 'text' : 'password'}
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                    className="w-full bg-[#0f172a] border border-[#334155] rounded-lg px-4 py-3 pr-12 text-white placeholder-[#64748b] focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-colors"
                    placeholder="Enter new password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#94a3b8] cursor-pointer hover:text-white transition-colors"
                  >
                    <Icon icon={showNewPassword ? FiEyeOff : FiEye} size="sm" />
                  </button>
                </div>
              </div>

              {/* Confirm New Password */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={passwordData.confirmPassword}
                    onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                    className="w-full bg-[#0f172a] border border-[#334155] rounded-lg px-4 py-3 pr-12 text-white placeholder-[#64748b] focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-colors"
                    placeholder="Confirm new password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#94a3b8] cursor-pointer hover:text-white transition-colors"
                  >
                    <Icon icon={showConfirmPassword ? FiEyeOff : FiEye} size="sm" />
                  </button>
                </div>
              </div>

              {/* Save Changes Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-[#00d4ff] to-[#0099cc] hover:from-[#00b8e6] hover:to-[#0077a3] text-[#0f172a] font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#00d4ff]/20"
                >
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;