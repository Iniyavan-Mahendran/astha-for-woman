import React from 'react';
import FormButtonCard from '@/components/FormButtonCard';

const SupportUs: React.FC = () => (
  <div className="max-w-xl mx-auto py-12 px-4 text-center">
    <h1 className="font-montserrat text-3xl text-purple-800 font-bold mb-7">Support Us</h1>
    <FormButtonCard 
      title="Donate / Volunteer / Collaborate"
      description="Choose to support Astha For Women - donate, volunteer your time, or collaborate as a partner."
      formUrl="https://forms.gle/WQ8XBVdQuTWPL8d36"
      buttonText="Fill Google Form"
    />
  </div>
);

export default SupportUs;
