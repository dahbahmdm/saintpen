import { motion } from "framer-motion";
import { Mail, MapPin, Instagram, ArrowRight } from "lucide-react";

const Contact = () => (
  <div className="min-h-screen pt-20">
    <section className="py-20 md:py-28 bg-gradient-dark">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="font-display text-xs tracking-[0.4em] text-primary mb-4 block">GET IN TOUCH</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">CONTACT</h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            Ready to book studio time, inquire about services, or just connect? Reach out.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.a
            href="mailto:saintpen409@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-card border border-border rounded-sm p-8 hover:border-primary/50 transition-all group"
          >
            <Mail className="text-primary mb-4" size={28} />
            <h3 className="font-display text-lg mb-2">EMAIL US</h3>
            <p className="text-muted-foreground text-sm">saintpen409@gmail.com</p>
          </motion.a>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-card border border-border rounded-sm p-8"
          >
            <MapPin className="text-primary mb-4" size={28} />
            <h3 className="font-display text-lg mb-2">LOCATION</h3>
            <p className="text-muted-foreground text-sm">Houston, Texas</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-2xl md:text-3xl mb-4">FOLLOW THE MOVEMENT</h2>
          <p className="text-muted-foreground mb-6">Stay connected on social media for updates, new music, and behind-the-scenes content.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: "https://www.instagram.com/saintpenx/?hl=en", label: "Instagram" },
              { href: "https://www.tiktok.com/@saintpenx", label: "TikTok" },
              { href: "https://www.facebook.com/SaintPen/", label: "Facebook" },
              { href: "https://open.spotify.com/artist/7wFlK4KKoES8SJfITWbGiO", label: "Spotify" },
              { href: "https://music.apple.com/us/album/im-good-pen-verse-single/1871059986", label: "Apple Music" },
              { href: "https://soundcloud.com/user-546444336", label: "SoundCloud" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-sm tracking-wider border border-accent text-accent px-6 py-3 rounded-sm hover:bg-accent hover:text-accent-foreground transition-all"
              >
                {s.label.toUpperCase()}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Contact;
