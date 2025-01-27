import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const TutorMaterials = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: allStudySession = [] } = useQuery({
    queryKey: ["allStudySession"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allStudySessionData", {
        params: { email: user?.email, status: "approved" },
      });
      return res.data;
    },
    // enabled: !!user?.email
  });
  return (
    <div>
      <h3 className="text-center text-2xl md:text-3xl font-semibold mb-4">
        Upload Materials
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {allStudySession?.map((item) => (
          <div key={item._id} className="space-y-2 w-full bg-pink-100 p-3">
            <div>
              <img
                className="w-full h-[200px] object-cover"
                src={item.image}
                alt=""
              />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold">{item.title}</h3>
            <h4 className="text-xl font-semibold">
              Tutor Name: {item.tutorName}
            </h4>
            <p>
              Registration start date:{" "}
              {item.resStartDate && format(new Date(item.resStartDate), "P")}
            </p>
            <p>
              Registration end date:{" "}
              {item.resEndDate && format(new Date(item.resEndDate), "P")}
            </p>
            <p>
              Class start date:{" "}
              {item.claStartDate && format(new Date(item.claStartDate), "P")}
            </p>
            <p>
              Class end date:{" "}
              {item.claEndDate && format(new Date(item.claEndDate), "P")}
            </p>
            <p>Session Duration: {item.sessionDuration} hours</p>
            <div className="flex justify-between items-center">
            <p>
              Registration Fee: $
              {item.registrationFee == 0 ? "Free" : item.registrationFee}
            </p>
            <button className="font-semibold text-lg bg-green-500 px-4 py-1 rounded-xl">
              {item.status}
            </button>
            </div>
              <Link to={`/dashboard/uploadMaterials/${item._id}`}>
                <button className="btn bg-green-600 hover:bg-green-800 font-semibold text-lg mt-2">
                  Upload Materials
                </button>
              </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorMaterials;
