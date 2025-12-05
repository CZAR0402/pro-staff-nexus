// src/pages/Careers.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  Users,
  Briefcase,
  Star,
  Trophy,
  BookOpen,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const Careers = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.role) {
      toast({
        title: "Missing information",
        description: "Please fill in at least your name, email, and role of interest.",
        variant: "destructive",
      });
      return;
    }

    console.log("Career application submitted:", formData);
    toast({
      title: "Application submitted!",
      description: "Thank you for applying. The team will review your profile.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      role: "",
      experience: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Banner */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Careers at <span className="text-[#00CFE6]">TechRuitz</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90">
            Build your career with a company that powers the future of operations outsourcing for
            global consulting firms, staffing agencies, and tech businesses.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-[3fr,2fr] gap-10 items-start">
          {/* Left: Info */}
          <div className="space-y-8">
            <Card className="border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#00CFE6]" />
                  Why Work at TechRuitz?
                </CardTitle>
                <CardDescription>
                  If you&apos;re ambitious, proactive, and passionate about delivering excellence,
                  this is your place.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Star className="h-4 w-4 text-[#00CFE6] mt-1" />
                  <p>
                    <span className="font-semibold text-foreground">Work with global clients</span>{" "}
                    – Experience projects, workflows, and technologies used across the globe.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Trophy className="h-4 w-4 text-[#00CFE6] mt-1" />
                  <p>
                    <span className="font-semibold text-foreground">Grow faster than average</span>{" "}
                    – Clear growth paths, performance-based incentives, and responsibilities from
                    Day 1.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <BookOpen className="h-4 w-4 text-[#00CFE6] mt-1" />
                  <p>
                    <span className="font-semibold text-foreground">Learn across functions</span>{" "}
                    – Recruiting, HR, documentation, billing, social media, operations, and more.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <HeartHandshake className="h-4 w-4 text-[#00CFE6] mt-1" />
                  <p>
                    <span className="font-semibold text-foreground">
                      Stable, high-trust environment
                    </span>{" "}
                    – Supportive leadership, transparency, and a performance-driven culture.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Who We Hire</CardTitle>
                <CardDescription>
                  We look for people who can thrive in a global, fast-paced, outcome-driven setup.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <ul className="list-disc list-inside space-y-1">
                  <li>Fast learners</li>
                  <li>Excellent communicators</li>
                  <li>Comfortable working with global clients</li>
                  <li>Organised and detail-oriented</li>
                  <li>Professional, reliable, and growth-focused</li>
                </ul>
                <p className="text-xs mt-2">
                  No politics. No micromanagement. Just performance, growth, and teamwork.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Current Open Roles</CardTitle>
                <CardDescription>
                  Roles may vary over time—this is a typical snapshot of opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Talent Acquisition Specialists
                  </h4>
                  <p>Sourcing, screening, and scheduling for global staffing clients.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    HR / Operations Executives
                  </h4>
                  <p>Onboarding, documentation, attendance, and client coordination.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Documentation Analysts
                  </h4>
                  <p>RFPs, proposals, and project documentation with strong written English.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Admin & Back-Office Specialists
                  </h4>
                  <p>Support functions that keep everyday operations running smoothly.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>What We Offer</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-1">
                <ul className="list-disc list-inside space-y-1">
                  <li>Competitive salaries aligned with skills and performance</li>
                  <li>Performance bonuses and rewards</li>
                  <li>Skill development and structured training programs</li>
                  <li>Healthy work–life balance</li>
                  <li>Safe, secure, and transparent HR policies</li>
                  <li>Professional, respectful, and growth-focused culture</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Our Hiring Process</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-1">
                <ol className="list-decimal list-inside space-y-1">
                  <li>Application review</li>
                  <li>Screening call</li>
                  <li>Skills / task assessment (role-dependent)</li>
                  <li>Final interview</li>
                  <li>Offer & onboarding</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Life at TechRuitz</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  It&apos;s not just a workplace—it&apos;s a community of achievers. You grow, you
                  lead, you excel.
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Celebrations and festivals</li>
                  <li>Skill development sessions</li>
                  <li>Monthly performance appreciation</li>
                  <li>Real mentorship and guidance</li>
                  <li>Friendly, outcome-driven culture</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right: Apply Form */}
          <Card className="border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Apply Now</span>
                <ArrowRight className="h-4 w-4 text-[#00CFE6]" />
              </CardTitle>
              <CardDescription>
                Share your details and we&apos;ll reach out when there&apos;s a strong match.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">
                    Role You&apos;re Interested In{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="role"
                    placeholder="e.g. Talent Acquisition Specialist"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Input
                    id="experience"
                    placeholder="e.g. 2 years"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">A Short Note About You</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Share a quick summary of your experience and what you're looking for."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" className="w-full gradient-primary">
                  Submit Application
                </Button>

                <p className="text-xs text-muted-foreground mt-2">
                  You can also{" "}
                  <Link to="/" className="underline">
                    connect with us on LinkedIn
                  </Link>{" "}
                  for future opportunities.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Careers;
