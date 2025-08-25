import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">MedicMate</span>
            </div>
            <p className="text-muted leading-relaxed">
              Your trusted online clinic providing professional medical consultations and prescription services with experienced doctors.
            </p>
            <div className="space-y-2 text-sm text-muted">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contact@medicmate.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>123 Medical Center, Health City, HC 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="space-y-2">
              <a href="#" className="block text-muted hover:text-background transition-colors">
                About
              </a>
              <a href="#" className="block text-muted hover:text-background transition-colors">
                Book Now
              </a>
              <a href="#" className="block text-muted hover:text-background transition-colors">
                Medicine & Diagnosis
              </a>
              <a href="#" className="block text-muted hover:text-background transition-colors">
                Blog
              </a>
              <a href="#" className="block text-muted hover:text-background transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <nav className="space-y-2">
              <a href="#" className="block text-muted hover:text-background transition-colors">
                Online Consultations
              </a>
              <a href="#" className="block text-muted hover:text-background transition-colors">
                Prescription Management
              </a>
              <a href="#" className="block text-muted hover:text-background transition-colors">
                Medicine Recommendations
              </a>
              <a href="#" className="block text-muted hover:text-background transition-colors">
                Follow-up Care
              </a>
            </nav>
          </div>

          {/* Legal & Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <nav className="space-y-2">
              <a href="#" className="block text-muted hover:text-background transition-colors">
                Help Center
              </a>
              <a href="#" className="block text-muted hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-muted hover:text-background transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block text-muted hover:text-background transition-colors">
                Contact Support
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-muted mt-8 pt-8 text-center text-sm text-muted">
          <p>© 2024 MedicMate. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;