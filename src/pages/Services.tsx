
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';
import { Code, Users, Briefcase, CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Services = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Handle hash navigation
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-600">
              We provide specialized technical services designed to strengthen Yemen's innovation ecosystem
              and support technological advancement for economic recovery.
            </p>
          </div>
        </div>
      </section>
      
      {/* Service 1: Hackathon Design & Facilitation */}
      <section id="hackathon" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-16 w-16 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-6">
                <Code className="h-8 w-8 text-brand-blue" />
              </div>
              <SectionHeading title="Hackathon Design & Facilitation" />
              <p className="text-lg text-gray-600 mb-6">
                We design and facilitate custom hackathons, tech challenges, sprint workshops, and problem-solving jams 
                tailored to specific industry needs and challenges. Our experienced team takes care of everything from 
                challenge design to participant experience.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Using the Unleash methodology, we create immersive innovation experiences that produce tangible results, 
                bringing together diverse participants to solve real-world problems through technology.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-orange mr-2 mt-0.5" />
                  <span>Custom challenge design</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-orange mr-2 mt-0.5" />
                  <span>Expert facilitation</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-orange mr-2 mt-0.5" />
                  <span>Mentorship networks</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-orange mr-2 mt-0.5" />
                  <span>Full event management</span>
                </div>
              </div>
              
              <Button asChild className="bg-brand-blue hover:bg-brand-blue-light btn-hover">
                <Link to="/contact">
                  Discuss Your Hackathon Needs
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-brand-orange/10 rounded-tl-3xl"></div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-brand-blue/10 rounded-br-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                alt="Hackathon Design & Facilitation" 
                className="rounded-lg shadow-lg relative z-10 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Service 2: Capacity Building */}
      <section id="capacity" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-brand-orange/10 rounded-tl-3xl"></div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-brand-blue/10 rounded-br-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                alt="Capacity Building" 
                className="rounded-lg shadow-lg relative z-10 w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="h-16 w-16 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-brand-blue" />
              </div>
              <SectionHeading title="Capacity Building" />
              <p className="text-lg text-gray-600 mb-6">
                We develop and deliver comprehensive training programs for tech skills, design thinking, 
                leadership, and startup management. Our tailored curriculum addresses the specific needs 
                of Yemen's tech community, focusing on practical, applicable skills.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our approaches blend online and offline learning, peer-to-peer knowledge sharing, and 
                hands-on projects to ensure participants not only learn but can immediately apply their new skills.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-orange mr-2 mt-0.5" />
                  <span>Technical skills training</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-orange mr-2 mt-0.5" />
                  <span>Design thinking workshops</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-orange mr-2 mt-0.5" />
                  <span>Leadership development</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-orange mr-2 mt-0.5" />
                  <span>Project-based learning</span>
                </div>
              </div>
              
              <Button asChild className="bg-brand-blue hover:bg-brand-blue-light btn-hover">
                <Link to="/contact">
                  Explore Training Options
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service 3: Entrepreneurship Consulting */}
      <section id="entrepreneurship" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-16 w-16 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-brand-blue" />
              </div>
              <SectionHeading title="Entrepreneurship Consulting" />
              <p className="text-lg text-gray-600 mb-6">
                We provide expert mentoring for tech startups, helping with business modeling, pitch coaching, 
                and scaling strategies. Our consultants bring both local context understanding and international 
                best practices to support entrepreneurs in Yemen's unique environment.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive approach includes one-on-one mentoring, group workshops, pitch practice sessions, 
                and connections to potential investors and partners in our network.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-orange mr-2 mt-0.5" />
                  <span>Business model development</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-orange mr-2 mt-0.5" />
                  <span>Pitch coaching</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-orange mr-2 mt-0.5" />
                  <span>Growth strategies</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-orange mr-2 mt-0.5" />
                  <span>Investor connections</span>
                </div>
              </div>
              
              <Button asChild className="bg-brand-blue hover:bg-brand-blue-light btn-hover">
                <Link to="/contact">
                  Request Consulting Services
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-brand-orange/10 rounded-tl-3xl"></div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-brand-blue/10 rounded-br-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Entrepreneurship Consulting" 
                className="rounded-lg shadow-lg relative z-10 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Tech Initiative?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our services can help you achieve your technology and innovation goals.
          </p>
          <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100 btn-hover">
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Services;
