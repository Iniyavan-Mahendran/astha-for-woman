import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloatButton = () => (
  <a
    href="https://wa.me/919999999999?text=Hello%20Astha%20For%20Women%2C%20I%20need%20support%20and%20guidance."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-xl z-50 flex items-center justify-center transition-all"
    aria-label="WhatsApp Support"
  >
    <FaWhatsapp className="text-3xl" />
  </a>
);

export default WhatsAppFloatButton;
