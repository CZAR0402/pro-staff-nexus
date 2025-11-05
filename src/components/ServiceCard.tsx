import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30">
      <CardHeader>
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary mb-4 group-hover:bg-primary transition-colors duration-300">
          <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground mb-4">
          {description}
        </CardDescription>
        <Link to="/contact">
          <Button variant="ghost" className="group/btn p-0 h-auto font-medium text-primary hover:text-primary-dark">
            Request Talent
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
