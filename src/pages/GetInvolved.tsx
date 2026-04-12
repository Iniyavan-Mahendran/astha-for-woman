import { Users, Handshake, Megaphone, AlertTriangle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const GetInvolved = () => {
  const { t } = useTranslation();

  const roles = [
    { icon: <Users className="h-6 w-6" />, title: t("getInvolved.fieldVolunteer"), description: t("getInvolved.fieldVolunteerDesc") },
    { icon: <Megaphone className="h-6 w-6" />, title: t("getInvolved.campaigner"), description: t("getInvolved.campaignerDesc") },
    { icon: <Handshake className="h-6 w-6" />, title: t("getInvolved.mentor"), description: t("getInvolved.mentorDesc") },
  ];

  return (
    <div>
      <section className="gradient-hero py-24">
        <div className="container mx-auto px-4">
          <SectionHeading title={t("getInvolved.title")} subtitle={t("getInvolved.subtitle")} />
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading title={t("getInvolved.volunteerRoles")} subtitle={t("getInvolved.volunteerSubtitle")} />
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {roles.map((r) => (
              <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="gradient-card border rounded-2xl p-10 shadow-sm hover:shadow-md transition-all">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary text-primary mb-6">
                  {r.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">{r.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{r.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card border rounded-3xl p-12 max-w-2xl mx-auto text-center mb-20 shadow-sm">
            <h3 className="font-display text-2xl font-bold text-foreground mb-5">{t("getInvolved.partnerTitle")}</h3>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              {t("getInvolved.partnerDesc")}
            </p>
          </motion.div>

          <div className="text-center">
            <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gradient-accent text-primary-foreground border-0 font-semibold px-10 shadow-xl shadow-primary/20 h-12">
                {t("getInvolved.signUp")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <div className="bg-accent/10 border border-accent/20 rounded-xl p-5 inline-flex items-start gap-3 text-left mt-6 max-w-md">
              <AlertTriangle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground">
                <strong>TODO:</strong> {t("getInvolved.todoForm")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
