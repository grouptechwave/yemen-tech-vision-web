
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, image, date, slug }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover-scale">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <Link to={`/blog/${slug}`} className="text-brand-blue font-medium hover:text-brand-orange transition-colors">
          Read More &rarr;
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
