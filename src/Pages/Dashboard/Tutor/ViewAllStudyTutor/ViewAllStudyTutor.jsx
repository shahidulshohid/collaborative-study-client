import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { format } from "date-fns";
import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/useAuth";

const ViewAllStudyTutor = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: session = [], refetch } = useQuery({
    queryKey: ["session", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/studySessionsAll/${user?.email}`);
      return res.data;
    },
  });

  const handleApproval = (id) => {
    const reRequest = { status: "pending" };
    axiosSecure.patch(`/studySessionsApproval/${id}`, reRequest).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Re-request is successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div>
      <h3 className="text-center text-2xl md:text-3xl font-semibold mb-5">
        View All Study Session
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {session?.map((item) => (
          <div key={item._id} className="border p-3 rounded-xl bg-pink-100">
            <div>
              <img
                className="h-[200px] w-full object-cover rounded-xl"
                src={item.image}
                alt=""
              />
              <div className="space-y-2">
                <h3 className="text-lg font-semibold mt-3 mb-2">
                  {item.title}
                </h3>

                <h4 className="text-xl font-semibold">
                  Tutor Name: {item.tutorName}
                </h4>
                <p>
                  Registration start date:{" "}
                  {item.resStartDate &&
                    format(new Date(item.resStartDate), "P")}
                </p>
                <p>
                  Registration end date:{" "}
                  {item.resEndDate && format(new Date(item.resEndDate), "P")}
                </p>
                <p>
                  Class start date:{" "}
                  {item.claStartDate &&
                    format(new Date(item.claStartDate), "P")}
                </p>
                <p>
                  Class end date:{" "}
                  {item.claEndDate && format(new Date(item.claEndDate), "P")}
                </p>
                <p>
                  Registration Fee: $
                  {item.registrationFee == 0 ? "Free" : item.registrationFee}
                </p>
                <p>Session Duration: {item.sessionDuration} hours</p>
                <button
                  className={`px-4 pb-1 font-semibold rounded-xl text-green-800 ${
                    item.status === "rejected" ? "bg-red-300" : "bg-green-300"
                  }`}
                >
                  {item.status}
                </button>
                <h3>{item.description.substring(0, 100)}...</h3>
                {item.status === "rejected" && (
                  <button
                    onClick={() => handleApproval(item._id)}
                    className="btn bg-blue-500 hover:bg-blue-500 text-white font-semibold mt-2"
                  >
                    New Approval Request
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllStudyTutor;
