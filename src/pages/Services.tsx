import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code, Users, Building2, HeadphonesIcon, Settings, Check } from "lucide-react";
import ItStaffing from "@/assets/IT-Staffing.png";
import contractStaffing from "@/assets/contract-staffing.webp";
import rpo from "@/assets/rpo.jpeg";
import offShore from "@/assets/offshore.webp";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "IT Recruitment & Staffing",
      img:ItStaffing,
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
      img:contractStaffing,
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
      img:rpo,
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
      img:ItStaffing,
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
      img:offShore,
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
                    <img src={service.img} alt={service.title} className="h-full w-full object-cover rounded-2xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
