import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary border-t border-border">
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-gradient-gold text-xl mb-4">SAINT PEN</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Houston's premier recording studio & entertainment brand. Making music, building community, creating culture.
          </p>
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
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Instagram size={16} /> @saintpen
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
