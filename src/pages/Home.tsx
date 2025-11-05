import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import FeatureCard from "@/components/FeatureCard";
import {
  Code,
  Users,
  Building2,
  HeadphonesIcon,
  Settings,
  Zap,
  Shield,
  MapPin,
  UserCheck,
  Laptop,
  Briefcase,
  Heart,
  DollarSign,
  Wrench,
  Quote,
} from "lucide-react";
import heroImage from "@/assets/hero-team.jpg";

const Home = () => {
  const services = [
    {
      icon: Code,
      title: "IT Recruitment & Staffing",
      description: "Find top IT professionals for your technology initiatives. Expert vetting and fast placement.",
    },
    {
      icon: Users,
      title: "Contract Staffing",
      description: "Flexible staffing solutions for short-term and long-term projects with skilled professionals.",
    },
    {
      icon: Building2,
      title: "Recruitment Process Outsourcing",
      description: "End-to-end recruitment solutions tailored to your organization's hiring needs.",
    },
    {
      icon: HeadphonesIcon,
      title: "HR Consulting",
      description: "Strategic HR advisory services to optimize your talent management and organizational growth.",
    },
    {
      icon: Settings,
      title: "Offshore Development Support",
      description: "Build and manage dedicated offshore development teams for your technology projects.",
    },
  ];

  const industries = [
    { icon: Code, name: "Information Technology" },
    { icon: HeadphonesIcon, name: "BPO & Services" },
    { icon: Heart, name: "Healthcare" },
    { icon: DollarSign, name: "Finance & Banking" },
    { icon: Wrench, name: "Engineering" },
  ];

  const features = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround time with pre-screened candidates ready to join within 48 hours.",
    },
    {
      icon: Shield,
      title: "Pre-Vetted Candidates",
      description: "Thoroughly screened professionals with verified skills and background checks.",
    },
    {
      icon: MapPin,
      title: "Pan-India Hiring",
      description: "Access to talent pool across all major cities and tier-2 locations in India.",
    },
    {
      icon: UserCheck,
      title: "Dedicated HR Team",
      description: "Assigned recruitment specialists who understand your unique hiring requirements.",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      designation: "CTO, TechCorp Solutions",
      text: "TalentBridge helped us scale our development team rapidly. Their quality of candidates and turnaround time is exceptional.",
    },
    {
      name: "Priya Sharma",
      designation: "HR Director, InnovateLabs",
      text: "The best recruitment partner we've worked with. Professional, responsive, and truly understands our technical requirements.",
    },
    {
      name: "Amit Patel",
      designation: "VP Engineering, CloudSoft",
      text: "We've been working with TalentBridge for 3 years now. They consistently deliver high-quality IT professionals.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Hire Top IT Talent Faster
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
                Professional recruitment and staffing solutions for IT, BPO, Engineering, Healthcare and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg">
                    Hire Talent
                  </Button>
                </Link>
                <Link to="/careers">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Submit Resume
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src={heroImage}
                alt="Professional team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive staffing solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground">
              Specialized recruitment across diverse sectors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 rounded-xl bg-secondary border border-border hover:shadow-card transition-all"
              >
                <industry.icon className="h-12 w-12 text-primary mb-3" />
                <p className="text-sm font-medium text-center">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground">
              What sets us apart in IT recruitment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Trusted by leading companies across India
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-card transition-all"
              >
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="gradient-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need IT Talent? Let's Connect
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get started with India's leading IT recruitment partner. Fast, reliable, and professional staffing solutions.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
