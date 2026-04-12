import { Heart, Eye, Target } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const About = () => (
  <div>
    <section className="gradient-hero py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Aastha for Women" subtitle="Our journey of empowering women and building resilient communities" />
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="prose prose-lg mx-auto">
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            Aastha for Women was founded with a simple yet powerful belief — every woman deserves
            access to safety, support, and the opportunity to thrive. Based in New Delhi, India, we
            work at the grassroots level to provide counseling, education, and community support to
            women from all walks of life.
          </p>
          {/* TODO: Replace with real NGO information */}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="gradient-card rounded-xl p-8 border">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary text-primary mb-4">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              A world where every woman lives with dignity, free from violence, and empowered to
              make her own choices.
            </p>
            {/* TODO: Replace with real vision statement */}
          </div>
          <div className="gradient-card rounded-xl p-8 border">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary text-primary mb-4">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide holistic support to women through professional counseling, skill development,
              and community networks that foster resilience and independence.
            </p>
            {/* TODO: Replace with real mission statement */}
          </div>
        </div>

        {/* Founder Story */}
        <div className="mt-20">
          <SectionHeading title="Founder's Story" />
          <div className="gradient-card rounded-xl p-10 border max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground text-lg">Dr. Sunita Sharma</h4>
                <p className="text-muted-foreground text-sm">Founder & Director</p>
                {/* TODO: Replace with real founder name */}
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              "Growing up, I witnessed the struggles women in my community faced silently. After
              completing my studies in social work, I knew I had to act. Aastha for Women started
              as a small counseling center in 2015 and has since grown into a comprehensive support
              organization serving thousands of women across Delhi NCR. Our dream is to reach every
              woman who needs help, no matter where she is."
            </p>
            {/* TODO: Replace with real founder story */}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;
