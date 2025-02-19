import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { format } from "date-fns";
import { useState } from "react";

const ViewAllStudyMaterials = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [studySession, setStudySession] = useState("");
  //booked session
  const { data: bookedSession = [] } = useQuery({
    queryKey: ["bookedSession", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/bookedSessions/${user?.email}`);
      return res.data;
    },
  });

  //materials
  const { data: materialsData = [] } = useQuery({
    queryKey: ["materialsData"],
    queryFn: async () => {
      const res = await axiosPublic.get("/materialsAllData");
      return res.data;
    },
  });
  return (
    <div className="mb-16">
      <h3 className="text-center text-2xl md:text-3xl font-semibold mb-4 dark:text-white">
        Booked Sessions
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {bookedSession?.map((session) => (
          <div key={session._id} className="dark:bg-white rounded-lg p-5">
            <div className="rounded-b-lg">
              <img  
                className="h-[150px] w-full object-cover rounded-t-lg"
                src={session.image}
                alt=""
              />
            </div>
            <h2 className="text-lg font-semibold mt-3">
              {session.title}
            </h2>
            <p>
              Registration start date:{" "}
              {session.resStartDate &&
                format(new Date(session.resStartDate), "P")}
            </p>
            <p>
              Registration end date:{" "}
              {session.resEndDate && format(new Date(session.resEndDate), "P")}
            </p>
            <p>
              Class start date:{" "}
              {session.resStartDate &&
                format(new Date(session.resStartDate), "P")}
            </p>
            <p>
              Class end date:{" "}
              {session.resEndDate && format(new Date(session.resEndDate), "P")}
            </p>
            <p>
              Registration Fee: {session.registrationFee}
            </p>
            {/* <button
              className="bg-blue-500 px-4 py-1 font-semibold text-white rounded-lg mt-3"
              onClick={() => handleSessionId(session._id)}
            >
              View All
            </button> */}
          </div>
        ))}
        {
          bookedSession?.length === 0 && (
            <h2 className="text-2xl md:4xl dark:text-white my-12">DATA NOT FOUND</h2>
          )
        }
      </div>
      {/* materials card  */}
      <div className="mt-12">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-4 dark:text-white">
          Study Materials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materialsData.map((material) => (
            <div
              key={material._id}
              className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 dark:bg-white"
            >
              <img
                src={material.image}
                alt={material.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {material.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Tutor:</strong> {material.tutorEmail}
                </p>
                <a
                  href={material.googleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block bg-blue-500 text-white text-center px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                  Google Drive
                </a>
              </div>
            </div>
          ))}
          {
            materialsData?.length === 0 && (
              <h2 className="text-2xl md:4xl dark:text-white my-12">DATA NOT FOUND</h2>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default ViewAllStudyMaterials;
