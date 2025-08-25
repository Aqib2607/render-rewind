import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, CheckCircle, Clock, MapPin } from "lucide-react";
import doctorImage from "@/assets/doctor-profile.jpg";

const DoctorProfile = () => {
  return (
    <section className="py-16 bg-medical-section">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto shadow-card">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Doctor Image */}
              <div className="flex justify-center md:justify-start">
                <div className="relative">
                  <img
                    src={doctorImage}
                    alt="Dr. Sarah Smith"
                    className="w-48 h-48 rounded-2xl object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success-green rounded-full border-4 border-background flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="md:col-span-2 space-y-6">
                {/* Name & Title */}
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-foreground">Dr. Sarah Smith</h2>
                  <p className="text-primary font-semibold">Internal Medicine Specialist</p>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-rating-gold text-rating-gold" />
                    ))}
                  </div>
                  <span className="font-semibold text-foreground">4.9/5</span>
                  <span className="text-muted-foreground">(200+ patients)</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  With over 15 years of experience in internal medicine, Dr. Smith provides 
                  comprehensive healthcare services with a focus on preventive care and 
                  patient education.
                </p>

                {/* Credentials */}
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="flex items-center space-x-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>Board Certified</span>
                  </Badge>
                  <Badge variant="secondary" className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>15+ Years Experience</span>
                  </Badge>
                  <Badge variant="secondary" className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>Licensed in 5 States</span>
                  </Badge>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Button 
                    className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-button"
                    size="lg"
                  >
                    View Full Profile
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DoctorProfile;