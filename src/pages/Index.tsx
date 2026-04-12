import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Users, BookOpen, HandHeart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ProgramCard from "@/components/ProgramCard";
import StatCard from "@/components/StatCard";
import TestimonialCard from "@/components/TestimonialCard";

const Home = () => (
  <div>
    {/* Hero */}
    <section className="gradient-hero min-h-[85vh] flex items-center">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-4">
            Empowering Women · Building Futures
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            Every Woman Deserves{" "}
            <span className="text-primary">Safety, Support</span> &{" "}
            <span className="text-accent">Dignity</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
            Aastha for Women provides counseling, training, and community support to women in need.
            Together, we can create a safer and more equitable world.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button size="lg" className="gradient-accent text-primary-foreground border-0 font-semibold px-8">
                Get Help
              </Button>
            </Link>
            <Link to="/donate">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8">
                Donate
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button size="lg" variant="ghost" className="text-muted-foreground hover:text-primary font-semibold">
                Volunteer <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* About Preview */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading title="Who We Are" subtitle="" centered={false} />
            <p className="text-muted-foreground leading-relaxed mb-6">
              Aastha for Women is a non-profit organization dedicated to empowering women through
              counseling, skill development, and community building. We believe every woman has the
              strength to overcome challenges when given the right support.
            </p>
            {/* TODO: Replace with real NGO description */}
            <Link to="/about">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="gradient-card rounded-2xl p-10 border">
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Heart className="h-6 w-6" />, label: "Compassion" },
                { icon: <Users className="h-6 w-6" />, label: "Community" },
                { icon: <BookOpen className="h-6 w-6" />, label: "Education" },
                { icon: <HandHeart className="h-6 w-6" />, label: "Empowerment" },
              ].map((v) => (
                <div key={v.label} className="text-center p-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-primary mb-2">
                    {v.icon}
                  </div>
                  <p className="text-sm font-medium text-foreground">{v.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Programs */}
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionHeading title="Our Programs" subtitle="Comprehensive support services for women at every stage" />
        <div className="grid md:grid-cols-3 gap-8">
          <ProgramCard
            icon={<Heart className="h-6 w-6" />}
            title="Counseling Services"
            description="Professional mental health and emotional support for women facing domestic violence, trauma, and life challenges."
          />
          <ProgramCard
            icon={<Users className="h-6 w-6" />}
            title="Pre-Marital Counseling"
            description="Guidance and preparation for women approaching marriage, covering communication, expectations, and healthy relationships."
          />
          <ProgramCard
            icon={<BookOpen className="h-6 w-6" />}
            title="Skill Training"
            description="Vocational training and skill development programs to help women achieve financial independence."
          />
        </div>
        {/* TODO: Replace with real program details */}
      </div>
    </section>

    {/* Impact Stats */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Our Impact" subtitle="Making a difference, one life at a time" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard icon={<Users className="h-6 w-6" />} value="5,000+" label="Women Supported" />
          <StatCard icon={<Heart className="h-6 w-6" />} value="1,200+" label="Counseling Sessions" />
          <StatCard icon={<BookOpen className="h-6 w-6" />} value="800+" label="Women Trained" />
          <StatCard icon={<HandHeart className="h-6 w-6" />} value="50+" label="Volunteers" />
        </div>
        {/* TODO: Replace with real impact data */}
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionHeading title="Stories of Hope" subtitle="Hear from the women whose lives have been transformed" />
        <div className="grid md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="Aastha gave me the courage to rebuild my life. The counselors were so patient and kind."
            name="Priya S."
            role="Program Beneficiary"
          />
          <TestimonialCard
            quote="The skill training helped me start my own tailoring business. I now support my two children independently."
            name="Meena K."
            role="Training Graduate"
          />
          <TestimonialCard
            quote="Volunteering here has been the most fulfilling experience. Every day I see women finding their strength."
            name="Anjali R."
            role="Volunteer"
          />
        </div>
        {/* TODO: Replace with real testimonials */}
      </div>
    </section>
  </div>
);

export default Home;
