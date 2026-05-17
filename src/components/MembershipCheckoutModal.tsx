import { useState } from "react";
import { z } from "zod";
import { Loader2, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

const schema = z.object({
  email: z.string().trim().email("Enter a valid email").max(255),
  name: z.string().trim().min(1, "Name is required").max(100),
});

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tierName: string;
  priceId: string | null;
}

const MembershipCheckoutModal = ({ open, onOpenChange, tierName, priceId }: Props) => {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!priceId) return;
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast({
        title: "Check the form",
        description: parsed.error.issues[0]?.message ?? "Invalid input",
        variant: "destructive",
      });
      return;
    }
    try {
      setSubmitting(true);
      const { data, error } = await supabase.functions.invoke("create-subscription", {
        body: { priceId, email: parsed.data.email, name: parsed.data.name },
      });
      if (error) throw error;
      if (!data?.url) throw new Error("No checkout URL returned");
      window.open(data.url as string, "_blank", "noopener,noreferrer");
      onOpenChange(false);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Checkout failed";
      toast({ title: "Couldn't start checkout", description: message, variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-display tracking-wider text-2xl">
            Join {tierName}
          </DialogTitle>
          <DialogDescription>
            Monthly recurring membership. Cancel anytime via the email Stripe sends with your receipt.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <Label htmlFor="mc-name">Name</Label>
            <Input
              id="mc-name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              maxLength={100}
            />
          </div>
          <div>
            <Label htmlFor="mc-email">Email</Label>
            <Input
              id="mc-email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              maxLength={255}
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full inline-flex items-center justify-center gap-2 font-display text-sm tracking-wider bg-primary text-primary-foreground px-6 py-3 rounded-sm hover:bg-primary/90 transition-all disabled:opacity-60"
          >
            {submitting ? <Loader2 size={14} className="animate-spin" /> : null}
            CONTINUE TO STRIPE <ArrowRight size={14} />
          </button>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Payments are refundable minus a <span className="text-foreground">10% chargeback fee</span>.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default MembershipCheckoutModal;
