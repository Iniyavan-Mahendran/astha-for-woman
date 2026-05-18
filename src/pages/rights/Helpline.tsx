import React from 'react';

const Helpline: React.FC = () => (
  <section className="max-w-2xl mx-auto py-10 px-4">
    <h1 className="font-montserrat text-2xl text-purple-800 font-bold mb-6 text-center">Women's Helpline Numbers</h1>
    <ul className="space-y-3 text-base text-gray-700 font-open-sans">
      <li><strong>National Women’s Helpline:</strong> 181</li>
      <li><strong>Police Emergency:</strong> 100</li>
      <li><strong>Child Helpline:</strong> 1098</li>
      <li><strong>Cyber Crime Helpline:</strong> 155260</li>
      <li><strong>Astha For Women Support:</strong> <a href="https://wa.me/918801066007?text=Hello%20Astha%20For%20Women%2C%20I%20need%20support%20and%20guidance." target="_blank" rel="noopener" className="text-green-600 underline">WhatsApp</a></li>
    </ul>
    <div className="mt-8 text-center">
      <a href="/rights" className="bg-purple-700 text-white rounded-xl px-6 py-2 font-poppins shadow hover:bg-purple-800 transition">Back to Rights Overview</a>
    </div>
  </section>
);

export default Helpline;
