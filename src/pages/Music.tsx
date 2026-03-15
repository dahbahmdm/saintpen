import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import followYourHeartCleanCover from "@/assets/follow-your-heart-clean-cover.jpg";
import followYourHeartDirtyCover from "@/assets/follow-your-heart-dirty-cover.jpg";
import imGoodCover from "@/assets/im-good-cover.webp";
import somethingToProveCover from "@/assets/something-to-prove-cover.webp";
import changeCover from "@/assets/change-cover.webp";
import askAboutMeCover from "@/assets/ask-about-me-cover.webp";
import stillTippinCover from "@/assets/still-tippin-cover.webp";
import iCryCover from "@/assets/i-cry-cover.webp";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const featuredVersions = [
  {
    img: followYourHeartCleanCover,
    label: "Clean Version",
    link: "https://distrokid.com/hyperfollow/saintpenandikezntana/saints-and-sinners?afsrc=1&irclickid=znk37nx7bxyZWRMWqQQQPxVeUkuzPxzBRySTTY0&irgwc=1&irpid=10078&sharedid=linktr.ee&utm_campaign=10078&utm_medium=affiliate&utm_source=impact",
  },
  {
    img: followYourHeartDirtyCover,
    label: "Dirty Version",
    link: "https://distrokid.com/hyperfollow/saintpenandikezntana/saints--sinners?afsrc=1&irclickid=znk37nx7bxyZWRMWqQQQPxVeUkuzNeSt0yI61g0&irgwc=1&irpid=10078&sharedid=linktr.ee&utm_campaign=10078&utm_medium=affiliate&utm_source=impact",
  },
];

const tracks = [
  { img: followYourHeartCleanCover, title: "Follow Your Heart (Clean)", artist: "Saint Pen" },
  { img: followYourHeartDirtyCover, title: "Follow Your Heart (Dirty)", artist: "Saint Pen" },
  { img: imGoodCover, title: "I'm Good", artist: "Saint Pen" },
  { img: somethingToProveCover, title: "Something to Prove", artist: "Saint Pen" },
  { img: changeCover, title: "Change", artist: "Saint Pen ft. Downstrs" },
  { img: askAboutMeCover, title: "Ask About Me", artist: "Saint Pen x Reggie D." },
  { img: stillTippinCover, title: "Still Tippin", artist: "Ikezntana x Saint Pen" },
  { img: iCryCover, title: "I Cry", artist: "Saint Pen" },
];

const MusicPage = () => (
  <div className="min-h-screen pt-20">
    {/* Hero */}
    <section className="py-20 md:py-28 bg-gradient-dark">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="font-display text-xs tracking-[0.4em] text-primary mb-4 block">DISCOGRAPHY</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">THE MUSIC</h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            Explore Saint Pen's catalog — from raw Houston hip-hop to soulful collaborations.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Featured Release */}
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        <SectionHeading label="NEW RELEASE" title="FOLLOW YOUR HEART" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {featuredVersions.map((v, i) => (
            <motion.div
              key={v.label}
              {...fadeUp}
              transition={{ delay: i * 0.15 }}
              className="group glow-gold rounded-sm overflow-hidden bg-card"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={v.img}
                  alt={`Follow Your Heart - ${v.label}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="font-display text-xs tracking-[0.3em] text-primary uppercase block mb-1">
                  {v.label}
                </span>
                <h3 className="font-display text-lg md:text-xl tracking-wide mb-1">Follow Your Heart</h3>
                <p className="text-sm text-muted-foreground mb-4">Saint Pen</p>
                <a
                  href={v.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium tracking-wider hover:bg-primary/90 transition-colors"
                >
                  STREAM NOW
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Discography Grid */}
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading label="Releases" title="DISCOGRAPHY" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {tracks.map((t, i) => (
            <motion.div key={t.title} {...fadeUp} transition={{ delay: i * 0.08 }} className="group">
              <div className="aspect-square overflow-hidden rounded-sm mb-4 glow-red">
                <img src={t.img} alt={t.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-display text-base md:text-lg tracking-wide">{t.title}</h3>
              <p className="text-sm text-muted-foreground">{t.artist}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* SoundCloud Embed */}
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        <SectionHeading label="Listen" title="STREAM NOW" />
        <motion.div {...fadeUp} className="max-w-3xl mx-auto">
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/user-546444336/saint-pen-x-ikezntana-x-optomystic-x-rico-zone-th3-l3agu3-cypher-uno&color=%23d60017&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            className="rounded-sm"
          />
        </motion.div>
      </div>
    </section>

    {/* Instagram Reels */}
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading label="Watch" title="LATEST VISUALS" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "https://www.instagram.com/reels/DSsTGrPDSK8/",
            "https://www.instagram.com/reels/DUt18WCDd9B/",
            "https://www.instagram.com/reels/DDUxm9cR_uh/",
          ].map((url, i) => {
            const reelId = url.split("/reels/")[1]?.replace("/", "");
            return (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}>
                <iframe
                  src={`https://www.instagram.com/reel/${reelId}/embed/`}
                  width="100%"
                  height="500"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency
                  allow="encrypted-media"
                  className="rounded-sm"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  </div>
);

export default MusicPage;
