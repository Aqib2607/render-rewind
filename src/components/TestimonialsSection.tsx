import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    comment: "Dr. Smith provided excellent care and was very thorough. The online platform is easy to use!"
  },
  {
    name: "Michael Chen",
    rating: 5,
    comment: "Quick response time and professional service. Got my prescription within hours."
  },
  {
    name: "Emily Davis",
    rating: 5,
    comment: "Very convenient for busy schedules. The doctor was knowledgeable and caring."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-medical-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground">
            Real experiences from our valued patients
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-rating-gold text-rating-gold" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
                
                {/* Patient Name */}
                <div className="pt-2 border-t">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;