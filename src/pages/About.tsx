import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import meetSaintPen from "@/assets/meet-saint-pen.jpg";
import artImage from "@/assets/saint-pen-art.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const About = () =>
<div className="min-h-screen pt-20">
    <section className="py-20 md:py-28 bg-gradient-dark">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-display text-xs tracking-[0.4em] text-primary mb-4 block">THE STORY</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">ABOUT <span className="text-gradient-gold">SAINT PEN</span></h1>
            <p className="text-muted-foreground leading-relaxed mb-4">Th3 L3agu3 Entertainment is a Houston-based music and entertainment brand built on authenticity, creativity, and community. Founded by Saint Pen, the brand encompasses recording studio services, original music production, merchandise, and a growing community of artists and fans.



          </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From the streets of Houston to the recording booth, Saint Pen's mission is to create a platform
              where artists can develop their craft, share their stories, and build something that lasts. The studio
              serves as a creative hub for Houston's music scene — a place where culture is made, not just consumed.
            </p>
            <Link
            to="/recording-studio"
            className="inline-flex items-center gap-2 font-display text-sm tracking-wider text-primary hover:text-coral transition-colors">

              VISIT THE STUDIO <ArrowRight size={14} />
            </Link>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
            <img src={meetSaintPen} alt="Saint Pen" className="rounded-sm glow-red w-full max-w-md mx-auto" />
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <img src={artImage} alt="Saint Pen illustration" className="rounded-sm glow-gold w-full max-w-sm mx-auto" />
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">THE VISION</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              More than just music — Saint Pen Entertainment is building a movement. Through the Black Angel
              merchandise line, the Inner Circle community, and the recording studio, the brand creates
              multiple touchpoints for fans and artists alike.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Starting in Houston and scaling to more cities, the goal is to create a network of creative
              spaces where independent artists can thrive. Every recording session, every piece of merch,
              every track released is a step toward that vision.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  </div>;


export default About;