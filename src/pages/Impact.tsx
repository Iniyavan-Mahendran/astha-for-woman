import { Users, Heart, BookOpen, HandHeart, Star, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import StatCard from "@/components/StatCard";
import { useTranslation } from "react-i18next";

const Impact = () => {
  const { t } = useTranslation();

  const stories = [
    { name: "Rekha", initial: "R", story: t("impact.rekhaStory") },
    { name: "Fatima", initial: "F", story: t("impact.fatimaStory") },
    { name: "Sunita", initial: "S", story: t("impact.sunitaStory") },
  ];

  return (
    <div>
      <section className="gradient-hero py-24">
        <div className="container mx-auto px-4">
          <SectionHeading title={t("impact.title")} subtitle={t("impact.pageSubtitle")} />
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <StatCard icon={<Users className="h-5 w-5" />} value="5,000+" label={t("impact.womenReached")} />
            <StatCard icon={<Heart className="h-5 w-5" />} value="1,200+" label={t("impact.counselingSessions")} />
            <StatCard icon={<BookOpen className="h-5 w-5" />} value="800+" label={t("impact.womenTrained")} />
            <StatCard icon={<HandHeart className="h-5 w-5" />} value="50+" label={t("impact.activeVolunteers")} />
            <StatCard icon={<Star className="h-5 w-5" />} value="15+" label={t("impact.awardsWon")} />
            <StatCard icon={<MapPin className="h-5 w-5" />} value="12" label={t("impact.communitiesServed")} />
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <SectionHeading title={t("impact.storiesTitle")} subtitle={t("impact.storiesSubtitle")} />
          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((s) => (
              <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card border rounded-2xl p-10 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-primary font-display font-bold text-lg mb-5">
                  {s.initial}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">{s.name}'s Story</h3>
                <p className="text-muted-foreground leading-relaxed">{s.story}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
