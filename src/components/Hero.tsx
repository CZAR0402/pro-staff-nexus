import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern technology workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Small label */}
          <div
            className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground text-xs md:text-sm mb-4 animate-fade-in"
            style={{ animationDelay: "0.05s" }}
          >
            <Sparkles className="w-4 h-4 mr-2 text-[#00CFE6]" />
            Your extended offshore operations engine
          </div>

          {/* Heading */}
          <h1
            className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            TechRuitz, your extended{" "}
            <span className="text-[#00CFE6]">Tech Recruitment Office</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-2xl text-primary-foreground/90 mb-4 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Outsource. Scale. Dominate.
          </p>

          <p
            className="text-base md:text-lg text-primary-foreground/85 mb-8 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Stop hiring 10 different teams. Start scaling with{" "}
            <span className="font-semibold">one offshore powerhouse</span> that can replace entire
            in-house departments—built and managed for you, under your brand.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Link to="/about">
              <Button
                size="lg"
                className="bg-[#00CFE6] hover:bg-accent/90 text-accent-foreground group px-8 py-6 text-lg"
              >
                Know More
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 px-8 py-6 text-lg"
              >
                Explore Services
              </Button>
            </Link>

            <Link to="/get-started">
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 backdrop-blur-sm border-[#00CFE6] text-primary-foreground hover:bg-primary-foreground/20 px-8 py-6 text-lg"
              >
                Build My Offshore Team
              </Button>
            </Link>
          </div>

          {/* Stats – you can tweak numbers later */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            {[
              { number: "70%+", label: "Average Cost Savings" },
              { number: "24×7", label: "Global Coverage" },
              { number: "10+", label: "Functions You Can Outsource" },
              { number: "100%", label: "White-Labeled Delivery" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#00CFE6] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
