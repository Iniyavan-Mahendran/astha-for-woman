import React, { ReactNode } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  children?: ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, children }) => (
  <section className="bg-gradient-to-br from-purple-700 to-purple-400 text-white rounded-xl shadow-lg py-16 px-6 flex flex-col items-center justify-center gap-4 w-full">
    <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-2 text-center">{title}</h1>
    <p className="text-lg md:text-2xl font-poppins text-center mb-4">{subtitle}</p>
    {children}
  </section>
);

export default HeroSection;
