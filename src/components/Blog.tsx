import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const posts = [
  { 
    tag: "SEO Strategy",
    title: "Turn Organic Traffic into High-Quality Leads", 
    desc: "Advanced tactics to optimize your conversion funnel for organic search.",
    date: "2026-05-01"
  },
  { 
    tag: "AI & Future",
    title: "Mastering Generative Engine Optimization (GEO)", 
    desc: "How to dominate AI search and generative answers in 2026.",
    date: "2026-04-15"
  },
  { 
    tag: "Performance",
    title: "High-Quality Leads via Performance Marketing", 
    desc: "Data-driven strategies for Indian businesses to scale rapidly.",
    date: "2026-03-30"
  },
];

export const Blog = () => {
  return (
    <section className="py-24 px-6 bg-paper border-t border-ink/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <span className="text-brand font-bold uppercase tracking-[0.3em] text-[10px]">News & Insights</span>
            <h2 className="text-5xl font-display uppercase mt-4">Latest <span className="text-brand">Strategy</span></h2>
          </div>
          <button className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group border-b border-ink/20 pb-1 hover:border-brand transition-colors">
            Read all insights <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video bg-ink mb-6 overflow-hidden rounded-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/40 to-blue-500/20 mix-blend-overlay group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-[8px] font-bold uppercase tracking-widest rounded-full border border-white/10">
                    {post.tag}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-ink/40 text-[10px] font-bold uppercase tracking-widest mb-4">
                <span>AP Web World</span>
                <span className="w-1 h-1 bg-brand rounded-full" />
                <span>{post.date}</span>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-brand transition-colors leading-tight uppercase tracking-tighter">
                {post.title}
              </h3>
              <p className="text-ink/60 text-sm font-light line-clamp-2">{post.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
