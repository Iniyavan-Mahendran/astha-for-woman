import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="gradient-hero py-24">
        <div className="container mx-auto px-4">
          <SectionHeading title={t("contact.title")} subtitle={t("contact.subtitle")} />
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card border rounded-2xl p-10 shadow-sm">
              <h3 className="font-display text-xl font-semibold text-foreground mb-8">{t("contact.getInTouch")}</h3>
              <div className="space-y-6">
                {[
                  { icon: <Phone className="h-5 w-5" />, label: t("contact.phone"), value: "+91 88010 66007" },
                  { icon: <Mail className="h-5 w-5" />, label: t("contact.email"), value: "Asthaforwomen@gmail.com" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center text-primary flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{item.label}</p>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t("contact.address")}</p>
                    <p className="text-muted-foreground">
                      {t("contact.addressLine")}<br />
                      {t("contact.addressCity")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card border rounded-2xl p-10 flex flex-col items-center justify-center text-center shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-5">
                <MessageCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">{t("contact.whatsapp")}</h3>
              <p className="text-muted-foreground mb-8">
                {t("contact.whatsappDesc")}
              </p>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 h-11 shadow-lg shadow-green-600/20">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  {t("contact.chatWhatsapp")}
                </Button>
              </a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 bg-muted rounded-2xl p-10 text-center">
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">{t("contact.officeHours")}</h3>
            <p className="text-muted-foreground">
              {t("contact.officeHoursTime")}<br />
              {t("contact.sundayClosed")}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
