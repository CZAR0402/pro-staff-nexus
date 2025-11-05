import { Link } from "react-router-dom";
import { Users, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">TalentBridge</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Professional IT recruitment and staffing solutions across India. Your trusted partner in talent acquisition.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Submit Resume
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">IT Recruitment</li>
              <li className="text-sm text-muted-foreground">Contract Staffing</li>
              <li className="text-sm text-muted-foreground">RPO Services</li>
              <li className="text-sm text-muted-foreground">HR Consulting</li>
              <li className="text-sm text-muted-foreground">Offshore Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">contact@talentbridge.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+91 9876543210</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Tech Park, Cyber City,<br />Bangalore - 560001, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TalentBridge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
