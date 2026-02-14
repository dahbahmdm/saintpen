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
    <path d="M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 0 0-1.877-.726 10.496 10.496 0 0 0-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.802.42.127.856.187 1.297.228.555.053 1.11.06 1.667.06h11.03c.525 0 1.048-.034 1.57-.1.823-.106 1.597-.35 2.296-.81a5.046 5.046 0 0 0 1.88-2.164c.244-.536.374-1.107.444-1.69.046-.39.07-.783.082-1.176V6.124zm-6.67 2.32v7.906c0 .578-.132 1.12-.453 1.605-.483.73-1.165 1.15-2.015 1.29-.636.104-1.282.1-1.907-.07-.86-.233-1.47-.814-1.73-1.676-.165-.546-.163-1.1.018-1.643.283-.852.9-1.373 1.738-1.622.503-.15 1.022-.2 1.544-.256.357-.038.71-.095 1.058-.188.2-.054.385-.14.5-.33.067-.112.098-.25.098-.39V8.086a.47.47 0 0 0-.025-.142.218.218 0 0 0-.2-.168c-.07-.013-.143-.01-.213.005l-5.72 1.204a.477.477 0 0 0-.335.287c-.032.087-.046.18-.046.274v8.784c.002.618-.12 1.2-.478 1.72-.474.688-1.134 1.098-1.954 1.244-.654.117-1.313.11-1.956-.067-.836-.23-1.424-.79-1.69-1.622-.174-.544-.18-1.097.002-1.64.27-.826.86-1.35 1.672-1.59.505-.15 1.025-.2 1.55-.258.352-.04.7-.09 1.044-.18.218-.056.418-.148.543-.35.072-.117.1-.248.1-.384V7.063c0-.264.043-.52.166-.756.18-.346.467-.556.838-.634l6.043-1.278c.27-.057.545-.088.82-.065.39.033.674.222.82.596.058.15.082.31.082.474z"/>
  </svg>
);

const socials = [
  { href: "https://www.instagram.com/saintpenx/?hl=en", label: "Instagram", icon: Instagram },
  { href: "https://www.facebook.com/SaintPen/", label: "Facebook", icon: Facebook },
  { href: "https://www.tiktok.com/@saintpenx", label: "TikTok", icon: TikTokIcon },
  { href: "https://open.spotify.com/artist/7wFlK4KKoES8SJfITWbGiO", label: "Spotify", icon: SpotifyIcon },
  { href: "https://music.apple.com/us/album/im-good-pen-verse-single/1871059986", label: "Apple Music", icon: AppleMusicIcon },
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
