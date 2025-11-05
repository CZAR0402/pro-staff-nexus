import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code, Users, Building2, HeadphonesIcon, Settings, Check } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "IT Recruitment & Staffing",
      description: "Find the perfect IT professionals to drive your technology initiatives forward.",
      benefits: [
        "Full-stack developers, data scientists, cloud architects",
        "Pre-screened technical candidates",
        "Technical skill assessment and validation",
        "Competitive salary benchmarking",
        "Quick turnaround within 48-72 hours",
      ],
    },
    {
      icon: Users,
      title: "Contract Staffing",
      description: "Flexible staffing solutions for project-based and temporary assignments.",
      benefits: [
        "Short-term and long-term contract placements",
        "Scalable team augmentation",
        "Contract-to-hire options available",
        "Reduced hiring and onboarding costs",
        "Immediate deployment of skilled professionals",
      ],
    },
    {
      icon: Building2,
      title: "Recruitment Process Outsourcing (RPO)",
      description: "Complete end-to-end recruitment management for your organization.",
      benefits: [
        "Dedicated recruitment team for your company",
        "Full-cycle hiring from sourcing to onboarding",
        "Employer branding and talent marketing",
        "ATS implementation and management",
        "Regular hiring metrics and analytics reports",
      ],
    },
    {
      icon: HeadphonesIcon,
      title: "HR Consulting",
      description: "Strategic HR advisory services to optimize your talent management.",
      benefits: [
        "Talent acquisition strategy development",
        "Compensation and benefits benchmarking",
        "Organizational design and restructuring",
        "HR policy and compliance advisory",
        "Employee engagement programs",
      ],
    },
    {
      icon: Settings,
      title: "Offshore Development Support",
      description: "Build and manage dedicated offshore development teams.",
      benefits: [
        "Dedicated offshore development centers",
        "Full-time and part-time engagement models",
        "Project management and delivery oversight",
        "Cost-effective development solutions",
        "Quality assurance and code reviews",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Banner */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-[#00CFE6]">Services</span></h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto bg-gradient-to-r from-white from-20% to-[#00CFE6] to-100% bg-clip-text text-transparent">
            Comprehensive staffing and recruitment solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-secondary">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                  <div className="space-y-3 mb-6">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact">
                    <Button className="gradient-primary">Hire Talent</Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-gradient-light rounded-2xl p-8 lg:p-12 shadow-card h-full flex items-center justify-center">
                    <service.icon className="h-48 w-48 text-primary/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 bg-gradient-to-r from-white from-20% to-[#00CFE6] to-100% bg-clip-text text-transparent">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto bg-gradient-to-r from-white from-20% to-[#00CFE6] to-100% bg-clip-text text-transparent">
            Contact us today to discuss your staffing requirements and get customized solutions.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-[#ffffff] hover:bg-accent/90 text-accent-foreground group px-8 py-6 text-lg">
              Contact Us Today  
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
