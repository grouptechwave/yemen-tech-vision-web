import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Users, Briefcase, Award, ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-blue to-brand-blue-light text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Empowering Yemen's Tech Innovation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-fade-in" style={{animationDelay: "0.2s"}}>
              We led Yemen's first major tech hackathon for economic recovery, bringing innovation and entrepreneurship to the forefront.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
              <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-light text-white btn-hover">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 btn-hover">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover-scale">
              <div className="w-16 h-16 mx-auto mb-4 bg-brand-blue/10 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-3xl font-bold mb-2">200+</h3>
              <p className="text-gray-600">Hackathon Participants</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover-scale">
              <div className="w-16 h-16 mx-auto mb-4 bg-brand-blue/10 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-3xl font-bold mb-2">25</h3>
              <p className="text-gray-600">Solutions Developed</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover-scale">
              <div className="w-16 h-16 mx-auto mb-4 bg-brand-blue/10 rounded-full flex items-center justify-center">
                <Briefcase className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-3xl font-bold mb-2">8</h3>
              <p className="text-gray-600">Funded Projects</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover-scale">
              <div className="w-16 h-16 mx-auto mb-4 bg-brand-blue/10 rounded-full flex items-center justify-center">
                <Code className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-3xl font-bold mb-2">5</h3>
              <p className="text-gray-600">Economic Sectors</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Services" 
            subtitle="Building on our successful hackathon experience, we offer specialized solutions to empower Yemen's digital transformation."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Hackathon Design & Facilitation"
              description="Leveraging our experience with the Unleash methodology to create impactful tech challenges and innovation sprints."
              icon={Code}
              link="/services#hackathon"
            />
            
            <ServiceCard 
              title="Capacity Building"
              description="Comprehensive training programs for tech skills, design thinking, and innovation leadership."
              icon={Users}
              link="/services#capacity"
            />
            
            <ServiceCard 
              title="Entrepreneurship Consulting"
              description="Expert mentoring for tech startups, from ideation to market entry, based on proven success stories."
              icon={Briefcase}
              link="/services#entrepreneurship"
            />
          </div>
        </div>
      </section>
      
      {/* Case Study Highlight */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="text-brand-orange font-medium">FEATURED CASE STUDY</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Tech for Economic Recovery Hackathon</h2>
              <p className="text-lg text-gray-600 mb-6">
                We led Yemen's largest tech hackathon focused on post-conflict economic recovery, 
                bringing together 200+ developers, designers, and entrepreneurs to create 
                innovative solutions for local challenges.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-brand-orange mr-2 mt-0.5" />
                  <span>200+ participants from across Yemen</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-brand-orange mr-2 mt-0.5" />
                  <span>25 tech solutions developed in 48 hours</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-brand-orange mr-2 mt-0.5" />
                  <span>8 projects received follow-up funding</span>
                </li>
              </ul>
              <Button asChild className="bg-brand-blue hover:bg-brand-blue-light btn-hover">
                <Link to="/case-study">
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-brand-orange/10 rounded-tl-3xl"></div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-brand-blue/10 rounded-br-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Tech for Economic Recovery Hackathon" 
                className="rounded-lg shadow-lg relative z-10 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Innovate with Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're looking to host a hackathon, build tech capacity, or accelerate your startup, 
            we're here to help you succeed.
          </p>
          <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100 btn-hover">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default HomePage;
