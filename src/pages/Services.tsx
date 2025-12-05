// src/pages/Services.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  Briefcase,
  FileText,
  Megaphone,
  ReceiptIndianRupee,
  Code,
  Headset,
  ShieldCheck,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Recruiting & Staffing Services",
      description:
        "End-to-end recruitment lifecycle management—sourcing, screening, vetting, interviewing, and onboarding for tech and functional roles.",
      detail:
        "We align talent with your open positions and delivery needs so your internal leaders can stay focused on growth instead of resumes.",
    },
    {
      icon: Briefcase,
      title: "Candidate / Trainer / Developer Engagement",
      description:
        "Access a deep network of freelancers, trainers, contract consultants, and full-time employees.",
      detail:
        "Whether you need niche trainers for a short-term program or long-term project consultants, we connect you with the right experts at the right time.",
    },
    {
      icon: Users,
      title: "Operational & Support Services",
      description:
        "A dedicated offshore operations pod that covers HR, admin, marketing, documentation, and more.",
      detail:
        "HR associates, social media managers, document writers, marketing coordinators, finance and billing advisors—bundled as one managed unit.",
    },
    {
      icon: FileText,
      title: "Documentation Support",
      description:
        "Structured support for RFPs, proposals, project documentation, and business paperwork.",
      detail:
        "From bid responses to technical writeups, we ensure your documentation is accurate, polished, and client-ready without draining internal bandwidth.",
    },
    {
      icon: Megaphone,
      title: "Social Media Handling & Management",
      description:
        "End-to-end social presence management across platforms for brand consistency and visibility.",
      detail:
        "Daily posts, festive creatives, engagement strategy, and profile optimisation—executed under your brand tone and guidelines.",
    },
    {
      icon: ReceiptIndianRupee,
      title: "Billing, Accounts Receivable & Payroll",
      description:
        "Back-office finance operations that keep revenue and payouts organised and on time.",
      detail:
        "Client billing, monthly invoicing, AR follow-ups, payroll processing, and compliance tracking—all handled with neat records and clear communication.",
    },
    {
      icon: Code,
      title: "Offshore Development & Maintenance",
      description:
        "Extend your technical delivery capacity with affordable and capable offshore development teams.",
      detail:
        "We support product builds, enhancements, support, and maintenance with 24×7 availability, agile engagement models, and continuous monitoring.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Banner */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-[#00CFE6]">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90">
            End-to-end outsourcing solutions for IT consulting companies, tech product firms, and
            global businesses who want to scale without expanding in-house overhead.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center mb-10">
          <p className="text-muted-foreground mb-4">
            TechRuitz is your opportunity to outsource the A–Z of your daily operations.{" "}
            <span className="font-semibold text-foreground">
              You focus on expansion. We handle the staff that keeps your business running.
            </span>
          </p>
        </div>

        <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="border-border shadow-card h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-1">
                  <div className="h-9 w-9 rounded-full bg-[#00CFE6]/10 flex items-center justify-center">
                    <service.icon className="h-5 w-5 text-[#00CFE6]" />
                  </div>
                  <CardTitle className="text-base">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0 space-y-3">
                <p className="text-sm text-muted-foreground">{service.description}</p>
                <p className="text-xs text-muted-foreground">{service.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Data Privacy Teaser */}
      <section className="py-16 bg-gradient-light">
        <div className="container mx-auto px-4 grid lg:grid-cols-[3fr,2fr] gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-3 flex items-center gap-2">
              <ShieldCheck className="h-7 w-7 text-[#00CFE6]" />
              Data Privacy & Confidentiality
            </h2>
            <p className="text-muted-foreground mb-4">
              Outsourcing your operations means trusting us with sensitive information—client data,
              candidate profiles, payroll, billing, and internal workflows. We treat that
              responsibility with the highest level of seriousness.
            </p>
            <p className="text-muted-foreground mb-4">
              Every engagement is protected by mutual NDAs, role-based access, and a zero-leakage
              operating framework. Your data doesn&apos;t travel, doesn&apos;t leak, and is never reused.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/data-security">
                <Button className="gradient-primary">Learn More About Data Security</Button>
              </Link>
              <Link to="/get-started">
                <Button variant="outline">Get Started</Button>
              </Link>
            </div>
          </div>

          <Card className="border-border shadow-card">
            <CardContent className="pt-6 text-sm text-muted-foreground space-y-2">
              <p className="font-semibold text-foreground">
                We ensure security at every layer:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Confidentiality-first workflows and access policies</li>
                <li>NDA-backed engagements and clear IP ownership</li>
                <li>Controlled environments and monitored access</li>
                <li>No third-party data sharing or resale</li>
                <li>Transparent documentation of tools and processes</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;
