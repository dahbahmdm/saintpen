import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  className?: string;
}

const SectionHeading = ({ label, title, className = "" }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`mb-10 md:mb-14 ${className}`}
  >
    {label && (
      <span className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-2 block">
        {label}
      </span>
    )}
    <h2 className="text-3xl md:text-5xl font-bold">{title}</h2>
  </motion.div>
);

export default SectionHeading;
