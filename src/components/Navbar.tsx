import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Programs', path: '/programs' },
  { label: 'Know Your Rights', path: '/rights' },
  { label: 'Impact', path: '/impact' },
  { label: 'Events', path: '/events' },
  { label: 'Get Involved', path: '/get-involved' },
  { label: 'Contact', path: '/contact' },
  { label: 'Support Us', path: '/support-us' },
  { label: 'Get Help', path: '/get-help' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-white shadow-lg rounded-xl mt-3 mb-2 px-4 py-2 flex items-center justify-between z-40 relative">
      <div className="flex items-center gap-2">
        <Link to="/" className="font-montserrat font-bold text-purple-700 text-2xl">Astha For Women</Link>
      </div>
      <button className="md:hidden px-2 py-1 text-purple-700" onClick={() => setOpen(!open)}>
        <span className="text-xl">☰</span>
      </button>
      <ul className={`md:flex gap-6 font-poppins font-medium text-purple-900 md:static fixed top-16 left-0 w-full bg-white rounded-xl shadow-lg transition-all ${open ? 'block' : 'hidden'} md:block md:w-auto md:shadow-none md:rounded-none z-30`}>
        {NAV_ITEMS.map(item => (
          <li key={item.label} className="hover:text-purple-700 py-2 px-4 md:py-0 md:px-0 transition-all">
            <Link to={item.path} onClick={() => setOpen(false)}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
