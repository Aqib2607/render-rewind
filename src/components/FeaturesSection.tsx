import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Pill, UserCheck } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Easy Booking",
    description: "Schedule appointments online in just a few clicks. Choose your preferred time slot."
  },
  {
    icon: Pill,
    title: "Prescription Management",
    description: "Digital prescriptions sent directly to your pharmacy. Track your medication history."
  },
  {
    icon: UserCheck,
    title: "Medicine Recommendations",
    description: "Get personalized medicine recommendations based on your symptoms and medical history."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Why Choose MedicMate?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive healthcare services designed around your convenience and well-being.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="text-center shadow-card hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 space-y-6">
                  {/* Icon */}
                  <div className="mx-auto w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;