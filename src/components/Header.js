import React, { useState } from 'react';
import resume from './../assets/resume.pdf';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Section with ID "${sectionId}" not found`);
    }
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white dark:bg-gray-700 shadow-md z-10">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-800 dark:text-white flex-shrink-0">Portfolio</h1>

        {/* Desktop Menu (Hidden on small screens) */}
        <div className="hidden sm:flex items-center space-x-4">
          <button
            onClick={() => scrollToSection('skills')}
            className="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors px-3 py-2"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('project')}
            className="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors px-3 py-2"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors px-3 py-2"
          >
            Contact
          </button>
        </div>

        {/* Right Side: Download Resume and Hamburger (mobile only) */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Download Resume Button (Always visible, before hamburger) */}
          <button
            onClick={() => window.open(resume, '_blank')}
            className="bg-primary text-white hover:bg-primary-dark transition-colors px-2 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base whitespace-nowrap"
          >
            Download Resume
          </button>

          {/* Hamburger Button (Visible on small screens only) */}
          <button
            className="sm:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu (Visible when hamburger is clicked) */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-700 shadow-md sm:hidden z-20">
            <div className="flex flex-col items-center space-y-2 py-4">
              <button
                onClick={() => scrollToSection('skills')}
                className="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors px-3 py-2 w-full text-center"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('project')}
                className="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors px-3 py-2 w-full text-center"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors px-3 py-2 w-full text-center"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;