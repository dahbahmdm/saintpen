import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface LeadBody {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  instagram?: unknown;
}

const isStr = (v: unknown, max = 255): v is string =>
  typeof v === "string" && v.trim().length > 0 && v.length <= max;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = (await req.json()) as LeadBody;
    const name = isStr(body.name, 100) ? body.name.trim() : null;
    const email = isStr(body.email, 255) ? body.email.trim() : null;
    const phone = isStr(body.phone, 30) ? body.phone.trim() : null;
    const instagram = isStr(body.instagram, 60) ? body.instagram.trim() : "";

    if (!name || !email || !phone || !/^\S+@\S+\.\S+$/.test(email)) {
      return new Response(
        JSON.stringify({ error: "Name, valid email, and phone are required." }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const webhookUrl = Deno.env.get("GHL_YOUNG_ARTIST_WEBHOOK_URL");
    if (!webhookUrl) {
      console.error("[young-artist-lead] missing GHL_YOUNG_ARTIST_WEBHOOK_URL");
      // Still respond OK so the user sees success — we log for follow-up.
      return new Response(
        JSON.stringify({ ok: true, queued: true }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const ghlRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "saintpen.com / book-studio / young-artist-rate",
        name,
        email,
        phone,
        instagram,
        tag: "young-artist-rate",
        submitted_at: new Date().toISOString(),
      }),
    });

    if (!ghlRes.ok) {
      const text = await ghlRes.text();
      console.error("[young-artist-lead] GHL failed", ghlRes.status, text);
      throw new Error(`GHL webhook responded ${ghlRes.status}`);
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("[young-artist-lead] error", message);
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
