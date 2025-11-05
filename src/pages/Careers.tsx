import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Upload, CheckCircle2 } from "lucide-react";

const Careers = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    skills: "",
    experience: "",
    resume: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.resume) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and upload your resume.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    toast({
      title: "Resume Submitted Successfully!",
      description: "Our team will review your profile and get back to you soon.",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        skills: "",
        experience: "",
        resume: null,
      });
    }, 3000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Invalid File Type",
          description: "Please upload a PDF or DOC file.",
          variant: "destructive",
        });
        return;
      }
      setFormData({ ...formData, resume: file });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Page Banner */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Submit Your Resume</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Join our talent pool and get connected with top companies across India
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gradient-light">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Career Application</CardTitle>
                <CardDescription>
                  Fill in your details and upload your resume. We'll match you with relevant opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="h-16 w-16 text-success mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">
                      Your resume has been submitted successfully. We'll be in touch soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
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
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="skills">Key Skills</Label>
                      <Textarea
                        id="skills"
                        placeholder="React, Node.js, Python, AWS..."
                        value={formData.skills}
                        onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">
                        Years of Experience
                      </Label>
                      <Input
                        id="experience"
                        placeholder="5 years"
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="resume">
                        Upload Resume <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <Input
                          id="resume"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="cursor-pointer"
                          required
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <Upload className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Accepted formats: PDF, DOC, DOCX (Max 5MB)
                      </p>
                      {formData.resume && (
                        <p className="text-sm text-success">
                          ✓ {formData.resume.name}
                        </p>
                      )}
                    </div>

                    <Button type="submit" className="w-full gradient-primary" size="lg">
                      Submit Application
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
