import { Target, Eye, Award, MapPin } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To connect exceptional talent with leading organizations, creating mutually beneficial partnerships that drive success and innovation.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be India's most trusted IT recruitment partner, known for quality, speed, and long-term client relationships.",
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Integrity, excellence, transparency, and commitment to delivering exceptional service in every engagement.",
    },
  ];

  const leaders = [
    {
      name: "Sanjay Kumar",
      designation: "Founder & CEO",
      bio: "15+ years in IT recruitment with expertise in building high-performing teams for Fortune 500 companies.",
    },
    {
      name: "Sanjay Kumar",
      designation: "Founder & CEO",
      bio: "15+ years in IT recruitment with expertise in building high-performing teams for Fortune 500 companies.",
    },
    {
      name: "Sanjay Kumar",
      designation: "Founder & CEO",
      bio: "15+ years in IT recruitment with expertise in building high-performing teams for Fortune 500 companies.",
    }
  ];

  const locationsData = [

    {
      city: "Hyderabad",
      address: "Tech Park, Cyber City, Hyderabad - 500001",
      isHQ: true,
    },
 
  {
      city: "Bangalore",
      address: "Business Center, Andheri East, Bangalore - 560001",
      isHQ: false,
    },

    {
      city: "Mumbai",
      address: "IT Hub, Hinjewadi Phase 1, Mumbai - 400069",
      isHQ: false,
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Page Banner */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-[#00CFE6]">IT Recruitment</span></h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto bg-gradient-to-r from-white from-20% to-[#00CFE6] to-100% bg-clip-text text-transparent">
            Your trusted partner in IT recruitment and staffing solutions across India
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 from-20% to-[#00CFE6] to-100% bg-clip-text text-transparent">Who We Are</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  TalentBridge is a leading IT recruitment and staffing company with over a decade of experience in connecting top talent with leading organizations across India. We specialize in IT, BPO, Engineering, Healthcare, and Finance sectors.
                </p>
                <p>
                  Our team of experienced recruiters understands the unique challenges of hiring in today's competitive market. We leverage advanced screening processes, extensive networks, and industry expertise to deliver candidates who not only meet technical requirements but also align with your company culture.
                </p>
                <p>
                  With a presence across major Indian cities and a database of over 50,000 pre-screened professionals, we're equipped to handle recruitment needs of any scale - from individual positions to large-scale team building.
                </p>
              </div>
            </div>
            <div className="bg-gradient-light rounded-2xl p-8 lg:p-12 shadow-card">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary flex-shrink-0">
                    <span className="text-2xl font-bold text-primary-foreground">10+</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Years of Excellence</h3>
                    <p className="text-sm text-muted-foreground">Serving clients since 2013</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary flex-shrink-0">
                    <span className="text-2xl font-bold text-primary-foreground">5K+</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Successful Placements</h3>
                    <p className="text-sm text-muted-foreground">Every year across India</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary flex-shrink-0">
                    <span className="text-2xl font-bold text-primary-foreground">200+</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Enterprise Clients</h3>
                    <p className="text-sm text-muted-foreground">Fortune 500 and startups</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gradient-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 from-20% to-[#00CFE6] to-100% bg-clip-text text-transparent">Our Foundation</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 ">
            {values.map((value, index) => (
              <FeatureCard key={index} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 from-20% to-[#00CFE6] to-100% bg-clip-text text-transparent">Leadership Team</h2>
            <p className="text-lg text-muted-foreground">
              Meet the experts driving our success
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-card transition-all"
              >
                <div className="h-64 bg-gradient-primary"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{leader.designation}</p>
                  <p className="text-sm text-muted-foreground">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gradient-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 from-20% to-[#00CFE6] to-100% bg-clip-text text-transparent">Our Locations</h2>
            <p className="text-lg text-muted-foreground">
              Serving clients across India with local expertise
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {locationsData.map((location, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-card hover:border-primary/30 transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">
                      {location.city}
                      {location.isHQ && (
                        <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                          Headquarters
                        </span>
                      )}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{location.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
