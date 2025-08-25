import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-cta text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-lg opacity-90 leading-relaxed">
              Book your consultation today and experience quality healthcare from home.
            </p>
          </div>

          {/* CTA Button */}
          <div>
            <Button 
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-white hover:text-primary-dark shadow-button font-semibold px-12 py-3"
            >
              Schedule Your Appointment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;