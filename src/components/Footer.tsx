import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin, Music, Facebook } from "lucide-react";

const TikTokIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.7a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.13z"/>
  </svg>
);

const SpotifyIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const AppleMusicIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const SoundCloudIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.56 8.87V17h8.76c1.85 0 3.35-1.5 3.35-3.35 0-1.85-1.5-3.35-3.35-3.35-.35 0-.69.05-1.01.15C18.95 8.21 17.16 6.5 14.96 6.5c-1.2 0-2.28.5-3.06 1.31-.1.1-.24.34-.34.56v.5zM10.5 9.13c-.16-.52-.38-1.01-.66-1.46C8.89 6.15 7.28 5.13 5.45 5.13c-2.97 0-5.38 2.41-5.38 5.38 0 2.97 2.41 5.38 5.38 5.38h.56V9.13h4.49zM1.57 17h.94V9.51c-.58.55-1.01 1.24-1.24 2.03-.13.45-.2.93-.2 1.42 0 1.55.66 2.95 1.72 3.93l-.22.11zM3.45 17h.94V8.53c-.38.19-.73.42-1.05.7L3.45 17zm1.88 0h.94V8.09c-.33.08-.64.2-.94.35V17zm1.88 0h.93V8.09c-.32-.08-.64-.12-.93-.14V17zm1.87 0h.94V8.46c-.28-.18-.59-.32-.94-.4V17z"/>
  </svg>
);

const socials = [
  { href: "https://www.instagram.com/saintpenx/?hl=en", label: "Instagram", icon: Instagram },
  { href: "https://www.facebook.com/SaintPen/", label: "Facebook", icon: Facebook },
  { href: "https://www.tiktok.com/@saintpenx", label: "TikTok", icon: TikTokIcon },
  { href: "https://open.spotify.com/artist/7wFlK4KKoES8SJfITWbGiO", label: "Spotify", icon: SpotifyIcon },
  { href: "https://music.apple.com/us/album/im-good-pen-verse-single/1871059986", label: "Apple Music", icon: AppleMusicIcon },
  { href: "https://soundcloud.com/user-546444336", label: "SoundCloud", icon: SoundCloudIcon },
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
              { to: "/merch", label: "Merch" },
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
