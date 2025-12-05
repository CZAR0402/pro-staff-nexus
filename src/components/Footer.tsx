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
              <span className="text-xl font-bold">TechRuitz</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Your extended tech recruitment and operations office. We build and run dedicated
              offshore teams so you can scale without expanding in-house overhead.
            </p>
            <div className="flex space-x-4">
              {/* Update these hrefs with real social links */}
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-[0.16em] uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/data-security" className="hover:text-primary transition-colors">
                  Data Security
                </Link>
              </li>
              <li>
                <Link to="/get-started" className="hover:text-primary transition-colors">
                  Get Started
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Snapshot */}
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-[0.16em] uppercase mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Recruiting & Staffing</li>
              <li>RPO (Recruitment Process Outsourcing)</li>
              <li>Documentation – RFPs & Proposals</li>
              <li>Billing, AR & Payroll Support</li>
              <li>Social Media Management</li>
              <li>Offshore Development & Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-[0.16em] uppercase mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  {/* replace with client email */}
                  hello@techruitz.com
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  {/* replace with client phone */}
                  +91 98XXXXXX00
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  {/* replace with real address if provided */}
                  Offshore HQ – India<br />
                  Onshore Partners – US / Canada / UK
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TechRuitz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
