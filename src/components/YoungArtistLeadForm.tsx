import { useState } from "react";
import { z } from "zod";
import { ArrowLeft, Loader2, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone").max(30),
  instagram: z.string().trim().max(60).optional().or(z.literal("")),
});

interface Props {
  onBack: () => void;
}

const YoungArtistLeadForm = ({ onBack }: Props) => {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", instagram: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const first = parsed.error.issues[0]?.message ?? "Check your info";
      toast({ title: "Check the form", description: first, variant: "destructive" });
      return;
    }
    try {
      setSubmitting(true);
      const { error } = await supabase.functions.invoke("submit-young-artist-lead", {
        body: parsed.data,
      });
      if (error) throw error;
      setDone(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Submission failed";
      toast({ title: "Couldn't submit", description: message, variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="text-center py-6">
        <CheckCircle2 className="text-primary mx-auto mb-3" size={40} />
        <h4 className="font-display text-xl mb-2">You're on the list.</h4>
        <p className="text-sm text-muted-foreground">
          Look out for your special-rate coupon in your email shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <Label htmlFor="ya-name">Name</Label>
        <Input
          id="ya-name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          maxLength={100}
        />
      </div>
      <div>
        <Label htmlFor="ya-email">Email</Label>
        <Input
          id="ya-email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          maxLength={255}
        />
      </div>
      <div>
        <Label htmlFor="ya-phone">Phone</Label>
        <Input
          id="ya-phone"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
          maxLength={30}
        />
      </div>
      <div>
        <Label htmlFor="ya-ig">Instagram (optional)</Label>
        <Input
          id="ya-ig"
          value={form.instagram}
          onChange={(e) => setForm({ ...form, instagram: e.target.value })}
          placeholder="@yourhandle"
          maxLength={60}
        />
      </div>

      <div className="flex items-center justify-between pt-2">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft size={14} /> Back
        </button>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center gap-2 font-display text-sm tracking-wider bg-primary text-primary-foreground px-6 py-3 rounded-sm hover:bg-primary/90 transition-all disabled:opacity-60"
        >
          {submitting ? <Loader2 size={14} className="animate-spin" /> : null}
          GET MY COUPON
        </button>
      </div>
    </form>
  );
};

export default YoungArtistLeadForm;
