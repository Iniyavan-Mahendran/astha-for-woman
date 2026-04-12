import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

const TestimonialCard = ({ quote, name, role }: TestimonialCardProps) => (
  <div className="bg-card border rounded-xl p-8">
    <Quote className="h-8 w-8 text-accent/40 mb-4" />
    <p className="text-foreground leading-relaxed mb-6 italic">"{quote}"</p>
    <div>
      <p className="font-semibold text-foreground">{name}</p>
      <p className="text-sm text-muted-foreground">{role}</p>
    </div>
    {/* TODO: Replace with real testimonials */}
  </div>
);

export default TestimonialCard;
