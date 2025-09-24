'use client';

import { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  // Interactive state for live updates
  const [totalValue, setTotalValue] = useState(47832.50);
  const [btcAmount, setBtcAmount] = useState(1.247);
  const [growth24h, setGrowth24h] = useState(12.4);
  const [lastTrade, setLastTrade] = useState(0.0234);
  const [activeTraders, setActiveTraders] = useState(12);
  const [livePrice, setLivePrice] = useState(35045.80);

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate price fluctuations
      setTotalValue(prev => prev + (Math.random() - 0.5) * 100);
      setBtcAmount(prev => prev + (Math.random() - 0.5) * 0.001);
      setGrowth24h(prev => Math.max(0, prev + (Math.random() - 0.5) * 0.5));
      setLastTrade(prev => prev + (Math.random() - 0.5) * 0.001);
      setActiveTraders(prev => Math.max(8, Math.min(15, prev + Math.floor((Math.random() - 0.5) * 2))));
      setLivePrice(prev => prev + (Math.random() - 0.5) * 50);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
      {/* Simple background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Static gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-10" 
             style={{ background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl opacity-8" 
             style={{ background: 'radial-gradient(circle, #0099cc 0%, transparent 70%)' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
          
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8">
            {/* Main Headline */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                  TAP.
                  <br />
                  <span className="relative">
                    EARN.
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] rounded-full"></div>
                  </span>
                  <br />
                  REPEAT.
                </h1>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-black leading-tight relative" style={{ 
                background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 50%, #00d4ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '200% 200%',
                animation: 'gradient 3s ease infinite'
              }}>
                Mine Rewards
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#00d4ff]/30 rounded-full animate-ping"></div>
              </h2>
              
              <h3 className="text-2xl lg:text-3xl font-semibold text-slate-300">
                Backed by Pro Traders.
              </h3>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              FastFit is built for beginners and powered by pro traders. Choose from flexible 
              plans, tap daily to mine, bet earn rewards, gain, and reward because it&apos;s simple 
              to use and profitable to earn.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 border border-[#00d4ff]/20 relative overflow-hidden group"
                style={{ 
                  background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                  color: '#0f172a'
                }}
              >
                <span className="relative z-10">Start Mining Now</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              <button 
                className="border-2 text-slate-300 font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 hover:text-[#0f172a] hover:scale-105 relative overflow-hidden group"
                style={{ borderColor: '#00d4ff' }}
              >
                <span className="relative z-10">See Pros</span>
                <div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                     style={{ background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)' }}></div>
              </button>
            </div>
          </div>

          {/* Right Visual - Professional Trading Dashboard */}
          <div className="relative flex justify-center items-center lg:justify-end">
            <div className="relative w-full max-w-xl lg:max-w-2xl">
              
              {/* Main Professional Dashboard */}
              <div className="relative bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-[#00d4ff]/20 shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500 hover:shadow-[#00d4ff]/10">
                
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 px-6 py-4 border-b border-[#00d4ff]/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#00d4ff] to-[#0099cc] rounded-lg flex items-center justify-center shadow-lg">
                        <span className="text-slate-900 font-bold text-sm">₿</span>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm">Portfolio Overview</h3>
                        <p className="text-slate-300 text-xs">Professional Trading Dashboard</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#00d4ff] rounded-full animate-pulse"></div>
                      <span className="text-[#00d4ff] text-xs font-medium tracking-wide">LIVE</span>
                    </div>
                  </div>
                </div>

                {/* Portfolio Stats */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-800/60 rounded-lg p-4 border border-[#00d4ff]/10 transition-all duration-500 hover:border-[#00d4ff]/30 hover:bg-slate-800/80">
                      <div className="text-slate-300 text-xs mb-1 font-medium">Total Portfolio</div>
                      <div className="text-white text-xl font-bold transition-all duration-300 tracking-tight">
                        ${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </div>
                      <div className={`text-xs flex items-center gap-1 mt-1 transition-colors duration-300 ${growth24h > 10 ? 'text-[#00d4ff]' : 'text-slate-400'}`}>
                        <span className="animate-pulse">{growth24h > 10 ? '↗' : '↘'}</span> 
                        +{growth24h.toFixed(1)}% (24h)
                      </div>
                    </div>
                    <div className="bg-slate-800/60 rounded-lg p-4 border border-[#00d4ff]/10 transition-all duration-500 hover:border-[#00d4ff]/30 hover:bg-slate-800/80">
                      <div className="text-slate-300 text-xs mb-1 font-medium">BTC Holdings</div>
                      <div className="text-[#00d4ff] text-xl font-bold transition-all duration-300 tracking-tight">
                        {btcAmount.toFixed(3)} BTC
                      </div>
                      <div className="text-slate-400 text-xs mt-1 transition-all duration-300">
                        ≈ ${(btcAmount * livePrice).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                      </div>
                    </div>
                  </div>

                  {/* Professional Chart */}
                  <div className="bg-slate-800/40 rounded-lg p-4 mb-6 border border-[#00d4ff]/15 hover:border-[#00d4ff]/25 transition-all duration-300">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white text-sm font-semibold tracking-wide">BTC/USD</span>
                      <span className="text-[#00d4ff] text-sm font-medium">+2.8%</span>
                    </div>
                    <div className="relative h-24">
                      <svg className="w-full h-full" viewBox="0 0 300 80">
                        <defs>
                          <linearGradient id="profitGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#00d4ff', stopOpacity: 0.3 }} />
                            <stop offset="100%" style={{ stopColor: '#00d4ff', stopOpacity: 0 }} />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,60 L50,45 L100,35 L150,25 L200,30 L250,20 L300,15"
                          stroke="#00d4ff"
                          strokeWidth="2.5"
                          fill="none"
                          className="drop-shadow-sm"
                        />
                        <path
                          d="M0,60 L50,45 L100,35 L150,25 L200,30 L250,20 L300,15 L300,80 L0,80 Z"
                          fill="url(#profitGradient)"
                        />
                      </svg>
                    </div>
                    <div className="text-slate-300 text-xs mt-2 font-medium">7-day performance trend</div>
                  </div>

                  {/* Trading Activity */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-3 transition-all duration-500 hover:bg-slate-800/40 rounded-lg px-3 border border-slate-700/10 hover:border-[#00d4ff]/20">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 bg-[#00d4ff]/20 rounded-full flex items-center justify-center animate-pulse shadow-sm">
                          <span className="text-[#00d4ff] text-sm font-bold">↗</span>
                        </div>
                        <div>
                          <div className="text-white text-sm font-semibold">BTC Buy Order</div>
                          <div className="text-slate-300 text-xs">Executed just now</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[#00d4ff] text-sm font-bold transition-all duration-300">
                          +{lastTrade.toFixed(4)} BTC
                        </div>
                        <div className="text-slate-300 text-xs transition-all duration-300">
                          ${(lastTrade * livePrice).toFixed(2)}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center py-3 transition-all duration-500 hover:bg-slate-800/40 rounded-lg px-3 border border-slate-700/10 hover:border-[#00d4ff]/20">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 bg-gradient-to-br from-[#00d4ff]/30 to-[#0099cc]/30 rounded-full flex items-center justify-center shadow-sm">
                          <span className="text-[#00d4ff] text-sm animate-spin">⚡</span>
                        </div>
                        <div>
                          <div className="text-white text-sm font-semibold">Auto Trading</div>
                          <div className="text-slate-300 text-xs">AI Strategy Active</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[#00d4ff] text-sm font-bold flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#00d4ff] rounded-full animate-pulse shadow-sm shadow-[#00d4ff]/50"></div>
                          Running
                        </div>
                        <div className="text-slate-300 text-xs transition-all duration-300">
                          {activeTraders} Pro Traders
                        </div>
                      </div>
                    </div>

                    {/* Live Price Ticker */}
                    <div className="flex justify-between items-center py-3 bg-slate-800/30 rounded-lg px-3 border border-[#00d4ff]/15 hover:border-[#00d4ff]/25 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-full flex items-center justify-center shadow-sm">
                          <span className="text-orange-400 text-sm font-bold">₿</span>
                        </div>
                        <div>
                          <div className="text-white text-sm font-semibold">BTC/USD</div>
                          <div className="text-slate-300 text-xs">Live Market Price</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white text-sm font-bold transition-all duration-300">
                          ${livePrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </div>
                        <div className="text-[#00d4ff] text-xs animate-pulse font-medium">+2.8%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle Professional Accents */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-orange-400/30 rounded-full animate-pulse delay-1000"></div>
              
              {/* Professional Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-orange-400/5 rounded-xl blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;