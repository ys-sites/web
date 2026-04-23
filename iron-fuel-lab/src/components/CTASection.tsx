import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import BlurText from './BlurText';

export default function CTASection() {
  return (
    <section className="bg-black py-32 px-4 md:px-8 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-full max-w-4xl h-[400px] bg-gradient-to-r from-[#4ca735]/20 via-transparent to-[#06b6d4]/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#111111] border border-white/10 p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] shadow-2xl text-center relative overflow-hidden"
        >
          {/* Ashwagandha background image — blurred */}
          <img
            src="/Ashwagandha.jpeg"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
            style={{ filter: 'blur(4px)', transform: 'scale(1.08)', opacity: 0.75 }}
          />
          {/* Dark overlay to keep text legible */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/55 pointer-events-none" />
          {/* Subtle noise/texture overlay */}
          <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

          <BlurText
            text="Optimize Your Output."
            direction="bottom"
            className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-4 justify-center"
          />
          <BlurText
            text="Join thousands of high-performers optimizing their health and potential. Get 15% off your first Iron Fuel Lab protocol."
            direction="bottom"
            delay={300}
            className="text-lg md:text-xl text-[#9faaa2] mb-10 max-w-2xl mx-auto font-medium justify-center"
          />

          <form className="max-w-md mx-auto relative group flex gap-2 w-full flex-col sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                placeholder="Enter your email address"
                className="block w-full pl-12 pr-4 py-4 md:py-5 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4ca735] focus:border-transparent transition-all backdrop-blur-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-3 sm:mt-0 px-8 py-4 md:py-5 bg-white hover:bg-gray-100 text-black rounded-2xl font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 whitespace-nowrap active:scale-95 shrink-0"
            >
              Get Access
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
          <p className="text-xs text-white/30 mt-6 font-medium">Safe, secure, and spam-free. Unsubscribe anytime.</p>
        </motion.div>
      </div>
    </section>
  );
}
