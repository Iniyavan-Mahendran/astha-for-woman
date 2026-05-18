import React from 'react';

const CyberSafety: React.FC = () => (
  <section className="max-w-2xl mx-auto py-10 px-4">
    <h1 className="font-montserrat text-2xl text-purple-800 font-bold mb-6 text-center">Cyber Safety Measures</h1>
    <ul className="space-y-3 text-base text-gray-700 font-open-sans">
      <li><strong>Report Online Harassment:</strong> File complaints with cyber cell or police.</li>
      <li><strong>Privacy Controls:</strong> Protect your accounts with strong passwords and privacy settings.</li>
      <li><strong>Protection from Stalking/Threats:</strong> Indian laws cover cyber-stalking and threats.</li>
      <li><strong>Helpline Numbers:</strong> Reach out for help if you are harassed online.</li>
    </ul>
    <div className="mt-8 text-center">
      <a href="/rights" className="bg-purple-700 text-white rounded-xl px-6 py-2 font-poppins shadow hover:bg-purple-800 transition">Back to Rights Overview</a>
    </div>
  </section>
);

export default CyberSafety;
