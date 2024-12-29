"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
// import { BsDiscord } from 'react-icons/bs';
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const HeroSection = () => {
  const phrases = [
    "Designing the Future of Web Development",
    "A Professional Web Developer",
    "Building Responsive and Scalable Websites",
    "Creating Seamless User Experiences",
    "And Graphic Designer"
  ];

  const [currentPhrase, setCurrentPhrase] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let typingInterval: NodeJS.Timeout;
    let deletingInterval: NodeJS.Timeout;

    if (isTyping) {
      typingInterval = setInterval(() => {
        setCurrentPhrase((prev) => {
          const next = phrases[currentIndex].slice(0, prev.length + 1);
          return next;
        });
        if (currentPhrase === phrases[currentIndex]) {
          setIsTyping(false);
        }
      }, 150); // Adjust typing speed here
    } else {
      deletingInterval = setInterval(() => {
        setCurrentPhrase((prev) => {
          const next = prev.slice(0, prev.length - 1);
          return next;
        });
        if (currentPhrase === "") {
          setIsTyping(true);
          setCurrentIndex((prev) => (prev + 1) % phrases.length); // Cycle through phrases
        }
      }, 100); // Adjust deleting speed here
    }

    return () => {
      clearInterval(typingInterval);
      clearInterval(deletingInterval);
    };
  }, [currentPhrase, isTyping, currentIndex]); // Add all dependencies here

  return (
    <section className="relative bg-white text-gray-800 h-auto flex flex-col-reverse md:flex-row items-center justify-center pt-12 pb-8 md:pt-24 md:pb-16" id='hero'>
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Left Section (Text & Buttons) */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold">Hello <br /> I&apos;m <br /> Faisal Siddique</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600">
            {currentPhrase}
            <span className="blink-animation">|</span>
          </h2>
          <div className="text-xl text-gray-600 mt-4">
            <p>Graphic Designer</p>
            <p>Web Developer</p>
          </div>
          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            <a
              href="https://www.linkedin.com/in/faisal-siddiqui-8725302b7/"
              target="_blank"
              className="text-blue-500 text-2xl hover:scale-110 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/FaisalSiddique321?tab=repositories"
              target="_blank"
              className="text-gray-800 text-2xl hover:scale-110 transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/invites/contact/"
              target="_blank"
              className="text-blue-400 text-2xl hover:scale-110 transition duration-300"
            >
              {/* <BsDiscord /> */}
              <FaInstagramSquare />
            </a>
            <a
              href="mailto:faisalsiddique246@gmail.com"
              className="text-red-500 text-2xl hover:scale-110 transition duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            <a
              href="/My cv.pdf"
              download
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              Explore CV
            </a>
            <a
              href="https://www.linkedin.com/in/faisal-siddiqui-8725302b7/"
              className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition duration-300"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Right Section (Profile Image) */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0 relative">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-300 shadow-2xl transition duration-500 hover:shadow-2xl">
            <Image
              src="/my.jpg"
              alt="Ahmed Memon"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
