import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ViewAllStudyTutor = () => {
  const axiosSecure = useAxiosSecure();
  const { data: session = [], refetch } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const res = await axiosSecure.get("/studySessionsAll");
      return res.data;
    },
  });

  const handleApproval = (id) => {
    const reRequest = {status: "pending"}
    axiosSecure.patch(`/studySessionsApproval/${id}`, reRequest)
    .then(res => {
      if(res.data.modifiedCount > 0){
        refetch()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Re-request is successfully",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }
  return (
    <div>
      <h3 className="text-center text-2xl md:text-3xl font-semibold mb-5">
        View All Study Session
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {session?.map((item) => (
          <div key={item._id} className="border p-3 rounded-xl">
            {/* {(item?.status === "approved" || item?.status === "rejected") && ( */}
              <div>
                <img
                  className="h-[200px] w-full object-cover rounded-xl"
                  src={item.image}
                  alt=""
                />
                <div>
                  <h3 className="text-lg font-semibold mt-3 mb-2">
                    {item.title}
                  </h3>
                  <button
                    className={`px-4 pb-1 font-semibold rounded-xl text-green-800 ${
                      item.status === "rejected" ? "bg-red-300" : "bg-green-300"
                    }`}
                  >
                    {item.status}
                  </button>
                  <h3>{item.description.substring(0, 100)}...</h3>
                  {item.status === "rejected" && (
                    <button onClick={() => handleApproval(item._id)} className="btn bg-blue-500 hover:bg-blue-500 text-white font-semibold">
                      New Approval Request
                    </button>
                  )}
                </div>
              </div>
            {/* //  )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllStudyTutor;
