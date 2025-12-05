// src/pages/DataSecurity.tsx
import { Link } from "react-router-dom";
import { Shield, Lock, FileLock2, Eye, CheckCircle2 } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DataSecurity = () => {
  const pillars = [
    {
      icon: Shield,
      title: "Zero-Leakage Framework",
      description:
        "Strict access controls, monitored systems, and secure workspaces ensure your data never leaves safe boundaries.",
    },
    {
      icon: Lock,
      title: "NDA-Backed Engagements",
      description:
        "Every project is protected by mutual NDAs with clear obligations, restricted use, and penalties for violations.",
    },
    {
      icon: FileLock2,
      title: "Role-Based Permissions",
      description:
        "Teams get only the access they need to execute their responsibilities—nothing more, nothing less.",
    },
    {
      icon: Eye,
      title: "Full Transparency",
      description:
        "Every tool, system, and workflow is documented so you always know where your data lives and how it is used.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Banner */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Data <span className="text-[#00CFE6]">Security & Confidentiality</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto bg-gradient-to-r from-white from-20% to-[#00CFE6] to-100% bg-clip-text text-transparent">
            Your business. Your data. Fully protected with airtight NDAs, secure processes, and
            industry-grade privacy standards.
          </p>
        </div>
      </section>

      {/* Overview + Assurance */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Built to Protect <span className="bg-gradient-to-r from-[#00CFE6] to-blue-500 bg-clip-text text-transparent">Every Byte</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  As your dedicated offshore partner, we work with highly sensitive information:
                  client data, candidate profiles, payroll numbers, billing details, and internal
                  workflows.{" "}
                  <span className="font-semibold text-foreground">
                    That&apos;s why TechRuitz operates under a zero-leakage, zero-tolerance
                    confidentiality framework.
                  </span>
                </p>
                <p>
                  Only authorized personnel can access your information, and every member of your
                  offshore team is trained regularly on security, compliance, and confidentiality
                  best practices.
                </p>
                <p>
                  We don&apos;t just deliver operational outsourcing.{" "}
                  <span className="font-semibold text-foreground">We deliver trust.</span>
                </p>
              </div>
            </div>

            <Card className="bg-gradient-light shadow-card border-border">
              <CardContent className="pt-6 space-y-4">
                <h3 className="text-xl font-semibold mb-1">What You Can Expect</h3>
                <p className="text-sm text-muted-foreground">
                  Compliance is baked into every process—not added as an afterthought.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00CFE6] mt-0.5" />
                    <span>Mutual NDAs and IP protection from day one of engagement.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00CFE6] mt-0.5" />
                    <span>Defined data usage, storage, and access policies for every project.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00CFE6] mt-0.5" />
                    <span>No third-party access, resale, or reuse of your information.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00CFE6] mt-0.5" />
                    <span>
                      Strict separation of client environments to avoid cross-contamination of data.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00CFE6] mt-0.5" />
                    <span>
                      Full visibility into tools, systems, and workflows used by your offshore team.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-16 bg-gradient-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our <span className="text-[#00CFE6]">Security Pillars</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            From access control to documentation security, every part of your engagement is governed
            by clear, enforceable, and rigorously monitored policies.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <FeatureCard
                key={pillar.title}
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl border border-border p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-card">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Ready to work with a partner that protects your business?
              </h3>
              <p className="text-muted-foreground max-w-xl">
                Let&apos;s build a dedicated offshore team that feels like your own—secured,
                compliant, and fully aligned with your standards.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/get-started">
                <Button size="lg" className="gradient-primary">
                  Get Started
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataSecurity;
