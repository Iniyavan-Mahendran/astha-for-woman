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
    className="gradient-card rounded-xl p-8 border hover:shadow-lg transition-shadow"
  >
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary text-primary mb-5">
      {icon}
    </div>
    <h3 className="font-display text-xl font-semibold text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </motion.div>
);

export default ProgramCard;
