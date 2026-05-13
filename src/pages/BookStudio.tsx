import { useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Moon, CalendarDays, Check, ArrowRight, MapPin, CreditCard, CalendarCheck, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const META_TITLE = "Book Recording Studio Time in Houston | The L3ague Studios";
const META_DESC =
  "Book flexible recording studio sessions in Houston, TX. Hourly bookings, full-day blocks, and late-night studio time available 12PM–midnight, 7 days a week. Reserve your session at The L3ague Studios today.";

const sessionTypes = [
  { icon: Clock, title: "Hourly Bookings", desc: "Perfect for quick recording runs, vocal drops, or overdubs." },
  { icon: CalendarDays, title: "Full-Day Blocks", desc: "Extended, uninterrupted studio time for projects that need to breathe." },
  { icon: Moon, title: "Late-Night Sessions", desc: "Available through midnight for when inspiration hits after dark." },
];

const reasons = [
  "Flexible hourly and full-day studio rates",
  "Late-night availability through midnight",
  "Professional-grade recording environment in Southwest Houston",
  "Welcoming setup for independent artists, labels, and content creators",
  "Easy online booking with instant confirmation",
  "Membership options available for repeat clients",
];

const steps = [
  { icon: CreditCard, title: "Pay Deposit", desc: "Secure your session with a quick deposit." },
  { icon: CalendarCheck, title: "Pick Your Time", desc: "Choose your slot on our live calendar." },
  { icon: Sparkles, title: "Get Confirmed", desc: "Instant confirmation sent to your phone." },
];

const BookStudio = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = META_TITLE;

    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
      return tag;
    };
    const desc = setMeta("description", META_DESC);

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "The L3ague Studios",
      description: META_DESC,
      address: {
        "@type": "PostalAddress",
        streetAddress: "7400 Harwin Drive",
        addressLocality: "Houston",
        addressRegion: "TX",
        addressCountry: "US",
      },
      openingHours: "Mo-Su 12:00-24:00",
      priceRange: "$$",
      url: "https://saintpen.com/book-studio",
    });
    document.head.appendChild(ld);

    return () => {
      document.title = prevTitle;
      ld.remove();
      desc.setAttribute("content", "");
    };
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-dark">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-display text-xs tracking-[0.4em] text-primary mb-4 block">HOUSTON, TEXAS</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Flexible Studio Sessions in Houston —<br />
              <span className="text-gradient-gold">Book by the Hour or the Day</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mb-8">
              12PM–midnight, 7 days a week. Book when inspiration hits.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 font-display text-sm tracking-wider bg-primary text-primary-foreground px-8 py-4 rounded-sm hover:bg-primary/90 transition-all glow-red"
              >
                BOOK YOUR SESSION <ArrowRight size={16} />
              </a>
              <span className="inline-flex items-center gap-2 text-muted-foreground text-sm border border-border rounded-sm px-4 py-3">
                <MapPin size={16} className="text-accent" /> 7400 Harwin Drive, Houston, TX
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Book When Inspiration Hits */}
      <section className="py-20 md:py-24">
        <div className="container max-w-3xl">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Book When Inspiration Hits</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Studio time shouldn't be a fight to get. At The L3ague Studios, you book by the hour, block out
              your day, or slide in for a late-night session — whatever the work demands.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We're available 12PM to midnight, seven days a week. Because great music doesn't wait for
              business hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Most Flexible */}
      <section className="py-20 md:py-24 bg-secondary/30">
        <div className="container max-w-3xl">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Houston's Most Flexible Recording Studio</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Whether you're a first-time artist or a seasoned performer, we built our booking system around one
              thing — your creative process. No rigid blocks. No wasted studio time. No chasing someone down to
              confirm your slot.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At The L3ague Studios in Houston, TX, you choose how long you record, when you come in, and how
              often you book. We fit into your schedule — not the other way around.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Session Types */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading label="Three Ways To Book" title="HOURLY, FULL-DAY & LATE-NIGHT SESSIONS" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sessionTypes.map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-card border border-border rounded-sm p-8"
              >
                <s.icon className="text-primary mb-4" size={32} />
                <h3 className="font-display text-xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-10 max-w-2xl mx-auto">
            Located at <span className="text-foreground">7400 Harwin Drive, Houston, TX</span> — open 7 days a
            week from 12PM to midnight. Same-day bookings available based on availability.
          </p>
        </div>
      </section>

      {/* Simple Booking */}
      <section className="py-20 md:py-24 bg-secondary/30">
        <div className="container max-w-3xl text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple Online Booking. Instant Confirmation.</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Reserve your session directly through our website. Select your date, choose your time block, and
              secure your spot — no DMs, no back-and-forth. Automated confirmation sent straight to your phone.
            </p>
            <a
              href="#booking"
              className="inline-flex items-center gap-2 font-display text-sm tracking-wider bg-primary text-primary-foreground px-8 py-4 rounded-sm hover:bg-primary/90 transition-all glow-red"
            >
              BOOK YOUR SESSION <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Artists Choose */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading label="The Difference" title="WHY ARTISTS CHOOSE THE L3AGUE STUDIOS" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {reasons.map((r, i) => (
              <motion.div
                key={r}
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 bg-gradient-card border border-border rounded-sm p-5"
              >
                <Check className="text-primary mt-0.5 shrink-0" size={20} />
                <span className="text-foreground">{r}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-20 md:py-28 bg-gradient-dark">
        <div className="container max-w-4xl">
          <SectionHeading label="Reserve Your Session" title="BOOK NOW" />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-card border border-border rounded-sm p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                  <s.icon size={22} />
                </div>
                <div className="font-display text-xs tracking-[0.3em] text-accent mb-1">STEP {i + 1}</div>
                <h3 className="font-display text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Payment buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <a
              href="mailto:saintpen409@gmail.com?subject=Hourly%20Studio%20Booking"
              className="bg-gradient-card border border-primary rounded-sm p-6 hover:border-primary hover:glow-red transition-all group"
            >
              <Clock className="text-primary mb-3" size={28} />
              <h3 className="font-display text-xl mb-1">Hourly Session</h3>
              <p className="text-sm text-muted-foreground mb-4">Pay deposit → pick your hour on the calendar.</p>
              <span className="inline-flex items-center gap-2 font-display text-sm tracking-wider text-primary group-hover:gap-3 transition-all">
                RESERVE HOURLY <ArrowRight size={16} />
              </span>
            </a>
            <a
              href="mailto:saintpen409@gmail.com?subject=Full-Day%20Studio%20Booking"
              className="bg-gradient-card border border-accent rounded-sm p-6 hover:border-accent transition-all group"
            >
              <CalendarDays className="text-accent mb-3" size={28} />
              <h3 className="font-display text-xl mb-1">Full-Day Block</h3>
              <p className="text-sm text-muted-foreground mb-4">Pay deposit → lock the room for the day.</p>
              <span className="inline-flex items-center gap-2 font-display text-sm tracking-wider text-accent group-hover:gap-3 transition-all">
                RESERVE FULL-DAY <ArrowRight size={16} />
              </span>
            </a>
          </div>

          {/* GHL calendar slot */}
          <div
            data-ghl-calendar
            className="bg-gradient-card border border-dashed border-border rounded-sm p-10 text-center"
          >
            <CalendarCheck className="text-muted-foreground mx-auto mb-3" size={28} />
            <p className="font-display text-sm tracking-widest text-muted-foreground mb-1">
              GHL CALENDAR
            </p>
            <p className="text-sm text-muted-foreground">
              Your live booking calendar will appear here once payment is confirmed.
            </p>
          </div>
        </div>
      </section>

      {/* SEO footer line */}
      <section className="py-8 border-t border-border">
        <div className="container">
          <p className="text-center text-xs text-muted-foreground tracking-wide">
            The L3ague Studios | Recording Studio in Houston, TX | 7400 Harwin Drive, Houston, TX | Open Daily
            12PM – 12AM | Book Online at saintpen.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default BookStudio;
