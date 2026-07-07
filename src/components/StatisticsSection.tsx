import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: 5000, suffix: '+', label: 'Successful Trips' },
  { value: 500, suffix: '+', label: 'Corporate Clients' },
  { value: 4.9, suffix: '★', label: 'Customer Rating', isFloat: true },
  { value: 24, suffix: '/7', label: 'Support' },
];

function Counter({ value, isFloat = false }: { value: number, isFloat?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = 30;
      const step = (end / (duration / incrementTime));

      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {isFloat ? count.toFixed(1) : Math.floor(count)}
    </span>
  );
}

export function StatisticsSection() {
  return (
    <section className="py-20 bg-primary border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1920')] bg-fixed bg-center opacity-5" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading text-accent mb-2">
                <Counter value={stat.value} isFloat={stat.isFloat} />
                {stat.suffix}
              </div>
              <div className="text-textSecondary tracking-widest uppercase text-xs md:text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
