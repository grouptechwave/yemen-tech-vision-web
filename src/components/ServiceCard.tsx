
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, link }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover-scale">
      <div className="h-14 w-14 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-7 w-7 text-brand-blue" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button asChild variant="outline" className="w-full mt-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
        <Link to={link}>Learn More</Link>
      </Button>
    </div>
  );
};

export default ServiceCard;
