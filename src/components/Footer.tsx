import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import afwLogo from "@/assets/AFW.svg";

const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { label: t("nav.about"), path: "/about" },
    { label: t("nav.programs"), path: "/programs" },
    { label: t("nav.impact"), path: "/impact" },
    { label: t("nav.events"), path: "/events" },
    { label: t("nav.contact"), path: "/contact" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground/80 mt-24">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <img src={afwLogo} alt="Aastha for Women" className="h-9 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/50">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-wider">
              {t("footer.quickLinks")}
            </h4>
            {quickLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className="block text-sm py-1.5 text-primary-foreground/50 hover:text-accent transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-wider">
              {t("footer.getInvolved")}
            </h4>
            <Link to="/donate" className="block text-sm py-1.5 text-primary-foreground/50 hover:text-accent transition-colors">{t("nav.donate")}</Link>
            <Link to="/get-involved" className="block text-sm py-1.5 text-primary-foreground/50 hover:text-accent transition-colors">{t("footer.volunteer")}</Link>
            <Link to="/get-involved" className="block text-sm py-1.5 text-primary-foreground/50 hover:text-accent transition-colors">{t("footer.partnerWithUs")}</Link>
          </div>

          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-wider">
              {t("footer.contact")}
            </h4>
            <div className="space-y-3 text-sm text-primary-foreground/50">
              <p className="flex items-center gap-2.5"><Phone className="h-4 w-4 text-accent" /> +91 88010 66007</p>
              <p className="flex items-center gap-2.5"><Mail className="h-4 w-4 text-accent" /> Asthaforwomen@gmail.com</p>
              <p className="flex items-center gap-2.5"><MapPin className="h-4 w-4 text-accent" /> Pune, Maharastra, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-14 pt-8 text-center text-xs text-primary-foreground/30">
          © {new Date().getFullYear()} Aastha for Women. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
