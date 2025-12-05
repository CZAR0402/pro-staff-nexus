import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FeatureCard from "@/components/FeatureCard";
import {
  Users,
  Building2,
  Clock,
  TrendingUp,
  ShieldCheck,
  Headset,
  ListChecks,
  BarChart3,
} from "lucide-react";
import Hero from "@/components/Hero";

const Home = () => {
  const perks = [
    {
      icon: Users,
      title: "Dedicated Offshore Teams",
      description:
        "Teams are built specifically for your business, under your brand, aligned to your workflows.",
    },
    {
      icon: Building2,
      title: "Zero Infrastructure Cost",
      description:
        "No office space, no rent, no hardware. Your operations run without physical overhead.",
    },
    {
      icon: ListChecks,
      title: "No Hiring or HR Burden",
      description:
        "We handle sourcing, screening, onboarding, HR, and management—end to end.",
    },
    {
      icon: TrendingUp,
      title: "70%+ Cost Savings",
      description:
        "Streamlined offshore operations that dramatically reduce running costs.",
    },
    {
      icon: Headset,
      title: "24×7 Global Coverage",
      description:
        "Support customers and projects across time zones with always-on teams.",
    },
    {
      icon: BarChart3,
      title: "Measurable Outcomes",
      description:
        "Weekly performance tracking, delivery metrics, and transparent reporting.",
    },
  ];

  const howWeWork = [
    {
      step: "01",
      title: "Understanding Your Business",
      description:
        "We dive into your hiring needs, operational load, and existing processes to understand how you work.",
    },
    {
      step: "02",
      title: "Building Your Dedicated Team",
      description:
        "We assemble a tailored offshore team—HR, recruiters, billing, social media, developers, and more.",
    },
    {
      step: "03",
      title: "Seamless Integration",
      description:
        "Your offshore unit works like an extension of your in-house team with mirrored tools and workflows.",
    },
    {
      step: "04",
      title: "Reporting & Performance",
      description:
        "You get weekly reports, KPI tracking, and complete visibility into productivity and outcomes.",
    },
  ];

  const onboarding = [
    {
      title: "Zero Learning Curve",
      description:
        "Teams are already trained on ATS, CRMs, ERPs, cloud tools, billing platforms, and collaboration systems.",
    },
    {
      title: "White-Labeled Workforce",
      description:
        "Your offshore staff operates fully under your brand—they appear as part of your internal organisation.",
    },
    {
      title: "Transparent Reporting",
      description:
        "Daily activity logs, weekly performance summaries, and monthly delivery insights keep you in control.",
    },
    {
      title: "No Long-Term Lock-In",
      description:
        "Scale up or down anytime. You stay flexible without being stuck in rigid long-term contracts.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero with background image */}
      <Hero />

      {/* Perks */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-3">
              Perks of Collaborating with <span className="text-[#00CFE6]">TechRuitz</span>
            </h2>
            <p className="text-muted-foreground">
              A complete offshore team built specifically for your company—HR, recruiters, social
              media, billing, admin, customer support, delivery teams, and more.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk) => (
              <FeatureCard
                key={perk.title}
                icon={perk.icon}
                title={perk.title}
                description={perk.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-gradient-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-3">
                How <span className="text-[#00CFE6]">We Work</span>
              </h2>
              <p className="text-muted-foreground max-w-xl">
                From understanding your workflows to building a fully managed offshore operations
                unit, every step is structured for clarity and speed.
              </p>
            </div>
            <Link to="/services">
              <Button variant="outline">View All Services</Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {howWeWork.map((item) => (
              <Card key={item.title} className="shadow-card border-border h-full">
                <CardContent className="pt-6 space-y-3">
                  <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground">
                    {item.step}
                  </p>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding Difference + What We Need / What Rolls Out Next */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-[3fr,2fr] gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              What Makes Our <span className="text-[#00CFE6]">Onboarding Different?</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Your offshore team plugs into your operations with minimal ramp-up time, because we
              handle the training, tools, and structure upfront.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {onboarding.map((item) => (
                <Card key={item.title} className="border-border h-full">
                  <CardContent className="pt-5 space-y-2">
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="shadow-card border-border">
            <CardContent className="pt-6 space-y-4 text-sm text-muted-foreground">
              <h3 className="text-lg font-semibold text-foreground">
                What We Need From You
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Requirements and workflow details</li>
                <li>Alignment on expectations and success metrics</li>
                <li>Branding guidelines (logos, colors, tone)</li>
                <li>Workload estimates and priorities</li>
                <li>Reporting preferences and cadence</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground pt-4">
                What Rolls Out Next
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Your offshore team goes live.</li>
                <li>Operations start running faster and smoother.</li>
                <li>You save on cost, time, and management overhead.</li>
              </ul>

              <p className="pt-2">
                You stay focused on growth.{" "}
                <span className="font-semibold text-foreground">We handle execution.</span>
              </p>

              <Link to="/get-started">
                <Button className="mt-4 w-full gradient-primary">Get Started</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
