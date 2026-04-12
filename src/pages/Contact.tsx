import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";

const Contact = () => (
  <div>
    <section className="gradient-hero py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Contact Us" subtitle="We're here to help. Reach out anytime." />
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border rounded-xl p-8">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">Get in Touch</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                  {/* TODO: Replace with real phone number */}
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground">info@aasthaforwomen.org</p>
                  {/* TODO: Replace with real email */}
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Address</p>
                  <p className="text-muted-foreground">
                    123 Main Road, Janakpuri<br />
                    New Delhi – 110058, India
                  </p>
                  {/* TODO: Replace with real address */}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border rounded-xl p-8 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <MessageCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">WhatsApp Us</h3>
            <p className="text-muted-foreground mb-6">
              Get quick assistance via WhatsApp. We typically respond within 30 minutes.
            </p>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8">
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat on WhatsApp
              </Button>
            </a>
            {/* TODO: Replace with real WhatsApp number */}
          </div>
        </div>

        <div className="mt-12 bg-muted rounded-xl p-8 text-center">
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">Office Hours</h3>
          <p className="text-muted-foreground">
            Monday – Saturday: 9:00 AM – 6:00 PM<br />
            Sunday: Closed
          </p>
          {/* TODO: Replace with real office hours */}
        </div>
      </div>
    </section>
  </div>
);

export default Contact;
