import { useEffect, useState } from "react";
import LoadingSection from "../Shared/LoadingSection/LoadingSection";

const MeetOurTeam = () => {
  const [meetData, setMeetData] = useState([]);
  useEffect(() => {
    window.document.title = "Meet Our Team page" || "StudySphere";
  }, []);
  useEffect(() => {
    fetch("/meetTeam.json")
      .then((res) => res.json())
      .then((data) => setMeetData(data));
  }, []);
  return (
    <div className="container mx-auto px-4 pt-12">
      <h2 className="text-center text-[#3939c8] text-2xl md:text-3xl font-semibold dark:text-white mb-8">
        Meet Our Faculty Members
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {meetData.map((member) => (
          <div
            key={member.id}
            className="bg-white shadow-lg rounded-lg p-6 text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600 font-medium">{member.role}</p>
            <p className="text-sm text-gray-500 mt-2">{member.bio}</p>
            <p className="text-sm text-gray-500 mt-1">
              Location: {member.location}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Education: {member.education}
            </p>
            <div className="mt-3">
              <h4 className="text-sm font-semibold">Subjects Taught:</h4>
              <ul className="text-sm text-gray-500">
                {member.subjects.map((subject, index) => (
                  <li key={index}>• {subject}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        ))}
        {meetData.length === 0 && <LoadingSection></LoadingSection>}
      </div>
    </div>
  );
};

export default MeetOurTeam;
