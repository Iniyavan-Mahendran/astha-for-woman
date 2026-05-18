import React from 'react';

const PropertyRights: React.FC = () => (
  <section className="max-w-2xl mx-auto py-10 px-4">
    <h1 className="font-montserrat text-2xl text-purple-800 font-bold mb-6 text-center">Property & Inheritance Rights</h1>
    <ul className="space-y-3 text-base text-gray-700 font-open-sans">
      <li><strong>Hindu Succession Act (2005):</strong> Women can inherit parental property equally.</li>
      <li><strong>Equal Rights for Daughters:</strong> Daughters have the same rights as sons in family property.</li>
      <li><strong>Muslim Personal Law:</strong> Provides property inheritance rights for Muslim women.</li>
      <li><strong>Right to Residence:</strong> Protection of a woman's right to live in her marital home.</li>
      <li><strong>Maintenance Rights:</strong> Women have rights to maintenance from spouse or family.</li>
    </ul>
    <div className="mt-8 text-center">
      <a href="/rights" className="bg-purple-700 text-white rounded-xl px-6 py-2 font-poppins shadow hover:bg-purple-800 transition">Back to Rights Overview</a>
    </div>
  </section>
);

export default PropertyRights;
