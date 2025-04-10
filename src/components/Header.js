import React from 'react';
import resume from './../assets/resume.pdf';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Section with ID "${sectionId}" not found`);
    }
  };

  return (
    <header className="sticky top-0 bg-white dark:bg-gray-700 shadow-md z-10">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">Portfolio</h1>
        <div className="flex items-center space-x-4">
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
        <button 
        onClick={() => window.open(resume, '_blank')}
        className="bg-primary text-white hover:bg-primary-dark transition-colors px-4 py-2 rounded">
          Download Resume
        </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;