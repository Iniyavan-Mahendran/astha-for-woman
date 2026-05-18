import React from 'react';
import RightsAccordion from '@/components/RightsAccordion';

const RIGHTS_CONTENT = [
  {
    title: 'Domestic Laws',
    content: <div className="space-y-2">India has important laws to protect women against violence, discrimination, and abuse. <a href="/rights/domestic-laws" className="text-purple-700 underline">Learn More</a></div>
  },
  {
    title: 'Property Rights',
    content: <div className="space-y-2">Know your rights regarding property and inheritance as a woman in India. <a href="/rights/property-rights" className="text-purple-700 underline">Learn More</a></div>
  },
  {
    title: 'Workplace Safety',
    content: <div className="space-y-2">Workplace safety and anti-harassment protections every woman should know. <a href="/rights/workplace-safety" className="text-purple-700 underline">Learn More</a></div>
  },
  {
    title: 'Cyber Safety',
    content: <div className="space-y-2">Your online safety is vital. Learn protection measures and support options. <a href="/rights/cyber-safety" className="text-purple-700 underline">Learn More</a></div>
  },
  {
    title: 'Helpline Numbers',
    content: <div className="space-y-2">Reach out for help using national and local helplines. <a href="/rights/helpline" className="text-purple-700 underline">See Helplines</a></div>
  },
];

const Rights: React.FC = () => (
  <div className="max-w-2xl mx-auto py-8 px-3">
    <h1 className="font-montserrat text-3xl text-purple-800 font-bold mb-6 text-center">Know Your Rights</h1>
    <RightsAccordion items={RIGHTS_CONTENT} />
  </div>
);

export default Rights;
