import React from 'react';

const IntroSection = () => {
  return (
    <section className="section bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto text-center animate-slide-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Denin Thomas Francis</h1>
        <p className="text-xl md:text-2xl mb-6 text-gray-100">Full Stack Developer</p>
        <p className="max-w-2xl mx-auto text-gray-200">Passionate about creating innovative web solutions</p>
      </div>
    </section>
  );
};

export default IntroSection;