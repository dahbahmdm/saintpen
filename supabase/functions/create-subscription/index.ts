import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Allowlist of membership tier price IDs
const ALLOWED_PRICES = new Set<string>([
  "price_1TXuf3KYH1trsn80bU7tRBgv", // Starter — $600/mo
  "price_1TXuf5KYH1trsn80U4YFWOJK", // Plus    — $700/mo
  "price_1TXuf6KYH1trsn802WAuno8w", // Pro     — $800/mo
  "price_1TXuf8KYH1trsn80H0VeGAqk", // Elite   — $1,000/mo
]);

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { priceId, email, name } = await req.json();
    if (typeof priceId !== "string" || !ALLOWED_PRICES.has(priceId)) {
      return new Response(JSON.stringify({ error: "Invalid priceId" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (typeof email !== "string" || !email.includes("@") || email.length > 255) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const safeName = typeof name === "string" ? name.slice(0, 100) : undefined;

    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) throw new Error("STRIPE_SECRET_KEY is not set");

    const stripe = new Stripe(stripeKey, { apiVersion: "2025-08-27.basil" });

    // Reuse existing customer if one exists for this email; otherwise let Checkout create one.
    const existing = await stripe.customers.list({ email, limit: 1 });
    let customerId: string | undefined;
    if (existing.data.length > 0) {
      customerId = existing.data[0].id;
    }

    const origin = req.headers.get("origin") || "https://saintpen.com";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer: customerId,
      customer_email: customerId ? undefined : email,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/payment-success?session_id={CHECKOUT_SESSION_ID}&type=membership`,
      cancel_url: `${origin}/membership`,
      allow_promotion_codes: true,
      subscription_data: safeName ? { metadata: { customer_name: safeName } } : undefined,
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("[create-subscription] error", message);
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
