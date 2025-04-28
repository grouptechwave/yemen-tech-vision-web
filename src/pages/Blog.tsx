
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/SectionHeading';
import BlogCard from '@/components/BlogCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Rise of Yemen's Tech Ecosystem: Challenges and Opportunities",
      excerpt: "An in-depth look at how Yemen's tech community is growing despite challenges, with insights from key ecosystem players.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      date: "April 15, 2023",
      slug: "rise-of-yemen-tech-ecosystem"
    },
    {
      title: "Hackathons as Catalysts for Economic Recovery in Post-Conflict Regions",
      excerpt: "How rapid innovation events can spark economic activity and technological advancement in challenging contexts.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      date: "March 22, 2023",
      slug: "hackathons-as-catalysts"
    },
    {
      title: "Building Technical Capacity Where It's Needed Most",
      excerpt: "Effective strategies for developing tech skills in underserved communities, based on our experience in Yemen.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      date: "February 10, 2023",
      slug: "building-technical-capacity"
    },
    {
      title: "The Unleash Methodology: Structured Innovation for Real Impact",
      excerpt: "A deep dive into how the Unleash approach to innovation can be adapted for different contexts and challenges.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      date: "January 18, 2023",
      slug: "unleash-methodology"
    },
    {
      title: "Tech Entrepreneurship in Fragile Contexts: Lessons from Yemen",
      excerpt: "Key insights for entrepreneurs building tech ventures in challenging environments with limited resources.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      date: "December 5, 2022",
      slug: "tech-entrepreneurship-fragile-contexts"
    },
    {
      title: "From Idea to Impact: Supporting Tech Solutions Beyond the Hackathon",
      excerpt: "How to create effective support mechanisms to help promising hackathon projects reach implementation.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      date: "November 15, 2022",
      slug: "idea-to-impact"
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Insights</h1>
            <p className="text-xl text-gray-600">
              Explore our latest thinking on tech innovation, capacity building, and entrepreneurship in Yemen and beyond.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="text-brand-orange font-medium">FEATURED POST</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{blogPosts[0].title}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {blogPosts[0].excerpt} This in-depth analysis brings together voices from across Yemen's 
                emerging tech scene to map current challenges, opportunities, and paths forward.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-8">
                <span className="mr-4">{blogPosts[0].date}</span>
                <span>8 min read</span>
              </div>
              <Button asChild className="bg-brand-blue hover:bg-brand-blue-light btn-hover">
                <Link to={`/blog/${blogPosts[0].slug}`}>
                  Read Full Article
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-brand-orange/10 rounded-tl-3xl"></div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-brand-blue/10 rounded-br-3xl"></div>
              <img 
                src={blogPosts[0].image} 
                alt={blogPosts[0].title} 
                className="rounded-lg shadow-lg relative z-10 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Latest Articles" 
            subtitle="Stay updated with our most recent insights, case studies, and thought leadership."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <BlogCard
                key={index}
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                date={post.date}
                slug={post.slug}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-gray-600 mb-8">
              Get the latest insights on tech innovation and entrepreneurship in Yemen 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
              />
              <Button className="bg-brand-blue hover:bg-brand-blue-light btn-hover">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
      
      {/* Topics Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Popular Topics" 
            subtitle="Explore our content by category to find exactly what you're looking for."
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
              Hackathons
            </Button>
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
              Capacity Building
            </Button>
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
              Entrepreneurship
            </Button>
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
              Tech Ecosystem
            </Button>
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
              Innovation Methods
            </Button>
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
              Case Studies
            </Button>
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
              Success Stories
            </Button>
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
              Tech Skills
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Blog;
