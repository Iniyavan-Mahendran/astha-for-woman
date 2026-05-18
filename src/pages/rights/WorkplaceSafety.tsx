import React from 'react';

const WorkplaceSafety: React.FC = () => (
  <section className="max-w-2xl mx-auto py-10 px-4">
    <h1 className="font-montserrat text-2xl text-purple-800 font-bold mb-6 text-center">Workplace Safety & Protections</h1>
    <ul className="space-y-3 text-base text-gray-700 font-open-sans">
      <li><strong>Sexual Harassment of Women at Workplace Act (2013):</strong> Mandates Internal Complaints Committee and reporting mechanisms.</li>
      <li><strong>Equal Opportunity:</strong> Rights to fair hiring, equal pay, and promotions.</li>
      <li><strong>Maternity Benefits Act:</strong> Maternity leaves and job security for expecting mothers.</li>
    </ul>
    <div className="mt-8 text-center">
      <a href="/rights" className="bg-purple-700 text-white rounded-xl px-6 py-2 font-poppins shadow hover:bg-purple-800 transition">Back to Rights Overview</a>
    </div>
  </section>
);

export default WorkplaceSafety;
