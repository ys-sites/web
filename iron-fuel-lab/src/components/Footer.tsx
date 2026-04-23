import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0f0b] pt-20 pb-12 border-t border-white/10 px-4 md:px-8">
      <div className="max-w-[85rem] mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-white text-3xl font-black tracking-tighter mb-4 italic uppercase leading-[0.85]">IRON FUEL<br/>LAB.</h3>
            <p className="text-[#9faaa2] text-xs leading-relaxed mb-6 font-medium max-w-[220px]">
              Advanced, medical-grade formulas engineered for high-performers seeking absolute peak results.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:text-black transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:text-black transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-widest uppercase text-[11px] mb-7 text-white/90">Shop</h4>
            <ul className="space-y-4 text-white/40 text-sm font-medium">
              <li><button onClick={() => scrollTo('products-section')} className="hover:text-white transition-colors cursor-pointer">All Products</button></li>
              <li><button onClick={() => scrollTo('products-section')} className="hover:text-white transition-colors cursor-pointer">Performance</button></li>
              <li><button onClick={() => scrollTo('products-section')} className="hover:text-white transition-colors cursor-pointer">Recovery</button></li>
              <li><button onClick={() => scrollTo('products-section')} className="hover:text-white transition-colors cursor-pointer">Protocols</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-widest uppercase text-[11px] mb-7 text-white/90">Quick Links</h4>
            <ul className="space-y-4 text-white/40 text-[13px] font-medium">
              <li><button onClick={() => scrollTo('products-section')} className="hover:text-white transition-colors cursor-pointer">Our Products</button></li>
              <li><button onClick={() => scrollTo('about-section')} className="hover:text-white transition-colors cursor-pointer">Product Specs</button></li>
              <li><button onClick={() => scrollTo('testimonials')} className="hover:text-white transition-colors cursor-pointer">Testimonials</button></li>
              <li><button onClick={() => scrollTo('faq')} className="hover:text-white transition-colors cursor-pointer">FAQ</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-widest uppercase text-[11px] mb-7 text-white/90">Support</h4>
            <ul className="space-y-4 text-white/40 text-sm font-medium">
              <li><button onClick={() => scrollTo('faq')} className="hover:text-white transition-colors cursor-pointer">FAQ</button></li>
              <li><a href="mailto:support@ironfuellab.com" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="tel:+18005551234" className="hover:text-white transition-colors">+1 (800) 555-1234</a></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/30 text-xs font-medium gap-4">
          <p>© {new Date().getFullYear()} Iron Fuel Lab. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
