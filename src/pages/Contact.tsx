
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600">
              Have a question or want to discuss how we can help with your project? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info & Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading title="Get in Touch" />
              <p className="text-lg text-gray-600 mb-8">
                Whether you're interested in our services, have questions about our approach, 
                or want to explore partnership opportunities, we're here to help.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-brand-blue/10 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Visit Us</h3>
                    <p className="text-gray-600">
                      Main Office<br />
                      Al-Masbah Street<br />
                      Taiz, Yemen
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-brand-blue/10 rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Email Us</h3>
                    <p className="text-gray-600">
                      General Inquiries: <a href="mailto:info@yementechvision.com" className="text-brand-blue hover:underline">info@yementechvision.com</a><br />
                      Services: <a href="mailto:services@yementechvision.com" className="text-brand-blue hover:underline">services@yementechvision.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-brand-blue/10 rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Call Us</h3>
                    <p className="text-gray-600">
                      Office: <a href="tel:+967123456789" className="text-brand-blue hover:underline">+967 123 456 789</a><br />
                      Mobile: <a href="tel:+967987654321" className="text-brand-blue hover:underline">+967 987 654 321</a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Working Hours</h3>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Sunday - Thursday:</span> 9:00 AM - 5:00 PM
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Friday - Saturday:</span> Closed
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Find quick answers to common questions about our services."
            centered
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">What types of organizations do you work with?</h3>
                <p className="text-gray-600">
                  We work with a diverse range of clients including international development organizations, 
                  local NGOs, educational institutions, tech startups, and government agencies. If you're 
                  interested in leveraging technology for impact in Yemen, we'd be happy to discuss how we can help.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">How much does it cost to organize a hackathon?</h3>
                <p className="text-gray-600">
                  Hackathon costs vary widely based on scale, duration, and specific requirements. We work 
                  with clients to design events that fit their budgets while maximizing impact. Contact us 
                  for a customized quote based on your specific needs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">Do you offer remote services outside of Yemen?</h3>
                <p className="text-gray-600">
                  Yes, we offer remote consulting and virtual event facilitation for clients throughout 
                  the MENA region and globally. Our team has experience designing and leading virtual 
                  hackathons and training programs that deliver excellent results regardless of location.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">How long does a typical capacity building program last?</h3>
                <p className="text-gray-600">
                  Our capacity building programs range from short workshops (2-3 days) to comprehensive 
                  training programs (3-6 months). The duration depends on your goals, participant starting 
                  points, and desired outcomes. We'll work with you to design a program that fits your timeline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Contact;
