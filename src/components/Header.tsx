import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import afwLogo from "@/assets/AFW.svg";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navLinks = [
    { label: t("nav.home"), path: "/" },
    { label: t("nav.about"), path: "/about" },
    { label: t("nav.programs"), path: "/programs" },
    { label: t("nav.impact"), path: "/impact" },
    { label: t("nav.events"), path: "/events" },
    { label: t("nav.getInvolved"), path: "/get-involved" },
    { label: t("nav.contact"), path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={afwLogo} alt="Aastha for Women" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-all px-3 py-2 rounded-lg hover:bg-secondary hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary bg-secondary/80"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-2 flex items-center gap-2">
            <LanguageSwitcher />
            <Link to="/donate">
              <Button className="gradient-accent text-primary-foreground border-0 font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                {t("nav.donate")}
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button
            className="text-foreground p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t bg-background px-4 pb-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block py-3.5 text-sm font-medium border-b border-border/30 transition-colors ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/donate" onClick={() => setMobileOpen(false)}>
            <Button className="gradient-accent text-primary-foreground border-0 w-full mt-4 font-semibold shadow-lg">
              {t("nav.donate")}
            </Button>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
