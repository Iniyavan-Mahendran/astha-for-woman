import React from 'react';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

const CTASection: React.FC<CTASectionProps> = ({ title, description, buttonText, buttonUrl }) => (
  <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center gap-2">
    <h2 className="font-montserrat text-xl md:text-2xl font-bold text-purple-700 mb-1">{title}</h2>
    <p className="font-open-sans text-base text-gray-700 mb-2">{description}</p>
    <a href={buttonUrl} target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white rounded-xl px-6 py-2 font-poppins font-semibold transition-all shadow">{buttonText}</a>
  </div>
);

export default CTASection;
