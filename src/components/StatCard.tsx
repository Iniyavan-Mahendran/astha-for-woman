import { motion } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const StatCard = ({ value, label, icon }: StatCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center p-6"
  >
    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary text-primary mb-4">
      {icon}
    </div>
    <div className="font-display text-3xl md:text-4xl font-bold text-primary">{value}</div>
    <div className="text-muted-foreground mt-1">{label}</div>
  </motion.div>
);

export default StatCard;
