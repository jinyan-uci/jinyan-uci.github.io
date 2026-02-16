import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, delay = 0 }) => {
  return (
    <motion.section
      id={id}
      className={`py-12 md:py-16 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

export default Section;