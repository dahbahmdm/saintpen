import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, CalendarCheck, ArrowRight } from "lucide-react";

const PaymentSuccess = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "Booking Confirmed | The L3ague Studios";
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-gradient-dark">
      <section className="py-24 md:py-32">
        <div className="container max-w-2xl text-center">
          <CheckCircle2 className="text-primary mx-auto mb-6" size={56} />
          <span className="font-display text-xs tracking-[0.4em] text-accent mb-3 block">
            PAYMENT RECEIVED
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Session Is <span className="text-gradient-gold">Locked In</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Thanks for booking with The L3ague Studios. Your date is held. Check your
            email for the receipt and a link to pick your time slot on our calendar.
          </p>

          <div className="bg-gradient-card border border-border rounded-sm p-6 mb-8 text-left">
            <CalendarCheck className="text-primary mb-3" size={28} />
            <h2 className="font-display text-xl mb-2">Next step — pick your time</h2>
            <p className="text-sm text-muted-foreground">
              We'll text and email you a calendar link within minutes. If you don't
              see it, check spam or message us on Instagram{" "}
              <span className="text-foreground">@saintpen409</span>.
            </p>
          </div>

          <p className="text-xs text-muted-foreground mb-8 leading-relaxed">
            Payments lock your date and act as your deposit. Refundable minus a{" "}
            <span className="text-foreground">10% chargeback fee</span>.
          </p>

          <Link
            to="/book-studio"
            className="inline-flex items-center gap-2 font-display text-sm tracking-wider bg-primary text-primary-foreground px-8 py-4 rounded-sm hover:bg-primary/90 transition-all glow-red"
          >
            BACK TO BOOKING <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PaymentSuccess;
