import { Users, Handshake, Megaphone, AlertTriangle, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";

const roles = [
  { icon: <Users className="h-6 w-6" />, title: "Field Volunteer", description: "Help organize events, conduct outreach, and support women directly in their communities." },
  { icon: <Megaphone className="h-6 w-6" />, title: "Awareness Campaigner", description: "Spread awareness about women's rights and our programs through social media and grassroots campaigns." },
  { icon: <Handshake className="h-6 w-6" />, title: "Mentor / Counselor", description: "Share your expertise in counseling, legal aid, or career guidance to support women in transition." },
];

const GetInvolved = () => (
  <div>
    <section className="gradient-hero py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Get Involved" subtitle="Join us in building a world where every woman thrives" />
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Volunteer Roles" subtitle="Find a role that matches your skills and passion" />
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {roles.map((r) => (
            <div key={r.title} className="gradient-card border rounded-xl p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary text-primary mb-5">
                {r.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{r.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
        {/* TODO: Replace with real volunteer roles */}

        {/* Collaborate */}
        <div className="bg-card border rounded-2xl p-10 max-w-2xl mx-auto text-center mb-16">
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">Partner With Us</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We welcome partnerships with corporates, educational institutions, and other NGOs.
            Together, we can amplify our impact and reach more women in need.
          </p>
          {/* TODO: Add partnership details */}
        </div>

        {/* Sign Up */}
        <div className="text-center">
          <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gradient-accent text-primary-foreground border-0 font-semibold px-8">
              Sign Up to Volunteer <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 inline-flex items-start gap-3 text-left mt-4 max-w-md">
            <AlertTriangle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground">
              <strong>TODO:</strong> Replace with actual Google Form link for volunteer sign-up.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default GetInvolved;
