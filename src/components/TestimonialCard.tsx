import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

const TestimonialCard = ({ quote, name, role }: TestimonialCardProps) => (
  <div className="bg-card border rounded-2xl p-10 shadow-sm hover:shadow-md transition-all relative">
    <Quote className="h-10 w-10 text-accent/20 mb-5" />
    <p className="text-foreground leading-relaxed mb-8 italic text-lg">"{quote}"</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary font-display font-bold text-sm">
        {name[0]}
      </div>
      <div>
        <p className="font-semibold text-foreground text-sm">{name}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
