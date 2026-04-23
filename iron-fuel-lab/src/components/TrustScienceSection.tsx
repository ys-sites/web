import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TestTube, Leaf, Award } from 'lucide-react';
import BlurText from './BlurText';

const BADGES = [
  {
    icon: TestTube,
    title: "Triple Evaluated",
    desc: "Rigorous 3rd-party batch tested"
  },
  {
    icon: ShieldCheck,
    title: "GMP Certified",
    desc: "Milled in FDA registered facilities"
  },
  {
    icon: Leaf,
    title: "Bioavailable",
    desc: "100% Non-GMO & ultra-extracted"
  },
  {
    icon: Award,
    title: "Clinical Dosage",
    desc: "Zero prop blends, zero fillers"
  }
];

export default function TrustScienceSection() {
  return (
    <section className="bg-[#f2f6f2] py-24 md:py-32 border-y border-[#4ca735]/10 relative overflow-hidden">
      {/* Subtle organic background mesh */}
      <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #4ca735 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-[85rem] mx-auto w-full px-4 md:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-24"
        >
          <div className="lg:w-[40%] text-center lg:text-left">
            <BlurText 
               text="Formulated For Physiology"
               direction="bottom"
               className="text-[#1a2f1c] text-3xl md:text-4xl lg:text-[2.75rem] font-black uppercase tracking-tighter mb-6 italic leading-[0.95]"
            />
            <BlurText 
               text="We bridge the gap between high-performance longevity protocols and commercial availability. Pure science, no compromises."
               direction="bottom"
               delay={300}
               className="text-[#59685e] font-medium text-lg lg:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 font-serif italic"
            />
          </div>

          <div className="lg:w-[60%] grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 w-full">
            {BADGES.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-[2.25rem] bg-white border border-[#4ca735]/10 flex items-center justify-center text-[#4ca735] mb-6 group-hover:bg-[#4ca735] group-hover:text-white transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h4 className="text-[#1a2f1c] font-black text-sm md:text-base tracking-widest mb-2 uppercase">{badge.title}</h4>
                  <p className="text-[#59685e] text-xs md:text-sm font-medium leading-relaxed max-w-[160px]">{badge.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
