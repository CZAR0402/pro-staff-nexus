import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border hover:shadow-card hover:border-primary/30 transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary mb-4 transition-colors duration-300 group-hover:bg-primary">
        <Icon className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
