import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Star, Calendar, Shield, KeyRound, Sparkles, ArrowRight, Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const tiers = [
  {
    hours: "6 hrs / week",
    price: "$600",
    period: "/ month",
    badge: "$900 value",
    perks: ["Priority scheduling", "$100 / 3-hr session rate", "1-hour bookings unlocked"],
    featured: false,
  },
  {
    hours: "8 hrs / week",
    price: "$700",
    period: "/ month",
    badge: "",
    perks: ["Priority scheduling", "$100 / 3-hr session rate", "1-hour bookings unlocked"],
    featured: false,
  },
  {
    hours: "10 hrs / week",
    price: "$800",
    period: "/ month",
    badge: "Most Popular",
    perks: ["Priority scheduling", "$100 / 3-hr session rate", "1-hour bookings unlocked"],
    featured: true,
  },
  {
    hours: "12 hrs / week",
    price: "$1,000",
    period: "/ month",
    badge: "Best Value",
    perks: ["Priority scheduling", "$100 / 3-hr session rate", "1-hour bookings unlocked"],
    featured: false,
  },
];

const benefits = [
  { icon: Clock, title: "Reduced Session Rate", desc: "$100 for a 3-hour session vs the $120 standard rate." },
  { icon: Calendar, title: "1-Hour Bookings", desc: "Non-members have a 2-hour minimum. Members can book single hours." },
  { icon: Star, title: "Priority Scheduling", desc: "Members get first pick on the calendar before public bookings open." },
  { icon: Sparkles, title: "Guaranteed Weekly Hours", desc: "Lock in studio time every week — no scrambling for slots." },
  { icon: Shield, title: "Deposit-Backed Trust", desc: "$100 refundable deposit on file, returned after damage-free verification." },
  { icon: KeyRound, title: "Path to 24/7 Self-Access", desc: "Trusted members will graduate into our future remote-access studio." },
];

const Membership = () => (
  <div className="min-h-screen pt-20">
    {/* Hero */}
    <section className="py-20 md:py-28 bg-gradient-dark">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
          <span className="font-display text-xs tracking-[0.4em] text-primary mb-4 block">RECURRING ACCESS</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient-gold">STUDIO</span><br />
            <span className="text-gradient-red">MEMBERSHIP</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Guaranteed weekly studio hours, lower session rates, and priority scheduling — built for serious artists who treat the booth like a home base.
          </p>
          <a
            href="mailto:saintpen409@gmail.com?subject=Membership%20Inquiry"
            className="inline-flex items-center gap-2 font-display text-sm tracking-wider bg-primary text-primary-foreground px-8 py-4 rounded-sm hover:bg-primary/90 transition-all glow-red"
          >
            BECOME A MEMBER <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>

    {/* Pricing Tiers */}
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading label="Pick Your Plan" title="MEMBERSHIP TIERS" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.hours}
              {...fadeUp}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`relative bg-gradient-card border rounded-sm p-8 flex flex-col ${
                t.featured ? "border-primary glow-red" : "border-border"
              }`}
            >
              {t.badge && (
                <span className={`absolute -top-3 left-6 font-display text-[10px] tracking-[0.2em] px-3 py-1 rounded-sm ${
                  t.featured ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
                }`}>
                  {t.badge}
                </span>
              )}
              <span className="font-display text-xs tracking-[0.3em] text-muted-foreground mb-2">{t.hours}</span>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-gradient-gold">{t.price}</span>
                <span className="text-muted-foreground text-sm">{t.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:saintpen409@gmail.com?subject=Membership%20${encodeURIComponent(t.hours)}`}
                className={`font-display text-sm tracking-wider text-center px-6 py-3 rounded-sm transition-all ${
                  t.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                CHOOSE PLAN
              </a>
            </motion.div>
          ))}
        </div>

        {/* Starter / Youth tier */}
        <motion.div {...fadeUp} className="mt-10 bg-secondary/50 border border-border rounded-sm p-8 md:flex md:items-center md:justify-between gap-6">
          <div>
            <span className="font-display text-xs tracking-[0.3em] text-accent mb-2 block">STARTER RATE</span>
            <h3 className="font-display text-2xl mb-2">New artist rate</h3>
            <p className="text-muted-foreground max-w-xl">
              Not ready for a full monthly membership? Newer artists can lock in a guaranteed <span className="text-foreground font-semibold">$40–$45 per hour</span> rate — no monthly commitment, just studio time when you need it.
            </p>
          </div>
          <a
            href="mailto:saintpen409@gmail.com?subject=New%20Artist%20Hourly%20Rate"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 font-display text-sm tracking-wider border border-accent text-accent px-6 py-3 rounded-sm hover:bg-accent hover:text-accent-foreground transition-all shrink-0"
          >
            ASK ABOUT IT <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        <SectionHeading label="What Members Get" title="THE PERKS" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              {...fadeUp}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-gradient-card border border-border rounded-sm p-6 hover:border-primary/50 transition-all"
            >
              <b.icon className="text-primary mb-4" size={26} />
              <h3 className="font-display text-lg mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* How it works */}
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading label="The Fine Print, Up Front" title="HOW IT WORKS" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { n: "01", title: "Sign the Digital Contract", desc: "Quick online membership agreement covering access, conduct, and care of the space." },
            { n: "02", title: "Place a $100 Refundable Deposit", desc: "Held on file and refunded after each session is verified damage-free." },
            { n: "03", title: "Book Your Weekly Sessions", desc: "Members typically use 2–3 sessions per week so the studio stays open for the wider roster." },
          ].map((s, i) => (
            <motion.div key={s.n} {...fadeUp} transition={{ delay: i * 0.1 }} className="bg-gradient-card border border-border rounded-sm p-8">
              <span className="font-display text-3xl text-gradient-gold block mb-4">{s.n}</span>
              <h3 className="font-display text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Future Self-Access */}
    <section className="py-20 md:py-28 bg-gradient-dark">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <span className="font-display text-xs tracking-[0.3em] text-primary mb-2 block">WHAT'S NEXT</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-gold">24/7 SELF-ACCESS</span><br />STUDIO
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Membership is the first step toward a fully self-operating studio. Once trust is established through your contract and deposit, members will be able to access the space remotely — no owner on site required.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Magnetic deadbolts, security cameras, and a member-only entry system mean you can record on your schedule, late nights and early mornings included.
            </p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="bg-gradient-card border border-border rounded-sm p-8">
            <KeyRound className="text-accent mb-4" size={32} />
            <h3 className="font-display text-xl mb-3">Built on Trust</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "Active membership in good standing",
                "Deposit consistently refunded — no damage history",
                "Verified ID and signed access agreement",
                "Camera-monitored entry & exit logs",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container text-center">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">READY TO LOCK IN YOUR HOURS?</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Email us to apply for membership or ask about the new artist rate.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:saintpen409@gmail.com?subject=Membership%20Application"
              className="inline-flex items-center gap-2 font-display text-sm tracking-wider bg-primary text-primary-foreground px-8 py-4 rounded-sm hover:bg-primary/90 transition-all glow-red"
            >
              APPLY NOW <ArrowRight size={16} />
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

export default Membership;
