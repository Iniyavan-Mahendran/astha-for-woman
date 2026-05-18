import React from 'react';

const FormButtonCard = ({ title, description, formUrl, buttonText }) => (
  <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center gap-2">
    <h3 className="font-montserrat text-lg font-bold text-purple-700">{title}</h3>
    <p className="font-open-sans text-sm text-gray-600 text-center mb-2">{description}</p>
    <a href={formUrl} target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white rounded-xl px-5 py-2 font-poppins font-semibold transition-all shadow">{buttonText}</a>
  </div>
);

export default FormButtonCard;
