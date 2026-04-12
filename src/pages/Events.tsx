import { Calendar, MapPin, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";

const upcoming = [
  { title: "Women's Health Awareness Camp", date: "May 15, 2026", time: "10:00 AM – 4:00 PM", location: "Community Hall, Dwarka", type: "Health" },
  { title: "Self-Defense Workshop", date: "May 22, 2026", time: "9:00 AM – 1:00 PM", location: "Aastha Center, Janakpuri", type: "Workshop" },
  { title: "Annual Fundraiser Gala", date: "June 8, 2026", time: "6:00 PM – 10:00 PM", location: "Hotel Grand, CP", type: "Fundraiser" },
];

const past = [
  { title: "International Women's Day Celebration", date: "March 8, 2026", location: "Aastha Center", type: "Celebration" },
  { title: "Legal Rights Workshop", date: "February 14, 2026", location: "Community Hall, Rohini", type: "Workshop" },
  { title: "Skill Training Graduation Ceremony", date: "January 25, 2026", location: "Aastha Center", type: "Ceremony" },
];

const EventCard = ({ title, date, time, location, type, isPast }: any) => (
  <div className={`bg-card border rounded-xl p-6 ${isPast ? "opacity-75" : ""}`}>
    <div className="flex items-start justify-between mb-3">
      <Badge variant={isPast ? "secondary" : "default"} className={isPast ? "" : "gradient-accent text-primary-foreground border-0"}>
        {type}
      </Badge>
      {isPast && <span className="text-xs text-muted-foreground">Completed</span>}
    </div>
    <h3 className="font-display text-lg font-semibold text-foreground mb-3">{title}</h3>
    <div className="space-y-1.5 text-sm text-muted-foreground">
      <p className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {date}</p>
      {time && <p className="flex items-center gap-2"><Clock className="h-4 w-4" /> {time}</p>}
      <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {location}</p>
    </div>
    {/* TODO: Replace with real event data */}
  </div>
);

const Events = () => (
  <div>
    <section className="gradient-hero py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Events" subtitle="Join us at our upcoming programs and community events" />
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Upcoming Events" />
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {upcoming.map((e) => <EventCard key={e.title} {...e} />)}
        </div>

        <SectionHeading title="Past Events" />
        <div className="grid md:grid-cols-3 gap-8">
          {past.map((e) => <EventCard key={e.title} {...e} isPast />)}
        </div>
      </div>
    </section>
  </div>
);

export default Events;
