import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="section bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white animate-fade-in">
          Get in Touch
        </h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 animate-slide-up">
            Want to collaborate or just say hi? Reach out through email or check out my work on GitHub!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Mailto Button */}
            <a
              href="mailto:deninthomas@outlook.com" 
              className="group relative inline-block px-8 py-4 bg-primary text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:bg-accent hover:scale-105 shadow-lg"
            >
              <span className="relative z-10">Send me an Email</span>
              <span className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </a>
            
            {/* GitHub Link */}
            <a
              href="https://github.com/deninthomas" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block px-8 py-4 bg-gray-800 dark:bg-gray-700 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:bg-secondary hover:scale-105 shadow-lg"
            >
              <span className="relative z-10">Visit my GitHub</span>
              <span className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Let's create something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;