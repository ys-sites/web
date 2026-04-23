import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Plus, Minus, ArrowRight, ShieldCheck } from 'lucide-react';

interface SlideOutCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SlideOutCart({ isOpen, onClose }: SlideOutCartProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 cursor-pointer"
          />

          {/* Cart Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[60] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-2xl font-black italic tracking-tighter text-[#1a2f1c] flex items-center gap-2">
                <ShoppingBag className="w-6 h-6" /> YOUR CART
              </h2>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items (Mocked for UI) */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="flex gap-4 p-4 bg-[#f4f7f4] rounded-2xl border border-[#eaf0ec]">
                <div className="w-20 h-24 bg-[#e2eadc] rounded-xl overflow-hidden shrink-0">
                  <img src="/Ashwagandha.jpeg?v=2" alt="Ashwagandha" className="w-full h-full object-cover mix-blend-multiply" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-[#1a2f1c] leading-tight">ZenFuel Ashwagandha</h4>
                      <p className="text-xs text-[#59685e] font-medium mt-1">Stress & Recovery</p>
                    </div>
                    <button className="text-gray-400 hover:text-red-500"><X className="w-4 h-4" /></button>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center gap-3 bg-white rounded-lg px-2 py-1 shadow-sm border border-gray-100">
                      <button className="text-gray-400 hover:text-black"><Minus className="w-3 h-3" /></button>
                      <span className="text-sm font-bold w-4 text-center">1</span>
                      <button className="text-gray-400 hover:text-black"><Plus className="w-3 h-3" /></button>
                    </div>
                    <span className="font-bold text-[#1a2f1c]">$34.99</span>
                  </div>
                </div>
              </div>

              {/* Subscribe & Save Block */}
              <div className="border border-[#4ca735]/30 bg-[#4ca735]/5 rounded-2xl p-4 mt-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#4ca735] text-white text-[10px] uppercase font-bold px-2 py-1 rounded-bl-lg">
                  Recommended
                </div>
                <h5 className="font-bold text-[#2b4224] flex items-center gap-2 text-sm mb-2">
                  <ShieldCheck className="w-4 h-4 text-[#4ca735]" /> Upgrade to Subscribe & Save
                </h5>
                <p className="text-xs text-[#59685e] mb-3 leading-relaxed">
                  Lock in a 15% discount and get free shipping on every order. Cancel anytime.
                </p>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="subscribe" className="w-4 h-4 text-[#4ca735] rounded border-gray-300 focus:ring-[#4ca735]" defaultChecked />
                  <label htmlFor="subscribe" className="text-sm font-semibold text-[#1a2f1c] cursor-pointer">
                    Subscribe Monthly ($29.74/mo)
                  </label>
                </div>
              </div>

              {/* Upsell Cross-Sell */}
              <div className="border-t border-gray-100 pt-6 mt-6">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Complete Your Stack</h4>
                <div className="flex items-center justify-between bg-white border border-gray-100 rounded-xl p-3 shadow-sm hover:border-[#eab300]/50 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3 relative">
                    {/* Tiny glowing dot indicator */}
                    <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-[#eab300] shadow-[0_0_8px_#eab300]" />
                    <div className="w-12 h-12 bg-[#f4ebd0] rounded-lg overflow-hidden shrink-0">
                      <img src="/NeuroFuel.png" alt="NeuroFuel" className="w-full h-full object-cover mix-blend-multiply scale-125" />
                    </div>
                    <div>
                      <h5 className="font-bold text-[#1a2f1c] text-sm">NeuroFuel Mini</h5>
                      <span className="text-[#eab300] font-bold text-xs">+ $14.99 <span className="line-through text-gray-300 ml-1 font-normal">$24.99</span></span>
                    </div>
                  </div>
                  <button className="bg-gray-100 group-hover:bg-[#eab300] text-gray-600 group-hover:text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-colors">
                    Add
                  </button>
                </div>
              </div>
            </div>

            {/* Footer / Checkout */}
            <div className="p-6 bg-white border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-20">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-500 font-medium">Subtotal</span>
                <span className="text-xl font-bold text-[#1a2f1c]">$29.74</span>
              </div>
              <p className="text-xs text-[#4ca735] font-semibold text-center mb-4 bg-[#4ca735]/10 py-1.5 rounded-full inline-block w-full">
                You're saving $5.25 with Subscribe & Save!
              </p>
              <button className="w-full bg-[#1a2f1c] hover:bg-black text-white py-4 rounded-2xl font-bold tracking-wide flex justify-center items-center gap-2 transition-all shadow-xl active:scale-[0.98]">
                Checkout Securely <ArrowRight className="w-5 h-5" />
              </button>
              <div className="flex justify-center items-center gap-4 mt-4 opacity-50 grayscale select-none">
                 {/* Fake Trust Badges */}
                 <div className="flex gap-1 text-[10px] font-bold items-center"><ShieldCheck className="w-3 h-3"/> SSL SECURE</div>
                 <div className="flex gap-1 text-[10px] font-bold items-center"><ShieldCheck className="w-3 h-3"/> GUARANTEE</div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
