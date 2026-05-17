import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mic2, Camera, Clock, DollarSign, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const RecordingStudio = () => (
  <div className="min-h-screen pt-20">
    {/* Hero */}
    <section className="py-20 md:py-28 bg-gradient-dark">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="font-display text-xs tracking-[0.4em] text-primary mb-4 block">HOUSTON, TEXAS</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient-gold">RECORDING</span><br />STUDIO
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mb-8">
            Audio, video, and podcast under one roof. Pro recording chain, the Greenroom for video shoots, and engineers who actually know Houston's sound.
          </p>
          <Link
            to="/book-studio"
            className="inline-flex items-center gap-2 font-display text-sm tracking-wider bg-primary text-primary-foreground px-8 py-4 rounded-sm hover:bg-primary/90 transition-all glow-red"
          >
            BOOK NOW — $100 MINIMUM <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Services */}
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading label="What's Included" title="STUDIO SERVICES" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: Mic2, title: "Audio Recording", desc: "Professional vocal & instrument recording with industry-standard equipment. Perfect sound isolation and mixing capabilities.", href: "/book-studio" },
            { icon: Camera, title: "Green Room", desc: "Full video production, photography, podcast and skit creation space. Lighting rigs and backdrops included.", href: "/greenroom" },
            { icon: Clock, title: "Flexible Sessions", desc: "Book by the hour, half-day, or full-day. Late night sessions available for that midnight inspiration.", href: "/about" },
            { icon: DollarSign, title: "Member Discounts", desc: "Recurring access from $600/mo unlocks discounted studio + Greenroom hours and priority scheduling.", href: "/membership" },
          ].map((s, i) => {
            const inner = (
              <>
                <s.icon className="text-primary mb-4" size={28} />
                <h3 className="font-display text-xl mb-3 flex items-center gap-2">
                  {s.title}
                  {s.href && <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" size={18} />}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </>
            );
            return s.href ? (
              <motion.div key={s.title} {...fadeUp} transition={{ delay: i * 0.1 }}>
                <Link
                  to={s.href}
                  className="group block bg-gradient-card border border-border rounded-sm p-8 hover:border-primary hover:glow-red transition-all h-full"
                >
                  {inner}
                </Link>
              </motion.div>
            ) : (
              <motion.div key={s.title} {...fadeUp} transition={{ delay: i * 0.1 }} className="bg-gradient-card border border-border rounded-sm p-8">
                {inner}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Pricing */}
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        <SectionHeading label="Transparent Rates" title="STUDIO & GREENROOM PRICING" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { tag: "AUDIO", name: "Recording Session", price: "$120", unit: "2-hr minimum", note: "$50/hr after the minimum. Engineer included.", href: "/book-studio" },
            { tag: "GREENROOM", name: "Hourly", price: "$60", unit: "per hour", note: "Extend hour-by-hour as needed.", href: "/greenroom" },
            { tag: "GREENROOM", name: "Half-Day", price: "$200", unit: "4 hours", note: "Best for podcasts & quick shoots — save $40.", featured: true, href: "/greenroom" },
            { tag: "GREENROOM", name: "Full-Day", price: "$350", unit: "8 hours", note: "Music videos, multi-look shoots — save $130.", href: "/greenroom" },
            { tag: "MEMBERS", name: "Recurring Access", price: "From $600", unit: "per month", note: "6–12 guaranteed weekly hours across studio + Greenroom.", href: "/membership" },
            { tag: "STARTER", name: "Young Artist Rate", price: "$40", unit: "1st hour", note: "Discounted hourly tier for emerging artists. New Clients ONLY." },
          ].map((p, i) => {
            const cardClass = `rounded-sm p-6 border bg-gradient-card relative block h-full ${p.featured ? "border-primary glow-red" : "border-border"} ${p.href ? "hover:border-primary transition-all" : ""}`;
            const inner = (
              <>
                <span className="font-display text-[10px] tracking-[0.3em] text-accent">{p.tag}</span>
                <h3 className="font-display text-lg mt-1 mb-3">{p.name}</h3>
                <div className="text-3xl font-bold text-gradient-gold">{p.price}</div>
                <p className="text-xs text-muted-foreground mb-3">{p.unit}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.note}</p>
              </>
            );
            return (
              <motion.div key={p.name} {...fadeUp} transition={{ delay: i * 0.05 }}>
                {p.href ? <Link to={p.href} className={cardClass}>{inner}</Link> : <div className={cardClass}>{inner}</div>}
              </motion.div>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/greenroom"
            className="inline-flex items-center gap-2 font-display text-sm tracking-wider border border-accent text-accent px-8 py-4 rounded-sm hover:bg-accent hover:text-accent-foreground transition-all"
          >
            EXPLORE THE GREENROOM <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container text-center">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">READY TO RECORD?</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Email us to book your session or ask about membership pricing for recurring studio access.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:saintpen409@gmail.com?subject=Studio%20Booking"
              className="inline-flex items-center gap-2 font-display text-sm tracking-wider bg-primary text-primary-foreground px-8 py-4 rounded-sm hover:bg-primary/90 transition-all glow-red"
            >
              EMAIL TO BOOK <ArrowRight size={16} />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-display text-sm tracking-wider border border-accent text-accent px-8 py-4 rounded-sm hover:bg-accent hover:text-accent-foreground transition-all"
            >
              CONTACT US
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default RecordingStudio;
