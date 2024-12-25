'use client';
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaDiscord, FaGithub, FaInstagram} from 'react-icons/fa'; // Import React Icons
import { SlEnvolope } from 'react-icons/sl';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-12">
      <div className="container mx-auto px-6">

        {/* Footer Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold">Stay Connected with Us</h2>
          <p className="text-lg mt-2">Follow us on social media for updates and news.</p>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Left Column: Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#about" className="text-lg hover:text-gray-300">About Us</a></li>
              <li><a href="#skills" className="text-lg hover:text-gray-300">Skills</a></li>
              <li><a href="#contact" className="text-lg hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
          {/* Center Column: Social Icons */}
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://www.facebook.com/faisal.siddique.963434?mibextid=ZbWKwL" target="_blank" className="text-3xl hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="mailto:faisalsiddique246@gmail.com" target="_blank" className="text-3xl hover:text-gray-300">
              <SlEnvolope />
            </a>
            <a href="https://www.linkedin.com/in/faisal-siddiqui-8725302b7/" target="_blank" className="text-3xl hover:text-gray-300">
              <FaLinkedinIn />
            </a>
            {/* <a href="https://discord.com/users/braveboy0675_78344" target="_blank" className="text-3xl hover:text-gray-300">
              <FaDiscord />
            </a> */}
            <a href="https://github.com/FaisalSiddique321?tab=repositories" target="_blank" className="text-3xl hover:text-gray-300">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/invites/contact/" target="_blank" className="text-3xl hover:text-gray-300">
              <FaInstagram />
            </a>
          </div>

          {/* Right Column: Copyright */}
          <div className="text-center">
            <p className="text-sm">© {new Date().getFullYear()} Faisal All Rights Reserved.</p>
            <p className="text-sm">Providing exceptional service and support.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
