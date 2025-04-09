import React from 'react';
import IntroSection from '../components/IntroSection';
import SkillsSection from '../components/SkillSection';
import ProjectsSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';
import Header from '../components/Header';
import '../styles/global.css';

const IndexPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <Header />
      <IntroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>My Portfolio</title>;