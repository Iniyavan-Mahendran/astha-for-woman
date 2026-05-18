import React from 'react';
import HeroSection from '@/components/HeroSection';
import TestimonialCard from '@/components/TestimonialCard';

const impactStats = [
  { label: 'Women Reached', value: '5,000+' },
  { label: 'Counselling Sessions', value: '1,200+' },
  { label: 'Women Trained', value: '800+' },
  { label: 'Active Volunteers', value: '50+' },
  { label: 'Awards Won', value: '15+' },
  { label: 'Communities Served', value: '12' },
];

const stories = [
  { name: 'Rekha', quote: 'Astha For Women gave me confidence and hope after a tough phase.', image: 'https://randomuser.me/api/portraits/women/68.jpg', role: 'Member' },
  { name: 'Fatima', quote: 'My rights were respected and I found guidance quickly.', image: 'https://randomuser.me/api/portraits/women/22.jpg', role: 'Member' },
  { name: 'Sunita', quote: 'Their team was compassionate and supportive throughout.', image: 'https://randomuser.me/api/portraits/women/36.jpg', role: 'Member' },
];

const Impact: React.FC = () => (
  <>
    <HeroSection title="Our Impact" subtitle="Empowering lives, building safe communities">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-8">
        {impactStats.map((stat) => (
          <div key={stat.label} className="bg-purple-50 rounded-xl shadow-md p-4 flex flex-col items-center">
            <div className="text-2xl font-bold text-purple-900 font-montserrat">{stat.value}</div>
            <div className="text-sm text-gray-700 font-poppins mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </HeroSection>

    <section className="py-16 bg-purple-50 mt-14">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="font-montserrat text-2xl text-purple-800 font-bold mb-6 text-center">Stories of Change</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-4">
          {stories.map((story) => (
                      <TestimonialCard key={story.name} name={story.name} quote={story.quote} image={story.image} role={story.role} />
                    ))}
        </div>
      </div>
    </section>
  </>
);

export default Impact;
