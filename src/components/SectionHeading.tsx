interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true }: SectionHeadingProps) => (
  <div className={`mb-14 ${centered ? "text-center" : ""}`}>
    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">{subtitle}</p>
    )}
    <div className={`h-1 w-16 gradient-accent rounded-full mt-5 ${centered ? "mx-auto" : ""}`} />
  </div>
);

export default SectionHeading;
