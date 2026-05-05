import { motion } from "motion/react";
import { Search, Megaphone, Smartphone, Youtube, Globe, Mail, BarChart3, ShieldCheck, Zap } from "lucide-react";

const services = [
  { icon: Search, title: "SEO", desc: "Bring your business to page one with tailored internet marketing services." },
  { icon: Megaphone, title: "PPC", desc: "Pay Per Click advertising to generate high-quality leads instantly." },
  { icon: Globe, title: "Social Media", desc: "Strategic social media marketing to build your brand presence." },
  { icon: Youtube, title: "YouTube Marketing", desc: "Engaging video content strategies for the world's largest video platform." },
  { icon: Smartphone, title: "ASO", desc: "App Store Optimization to drive organic downloads for your mobile app." },
  { icon: BarChart3, title: "Brand Management", desc: "Complete brand protection and reputation management services." },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-ink text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-[1px] w-20 bg-brand" />
            <span className="text-brand font-heading text-sm font-bold uppercase tracking-[0.3em]">Our Services</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display uppercase leading-none"
          >
            Tailored <br /> <span className="text-brand">Solutions</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-white/10 border border-white/10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ backgroundColor: "rgba(242, 125, 38, 0.1)" }}
              className="bg-ink p-12 group relative overflow-hidden transition-colors cursor-default border-white/5 border"
            >
              <div className="relative z-10">
                <service.icon className="w-12 h-12 text-brand mb-8 transition-transform group-hover:scale-110 group-hover:-rotate-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-heading font-bold mb-4 uppercase tracking-tighter">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed font-light">{service.desc}</p>
                
                <motion.div className="mt-8 flex items-center gap-2 text-brand text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <Zap size={10} />
                </motion.div>
              </div>

              {/* Grid number */}
              <div className="absolute top-8 right-8 text-white/5 font-display text-6xl select-none">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Stats = () => {
  return (
    <section className="py-24 px-6 bg-paper border-b border-ink/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <div className="flex-1">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tighter leading-[0.9] mb-8"
          >
            Trusted by <span className="text-brand">1450+</span> clients <br /> worldwide since 2012
          </motion.h3>
          <p className="text-ink/60 text-lg font-light mb-10 leading-relaxed italic">
            "Performance Marketing isn't just about ads, it's about measurable growth and strategic dominance in your market."
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-4xl font-display text-brand">12+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-ink/40">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-display text-brand">98%</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-ink/40">Client Retention</div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 relative">
          <motion.div 
            initial={{ rotate: 10, scale: 0.9, opacity: 0 }}
            whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
            className="aspect-square bg-ink p-1 rounded-2xl relative shadow-2xl"
          >
             <div className="w-full h-full bg-[#1A1A1A] rounded-xl flex items-center justify-center overflow-hidden relative">
                {/* Visualizer effect */}
                <div className="flex gap-1 items-end h-32">
                   {[...Array(20)].map((_, i) => (
                     <motion.div
                       key={i}
                       animate={{ height: [20, Math.random() * 80 + 20, 20] }}
                       transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                       className="w-1 bg-brand/30"
                     />
                   ))}
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                   <div className="text-brand/20 font-display text-[120px] select-none">DATA</div>
                </div>
                <div className="absolute bottom-6 left-6 text-white/40 text-[10px] font-mono tracking-tighter">
                   SYSTEM_BOOT: TRUE <br />
                   GROWTH_METRICS: SCANNING...
                </div>
             </div>
          </motion.div>
          {/* Floating tag */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-4 -left-4 bg-brand text-white px-6 py-4 rounded-xl shadow-xl shadow-brand/20 font-heading font-extrabold rotate-[-5deg]"
          >
             #1 ROI DRIVEN
          </motion.div>
        </div>
      </div>
    </section>
  );
};
