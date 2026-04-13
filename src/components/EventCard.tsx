import { Calendar, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

export interface EventCardProps {
  title: string;
  date: string;
  time?: string;
  location: string;
  type: string;
  isPast?: boolean;
  /** Optional event image — if omitted, the card renders text-only */
  image?: string;
}

const EventCard = ({ title, date, time, location, type, isPast, image }: EventCardProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-card border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all ${isPast ? "opacity-70" : ""}`}
    >
      {/* Optional image — remove or replace freely */}
      {image && (
        <img src={image} alt={title} className="w-full h-44 object-cover" />
      )}

      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <Badge
            variant={isPast ? "secondary" : "default"}
            className={isPast ? "font-medium" : "gradient-accent text-primary-foreground border-0 font-medium"}
          >
            {type}
          </Badge>
          {isPast && (
            <span className="text-xs text-muted-foreground font-medium">
              {t("events.completed")}
            </span>
          )}
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground mb-4">{title}</h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="flex items-center gap-2.5">
            <Calendar className="h-4 w-4 text-primary" /> {date}
          </p>
          {time && (
            <p className="flex items-center gap-2.5">
              <Clock className="h-4 w-4 text-primary" /> {time}
            </p>
          )}
          <p className="flex items-center gap-2.5">
            <MapPin className="h-4 w-4 text-primary" /> {location}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
