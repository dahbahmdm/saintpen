import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mic2, Camera, Music, Users, MapPin, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/meet-saint-pen.jpg";
import imGoodCover from "@/assets/im-good-cover.webp";
import somethingToProveCover from "@/assets/something-to-prove-cover.webp";
import changeCover from "@/assets/change-cover.webp";
import askAboutMeCover from "@/assets/ask-about-me-cover.webp";
import stillTippinCover from "@/assets/still-tippin-cover.webp";
import artImage from "@/assets/saint-pen-art.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const services = [
{ icon: Mic2, title: "Recording Studio", desc: "Professional audio recording with top-tier equipment", link: "/recording-studio" },
{ icon: Camera, title: "Green Room", desc: "Video, photo, and skit production space", link: "/recording-studio" },
{ icon: Music, title: "Music & Artist Services", desc: "Streaming, production, and ghostwriting", link: "/music" },
{ icon: Users, title: "Membership", desc: "Recurring studio access and community perks", link: "/contact" }];


const albums = [
{ img: imGoodCover, title: "I'm Good", year: "" },
{ img: somethingToProveCover, title: "Something to Prove", year: "" },
{ img: changeCover, title: "Change", year: "ft. Downstrs" },
{ img: askAboutMeCover, title: "Ask About Me", year: "ft. Reggie D." },
{ img: stillTippinCover, title: "Still Tippin", year: "ft. Ikezntana" }];


const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-dark">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Saint Pen in the studio" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
        </div>

        <div className="container relative z-10 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl">

            <span className="font-display text-xs tracking-[0.4em] text-primary mb-4 block">
              HOUSTON, TEXAS
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-6">
              <span className="text-gradient-gold">SAINT</span>
              <br />
              <span className="text-gradient-red">PEN</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-md mb-8 font-light">
              Entertainment. Music. Culture. Houston's premier recording studio and creative hub.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/recording-studio"
                className="inline-flex items-center gap-2 font-display text-sm tracking-wider bg-primary text-primary-foreground px-8 py-4 rounded-sm hover:bg-primary/90 transition-all glow-red">

                BOOK STUDIO TIME <ArrowRight size={16} />
              </Link>
              <Link
                to="/music"
                className="inline-flex items-center gap-2 font-display text-sm tracking-wider border border-accent text-accent px-8 py-4 rounded-sm hover:bg-accent hover:text-accent-foreground transition-all">

                LISTEN NOW
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading label="What We Do" title="OUR SERVICES" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) =>
            <motion.div key={s.title} {...fadeUp} transition={{ delay: i * 0.1, duration: 0.5 }}>
                <Link
                to={s.link}
                className="block bg-gradient-card border border-border rounded-sm p-6 hover:border-primary/50 transition-all group h-full">

                  <s.icon className="text-primary mb-4" size={28} />
                  <h3 className="font-display text-lg mb-2 group-hover:text-gradient-gold transition-colors">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Music */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container">
          <SectionHeading label="Latest Releases" title="THE MUSIC" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {albums.map((a, i) =>
            <motion.div key={a.title} {...fadeUp} transition={{ delay: i * 0.08, duration: 0.5 }}>
                <Link to="/music" className="group block">
                  <div className="aspect-square overflow-hidden rounded-sm mb-3">
                    <img
                    src={a.img}
                    alt={a.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                  </div>
                  <h4 className="font-display text-sm tracking-wide truncate">{a.title}</h4>
                  {a.year && <p className="text-xs text-muted-foreground">{a.year}</p>}
                </Link>
              </motion.div>
            )}
          </div>
          <div className="text-center mt-10">
            <Link to="/music" className="font-display text-sm tracking-wider text-primary hover:text-coral transition-colors inline-flex items-center gap-2">
              VIEW ALL MUSIC <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <img src={artImage} alt="Saint Pen art" className="rounded-sm glow-gold w-full max-w-md mx-auto" />
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <span className="font-display text-xs tracking-[0.3em] text-primary mb-2 block">THE ARTIST</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">MEET SAINT PEN</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Born and raised in Houston, Texas, Saint Pen is more than an artist — he's a movement.
                From the recording booth to the stage, his mission is to create authentic music that resonates
                with the culture and builds a community around art, creativity, and hustle.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">Through Th3 L3agu3 Entertainment, he's building a platform for artists, creatives, and dreamers in Houston and beyond.


              </p>
              <Link
                to="/about"
                className="font-display text-sm tracking-wider text-accent hover:text-gold-bright transition-colors inline-flex items-center gap-2">

                LEARN MORE <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location CTA */}
      <section className="py-20 md:py-28 bg-gradient-card border-y border-border">
        <div className="container text-center">
          <motion.div {...fadeUp}>
            <MapPin className="text-primary mx-auto mb-4" size={32} />
            <h2 className="text-3xl md:text-5xl font-bold mb-4">HOUSTON, TEXAS</h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Our state-of-the-art studio is located in the heart of Houston. Come record, create, and be part of the culture.
            </p>
            <Link
              to="/recording-studio"
              className="inline-flex items-center gap-2 font-display text-sm tracking-wider bg-primary text-primary-foreground px-8 py-4 rounded-sm hover:bg-primary/90 transition-all glow-red">

              BOOK YOUR SESSION <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>);

};

export default Index;