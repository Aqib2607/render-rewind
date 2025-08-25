import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";
import heroImage from "@/assets/medical-office-hero.jpg";

const HeroSection = () => {
  return (
    <section className="bg-gradient-subtle py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-success-green" />
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                Trusted Medical Care
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Your Trusted{" "}
                <span className="text-primary">Online Clinic</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Professional medical consultations and prescription services from the comfort of your home. Expert care when you need it most.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark shadow-button text-primary-foreground font-semibold px-8"
              >
                Book Appointment
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-hero">
              <img
                src={heroImage}
                alt="Modern medical clinic examination room"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating elements for visual interest */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary-light rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;