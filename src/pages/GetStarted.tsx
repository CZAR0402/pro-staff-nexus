// src/pages/GetStarted.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Phone, Mail, CalendarClock, Users } from "lucide-react";

const GetStarted = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    services: [] as string[],
    hours: "",
    startDate: "",
    businessType: "",
    notes: "",
  });

  const serviceOptions = [
    "Recruiting / Talent Sourcing",
    "RPO (Recruitment Process Outsourcing)",
    "Documentation (RFPs, Proposals, Project Docs)",
    "Billing & Accounts Receivable",
    "Payroll",
    "Social Media Management",
    "Admin & Compliance",
    "Training / Freelancer / Developer Engagement",
    "Offshore Developers",
    "24×7 Support & Maintenance",
    "Entire Operations Team",
  ];

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(value);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((item) => item !== value)
          : [...prev.services, value],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.company) {
      toast({
        title: "Missing Information",
        description: "Please fill in at least your name, email, and company.",
        variant: "destructive",
      });
      return;
    }

    console.log("Get Started form submitted:", formData);

    toast({
      title: "Request Submitted!",
      description: "Our team will contact you soon to schedule a strategy call.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      services: [],
      hours: "",
      startDate: "",
      businessType: "",
      notes: "",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Page Banner */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get <span className="text-[#00CFE6]">Started</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto bg-gradient-to-r from-white from-20% to-[#00CFE6] to-100% bg-clip-text text-transparent">
            Build your dedicated offshore team with a simple, plug-and-play onboarding process
            designed for speed, clarity, and confidence.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-20 bg-gradient-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form Card */}
            <Card className="shadow-xl border-border">
              <CardHeader>
                <CardTitle>Tell Us What You Need</CardTitle>
                <CardDescription>
                  Share a few details about your business, and we&apos;ll help you design the
                  perfect offshore team.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Info */}
                  <div className="grid md:grid-cols-2 gap-4">
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
                        Work Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">
                        Company Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="company"
                        placeholder="Your company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone / WhatsApp</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 234 567 890"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Services */}
                  <div className="space-y-2">
                    <Label>What would you like to outsource?</Label>
                    <p className="text-xs text-muted-foreground">
                      Select all that apply. You can refine this during the strategy call.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-56 overflow-y-auto pr-1">
                      {serviceOptions.map((option) => (
                        <label
                          key={option}
                          className="flex items-start space-x-2 rounded-lg border bg-background px-3 py-2 text-sm cursor-pointer hover:border-primary/60"
                        >
                          <input
                            type="checkbox"
                            className="mt-1"
                            checked={formData.services.includes(option)}
                            onChange={() => handleCheckboxChange(option)}
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Working hours & start date */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="hours">Preferred Working Hours</Label>
                      <select
                        id="hours"
                        className="w-full border border-input bg-background rounded-md h-10 px-3 text-sm"
                        value={formData.hours}
                        onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                      >
                        <option value="">Select an option</option>
                        <option value="9-5">Standard 9–5 (Your Time Zone)</option>
                        <option value="flexible">Flexible Hours</option>
                        <option value="24x7">24×7 Coverage</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="startDate">Expected Start Date</Label>
                      <select
                        id="startDate"
                        className="w-full border border-input bg-background rounded-md h-10 px-3 text-sm"
                        value={formData.startDate}
                        onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      >
                        <option value="">Select an option</option>
                        <option value="immediately">Immediately</option>
                        <option value="2-4-weeks">In 2–4 weeks</option>
                        <option value="1-3-months">In 1–3 months</option>
                      </select>
                    </div>
                  </div>

                  {/* Business Type */}
                  <div className="space-y-2">
                    <Label htmlFor="businessType">Your Business Type</Label>
                    <select
                      id="businessType"
                      className="w-full border border-input bg-background rounded-md h-10 px-3 text-sm"
                      value={formData.businessType}
                      onChange={(e) =>
                        setFormData({ ...formData, businessType: e.target.value })
                      }
                    >
                      <option value="">Select business type</option>
                      <option value="it-staffing">IT Staffing / Recruiting Company</option>
                      <option value="consulting">Consulting Firm</option>
                      <option value="product">Tech Product Company</option>
                      <option value="services">IT Services Company</option>
                      <option value="individual">Individual / Solo Entrepreneur</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Notes */}
                  <div className="space-y-2">
                    <Label htmlFor="notes">Anything else we should know?</Label>
                    <Textarea
                      id="notes"
                      placeholder="Describe your current challenges, team size, tech stack, or expectations."
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gradient-primary">
                    Book My Strategy Call
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Right Column: Process & Info */}
            <div className="space-y-6">
              <Card className="border-border shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarClock className="h-5 w-5 text-[#00CFE6]" />
                    Onboarding Process
                  </CardTitle>
                  <CardDescription>
                    A simple 3-step rollout to get your offshore team live and productive.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00CFE6] mt-0.5" />
                    <p>
                      <span className="font-semibold text-foreground">1. Strategy Call</span> – We
                      walk through your needs, goals, and workload, and recommend the right roles
                      and model.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00CFE6] mt-0.5" />
                    <p>
                      <span className="font-semibold text-foreground">2. Offshore Team Blueprint</span>{" "}
                      – You receive a proposal with roles, responsibilities, pricing, and delivery
                      expectations.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00CFE6] mt-0.5" />
                    <p>
                      <span className="font-semibold text-foreground">3. Fast Rollout</span> – Your
                      team goes live: trained, aligned, and ready to execute under your brand.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-[#00CFE6]" />
                    What You&apos;ll Receive
                  </CardTitle>
                  <CardDescription>Clear documentation and alignment from day one.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Engagement contract & mutual NDA</li>
                    <li>Service-level agreement (SLA)</li>
                    <li>Team blueprint & role mapping</li>
                    <li>Communication & reporting plan</li>
                    <li>Project kickoff roadmap</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-6 space-y-3 text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground">
                    Prefer talking directly? Reach out to us:
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#00CFE6]" />{" "}
                    <span>Call us at: {/* add client number here */}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#00CFE6]" />{" "}
                    <span>Write to us at: {/* add client email here */}</span>
                  </p>
                  <p className="text-xs">
                    You can also connect with us on{" "}
                    <Link to="/" className="underline">
                      LinkedIn
                    </Link>{" "}
                    for more updates.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
