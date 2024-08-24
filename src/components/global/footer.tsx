import React from 'react';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-700 text-white py-10">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <p className="mb-4 text-lg">Follow us on</p>
          <div className="flex justify-center space-x-6">
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-3xl" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin className="text-3xl" />
            </a>
            <a href="#" aria-label="Email">
              <FaEnvelope className="text-3xl" />
            </a>
          </div>
        </div>
        <div className="text-base mb-6">
          &copy; 2024-2029 Lorem Ipsum Limited
        </div>
        <div className="flex justify-center space-x-8 text-lg">
          <a href="/about" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Help</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;