import { Heart, QrCode, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Donate = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="gradient-hero py-24">
        <div className="container mx-auto px-4">
          <SectionHeading title={t("donate.title")} subtitle={t("donate.subtitle")} />
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-card border rounded-3xl p-12 text-center shadow-lg">
            <div className="inline-flex items-center justify-center w-18 h-18 rounded-2xl gradient-accent p-4 mb-8">
              <Heart className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">{t("donate.donateViaUpi")}</h3>

            <div className="w-52 h-52 mx-auto bg-muted rounded-2xl flex items-center justify-center mb-8 border-2 border-dashed border-border">
              <QrCode className="h-20 w-20 text-muted-foreground/30" />
            </div>

            <p className="text-muted-foreground mb-2 text-sm font-medium uppercase tracking-wider">{t("donate.upiId")}</p>
            <p className="font-mono text-xl text-foreground font-bold mb-8">
              aasthaforwomen@upi
            </p>

            <div className="bg-accent/10 border border-accent/20 rounded-xl p-5 flex items-start gap-3 text-left mb-8">
              <AlertTriangle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground">
                <strong>TODO:</strong> {t("donate.todoPayment")}
              </p>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-10">
              {t("donate.taxNote")}
            </p>

            <div className="border-t pt-10">
              <h4 className="font-display font-semibold text-foreground mb-3 text-lg">{t("donate.otherWays")}</h4>
              <p className="text-muted-foreground text-sm mb-5">
                {t("donate.otherWaysDesc")}
              </p>
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold">
                {t("donate.contactForDetails")}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
