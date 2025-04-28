
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { CheckCircle, Award, Users, Rocket } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Testimonial from '@/components/Testimonial';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CaseStudy = () => {
  const testimonials = [
    {
      quote: "The Tech for Economic Recovery hackathon was a transformative experience. The YemenTechVision team created an environment where innovation thrived despite our challenging context.",
      name: "Mohammed Al-Qadhi",
      position: "Participant",
      company: "Startup Founder",
      image: "https://via.placeholder.com/100"
    },
    {
      quote: "YemenTechVision's approach to hackathon facilitation was professional and inspiring. They balanced structure with creative freedom perfectly.",
      name: "Amal Hussein",
      position: "Partner",
      company: "Yemen Digital Hub",
      image: "https://via.placeholder.com/100"
    },
    {
      quote: "This event demonstrated what's possible when Yemeni tech talent is given the right platform and support. The results exceeded our expectations.",
      name: "Dr. Khalid Morshed",
      position: "Director",
      company: "International Development Fund",
      image: "https://via.placeholder.com/100"
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-6">
              CASE STUDY
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Tech for Economic Recovery Hackathon</h1>
            <p className="text-xl text-gray-100">
              Leading Yemen's largest innovation event focused on post-conflict economic solutions using the Unleash methodology.
            </p>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title="Overview" />
              <p className="text-lg text-gray-600 mb-6">
                In 2022, YemenTechVision led the design and facilitation of Yemen's largest hackathon focused on 
                post-conflict economic recovery. This 48-hour event brought together over 200 developers, designers, 
                and entrepreneurs from across the country to create technology solutions for local economic challenges.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Using the Unleash methodology, we structured the event to maximize creativity, collaboration, and 
                practical outcomes. Participants formed interdisciplinary teams to tackle challenges in sectors 
                including agriculture, education, healthcare, financial services, and small business development.
              </p>
              <div className="bg-gray-50 border-l-4 border-brand-orange p-4 mb-8">
                <h3 className="font-bold mb-2">Event Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-orange mr-2 mt-0.5" />
                    <span>48-hour intensive innovation sprint</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-orange mr-2 mt-0.5" />
                    <span>200+ participants from across Yemen</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-orange mr-2 mt-0.5" />
                    <span>25 tech solutions developed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-orange mr-2 mt-0.5" />
                    <span>5 economic sectors addressed</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-brand-orange/10 rounded-tl-3xl"></div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-brand-blue/10 rounded-br-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                alt="Tech for Economic Recovery Hackathon" 
                className="rounded-lg shadow-lg relative z-10 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Role Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Leadership Role" 
            subtitle="YemenTechVision served as the lead organizer and facilitator for this landmark event."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md hover-scale">
              <div className="h-12 w-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Event Design</h3>
              <p className="text-gray-600">
                We created the entire event framework, from challenge definition to team formation and 
                judging criteria, adapting the Unleash methodology to Yemen's context.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover-scale">
              <div className="h-12 w-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="h-6 w-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Facilitation</h3>
              <p className="text-gray-600">
                Our team facilitated the entire hackathon, including workshops, mentoring sessions, 
                pitch preparation, and final presentations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover-scale">
              <div className="h-12 w-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Follow-up Support</h3>
              <p className="text-gray-600">
                Post-event, we provided continued mentoring for winning teams and connected them 
                with funding opportunities and incubation programs.
              </p>
            </div>
          </div>
          
          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Implementation Approach</h3>
            <p className="text-lg text-gray-600 mb-6">
              We implemented this hackathon using a carefully designed approach that emphasized inclusion, 
              creativity, and tangible outcomes. Key elements included:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-brand-orange mr-3 mt-0.5" />
                <div>
                  <span className="font-bold">Challenge Definition:</span> 
                  <span className="text-gray-600"> Working with economic experts to define relevant, specific challenges.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-brand-orange mr-3 mt-0.5" />
                <div>
                  <span className="font-bold">Diverse Participation:</span> 
                  <span className="text-gray-600"> Ensuring geographical, gender, and skill diversity among participants.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-brand-orange mr-3 mt-0.5" />
                <div>
                  <span className="font-bold">Expert Mentorship:</span> 
                  <span className="text-gray-600"> Providing teams with access to technical and domain experts throughout the event.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-brand-orange mr-3 mt-0.5" />
                <div>
                  <span className="font-bold">Implementation Focus:</span> 
                  <span className="text-gray-600"> Emphasizing solutions that could be realistically implemented with available resources.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Impact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Impact & Results" 
            subtitle="The hackathon generated significant outcomes for participants and the broader tech ecosystem in Yemen."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover-scale">
              <div className="text-4xl font-bold text-brand-blue mb-2">25</div>
              <p className="text-gray-600">Tech Solutions Developed</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover-scale">
              <div className="text-4xl font-bold text-brand-blue mb-2">8</div>
              <p className="text-gray-600">Projects Received Funding</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover-scale">
              <div className="text-4xl font-bold text-brand-blue mb-2">3</div>
              <p className="text-gray-600">Solutions Now in Market</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover-scale">
              <div className="text-4xl font-bold text-brand-blue mb-2">40+</div>
              <p className="text-gray-600">New Tech Jobs Created</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-brand-orange/10 rounded-tl-3xl"></div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-brand-blue/10 rounded-br-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Tech for Economic Recovery Impact" 
                className="rounded-lg shadow-lg relative z-10 w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Long-term Outcomes</h3>
              <p className="text-lg text-gray-600 mb-6">
                Beyond the immediate results of the hackathon, several long-term impacts have emerged:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-orange mr-3 mt-0.5" />
                  <div>
                    <span className="font-bold">Ecosystem Growth:</span> 
                    <span className="text-gray-600"> Increased activity in Yemen's tech startup scene, with multiple new ventures launched.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-orange mr-3 mt-0.5" />
                  <div>
                    <span className="font-bold">Knowledge Transfer:</span> 
                    <span className="text-gray-600"> Skills developed during the hackathon have been applied across various sectors.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-orange mr-3 mt-0.5" />
                  <div>
                    <span className="font-bold">Economic Impact:</span> 
                    <span className="text-gray-600"> New digital services are improving efficiency and creating job opportunities.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-orange mr-3 mt-0.5" />
                  <div>
                    <span className="font-bold">Institutional Adoption:</span> 
                    <span className="text-gray-600"> Several local organizations have integrated technology solutions developed at the hackathon.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="What People Said" 
            subtitle="Hear from participants and partners about their experience with the Tech for Economic Recovery hackathon."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                position={testimonial.position}
                company={testimonial.company}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Own Success Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us help you design and facilitate a powerful innovation event tailored to your specific challenges and goals.
          </p>
          <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100 btn-hover">
            <Link to="/contact">Discuss Your Project</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default CaseStudy;
