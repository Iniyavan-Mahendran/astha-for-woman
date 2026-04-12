import { Users, Heart, BookOpen, HandHeart, Star, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import StatCard from "@/components/StatCard";

const stories = [
  {
    name: "Rekha",
    story: "After facing years of domestic abuse, Rekha came to Aastha broken and hopeless. Through six months of counseling and vocational training, she learned tailoring and now runs a small business supporting her family.",
  },
  {
    name: "Fatima",
    story: "Fatima was married at 16 and had no education. Through our literacy and computer training programs, she earned a certificate and now works as an office assistant — the first woman in her family to hold a job.",
  },
  {
    name: "Sunita",
    story: "Our pre-marital counseling gave Sunita the confidence to communicate openly with her partner. A year into marriage, she credits the program for her healthy, equal relationship.",
  },
];

const Impact = () => (
  <div>
    <section className="gradient-hero py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Our Impact" subtitle="Numbers and stories that show the change we're creating" />
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <StatCard icon={<Users className="h-5 w-5" />} value="5,000+" label="Women Reached" />
          <StatCard icon={<Heart className="h-5 w-5" />} value="1,200+" label="Counseling Sessions" />
          <StatCard icon={<BookOpen className="h-5 w-5" />} value="800+" label="Women Trained" />
          <StatCard icon={<HandHeart className="h-5 w-5" />} value="50+" label="Active Volunteers" />
          <StatCard icon={<Star className="h-5 w-5" />} value="15+" label="Awards Won" />
          <StatCard icon={<MapPin className="h-5 w-5" />} value="12" label="Communities Served" />
        </div>
        {/* TODO: Replace with real statistics */}
      </div>
    </section>

    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionHeading title="Impact Stories" subtitle="Real stories from real women" />
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((s) => (
            <div key={s.name} className="bg-card border rounded-xl p-8">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary font-display font-bold text-lg mb-4">
                {s.name[0]}
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">{s.name}'s Story</h3>
              <p className="text-muted-foreground leading-relaxed">{s.story}</p>
              {/* TODO: Replace with real impact stories */}
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Impact;
