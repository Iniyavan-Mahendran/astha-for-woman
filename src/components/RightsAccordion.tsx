import React, { useState, ReactNode } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface AccordionItem {
  title: string;
  content: ReactNode;
}

interface RightsAccordionProps {
  items: AccordionItem[];
}

const RightsAccordion: React.FC<RightsAccordionProps> = ({ items }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="w-full rounded-xl shadow bg-white">
      {items.map((item, idx) => (
        <div key={item.title} className="border-b last:border-0">
          <button
            className="flex w-full justify-between items-center px-6 py-4 focus:outline-none font-montserrat text-lg text-purple-800 font-bold"
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            aria-expanded={openIdx === idx}
            aria-controls={`accordion-content-${idx}`}
          >
            {item.title}
            <FaChevronDown className={`transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
          </button>
          <div
            id={`accordion-content-${idx}`}
            className={`px-6 pb-4 text-gray-700 font-open-sans text-base ${openIdx === idx ? 'block' : 'hidden'}`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightsAccordion;
