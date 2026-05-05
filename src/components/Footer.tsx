import { motion } from "motion/react";
import { Instagram, Twitter, Linkedin, Facebook, ArrowUpRight } from "lucide-react";

const brands = [
  "GOOGLE PREMIER PARTNER", "META MARKETING PARTNER", "SHOPIFY PLUS", "HUBSPOT GOLD", "TIKTOK ADS", "FORBES", "TECHCRUNCH", "Y COMBINATOR"
];

export const Marquee = () => {
  return (
    <div className="py-12 bg-ink overflow-hidden border-y border-white/5">
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div 
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center px-10"
        >
          {Array(2).fill(brands).flat().map((brand, i) => (
            <span key={i} className="text-white/20 font-heading font-extrabold text-2xl md:text-3xl uppercase tracking-tighter hover:text-brand transition-colors cursor-default">
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-ink text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-6xl font-display uppercase mb-8 leading-none">
              Let's build <br /> <span className="text-brand">Something Great</span>
            </h2>
            <p className="text-white/40 max-w-sm font-light mb-8">
              Transforming businesses through intelligent marketing and high-performance strategies. 
              Based in India, serving the world.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                <motion.a 
                  key={i} 
                  href="#" 
                  whileHover={{ y: -5, color: "#F27D26" }}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-white/30 mb-8">Quick Links</h4>
            <ul className="space-y-4 font-heading text-sm uppercase tracking-tighter">
              <li><a href="#" className="hover:text-brand transition-colors flex items-center gap-2 group">SEO Strategies <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /></a></li>
              <li><a href="#" className="hover:text-brand transition-colors flex items-center gap-2 group">AI Search Guide <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /></a></li>
              <li><a href="#" className="hover:text-brand transition-colors flex items-center gap-2 group">Success Stories <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /></a></li>
              <li><a href="#" className="hover:text-brand transition-colors flex items-center gap-2 group">Contact Us <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /></a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-white/30 mb-8">Get In Touch</h4>
            <div className="space-y-6">
              <div className="font-heading text-xl font-bold tracking-tighter">
                hello@apwebworld.com
              </div>
              <div className="text-white/40 text-sm font-light">
                Plot No. 12, Sector 18, <br />
                Gurugram, Haryana <br />
                122015, India
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-white/20">
          <div>© 2026 AP WEB WORLD. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
