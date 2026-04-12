import { Heart, Users, BookOpen, Lightbulb, Shield, Handshake } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ProgramCard from "@/components/ProgramCard";
import { useTranslation } from "react-i18next";

const Programs = () => {
  const { t } = useTranslation();

  const programs = [
    { icon: <Heart className="h-6 w-6" />, title: t("programs.individualCounseling"), description: t("programs.individualCounselingDesc") },
    { icon: <Users className="h-6 w-6" />, title: t("programs.groupTherapy"), description: t("programs.groupTherapyDesc") },
    { icon: <Handshake className="h-6 w-6" />, title: t("programs.preMaritalFull"), description: t("programs.preMaritalFullDesc") },
    { icon: <BookOpen className="h-6 w-6" />, title: t("programs.vocationalTraining"), description: t("programs.vocationalTrainingDesc") },
    { icon: <Shield className="h-6 w-6" />, title: t("programs.legalAwareness"), description: t("programs.legalAwarenessDesc") },
    { icon: <Lightbulb className="h-6 w-6" />, title: t("programs.leadershipDev"), description: t("programs.leadershipDevDesc") },
  ];

  return (
    <div>
      <section className="gradient-hero py-24">
        <div className="container mx-auto px-4">
          <SectionHeading title={t("programs.title")} subtitle={t("programs.pageSubtitle")} />
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((p) => (
              <ProgramCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
