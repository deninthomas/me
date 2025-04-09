import React from 'react';

const projects = [
  { title: 'E commerce API ', description: 'Developed a scalable and secure e-commerce RESTful API using Node.js and Express. Features include user authentication (JWT), product and cart management, order processing, and role-based access control. Integrated MongoDB for database operations and followed MVC architecture for clean code structure.', link: 'https://github.com/deninthomas/flutterapi' },
  { title: 'Food Delivery App (Next.js, TypeScript, Redux, Tailwind CSS)', description: 'A modern frontend-only food delivery application built with Next.js and TypeScript. Features include user authentication using MockAPI, multilingual support with i18n, and Redux for managing the shopping cart state. The UI is fully responsive and styled with Tailwind CSS for a clean, intuitive experience.', link: 'https://github.com/deninthomas/food_app-' },
  { title: 'Blog App (Node.js, Express.js, EJS, REST API)', description: 'A full-stack blog application built using Node.js and Express.js, featuring a RESTful API for handling CRUD operations. The frontend is rendered using EJS templates with dynamic content. Includes user authentication, session management, and admin functionalities to manage posts, users, comments, and likes.', link: 'https://github.com/deninthomas/blogapp_updated' },
  { title: 'Hotel Booking App (HTML, CSS, Vanilla JavaScript)', description: 'A fully functional hotel booking platform built with pure HTML, CSS, and Vanilla JavaScript. Utilizes native JavaScript features to interact with a RESTful API for hotel listings, bookings, and user data. Includes dynamic UI updates, form validations, and smooth user experience without any frameworks.', link: 'https://github.com/deninthomas/hotel-booking' },
  { title: 'Booking App Frontend (React, Redux, Chakra UI, i18n)', description: 'A fully responsive booking application frontend built with React and Chakra UI. It includes user authentication (login/signup), booking functionality, and state management via Redux. Axios interceptors handle secure API calls, while i18n provides seamless localization support. The app delivers a clean UI and smooth user experience across devices.', link: 'https://github.com/deninthomas/booking_final_frontend' },
  { title: 'Booking App Backend (Node.js, Express.js, MongoDB, JWT)', description: 'A secure and scalable backend for a booking application, built with Node.js and Express.js. Features include user authentication using JWT, role-based access control, and RESTful APIs for managing users, bookings, and other resources. Data is stored and managed with MongoDB, with middleware to handle validation, error handling, and protected routes.', link: 'https://github.com/deninthomas/booking_final_backend' },
];


const ProjectsSection = () => {
  return (
    <section id="project" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white animate-fade-in">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <a href={project.link} className="text-primary hover:text-accent transition-colors">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;