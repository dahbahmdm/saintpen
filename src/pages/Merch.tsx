import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

import redTee1 from "@/assets/merch-red-tee-1.jpg";
import redTee2 from "@/assets/merch-red-tee-2.jpg";
import redTee3 from "@/assets/merch-red-tee-3.jpg";
import redTee4 from "@/assets/merch-red-tee-4.jpg";
import blueTee1 from "@/assets/merch-blue-tee-1.jpg";
import blueTee2 from "@/assets/merch-blue-tee-2.jpg";
import hoodie1 from "@/assets/merch-hoodie-1.jpg";
import hoodie2 from "@/assets/merch-hoodie-2.jpg";
import studioSession from "@/assets/merch-studio-session.jpg";
import lifestyle1 from "@/assets/merch-lifestyle-1.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const GHL_STORE_URL = "#"; // Replace with your GHL store URL

const products = [
  {
    name: "Follow Ya Heart — Red Long-Sleeve",
    description:
      "Premium long-sleeve tee featuring the Black Angel design with 'Follow Ya Heart' sleeve print. Bold red colorway that makes a statement.",
    images: [redTee1, redTee4, redTee2, redTee3],
    color: "Red",
    link: GHL_STORE_URL,
  },
  {
    name: "Follow Ya Heart — Blue Long-Sleeve",
    description:
      "The same iconic Black Angel design in a deep royal blue. 'Follow Ya Heart' runs down the sleeve — a reminder to stay true.",
    images: [blueTee1, blueTee2],
    color: "Blue",
    link: GHL_STORE_URL,
  },
];

const comingSoon = [
  { img: hoodie1, label: "Follow Ya Heart Hoodie" },
  { img: hoodie2, label: "Follow Ya Heart Hoodie" },
];

const Merch = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ShoppingBag className="mx-auto mb-4 text-primary" size={36} />
            <span className="font-display text-xs tracking-[0.4em] text-primary mb-4 block">
              OFFICIAL MERCH
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-gradient-gold">THE BLACK ART</span>{" "}
              <span className="text-gradient-red">STORE</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto">
              Wear the movement. Rep the culture. Every piece tells a story.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading label="Featured" title="FOLLOW YA HEART COLLECTION" />

          <div className="space-y-20">
            {products.map((product, idx) => (
              <motion.div
                key={product.name}
                {...fadeUp}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="bg-gradient-card border border-border rounded-sm overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image grid */}
                  <div
                    className={`grid ${
                      product.images.length > 2
                        ? "grid-cols-2"
                        : "grid-cols-1 sm:grid-cols-2"
                    } gap-1`}
                  >
                    {product.images.map((img, i) => (
                      <div key={i} className="aspect-[3/4] overflow-hidden">
                        <img
                          src={img}
                          alt={`${product.name} photo ${i + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Product info */}
                  <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
                    <span className="font-display text-xs tracking-[0.3em] text-primary mb-3 block">
                      {product.color.toUpperCase()} COLORWAY
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {product.description}
                    </p>
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-display text-sm tracking-wider bg-primary text-primary-foreground px-8 py-4 rounded-sm hover:bg-primary/90 transition-all glow-red w-fit"
                    >
                      SHOP NOW <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon - Hoodies */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container">
          <SectionHeading label="Coming Soon" title="MORE DROPS LOADING" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {comingSoon.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-sm"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <h4 className="font-display text-lg mb-1">{item.label}</h4>
                    <span className="text-xs text-primary tracking-wider font-display">
                      COMING SOON
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Gallery */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading label="The Culture" title="BEHIND THE BRAND" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div {...fadeUp} className="aspect-video overflow-hidden rounded-sm">
              <img
                src={studioSession}
                alt="Studio session"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.1 }}
              className="aspect-video overflow-hidden rounded-sm"
            >
              <img
                src={lifestyle1}
                alt="Lifestyle"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-card border-y border-border">
        <div className="container text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              WANT CUSTOM MERCH?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              We create custom merch for artists and brands. Hit us up to start
              your project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-display text-sm tracking-wider bg-primary text-primary-foreground px-8 py-4 rounded-sm hover:bg-primary/90 transition-all glow-red"
            >
              GET IN TOUCH <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Merch;
