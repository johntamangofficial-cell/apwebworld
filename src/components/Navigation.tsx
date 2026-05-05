import { motion } from "motion/react";
import { ArrowRight, BarChart3, Globe, Megaphone, Search, Youtube, Smartphone, Mail, ShieldCheck } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-paper/30 border-b border-ink/5">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center">
          <span className="text-white font-display text-lg">A</span>
        </div>
        <span className="font-heading font-bold text-xl tracking-tight uppercase">AP WEB WORLD</span>
      </div>
      <div className="hidden md:flex gap-8 items-center text-xs font-semibold tracking-widest uppercase">
        <a href="#services" className="hover:text-brand transition-colors">Services</a>
        <a href="#about" className="hover:text-brand transition-colors">About</a>
        <a href="#cases" className="hover:text-brand transition-colors">Cases</a>
        <button className="px-5 py-2 bg-ink text-white rounded-full hover:bg-brand transition-all flex items-center gap-2 group text-[10px]">
          STRATEGY CALL <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </nav>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden">
      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-10 w-40 h-40 bg-brand/10 rounded-full blur-3xl -z-10"
      />
      <motion.div 
        animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-10 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-7xl w-full text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="mb-6"
        >
          <span className="inline-block py-1 px-3 bg-brand/10 text-brand rounded-full text-[10px] font-bold tracking-[0.2em] uppercase">
            ESTABLISHED 2012 • 1450+ CLIENTS
          </span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative inline-block"
        >
          <h1 className="font-display text-[15vw] leading-[0.8] tracking-tighter uppercase mb-4 mix-blend-multiply">
            Creative <br /> <span className="text-brand">Growth</span>
          </h1>
          <div className="absolute -top-4 -right-8 md:-right-12">
             <motion.div
               animate={{ rotate: 360 }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               className="w-16 h-16 md:w-24 md:h-24 border border-ink/10 rounded-full flex items-center justify-center text-[8px] md:text-[10px] font-bold uppercase p-2 text-center"
             >
                Digital Marketing Agency
             </motion.div>
          </div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-ink/60 font-light mt-8"
        >
          The performance and growth you need. Smart marketing for a smarter business. 
          Bringing your business to page one with tailored internet marketing services.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <button className="w-full md:w-auto px-8 py-4 bg-ink text-white rounded-full font-heading font-bold text-sm tracking-widest uppercase hover:bg-brand transition-colors">
            Get a Free Strategy Call
          </button>
          <button className="w-full md:w-auto px-8 py-4 border border-ink/20 rounded-full font-heading font-bold text-sm tracking-widest uppercase hover:bg-ink hover:text-white transition-all">
            See Our Work
          </button>
        </motion.div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {[BarChart3, ShieldCheck, Globe, Search].map((Icon, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.2, 0],
              x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
              y: [Math.random() * 100 - 50, Math.random() * 100 - 50]
            }}
            transition={{ 
              duration: 5 + i * 2, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 1
            }}
            style={{ 
              position: 'absolute', 
              top: `${20 + i * 20}%`, 
              left: `${10 + i * 25}%` 
            }}
            className="text-brand"
          >
            <Icon size={48} strokeWidth={1} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
