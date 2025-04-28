
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Header />
      
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
        <div className="text-center px-4 py-10">
          <h1 className="text-6xl md:text-9xl font-bold text-brand-blue mb-4">404</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-blue-light">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default NotFound;
