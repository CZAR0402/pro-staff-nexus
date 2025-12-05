// src/pages/About.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe2, MapPin, Target, Rocket, Users, FileText, BadgeCheck } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Banner */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-[#00CFE6]">TechRuitz</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90">
            We were built to solve one simple problem — businesses spend too much time managing
            operations instead of expanding them.
          </p>
        </div>
      </section>

      {/* Story & Who We Are */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              TechRuitz was founded to become the trusted partner that handles everything behind the scenes, so
              companies can scale without limits. Instead of getting stuck in daily ops, leadership can
              finally focus on strategy, growth, and innovation.
            </p>
            <p className="text-muted-foreground mb-4">
              We specialise in building dedicated offshore teams that plug into your existing business as a
              true extension of your in-house capabilities—across staffing, documentation, payroll, and
              delivery support.
            </p>
            <p className="text-muted-foreground">
              Our approach is simple:{" "}
              <span className="font-semibold text-foreground">
                people-centric, value-driven, technology-enabled.
              </span>{" "}
              We combine structured processes with flexible engagement models to keep you both efficient and
              scalable.
            </p>
          </div>

          <Card className="shadow-card border-border">
            <CardContent className="pt-6 space-y-5">
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#00CFE6]" />
                  Who We Are
                </h3>
                <p className="text-sm text-muted-foreground">
                  TechRuitz is a team of specialists across:
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                  <li>IT Staffing & Talent Acquisition</li>
                  <li>Recruitment Process Outsourcing (RPO)</li>
                  <li>Project Documentation & Proposals</li>
                  <li>Payroll & Compliance Management</li>
                  <li>Offshore Development & Delivery Support</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <Target className="h-5 w-5 text-[#00CFE6]" />
                  Our Mission
                </h3>
                <p className="text-sm text-muted-foreground">
                  Deliver unbeatable operational support so businesses can scale confidently and competitively
                  in global markets.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-[#00CFE6]" />
                  Our Vision
                </h3>
                <p className="text-sm text-muted-foreground">
                  To provide global outsourcing comforts to tech companies everywhere—removing friction from
                  growth with people-first, process-driven, and technology-enabled solutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Offices & Values */}
      <section className="py-16 bg-gradient-light">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
          <Card className="border-border shadow-card">
            <CardContent className="pt-6 space-y-4">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#00CFE6]" />
                Our Offices
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                We operate with a distributed yet tightly integrated presence:
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <span className="font-semibold text-foreground">
                    India (Offshore HQ)
                  </span>{" "}
                  – Operations, staffing, delivery, and development.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    US / Canada / UK (Onshore Partners)
                  </span>{" "}
                  – Client relations, consulting, and account strategy.
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                This onshore–offshore blend ensures you get global reach with local understanding.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6 space-y-4">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Globe2 className="h-5 w-5 text-[#00CFE6]" />
                Our Driving Force
              </h3>
              <p className="text-sm text-muted-foreground">
                We believe outsourcing isn&apos;t just about saving money—it&apos;s about creating a frictionless
                engine that powers business growth.
              </p>
              <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mt-3">
                <li className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-[#00CFE6]" /> Efficiency
                </li>
                <li className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-[#00CFE6]" /> Accuracy
                </li>
                <li className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-[#00CFE6]" /> Reliability
                </li>
                <li className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-[#00CFE6]" /> People
                </li>
                <li className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-[#00CFE6]" /> Performance
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-3">
                We manage the engine so you can drive the vision.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl border border-border p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-card">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Ready to make TechRuitz your extended operations office?
              </h3>
              <p className="text-muted-foreground max-w-xl">
                Let&apos;s design a dedicated offshore team aligned with your business model,
                culture, and growth plans.
              </p>
            </div>
            <Link to="/get-started">
              <Button size="lg" className="gradient-primary">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
