import { Calendar, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

const EventCard = ({ title, date, time, location, type, isPast }: any) => {
  const { t } = useTranslation();
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`bg-card border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all ${isPast ? "opacity-70" : ""}`}>
      <div className="flex items-start justify-between mb-4">
        <Badge variant={isPast ? "secondary" : "default"} className={isPast ? "font-medium" : "gradient-accent text-primary-foreground border-0 font-medium"}>
          {type}
        </Badge>
        {isPast && <span className="text-xs text-muted-foreground font-medium">{t("events.completed")}</span>}
      </div>
      <h3 className="font-display text-lg font-semibold text-foreground mb-4">{title}</h3>
      <div className="space-y-2 text-sm text-muted-foreground">
        <p className="flex items-center gap-2.5"><Calendar className="h-4 w-4 text-primary" /> {date}</p>
        {time && <p className="flex items-center gap-2.5"><Clock className="h-4 w-4 text-primary" /> {time}</p>}
        <p className="flex items-center gap-2.5"><MapPin className="h-4 w-4 text-primary" /> {location}</p>
      </div>
    </motion.div>
  );
};

const Events = () => {
  const { t } = useTranslation();

  const upcoming = [
    { title: t("events.healthCamp"), date: "May 15, 2026", time: "10:00 AM – 4:00 PM", location: "Community Hall, Dwarka", type: "Health" },
    { title: t("events.selfDefense"), date: "May 22, 2026", time: "9:00 AM – 1:00 PM", location: "Aastha Center, Janakpuri", type: "Workshop" },
    { title: t("events.fundraiser"), date: "June 8, 2026", time: "6:00 PM – 10:00 PM", location: "Hotel Grand, CP", type: "Fundraiser" },
  ];

  const past = [
    { title: t("events.womensDay"), date: "March 8, 2026", location: "Aastha Center", type: "Celebration" },
    { title: t("events.legalRights"), date: "February 14, 2026", location: "Community Hall, Rohini", type: "Workshop" },
    { title: t("events.graduation"), date: "January 25, 2026", location: "Aastha Center", type: "Ceremony" },
  ];

  return (
    <div>
      <section className="gradient-hero py-24">
        <div className="container mx-auto px-4">
          <SectionHeading title={t("events.title")} subtitle={t("events.subtitle")} />
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading title={t("events.upcoming")} />
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {upcoming.map((e) => <EventCard key={e.title} {...e} />)}
          </div>

          <SectionHeading title={t("events.past")} />
          <div className="grid md:grid-cols-3 gap-8">
            {past.map((e) => <EventCard key={e.title} {...e} isPast />)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
