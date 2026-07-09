import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

const faqs = [
  {
    question: 'Where do you offer pickup services?',
    answer: 'Urban Taxi operates exclusively from Nagpur. We provide pickup services from anywhere within Nagpur city limits, including the airport, railway station, hotels, and residential addresses. However, your drop-off destination can be anywhere in India.'
  },
  {
    question: 'Do you provide services outside Nagpur?',
    answer: 'While our journeys must originate in Nagpur, we offer outstation travel to any destination across Maharashtra and India.'
  },
  {
    question: 'What is included in the premium pricing?',
    answer: 'Our pricing includes the vehicle rental, professional chauffeur, fuel, and standard amenities (AC, audio system). Tolls and parking fees are calculated transparently. There are no hidden charges.'
  },
  {
    question: 'How are your vehicles sanitized?',
    answer: 'Every vehicle undergoes a rigorous deep-cleaning and sanitization process before and after each trip, ensuring a hygienic and safe environment for you and your family.'
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="pt-12 pb-16 md:py-24 bg-primary relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading text-white mb-6"
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/10 rounded-xl overflow-hidden bg-[#111]"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={cn(
                  "font-heading text-lg transition-colors",
                  openIndex === index ? "text-accent" : "text-white"
                )}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={cn(
                    "text-accent transition-transform duration-300",
                    openIndex === index ? "rotate-180" : ""
                  )} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-textSecondary font-light leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
