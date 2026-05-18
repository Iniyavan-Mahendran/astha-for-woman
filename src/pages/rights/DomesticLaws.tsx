import React from 'react';

const DomesticLaws: React.FC = () => (
  <section className="max-w-2xl mx-auto py-10 px-4">
    <h1 className="font-montserrat text-2xl text-purple-800 font-bold mb-6 text-center">Domestic Laws Protecting Women</h1>
    <ul className="space-y-3 text-base text-gray-700 font-open-sans">
      <li><strong>Protection of Women from Domestic Violence Act (2005):</strong> Safeguards women from physical & mental abuse.</li>
      <li><strong>Dowry Prohibition Act (1961):</strong> Prevents dowry demands and related violence.</li>
      <li><strong>Sexual Harassment of Women at Workplace Act (2013):</strong> Ensures safety at work.</li>
      <li><strong>Indian Penal Code Section 498A:</strong> Addresses cruelty by husband or family members.</li>
      <li><strong>Child Marriage Prohibition Act (2006):</strong> Protects girls from underage marriages.</li>
    </ul>
    <div className="mt-8 text-center">
      <a href="/rights" className="bg-purple-700 text-white rounded-xl px-6 py-2 font-poppins shadow hover:bg-purple-800 transition">Back to Rights Overview</a>
    </div>
  </section>
);

export default DomesticLaws;
