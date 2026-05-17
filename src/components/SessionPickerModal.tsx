import { useState } from "react";
import { Loader2, ArrowRight, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";
import YoungArtistLeadForm from "./YoungArtistLeadForm";

export type SessionCategory = "hourly" | "fullday";

interface SessionOption {
  id: string;
  name: string;
  price: string;
  blurb: string;
  priceId?: string; // omitted for the young-artist lead option
  youngArtist?: boolean;
}

const HOURLY: SessionOption[] = [
  {
    id: "audio",
    name: "Audio Recording",
    price: "$100",
    blurb: "Hourly audio session. Holds your date and time.",
    priceId: "price_1TXuBrKYH1trsn80iJA1UIYw",
  },
  {
    id: "greenroom",
    name: "Greenroom Hourly",
    price: "$60",
    blurb: "Video / podcast room — full hour, full payment.",
    priceId: "price_1TXuBxKYH1trsn80mUs1uz1V",
  },
  {
    id: "latenight",
    name: "Late-Night Hourly",
    price: "$80",
    blurb: "After-hours session for when inspiration hits late.",
    priceId: "price_1TXuByKYH1trsn80Mimei931",
  },
  {
    id: "young",
    name: "Young Artist Rate",
    price: "Special",
    blurb: "1st hour discount — new clients only. Get a coupon by email.",
    youngArtist: true,
  },
];

const FULLDAY: SessionOption[] = [
  {
    id: "gr-half",
    name: "Greenroom Half-Day",
    price: "$200",
    blurb: "4-hour Greenroom block.",
    priceId: "price_1TXuBzKYH1trsn80x4kJMztX",
  },
  {
    id: "gr-full",
    name: "Greenroom Full-Day",
    price: "$350",
    blurb: "8-hour Greenroom block.",
    priceId: "price_1TXuC0KYH1trsn8027g1WECg",
  },
  {
    id: "studio-full",
    name: "Studio Full-Day",
    price: "$500",
    blurb: "Full-day audio recording — lock the room.",
    priceId: "price_1TXuC1KYH1trsn80Sm0qOpli",
  },
  {
    id: "combo",
    name: "Studio + Greenroom Combo Day",
    price: "$600",
    blurb: "Full day across both rooms.",
    priceId: "price_1TXuC2KYH1trsn80fNdYLhGY",
  },
];

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  category: SessionCategory | null;
}

const SessionPickerModal = ({ open, onOpenChange, category }: Props) => {
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [showYoungArtist, setShowYoungArtist] = useState(false);

  const options =
    category === "hourly" ? HOURLY : category === "fullday" ? FULLDAY : [];

  const title =
    category === "hourly" ? "Pick Your Hourly Session" : "Pick Your Full-Day Block";

  const handleSelect = async (opt: SessionOption) => {
    if (opt.youngArtist) {
      setShowYoungArtist(true);
      return;
    }
    if (!opt.priceId) return;
    try {
      setLoadingId(opt.id);
      const { data, error } = await supabase.functions.invoke("create-payment", {
        body: { priceId: opt.priceId },
      });
      if (error) throw error;
      if (!data?.url) throw new Error("No checkout URL returned");
      window.open(data.url as string, "_blank", "noopener,noreferrer");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Checkout failed";
      toast({ title: "Couldn't start checkout", description: message, variant: "destructive" });
    } finally {
      setLoadingId(null);
    }
  };

  const handleClose = (next: boolean) => {
    if (!next) setShowYoungArtist(false);
    onOpenChange(next);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-display tracking-wider text-2xl">
            {showYoungArtist ? "Young Artist Rate" : title}
          </DialogTitle>
          <DialogDescription>
            {showYoungArtist
              ? "New clients only. Drop your info — we'll email you your special-rate coupon."
              : "Choose your session. You'll be sent to secure Stripe checkout in a new tab."}
          </DialogDescription>
        </DialogHeader>

        {showYoungArtist ? (
          <YoungArtistLeadForm onBack={() => setShowYoungArtist(false)} />
        ) : (
          <>
            <div className="space-y-3">
              {options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelect(opt)}
                  disabled={loadingId !== null}
                  className="w-full text-left bg-gradient-card border border-border hover:border-primary rounded-sm p-4 transition-all group disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        {opt.youngArtist && (
                          <Sparkles size={16} className="text-accent" />
                        )}
                        <h4 className="font-display text-lg">{opt.name}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">{opt.blurb}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div
                        className={`font-display text-xl ${
                          opt.youngArtist ? "text-accent" : "text-primary"
                        }`}
                      >
                        {opt.price}
                      </div>
                      <div className="inline-flex items-center gap-1 text-xs tracking-wider text-muted-foreground group-hover:text-primary mt-1">
                        {loadingId === opt.id ? (
                          <Loader2 size={12} className="animate-spin" />
                        ) : (
                          <>
                            {opt.youngArtist ? "CLAIM" : "RESERVE"} <ArrowRight size={12} />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
              Payments lock your date and act as your deposit. Refundable minus a{" "}
              <span className="text-foreground">10% chargeback fee</span> (we get charged when refunds are issued).
            </p>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SessionPickerModal;
