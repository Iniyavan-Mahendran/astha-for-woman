import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProgramCard from '@/components/ProgramCard';
import founderImage from '@/assets/Founder_image.jpeg';
import { FaEye, FaBullseye } from 'react-icons/fa';

const vision = {
  icon: <FaEye />,
  title: 'Our Vision',
  description: 'Every woman lives with dignity, safety, and opportunity in a compassionate society.'
};
const mission = {
  icon: <FaBullseye />,
  title: 'Our Mission',
  description: 'Empowering women with support, legal knowledge, skill training, and community engagement.'
};

const About: React.FC = () => (
  <>
    <HeroSection title="About Astha For Women" subtitle="Empowering women, building safe futures">
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <ProgramCard title={vision.title} description={vision.description} icon={vision.icon} />
        <ProgramCard title={mission.title} description={mission.description} icon={mission.icon} />
      </div>
    </HeroSection>

    <section className="py-16 px-4 max-w-3xl mx-auto">
      <div className="bg-purple-50 rounded-xl shadow-xl p-8 flex flex-col items-center">
        <img src={founderImage} alt="Founder" className="w-24 h-24 rounded-full object-cover shadow-md mb-4" />
        <h3 className="font-montserrat text-xl text-purple-900 font-semibold">Priya Sharma</h3>
        <p className="font-poppins text-gray-700 text-sm">Founder & Advocate for Women’s Rights</p>
        <p className="mt-4 font-open-sans text-base text-gray-800 text-center italic">
          "I founded Astha For Women to ensure every woman feels safe and heard. Our team believes true change begins with community, compassion, and knowledge."
        </p>
      </div>
    </section>
  </>
);

export default About;

