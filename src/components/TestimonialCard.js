import React from 'react';

const TestimonialCard = ({ name, quote, avatar }) => (
  <div className="bg-purple-50 rounded-xl shadow-md hover:shadow-lg transition-all px-6 py-4 flex flex-col items-center gap-2 max-w-sm w-full">
    <img src={avatar} alt={name} className="rounded-full w-12 h-12 object-cover shadow-md" />
    <blockquote className="italic text-gray-700 font-open-sans text-center">"{quote}"</blockquote>
    <div className="mt-2 font-poppins font-semibold text-purple-900">{name}</div>
  </div>
);

export default TestimonialCard;
