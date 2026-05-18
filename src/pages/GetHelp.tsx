import React from 'react';
import FormButtonCard from '@/components/FormButtonCard';

const GetHelp: React.FC = () => (
  <div className="max-w-xl mx-auto py-12 px-4 text-center">
    <h1 className="font-montserrat text-3xl text-purple-800 font-bold mb-7">Need Support?</h1>
    <FormButtonCard 
      title="Request Support"
      description="Submit your request privately and our team will reach out with guidance and resources."
      formUrl="https://forms.gle/GKRQZqU1N9T1eGVL6"
      buttonText="Fill Google Form"
    />
  </div>
);

export default GetHelp;
