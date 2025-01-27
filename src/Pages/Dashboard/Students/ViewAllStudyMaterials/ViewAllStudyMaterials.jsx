import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { format } from "date-fns";
import { useState } from "react";

const ViewAllStudyMaterials = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [materials, setMaterials] = useState([])
  const { data: bookedSession = [] } = useQuery({
    queryKey: ["bookedSession", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/bookedSessions/${user?.email}`);
      return res.data;
    },
  });
  console.log(bookedSession);
  const handleSessionId = (id) => {
    console.log(id);
    // axiosPublic.get(`/allMaterials/:sessionId/${id}`)
    // .then(res => setMaterials(res.data))

  };
  console.log(materials)
  return (
    <div>
      <h3 className="text-center text-2xl md:text-3xl font-semibold mb-4">
        Booked Sessions
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {bookedSession?.map((session) => (
          <div key={session._id}>
            <div>
              <img className="h-[150px] w-full object-cover" src={session.image} alt="" />
            </div>
            <h2 className="text-lg font-semibold">{session.title}</h2>
            <p>
              Registration start date:{" "}
              {session.resStartDate && format(new Date(session.resStartDate), "P")}
            </p>
            <p>
              Registration end date:{" "}
              {session.resEndDate && format(new Date(session.resEndDate), "P")}
            </p>
            <button onClick={() => handleSessionId(session._id)}>View All</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllStudyMaterials;
