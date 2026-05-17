import { useState } from "react";
import { Loader2, ArrowRight, Sparkles, Plus, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";
import MemberDiscountLeadForm from "./MemberDiscountLeadForm";

export type SessionCategory = "hourly" | "fullday";

interface SessionOption {
  id: string;
  name: string;
  price: string;
  blurb: string;
  priceId?: string; // omitted for the member-discount lead option
  memberDiscount?: boolean;
}

const HOURLY: SessionOption[] = [
  {
    id: "audio",
    name: "Audio Recording (2-hr min)",
    price: "$100",
    blurb: "2-hour minimum session. Engineer included. $50/hr after.",
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
    id: "member-discount",
    name: "Member Discount Inquiry",
    price: "Members",
    blurb: "Active members who self-engineer: request a $20–$25/hr discount.",
    memberDiscount: true,
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

interface AddOn {
  id: string;
  name: string;
  blurb: string;
  price: string;
  priceId: string;
  quantityPrompt?: boolean; // post-production needs # of minutes
}

const ADDONS: AddOn[] = [
  {
    id: "videographer",
    name: "Videographer (+$200)",
    blurb: "On-site camera op for your session.",
    price: "$200",
    priceId: "price_1TXufBKYH1trsn80PCN18ISS",
  },
  {
    id: "makeup",
    name: "Makeup Artist (+$297)",
    blurb: "Professional MUA on set, per person.",
    price: "$297",
    priceId: "price_1TXufCKYH1trsn80mp4QZnzR",
  },
  {
    id: "postprod",
    name: "Post-Production Editing ($8/min)",
    blurb: "Pro video editing billed per finished minute.",
    price: "$8/min",
    priceId: "price_1TXufDKYH1trsn80ZXZOOKR4",
    quantityPrompt: true,
  },
];

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  category: SessionCategory | null;
}

const SessionPickerModal = ({ open, onOpenChange, category }: Props) => {
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [showMemberDiscount, setShowMemberDiscount] = useState(false);
  const [selectedAddOns, setSelectedAddOns] = useState<Record<string, number>>({});

  const options =
    category === "hourly" ? HOURLY : category === "fullday" ? FULLDAY : [];

  const title =
    category === "hourly" ? "Pick Your Hourly Session" : "Pick Your Full-Day Block";

  const toggleAddOn = (addon: AddOn) => {
    setSelectedAddOns((prev) => {
      if (prev[addon.id]) {
        const next = { ...prev };
        delete next[addon.id];
        return next;
      }
      let qty = 1;
      if (addon.quantityPrompt) {
        const input = window.prompt("How many finished minutes of video editing?", "5");
        const n = Math.max(1, Math.floor(Number(input)));
        if (!input || !Number.isFinite(n) || n < 1) return prev;
        qty = n;
      }
      return { ...prev, [addon.id]: qty };
    });
  };

  const handleSelect = async (opt: SessionOption) => {
    if (opt.memberDiscount) {
      setShowMemberDiscount(true);
      return;
    }
    if (!opt.priceId) return;
    try {
      setLoadingId(opt.id);
      const addOnItems = ADDONS.filter((a) => selectedAddOns[a.id]).map((a) => ({
        priceId: a.priceId,
        quantity: selectedAddOns[a.id],
      }));
      const { data, error } = await supabase.functions.invoke("create-payment", {
        body: { priceId: opt.priceId, addOns: addOnItems },
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
    if (!next) {
      setShowMemberDiscount(false);
      setSelectedAddOns({});
    }
    onOpenChange(next);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg bg-card border-border max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display tracking-wider text-2xl">
            {showMemberDiscount ? "Member Discount Inquiry" : title}
          </DialogTitle>
          <DialogDescription>
            {showMemberDiscount
              ? "For active members who self-engineer. Drop your info and we'll reach out about your discounted rate."
              : "Choose your session. You'll be sent to secure Stripe checkout in a new tab."}
          </DialogDescription>
        </DialogHeader>

        {showMemberDiscount ? (
          <MemberDiscountLeadForm onBack={() => setShowMemberDiscount(false)} />
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
                        {opt.memberDiscount && (
                          <Sparkles size={16} className="text-accent" />
                        )}
                        <h4 className="font-display text-lg">{opt.name}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">{opt.blurb}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div
                        className={`font-display text-xl ${
                          opt.memberDiscount ? "text-accent" : "text-primary"
                        }`}
                      >
                        {opt.price}
                      </div>
                      <div className="inline-flex items-center gap-1 text-xs tracking-wider text-muted-foreground group-hover:text-primary mt-1">
                        {loadingId === opt.id ? (
                          <Loader2 size={12} className="animate-spin" />
                        ) : (
                          <>
                            {opt.memberDiscount ? "REQUEST" : "RESERVE"} <ArrowRight size={12} />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-border">
              <p className="font-display text-xs tracking-[0.25em] text-muted-foreground mb-3">
                OPTIONAL ADD-ONS
              </p>
              <div className="grid grid-cols-1 gap-2">
                {ADDONS.map((a) => {
                  const active = !!selectedAddOns[a.id];
                  return (
                    <button
                      key={a.id}
                      type="button"
                      onClick={() => toggleAddOn(a)}
                      className={`flex items-center justify-between text-left rounded-sm border p-3 transition-all ${
                        active
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          {active ? (
                            <Check size={14} className="text-primary" />
                          ) : (
                            <Plus size={14} className="text-muted-foreground" />
                          )}
                          <span className="font-display text-sm">{a.name}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1 ml-6">
                          {a.blurb}
                          {active && selectedAddOns[a.id] > 1
                            ? ` — ${selectedAddOns[a.id]} min`
                            : ""}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
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
