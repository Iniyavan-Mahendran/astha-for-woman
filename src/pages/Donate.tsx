import { Heart, QrCode, AlertTriangle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";

const Donate = () => (
  <div>
    <section className="gradient-hero py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Support Our Cause" subtitle="Your contribution can change a woman's life forever" />
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-card border rounded-2xl p-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-primary mb-6">
            <Heart className="h-8 w-8" />
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">Donate via UPI</h3>

          {/* QR Placeholder */}
          <div className="w-48 h-48 mx-auto bg-muted rounded-xl flex items-center justify-center mb-6 border-2 border-dashed border-border">
            <QrCode className="h-20 w-20 text-muted-foreground/40" />
          </div>

          <p className="text-muted-foreground mb-2">UPI ID:</p>
          <p className="font-mono text-lg text-foreground font-semibold mb-6">
            aasthaforwomen@upi
          </p>

          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 flex items-start gap-3 text-left mb-6">
            <AlertTriangle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground">
              <strong>TODO:</strong> Replace this UPI QR code and UPI ID with actual payment details.
              This is a placeholder for development purposes only.
            </p>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            All donations are tax-deductible under Section 80G of the Income Tax Act.
            You will receive a receipt via email after your donation is processed.
          </p>
          {/* TODO: Add real payment integration */}

          <div className="border-t pt-8">
            <h4 className="font-display font-semibold text-foreground mb-2">Other Ways to Donate</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Bank Transfer, Cheque, or in-person at our center.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Contact Us for Details
            </Button>
            {/* TODO: Add bank details and other payment methods */}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Donate;
