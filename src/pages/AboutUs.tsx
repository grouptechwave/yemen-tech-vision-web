
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Users, Award, Rocket, Handshake } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import TeamMember from '@/components/TeamMember';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Badea Nabil",
      position: "Founder & Lead Consultant",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      bio: "Badea has 10+ years experience in tech leadership and has facilitated over 20 hackathons across the MENA region."
    },
    {
      name: "Badea Nabil",
      position: "Founder & Lead Consultant",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      bio: "Badea has 10+ years experience in tech leadership and has facilitated over 20 hackathons across the MENA region."
    },
    {
      name: "Badea Nabil",
      position: "Founder & Lead Consultant",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      bio: "Badea has 10+ years experience in tech leadership and has facilitated over 20 hackathons across the MENA region."
    },
    {
      name: "Badea Nabil",
      position: "Founder & Lead Consultant",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      bio: "Badea has 10+ years experience in tech leadership and has facilitated over 20 hackathons across the MENA region."
    }
  ];

  const partners = [
    { name: "Unleash.org", logo: "https://" },
    { name: "Unleash.org", logo: "https://" },
    { name: "Unleash.org", logo: "https://" },
    { name: "Unleash.org", logo: "https:/" },
    { name: "Unleash.org", logo: "https://" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-600">
              YemenTechVision is a team of passionate technology consultants dedicated to empowering Yemen's 
              digital ecosystem through innovative approaches and practical solutions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-brand-orange/10 rounded-tl-3xl"></div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-brand-blue/10 rounded-br-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                alt="Our Mission" 
                className="rounded-lg shadow-lg relative z-10 w-full h-auto"
              />
            </div>
            <div>
              <SectionHeading title="Our Mission" />
              <p className="text-lg text-gray-600 mb-6">
                We are on a mission to catalyze Yemen's technology ecosystem by creating opportunities for innovation, 
                building technical capacity, and supporting tech entrepreneurship in a challenging environment.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Through our work, we aim to contribute to economic recovery, create sustainable tech jobs, 
                and position Yemen as an emerging hub for technical talent in the region.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-brand-blue/10 flex items-center justify-center mr-3 mt-1">
                    <Rocket className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Innovation</h3>
                    <p className="text-gray-600 text-sm">Creating spaces for creative tech solutions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-brand-blue/10 flex items-center justify-center mr-3 mt-1">
                    <Users className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Capacity</h3>
                    <p className="text-gray-600 text-sm">Building technical skills and confidence</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-brand-blue/10 flex items-center justify-center mr-3 mt-1">
                    <Award className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Excellence</h3>
                    <p className="text-gray-600 text-sm">Maintaining high standards in everything we do</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-brand-blue/10 flex items-center justify-center mr-3 mt-1">
                    <Handshake className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Partnership</h3>
                    <p className="text-gray-600 text-sm">Collaborating for greater impact</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Story" 
            subtitle="Founded in 2019, YemenTechVision emerged from a recognition of the untapped potential in Yemen's tech community."
            centered
          />
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              What began as a small initiative to run a single hackathon in Sana'a quickly evolved 
              into a comprehensive approach to tech ecosystem development. We realized that one-off 
              events weren't enough—Yemen needed sustained support and capacity building.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Since then, we've expanded our services to include long-term training programs, mentorship 
              for emerging startups, and consultation with organizations looking to leverage technology 
              for development.
            </p>
            <p className="text-lg text-gray-600">
              Today, we're proud to have worked with international organizations, local businesses, 
              and hundreds of talented individuals across Yemen, helping to create a vibrant tech 
              community even in challenging circumstances.
            </p>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Meet Our Team" 
            subtitle="Our diverse team brings together expertise in technology, business development, education, and social impact."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                position={member.position}
                image={member.image}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Partners & Network" 
            subtitle="We collaborate with organizations committed to Yemen's technological advancement and economic development."
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center hover-scale">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-16"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Shaping Yemen's Tech Future</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're a potential client, partner, or team member, we'd love to connect and explore how we can work together.
          </p>
          <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100 btn-hover">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default AboutUs;
