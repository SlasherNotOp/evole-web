'use client';

import React from 'react';

const WhyChoose: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 text-white overflow-hidden">
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="absolute top-[10%] right-[10%] w-48 h-48 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-[20%] left-[15%] w-36 h-36 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-3xl opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full blur-3xl opacity-40 animate-pulse delay-500"></div>
      </div>

      <section className="relative z-20 py-16 px-5 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-white via-purple-400 to-amber-400 bg-clip-text text-transparent leading-tight">
            Why Choose Evolve Media
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We don&apos;t just create campaigns—we build digital ecosystems that drive measurable growth for your business.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Affordable Card */}
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-amber-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-amber-400 to-pink-500 animate-spin rounded-2xl p-0.5">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl"></div>
                </div>
                <span className="relative z-10">💰</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">
                Affordable for Small Businesses
              </h3>
              
              <p className="text-slate-300 leading-relaxed mb-5">
                Premium digital marketing solutions designed specifically for small businesses. No hidden fees, no long-term contracts—just transparent pricing that delivers maximum ROI.
              </p>
              
              <div className="inline-block bg-gradient-to-r from-purple-500/20 to-amber-400/20 px-4 py-2 rounded-full text-sm font-semibold text-amber-400 border border-amber-400/30">
                Starting from ₹15,000/month
              </div>
            </div>
          </div>

          {/* Custom Content Card */}
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-amber-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-amber-400 to-pink-500 animate-spin rounded-2xl p-0.5">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl"></div>
                </div>
                <span className="relative z-10">🎯</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">
                Custom Content & Strategy
              </h3>
              
              <p className="text-slate-300 leading-relaxed mb-5">
                Every brand is unique, and so is our approach. We craft personalized content strategies that resonate with your audience and align with your business goals.
              </p>
              
              <div className="inline-block bg-gradient-to-r from-purple-500/20 to-amber-400/20 px-4 py-2 rounded-full text-sm font-semibold text-amber-400 border border-amber-400/30">
                100% Tailored Solutions
              </div>
            </div>
          </div>

          {/* Quick Turnaround Card */}
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden md:col-span-2 lg:col-span-1">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-amber-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-amber-400 to-pink-500 animate-spin rounded-2xl p-0.5">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl"></div>
                </div>
                <span className="relative z-10">⚡</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">
                Quick Turnaround & Local Support
              </h3>
              
              <p className="text-slate-300 leading-relaxed mb-5">
                Based in Maharashtra, we understand the local market. Get rapid responses, same-day support, and campaigns launched within 48-72 hours of approval.
              </p>
              
              <div className="inline-block bg-gradient-to-r from-purple-500/20 to-amber-400/20 px-4 py-2 rounded-full text-sm font-semibold text-amber-400 border border-amber-400/30">
                48-Hour Launch Guarantee
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              Ready to Accelerate Your Digital Growth?
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join 50+ businesses that have transformed their digital presence with Evolve Media
            </p>
            <a 
              href="#contact" 
              className="group inline-block bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/40 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <span className="relative">Let&apos;s Talk Growth →</span>
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(5deg); }
          66% { transform: translateY(10px) rotate(-5deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: -2s;
        }
        
        .animate-float-delayed-2 {
          animation: float 6s ease-in-out infinite;
          animation-delay: -4s;
        }
      `}</style>
    </div>
  );
};

export default WhyChoose;