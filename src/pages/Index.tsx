import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Users, BookOpen, HandHeart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ProgramCard from "@/components/ProgramCard";
import StatCard from "@/components/StatCard";
import TestimonialCard from "@/components/TestimonialCard";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero min-h-[88vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,hsl(280_60%_45%/0.06),transparent_50%),radial-gradient(circle_at_70%_20%,hsl(330_70%_55%/0.06),transparent_50%)]" />
        <div className="container mx-auto px-4 py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-accent font-semibold tracking-widest uppercase text-xs mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-accent" />
              {t("hero.tagline")}
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8">
              {t("hero.title1")}{" "}
              <span className="text-primary">{t("hero.title2")}</span> {t("hero.title3")}
              <span className="text-accent">{t("hero.title4")}</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed">
              {t("hero.description")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="gradient-accent text-primary-foreground border-0 font-semibold px-8 shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all h-12">
                  {t("hero.getHelp")}
                </Button>
              </Link>
              <Link to="/donate">
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 h-12 transition-all">
                  {t("hero.donate")}
                </Button>
              </Link>
              <Link to="/get-involved">
                <Button size="lg" variant="ghost" className="text-muted-foreground hover:text-primary font-semibold h-12">
                  {t("hero.volunteer")} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionHeading title={t("aboutPreview.title")} subtitle="" centered={false} />
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                {t("aboutPreview.description")}
              </p>
              <Link to="/about">
                <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold group">
                  {t("aboutPreview.learnMore")} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="gradient-card rounded-2xl p-12 border shadow-lg">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { icon: <Heart className="h-6 w-6" />, label: t("aboutPreview.compassion") },
                  { icon: <Users className="h-6 w-6" />, label: t("aboutPreview.community") },
                  { icon: <BookOpen className="h-6 w-6" />, label: t("aboutPreview.education") },
                  { icon: <HandHeart className="h-6 w-6" />, label: t("aboutPreview.empowerment") },
                ].map((v) => (
                  <div key={v.label} className="text-center p-5 rounded-xl hover:bg-secondary/50 transition-colors">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary text-primary mb-3">
                      {v.icon}
                    </div>
                    <p className="text-sm font-semibold text-foreground">{v.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <SectionHeading title={t("programs.title")} subtitle={t("programs.subtitle")} />
          <div className="grid md:grid-cols-3 gap-8">
            <ProgramCard icon={<Heart className="h-6 w-6" />} title={t("programs.counseling")} description={t("programs.counselingDesc")} />
            <ProgramCard icon={<Users className="h-6 w-6" />} title={t("programs.preMarital")} description={t("programs.preMaritalDesc")} />
            <ProgramCard icon={<BookOpen className="h-6 w-6" />} title={t("programs.skillTraining")} description={t("programs.skillTrainingDesc")} />
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading title={t("impact.title")} subtitle={t("impact.subtitle")} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard icon={<Users className="h-6 w-6" />} value="5,000+" label={t("impact.womenSupported")} />
            <StatCard icon={<Heart className="h-6 w-6" />} value="1,200+" label={t("impact.counselingSessions")} />
            <StatCard icon={<BookOpen className="h-6 w-6" />} value="800+" label={t("impact.womenTrained")} />
            <StatCard icon={<HandHeart className="h-6 w-6" />} value="50+" label={t("impact.volunteers")} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <SectionHeading title={t("testimonials.title")} subtitle={t("testimonials.subtitle")} />
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard quote={t("testimonials.quote1")} name={t("testimonials.name1")} role={t("testimonials.role1")} />
            <TestimonialCard quote={t("testimonials.quote2")} name={t("testimonials.name2")} role={t("testimonials.role2")} />
            <TestimonialCard quote={t("testimonials.quote3")} name={t("testimonials.name3")} role={t("testimonials.role3")} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
