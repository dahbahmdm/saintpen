import { useState } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { z } from "zod";
import { toast } from "sonner";
import { CalendarIcon, Mic2, Video, Camera, Clapperboard, Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const tiers = [
  { id: "hourly", name: "Hourly", duration: "1 hour", price: "$60", note: "Extend hour-by-hour at $60/hr" },
  { id: "half", name: "Half-Day", duration: "4 hours", price: "$200", note: "Save $40 vs hourly", featured: true },
  { id: "full", name: "Full-Day", duration: "8 hours", price: "$350", note: "Best value — save $130" },
];

const useCases = [
  { icon: Mic2, title: "Podcast Recording", desc: "Multi-mic sit-down setups, video-podcast ready." },
  { icon: Video, title: "Video & Music Videos", desc: "Lighting rigs, backdrops, multi-cam coverage." },
  { icon: Camera, title: "Photoshoots", desc: "Album art, lookbooks, branded portraits." },
  { icon: Clapperboard, title: "Skits & Content", desc: "TikTok, Reels, YouTube shorts, sketches." },
];

const addOnList = [
  { id: "videographer", label: "Videographer / camera op", price: "+$200" },
  { id: "post", label: "Post-production editing", price: "$8/min" },
  { id: "makeup", label: "On-set makeup artist", price: "$297/person" },
];

const bookingSchema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  shootType: z.string().min(1, "Pick a shoot type"),
  tier: z.string().min(1, "Pick a tier"),
  date: z.date({ required_error: "Pick a date" }),
  notes: z.string().max(1000).optional().or(z.literal("")),
});

const Greenroom = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [shootType, setShootType] = useState("");
  const [tier, setTier] = useState("");
  const [date, setDate] = useState<Date | undefined>();
  const [notes, setNotes] = useState("");
  const [addOns, setAddOns] = useState<string[]>([]);

  const toggleAddOn = (id: string) =>
    setAddOns((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = bookingSchema.safeParse({ name, email, phone, shootType, tier, date, notes });
    if (!parsed.success) {
      toast.error(parsed.error.errors[0]?.message ?? "Please check the form");
      return;
    }
    const tierLabel = tiers.find((t) => t.id === tier)?.name ?? tier;
    const addOnLabels = addOns
      .map((id) => addOnList.find((a) => a.id === id)?.label)
      .filter(Boolean)
      .join(", ") || "None";

    const subject = `Greenroom Booking — ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      `Shoot type: ${shootType}`,
      `Tier: ${tierLabel}`,
      `Preferred date: ${format(date!, "PPP")}`,
      `Add-ons: ${addOnLabels}`,
      ``,
      `Notes:`,
      notes || "—",
    ].join("\n");

    window.location.href = `mailto:saintpen409@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email — we'll confirm within 24 hrs.");
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-dark">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-display text-xs tracking-[0.4em] text-primary mb-4 block">HOUSTON, TEXAS</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              THE <span className="text-gradient-gold">GREENROOM</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mb-8">
              Houston's video, podcast & content shoot space — lighting, backdrops, and a creative crew on call.
              Same room doubles as the recording studio, so you can cut audio and shoot video in one session.
            </p>
            <a
              href="#book"
              className="inline-flex items-center gap-2 font-display text-sm tracking-wider bg-primary text-primary-foreground px-8 py-4 rounded-sm hover:bg-primary/90 transition-all glow-red"
            >
              BOOK THE GREENROOM <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading label="What You Can Shoot" title="BUILT FOR CREATORS" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((u, i) => (
              <motion.div key={u.title} {...fadeUp} transition={{ delay: i * 0.1 }} className="bg-gradient-card border border-border rounded-sm p-6">
                <u.icon className="text-primary mb-4" size={28} />
                <h3 className="font-display text-lg mb-2">{u.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{u.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container">
          <SectionHeading label="Transparent Rates" title="GREENROOM PRICING" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {tiers.map((t, i) => (
              <motion.div
                key={t.id}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "rounded-sm p-8 border bg-gradient-card relative",
                  t.featured ? "border-primary glow-red" : "border-border"
                )}
              >
                {t.featured && (
                  <span className="absolute -top-3 left-8 bg-primary text-primary-foreground text-xs font-display tracking-widest px-3 py-1 rounded-sm">
                    POPULAR
                  </span>
                )}
                <h3 className="font-display text-2xl mb-1">{t.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t.duration}</p>
                <div className="text-4xl font-bold text-gradient-gold mb-3">{t.price}</div>
                <p className="text-muted-foreground text-sm">{t.note}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm max-w-2xl mx-auto">
            Members get discounted Greenroom hours bundled into their weekly allowance — see the membership page.
          </p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading label="Extras" title="ADD-ONS" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <div className="flex items-center justify-between bg-gradient-card border border-border rounded-sm p-5">
              <div className="flex items-center gap-3">
                <Check className="text-primary" size={20} />
                <span>Lighting rigs & backdrops</span>
              </div>
              <span className="font-display text-sm text-accent tracking-wider">INCLUDED</span>
            </div>
            {addOnList.map((a) => (
              <div key={a.id} className="flex items-center justify-between bg-gradient-card border border-border rounded-sm p-5">
                <span>{a.label}</span>
                <span className="font-display text-sm text-primary tracking-wider">{a.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking form */}
      <section id="book" className="py-20 md:py-28 bg-secondary/30">
        <div className="container max-w-2xl">
          <SectionHeading label="Reserve Your Slot" title="BOOK THE GREENROOM" />
          <form onSubmit={handleSubmit} className="space-y-5 bg-gradient-card border border-border rounded-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} maxLength={100} required />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={255} required />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} maxLength={20} />
              </div>
              <div>
                <Label>Shoot type *</Label>
                <Select value={shootType} onValueChange={setShootType}>
                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Podcast">Podcast</SelectItem>
                    <SelectItem value="Video / Music Video">Video / Music Video</SelectItem>
                    <SelectItem value="Photoshoot">Photoshoot</SelectItem>
                    <SelectItem value="Skit / Content">Skit / Content</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Tier *</Label>
                <Select value={tier} onValueChange={setTier}>
                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>
                    {tiers.map((t) => (
                      <SelectItem key={t.id} value={t.id}>{t.name} — {t.price}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col">
                <Label>Preferred date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className={cn("justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div>
              <Label className="mb-2 block">Add-ons</Label>
              <div className="space-y-2">
                {addOnList.map((a) => (
                  <label key={a.id} className="flex items-center gap-3 cursor-pointer">
                    <Checkbox checked={addOns.includes(a.id)} onCheckedChange={() => toggleAddOn(a.id)} />
                    <span className="text-sm">{a.label} <span className="text-primary">({a.price})</span></span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} maxLength={1000} rows={4} placeholder="Crew size, gear, references…" />
            </div>
            <Button type="submit" className="w-full font-display tracking-wider glow-red" size="lg">
              REQUEST BOOKING <ArrowRight size={16} className="ml-2" />
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Submitting opens your email app with the request pre-filled. We confirm within 24 hours.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Greenroom;
