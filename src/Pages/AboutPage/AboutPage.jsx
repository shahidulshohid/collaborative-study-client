import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-center mb-4">About StudySphere</h1>
        <p className="text-center text-lg text-gray-600 mb-8">
          StudySphere is a platform designed to bridge the gap between students and tutors, making learning more accessible and engaging.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          Our mission is to create an interactive learning environment where students can easily find quality educational resources and connect with experienced tutors.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Our Story</h2>
        <p className="text-gray-700 mb-6">
          StudySphere was born out of a passion for education and a vision to simplify the learning process. From humble beginnings, we’ve grown into a platform that supports students and tutors worldwide.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Why Choose StudySphere?</h2>
        <ul className="list-disc pl-5 mb-6 text-gray-700">
          <li>Interactive study materials and sessions.</li>
          <li>Easy course booking with a seamless payment system.</li>
          <li>Trusted tutors with verified credentials.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
        <p className="text-gray-700">
          Have questions or need help? Feel free to reach out to us at 
          <a href="mailto:info@studysphere.com" className="text-blue-600"> info@studysphere.com</a>
        </p>
      </div>
    </section>
  );
};

export default About;
