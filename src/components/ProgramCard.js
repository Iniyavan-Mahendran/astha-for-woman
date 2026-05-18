import React from 'react';

const ProgramCard = ({ title, description, icon }) => (
  <div className="bg-purple-50 rounded-xl shadow-md hover:shadow-xl transition-all p-5 flex flex-col items-center gap-3 w-full max-w-xs">
    <div className="text-purple-700 text-4xl mb-2">{icon}</div>
    <h3 className="font-montserrat text-lg font-bold text-purple-900 text-center">{title}</h3>
    <p className="font-open-sans text-sm text-gray-700 text-center">{description}</p>
  </div>
);

export default ProgramCard;
