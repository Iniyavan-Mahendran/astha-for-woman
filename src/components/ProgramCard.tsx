import { motion } from "framer-motion";

interface ProgramCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProgramCard = ({ title, description, icon }: ProgramCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="gradient-card rounded-2xl p-10 border hover:shadow-lg transition-all hover:-translate-y-1 group"
  >
    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary text-primary mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="font-display text-xl font-semibold text-foreground mb-4">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </motion.div>
);

export default ProgramCard;
