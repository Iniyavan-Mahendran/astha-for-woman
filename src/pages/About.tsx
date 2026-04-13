import { Eye, Target } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { useTranslation } from "react-i18next";
import founderImage from "@/assets/Founder_image.jpeg";

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="gradient-hero py-24">
        <div className="container mx-auto px-4">
          <SectionHeading title={t("about.title")} subtitle={t("about.subtitle")} />
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-muted-foreground leading-relaxed text-lg mb-12 text-center max-w-3xl mx-auto">
            {t("about.description")}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {[
              { icon: <Eye className="h-6 w-6" />, title: t("about.vision"), desc: t("about.visionDesc") },
              { icon: <Target className="h-6 w-6" />, title: t("about.mission"), desc: t("about.missionDesc") },
            ].map((item) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="gradient-card rounded-2xl p-10 border shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary text-primary mb-5">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Founder Story */}
          <div className="mt-24">
            <SectionHeading title={t("about.founderTitle")} />
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="gradient-card rounded-2xl p-12 border shadow-sm max-w-3xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                {/* TODO: Replace founder image if needed */}
                <img
                  src={founderImage}
                  alt={t("about.founderName")}
                  className="w-24 h-24 rounded-2xl object-cover shadow-md flex-shrink-0"
                />
                <div className="text-center sm:text-left">
                  <h4 className="font-display font-semibold text-foreground text-lg">{t("about.founderName")}</h4>
                  <p className="text-muted-foreground text-sm">{t("about.founderRole")}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed italic text-lg">
                {t("about.founderStory")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
