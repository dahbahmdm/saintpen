import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Allowlist of price IDs we created for booking sessions.
const ALLOWED_PRICES = new Set<string>([
  "price_1TXuBrKYH1trsn80iJA1UIYw", // Audio Recording Session — $100
  "price_1TXuBxKYH1trsn80mUs1uz1V", // Greenroom Hourly — $60
  "price_1TXuByKYH1trsn80Mimei931", // Late-Night Hourly — $80
  "price_1TXuBzKYH1trsn80x4kJMztX", // Greenroom Half-Day — $200
  "price_1TXuC0KYH1trsn8027g1WECg", // Greenroom Full-Day — $350
  "price_1TXuC1KYH1trsn80Sm0qOpli", // Studio Full-Day — $500
  "price_1TXuC2KYH1trsn80fNdYLhGY", // Studio + Greenroom Combo Day — $600
]);

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { priceId } = await req.json();
    if (typeof priceId !== "string" || !ALLOWED_PRICES.has(priceId)) {
      return new Response(JSON.stringify({ error: "Invalid priceId" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) throw new Error("STRIPE_SECRET_KEY is not set");

    const stripe = new Stripe(stripeKey, { apiVersion: "2025-08-27.basil" });

    const origin = req.headers.get("origin") || "https://saintpen.com";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/book-studio#booking`,
      phone_number_collection: { enabled: true },
      allow_promotion_codes: true,
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("[create-payment] error", message);
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
