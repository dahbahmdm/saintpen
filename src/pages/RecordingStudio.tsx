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
            Professional recording environment with top-tier equipment, experienced engineers, and a creative atmosphere built for Houston artists.
          </p>
          <a
            href="mailto:saintpen409@gmail.com?subject=Studio%20Booking%20Inquiry"
            className="inline-flex items-center gap-2 font-display text-sm tracking-wider bg-primary text-primary-foreground px-8 py-4 rounded-sm hover:bg-primary/90 transition-all glow-red"
          >
            BOOK NOW — $120 MINIMUM <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>

    {/* Services */}
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading label="What's Included" title="STUDIO SERVICES" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: Mic2, title: "Audio Recording", desc: "Professional vocal & instrument recording with industry-standard equipment. Perfect sound isolation and mixing capabilities." },
            { icon: Camera, title: "Green Room", desc: "Full video production, photography, and skit creation space. Lighting rigs, backdrops, and creative direction included." },
            { icon: Clock, title: "Flexible Sessions", desc: "Book by the hour or the day. We work around your schedule. Late night sessions available for that midnight inspiration." },
            { icon: DollarSign, title: "Pricing", desc: "Starting at $120 minimum. Custom packages for albums, mixtapes, and recurring sessions. Membership discounts available." },
          ].map((s, i) => (
            <motion.div key={s.title} {...fadeUp} transition={{ delay: i * 0.1 }} className="bg-gradient-card border border-border rounded-sm p-8">
              <s.icon className="text-primary mb-4" size={28} />
              <h3 className="font-display text-xl mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
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
