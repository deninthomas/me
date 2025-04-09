import React from 'react';
import ReactIcon from '/src/images/react.png';
import Jsicon from '/src/images/JavaScript.png';
import TailwindIcon from '/src/images/Tailwind.png';
import NodeIcon from '/src/images/Nodejs.png';
import ExpressIcon from '/src/images/Express.png';
import MongodbIcon from '/src/images/Mongodb.png';
import GitIcon from '/src/images/Git.png';
import HTMLIcon from '/src/images/HTML.png';
import CSSIcon from '/src/images/CSS.png';
import AwsIcon from '/src/images/Amazon S3.png';
import APIIcon from '/src/images/API.png';
import NextIcon from '/src/images/Next.png';

const skills = [
  { name: 'React', image: ReactIcon },
  { name: 'JavaScript', image: Jsicon },
  { name: 'Tailwind', image: TailwindIcon },
  { name: 'Node.js', image: NodeIcon },
  { name: 'Express', image: ExpressIcon },
  { name: 'MongoDB', image: MongodbIcon },
  { name: 'Git', image: GitIcon },
  { name: 'HTML5', image: HTMLIcon},
  { name: 'CSS3', image: CSSIcon },
  { name: 'AWS S3', image: AwsIcon },
  { name: 'API', image: APIIcon },
  { name: 'NEXT', image: NextIcon },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100 animate-fade-in">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name+index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={skill.image} 
                alt={skill.name} 
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-100">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;