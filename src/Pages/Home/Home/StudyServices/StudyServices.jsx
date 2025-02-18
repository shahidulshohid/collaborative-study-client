// src/components/StudyServices.jsx

import React from "react";
import { FaChalkboardTeacher, FaUserFriends, FaBook, FaQuestionCircle, FaFileAlt, FaGraduationCap, FaLanguage, FaLightbulb } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Personalized Tutoring",
    icon: <FaChalkboardTeacher size={40} className="text-blue-500" />,
    description: "One-on-one tutoring tailored to your learning pace and needs."
  },
  {
    id: 2,
    title: "Group Study Sessions",
    icon: <FaUserFriends size={40} className="text-green-500" />,
    description: "Collaborate with peers in virtual study rooms."
  },
  {
    id: 3,
    title: "Study Materials & Resources",
    icon: <FaBook size={40} className="text-purple-500" />,
    description: "Access notes, e-books, and reference guides."
  },
  {
    id: 4,
    title: "Doubt-Solving Sessions",
    icon: <FaQuestionCircle size={40} className="text-red-500" />,
    description: "Get your doubts solved by experts and peers."
  },
  {
    id: 5,
    title: "Mock Tests & Quizzes",
    icon: <FaFileAlt size={40} className="text-yellow-500" />,
    description: "Evaluate your understanding with mock tests."
  },
  {
    id: 6,
    title: "Mentorship & Career Guidance",
    icon: <FaGraduationCap size={40} className="text-indigo-500" />,
    description: "Get career advice from experienced mentors."
  },
  {
    id: 7,
    title: "Language Learning Assistance",
    icon: <FaLanguage size={40} className="text-pink-500" />,
    description: "Enhance communication skills with language courses."
  },
  {
    id: 8,
    title: "Study Tips & Motivation",
    icon: <FaLightbulb size={40} className="text-orange-500" />,
    description: "Boost productivity with tips and motivational content."
  }
];

const StudyServices = () => {
  return (
    <div className="my-12 px-4 md:px-12">
      <h2 className="text-center text-[#3939c8] text-2xl md:text-3xl font-semibold dark:text-white mb-8">Our Study Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-md p-6 text-center hover:scale-105 transition-transform"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyServices;
