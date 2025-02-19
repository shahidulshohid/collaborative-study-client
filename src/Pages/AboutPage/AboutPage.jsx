import { useEffect } from "react";
import university from "../../assets/university.jpg";
import whyChooseUs from "../../assets/whyChoose.png";
import Container from "../Shared/Container/Container";

const About = () => {
  useEffect(() => {
    window.document.title = "About page" || "StudySphere";
  }, []);
  return (
    <div className="pt-12">
      <Container>
        {/* Header Section */}
        <h2 className="text-center text-[#3939c8] text-2xl md:text-3xl font-semibold dark:text-white">
          About StudySphere
        </h2>
        <p className="text-center mb-8 dark:text-white max-w-xl mx-auto">
          StudySphere is an innovative learning platform that connects students
          with expert tutors, offering high-quality educational resources and
          interactive sessions.
        </p>

        <div className="lg:flex gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:w-1/2">
            {/* Our Mission */}
            <div className="bg-white rounded-lg shadow-lg p-6 w-full">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-blue-500">
                Our Mission
              </h2>
              <p className="text-gray-700">
                At StudySphere, our mission is to empower students with the
                right tools and guidance to excel academically. We aim to
                provide an accessible and engaging learning experience through
                high-quality study materials and personalized tutoring sessions.
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-white rounded-lg shadow-lg p-6 w-full">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-blue-500">
                Our Vision
              </h2>
              <p className="text-gray-700">
                We envision a world where education is not limited by
                geographical boundaries. StudySphere is dedicated to creating an
                inclusive platform that nurtures curiosity and fosters
                continuous learning.
              </p>
            </div>

            {/* Our Story */}
            <div className="bg-white rounded-lg shadow-lg p-6 w-full">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-blue-500">
                Our Story
              </h2>
              <p className="text-gray-700">
                StudySphere started with a simple idea – to make learning more
                accessible and enjoyable. From a small team of passionate
                educators and developers, we have grown into a comprehensive
                platform trusted by students and tutors worldwide.
              </p>
            </div>
            {/* Our Approach */}
            <div className="bg-white rounded-lg shadow-lg p-6 w-full">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-blue-500">
                Our Approach
              </h2>
              <p className="text-gray-700">
                Our approach combines interactive learning methods with
                personalized guidance. We leverage technology to create a
                dynamic educational experience that caters to different learning
                styles and paces.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 h-full">
            <img
              className="w-full h-full object-cover"
              src={university}
              alt=""
            />
          </div>
        </div>

        <div className=" mt-16">
          <h2 className="text-2x md:text-3xl mb-8 font-semibold text-blue-500 text-center dark:text-white">
            Why Choose StudySphere?
          </h2>
          <div className="lg:flex gap-5">
            <div className="w-full lg:w-1/2">
              <img className="w-full h-[500px]" src={whyChooseUs} alt="" />
            </div>
            {/* Why Choose StudySphere */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <div className="list-disc pl-5 space-y-2">
                <p>
                  Interactive and user-friendly learning platform with intuitive
                  navigation.
                </p>
                <p>
                  Wide range of courses tailored to different educational needs,
                  from academic subjects to professional skill development.
                </p>
                <p>
                  Expert tutors with verified credentials and extensive teaching
                  experience, ensuring high-quality education.
                </p>
                <p>
                  Secure payment system for booking courses with ease and
                  confidence.
                </p>
                <p>
                  Real-time communication and feedback for continuous
                  improvement, enabling personalized learning experiences.
                </p>
                <p>
                  Flexible learning schedules allowing students to learn at
                  their own pace and convenience.
                </p>
                <p>
                  Comprehensive progress tracking and performance analytics to
                  help students stay on top of their learning goals.
                </p>
                <p>
                  Access to exclusive learning resources, including e-books,
                  quizzes, and interactive activities.
                </p>
                <p>
                  Community-driven learning environment with discussion forums
                  and group study sessions.
                </p>
                <p>
                  24/7 support system ensuring that users receive timely
                  assistance and guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
