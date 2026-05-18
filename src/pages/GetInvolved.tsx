import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProgramCard from '@/components/ProgramCard';
import FormButtonCard from '@/components/FormButtonCard';
import { FaUsers, FaHandshake, FaBullhorn } from 'react-icons/fa';

const roles = [
  {
    icon: <FaUsers />,
    title: 'Field Volunteer',
    description: 'Join outreach, interact with women directly, and help implement grassroots programs.'
  },
  {
    icon: <FaBullhorn />,
    title: 'Advocacy & Campaigner',
    description: 'Run awareness campaigns, build community support, and promote women’s rights.'
  },
  {
    icon: <FaHandshake />,
    title: 'Mentor or Collaborator',
    description: 'Guide, mentor or partner for skill workshops, legal awareness, or any support.'
  }
];

const GetInvolved: React.FC = () => (
  <>
    <HeroSection title="Get Involved" subtitle="Be part of empowerment & change">
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {roles.map(r => <ProgramCard key={r.title} {...r} />)}
      </div>
    </HeroSection>

    <section className="py-16 px-4 max-w-xl mx-auto">
      <FormButtonCard
        title="Volunteer / Collaborate / Partner"
        description="Sign up to become a volunteer, partner, or mentor. Help us reach more women and communities."
        formUrl="https://forms.gle/WQ8XBVdQuTWPL8d36"
        buttonText="Fill Google Form"
      />
    </section>
  </>
);

export default GetInvolved;

