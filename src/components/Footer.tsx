import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin, Music, Facebook } from "lucide-react";

const TikTokIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.7a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.13z"/>
  </svg>
);

const socials = [
  { href: "https://www.instagram.com/saintpenx/?hl=en", label: "Instagram", icon: Instagram },
  { href: "https://www.facebook.com/SaintPen/", label: "Facebook", icon: Facebook },
  { href: "https://www.tiktok.com/@saintpenx", label: "TikTok", icon: TikTokIcon },
  { href: "https://open.spotify.com/artist/7wFlK4KKoES8SJfITWbGiO", label: "Spotify", icon: Music },
  { href: "https://music.apple.com/us/album/im-good-pen-verse-single/1871059986", label: "Apple Music", icon: Music },
  { href: "https://soundcloud.com/user-546444336", label: "SoundCloud", icon: Music },
];

const Footer = () => (
  <footer className="bg-secondary border-t border-border">
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-gradient-gold text-xl mb-4">SAINT PEN</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-5">
            Houston's premier recording studio & entertainment brand. Making music, building community, creating culture.
          </p>
          <div className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="w-9 h-9 rounded-sm bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm tracking-wider text-accent mb-4">QUICK LINKS</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/recording-studio", label: "Recording Studio" },
              { to: "/music", label: "Music" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm tracking-wider text-accent mb-4">CONNECT</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <a href="mailto:saintpen409@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Mail size={16} /> saintpen409@gmail.com
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={16} /> Houston, Texas
            </div>
            <a href="https://www.instagram.com/saintpenx/?hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Instagram size={16} /> @saintpenx
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-10 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Saint Pen Entertainment. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
