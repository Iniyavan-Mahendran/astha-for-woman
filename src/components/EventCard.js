import React from 'react';

const EventCard = ({ title, date, location, description }) => (
  <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-4 transition-all flex flex-col gap-1 w-full max-w-md">
    <div className="flex flex-row gap-3 items-center">
      <span className="bg-purple-200 text-purple-700 px-2 py-1 rounded-lg font-poppins text-xs font-semibold">{date}</span>
      <span className="text-gray-600 font-open-sans text-sm">{location}</span>
    </div>
    <h4 className="font-montserrat text-lg font-bold text-purple-900 mt-1">{title}</h4>
    <p className="font-open-sans text-sm text-gray-800 mt-1">{description}</p>
  </div>
);

export default EventCard;
