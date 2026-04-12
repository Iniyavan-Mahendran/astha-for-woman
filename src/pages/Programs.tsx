import { Heart, Users, BookOpen, Lightbulb, Shield, Handshake } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ProgramCard from "@/components/ProgramCard";

const programs = [
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Individual Counseling",
    description: "One-on-one sessions with trained professionals for women dealing with trauma, domestic violence, anxiety, and depression.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Group Therapy",
    description: "Supportive group sessions where women can share experiences and heal together in a safe environment.",
  },
  {
    icon: <Handshake className="h-6 w-6" />,
    title: "Pre-Marital Counseling",
    description: "Comprehensive guidance for women approaching marriage — communication skills, setting expectations, and understanding rights.",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Vocational Training",
    description: "Skill-building programs in tailoring, computer literacy, beautician courses, and more for financial independence.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Legal Awareness",
    description: "Workshops on women's legal rights, domestic violence laws, and how to access legal aid and support services.",
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Leadership Development",
    description: "Empowering women to become community leaders through confidence-building, public speaking, and mentorship programs.",
  },
];

const Programs = () => (
  <div>
    <section className="gradient-hero py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Our Programs" subtitle="Comprehensive support designed to uplift and empower" />
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((p) => (
            <ProgramCard key={p.title} {...p} />
          ))}
        </div>
        {/* TODO: Replace with real program details and images */}
      </div>
    </section>
  </div>
);

export default Programs;
