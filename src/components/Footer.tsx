import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/80 mt-20">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Heart className="h-6 w-6 text-accent fill-accent/30" />
            <span className="font-display text-lg font-bold text-primary-foreground">
              Aastha for Women
            </span>
          </div>
          <p className="text-sm leading-relaxed text-primary-foreground/60">
            Empowering women through counseling, education, and community support.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-primary-foreground mb-4">Quick Links</h4>
          {["About", "Programs", "Impact", "Events", "Contact"].map((l) => (
            <Link
              key={l}
              to={`/${l.toLowerCase()}`}
              className="block text-sm py-1 text-primary-foreground/60 hover:text-accent transition-colors"
            >
              {l}
            </Link>
          ))}
        </div>

        <div>
          <h4 className="font-display font-semibold text-primary-foreground mb-4">Get Involved</h4>
          <Link to="/donate" className="block text-sm py-1 text-primary-foreground/60 hover:text-accent transition-colors">Donate</Link>
          <Link to="/get-involved" className="block text-sm py-1 text-primary-foreground/60 hover:text-accent transition-colors">Volunteer</Link>
          <Link to="/get-involved" className="block text-sm py-1 text-primary-foreground/60 hover:text-accent transition-colors">Partner With Us</Link>
        </div>

        <div>
          <h4 className="font-display font-semibold text-primary-foreground mb-4">Contact</h4>
          <div className="space-y-2 text-sm text-primary-foreground/60">
            <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 98765 43210</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@aasthaforwomen.org</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> New Delhi, India</p>
          </div>
          {/* TODO: Add real contact details */}
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} Aastha for Women. All rights reserved. {/* TODO: Update legal text */}
      </div>
    </div>
  </footer>
);

export default Footer;
