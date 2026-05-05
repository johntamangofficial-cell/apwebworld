import { Navbar, Hero } from "./components/Navigation";
import { Services, Stats } from "./components/ContentSections";
import { Marquee, Footer } from "./components/Footer";
import { Blog } from "./components/Blog";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand z-[60] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Stats />
        <section id="about" className="py-24 px-6 bg-white relative overflow-hidden">
           <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                 <div className="relative">
                    <motion.div 
                      initial={{ opacity: 0, rotate: -5 }}
                      whileInView={{ opacity: 1, rotate: 0 }}
                      className="aspect-[4/5] bg-ink rounded-3xl overflow-hidden shadow-2xl relative z-10"
                    >
                       <div className="w-full h-full bg-gradient-to-br from-brand/20 to-blue-500/20 flex flex-col items-center justify-center p-12 text-center">
                          <h4 className="text-white/20 font-display text-[150px] leading-none mb-0 select-none">12+</h4>
                          <p className="text-white font-heading text-2xl font-bold uppercase tracking-tighter -mt-10">Years of Digital Dominance</p>
                       </div>
                    </motion.div>
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-ink/5 rounded-full -z-10" />
                    <div className="absolute -top-10 -left-10 w-40 h-40 border border-brand/20 rounded-full -z-10" />
                 </div>
                 
                 <div>
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="inline-flex items-center gap-4 mb-8"
                    >
                       <span className="text-brand font-bold uppercase tracking-[0.3em] text-xs">Why Partner With Us?</span>
                    </motion.div>
                    <h2 className="text-5xl md:text-6xl font-display uppercase leading-none mb-10">
                      We Don't Just Rank. <br /> <span className="text-brand text-6xl md:text-8xl">We Rule.</span>
                    </h2>
                    <div className="space-y-8">
                       {[
                         { t: "Expertise", d: "A dedicated team of 50+ digital veterans specializing in performance marketing." },
                         { t: "Strategy", d: "Tailored internet marketing services built for high-quality lead generation." },
                         { t: "Results", d: "1450+ successful client journeys across various industry verticals." }
                       ].map((item, i) => (
                         <motion.div 
                           key={i}
                           initial={{ opacity: 0, y: 10 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           transition={{ delay: i * 0.2 }}
                           className="flex gap-6 pb-8 border-b border-ink/5"
                         >
                            <span className="font-display text-4xl text-brand/20">0{i+1}</span>
                            <div>
                               <h5 className="font-heading font-bold text-lg uppercase tracking-tight mb-2">{item.t}</h5>
                               <p className="text-ink/60 font-light text-sm">{item.d}</p>
                            </div>
                         </motion.div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>
        <Blog />
      </main>
      <Footer />
    </div>
  );
}


