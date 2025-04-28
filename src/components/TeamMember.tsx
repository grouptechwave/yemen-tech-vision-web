
import React from 'react';

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, image, bio }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover-scale">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-brand-orange font-medium mb-3">{position}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMember;
