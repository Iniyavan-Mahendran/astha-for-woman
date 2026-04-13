import SectionHeading from "@/components/SectionHeading";
import EventCard, { type EventCardProps } from "@/components/EventCard";
import { useTranslation } from "react-i18next";

const Events = () => {
  const { t } = useTranslation();

  /* ───────────────────────────────────────────────
   * EVENT DATA — edit entries below to add/remove events.
   * Each entry supports an optional `image` field.
   * Example:  image: "/images/event-photo.jpg"
   * If omitted the card renders cleanly without an image.
   * ─────────────────────────────────────────────── */

  const upcoming: EventCardProps[] = [
    // TODO: Add real event images when available
    { title: t("events.healthCamp"), date: "May 15, 2026", time: "10:00 AM – 4:00 PM", location: "Community Hall, Dwarka", type: "Health" },
    { title: t("events.selfDefense"), date: "May 22, 2026", time: "9:00 AM – 1:00 PM", location: "Aastha Center, Janakpuri", type: "Workshop" },
    { title: t("events.fundraiser"), date: "June 8, 2026", time: "6:00 PM – 10:00 PM", location: "Hotel Grand, CP", type: "Fundraiser" },
  ];

  const past: EventCardProps[] = [
    { title: t("events.womensDay"), date: "March 8, 2026", location: "Aastha Center", type: "Celebration", isPast: true },
    { title: t("events.legalRights"), date: "February 14, 2026", location: "Community Hall, Rohini", type: "Workshop", isPast: true },
    { title: t("events.graduation"), date: "January 25, 2026", location: "Aastha Center", type: "Ceremony", isPast: true },
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
            {upcoming.map((e) => (
              <EventCard key={e.title} {...e} />
            ))}
          </div>

          <SectionHeading title={t("events.past")} />
          <div className="grid md:grid-cols-3 gap-8">
            {past.map((e) => (
              <EventCard key={e.title} {...e} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
