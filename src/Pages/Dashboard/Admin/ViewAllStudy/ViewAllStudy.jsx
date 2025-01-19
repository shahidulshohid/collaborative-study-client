import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import ViewAllStudyModal from "../ViewAllStudyModal/ViewAllStudyModal";
import { useState } from "react";
import Swal from "sweetalert2";

const ViewAllStudy = () => {
  const [item, setItem] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { data: session = [], refetch } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const res = await axiosSecure.get("/studySessionsAll");
      return res?.data;
    },
  });
  const handleRejecting = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/studySessionsAll/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Pending has been removed.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <h3 className="text-center text-2xl md:text-3xl font-semibold my-5">
        View All Study Session
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Registration Fee</th>
              <th>Tutor Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {session?.map((item) => (
              <tr key={item._id}>
                <th></th>
                <td>{item.title}</td>
                <td>{item.registrationFee}</td>
                <td>{item.tutorName}</td>
                <td>{item.status}</td>
                <td className="flex items-center gap-3 md:gap-5">
                  <button
                    onClick={() => {
                      document.getElementById("my_modal_1").showModal(),
                        setItem(item);
                    }}
                    className="py-1 px-2 bg-blue-500 text-white"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleRejecting(item._id)}
                    className="py-1 px-3 bg-red-400 text-white"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ViewAllStudyModal item={item} refetch={refetch}></ViewAllStudyModal>
    </div>
  );
};

export default ViewAllStudy;
