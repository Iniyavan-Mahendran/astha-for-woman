import React from 'react';
import HeroSection from '@/components/HeroSection';
import EventCard from '@/components/EventCard';

const upcomingEvents = [
  {
    title: 'Community Health Camp', date: 'May 15, 2026', location: 'Dwarka Community Hall', description: 'Free health checks & awareness for women.', type: 'Health',
  },
  {
    title: 'Self-Defence Workshop', date: 'May 22, 2026', location: 'Astha Center', description: 'Empowering women with practical self-defence techniques.', type: 'Workshop',
  },
  {
    title: 'Annual Fundraiser Night', date: 'June 8, 2026', location: 'Hotel Grand', description: 'Join us for an evening to support women empowerment.', type: 'Fundraiser',
  },
];

const pastEvents = [
  {
    title: "Women's Day Celebration", date: 'March 8, 2026', location: 'Astha Center', description: "Honoring women's achievements and contributions.", type: 'Celebration',
  },
  {
    title: 'Legal Rights Awareness', date: 'Feb 14, 2026', location: 'Community Hall, Rohini', description: 'Workshop on legal protections for women.', type: 'Workshop',
  },
];

const Events: React.FC = () => (
  <>
    <HeroSection title="Events & Workshops" subtitle="Connect, learn and grow with our programs" />
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="font-montserrat text-2xl text-purple-800 font-bold mb-6">Upcoming Events</h2>
      <div className="grid md:grid-cols-3 gap-8">{
        upcomingEvents.map(e => <EventCard key={e.title} {...e} />)
      }</div>
      <h2 className="font-montserrat text-2xl text-purple-800 font-bold mt-14 mb-6">Past Events</h2>
      <div className="grid md:grid-cols-3 gap-8">{
        pastEvents.map(e => <EventCard key={e.title} {...e} />)
      }</div>
    </section>
  </>
);

export default Events;

