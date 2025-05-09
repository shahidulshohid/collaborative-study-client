import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import ViewAllStudyModal from "../ViewAllStudyModal/ViewAllStudyModal";
import { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import RejectedModal from "../RejectedModal/RejectedModal";

const ViewAllStudy = () => {
  const [item, setItem] = useState([]);
  const [id, setId] = useState();
  const axiosSecure = useAxiosSecure();
  const [sort, setSort] = useState("acc");
  const { data: session = [], refetch } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const res = await axiosSecure.get("/studySessionsAllFilter");
      return res?.data;
    },
  });
  const [sortData, setSortData] = useState(session)

  // handle reject button
  const handleRejecting = (id) => {
    const rejectedData = {
      status: "rejected",
    };
    //rejected modal
    // document.getElementById("my_modal_2").showModal(),
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, reject and remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/studySession/rejected/${id}`, rejectedData)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              console.log(res.data);
              refetch();
              document.getElementById("my_modal_2").showModal(),
                Swal.fire({
                  title: "Rejected!",
                  text: "Status rejected and removed is successfully.",
                  icon: "success",
                });
            }
          });
      }
    });
  };

  const handleDelete = (id) => {
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
              text: "Study session has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleSort = () => {
    const sessionData = [...session].sort((a, b) =>
      sort === "asc" ? a.registrationFee - b.registrationFee : b.registrationFee - a.registrationFee
  );
  setSortData(sessionData);
    setSort(sort === "asc" ? "desc" : "asc");
  };
  return (
    <div>
      <div className="md:flex justify-between items-center text-center my-5">
        <h3 className="text-2xl md:text-3xl font-semibold dark:text-white mb-2 md:mb-0">
          View All Study Session
        </h3>
        <button className="btn text-lg text-white bg-[#3939c8] hover:bg-[#3939c8]" onClick={handleSort}>Sorted by ({sort === "asc" ? "Descending " : "Ascending"})</button>
      </div>
      <div className="overflow-x-auto bg-gray-100">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-lg font-semibold">Title</th>
              <th className="text-lg font-semibold">Registration Fee</th>
              <th className="text-lg font-semibold hidden md:block">
                Tutor Name
              </th>
              <th className="text-lg font-semibold">Status</th>
              <th className="text-lg font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {sortData?.map((item) => (
              <tr key={item._id}>
                <th></th>
                <td className="font-semibold">{item.title}</td>
                <td className="font-semibold">{item.registrationFee}</td>
                <td className="font-semibold hidden md:block">
                  {item.tutorName}
                </td>
                <td className="font-semibold">{item.status}</td>
                <td>
                  {item?.status === "pending" && (
                    <div className="flex items-center gap-3 md:gap-5">
                      <button
                        onClick={() => {
                          document.getElementById("my_modal_1").showModal(),
                            setItem(item);
                        }}
                        className="py-1 px-2 bg-blue-500 text-white font-semibold rounded-lg"
                      >
                        Approved
                      </button>
                      <button
                        onClick={() => {
                          handleRejecting(item._id);
                          setId(item._id);
                        }}
                        className="py-1 px-3 bg-red-400 text-white font-semibold rounded-lg"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                  {item.status === "approved" && (
                    <div className="flex items-center gap-3 md:gap-5">
                      <Link to={`/dashboard/updateViewAllStudy/${item._id}`}>
                        <button className="py-1 px-4 bg-green-800 text-white font-semibold rounded-lg">
                          Update
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="py-1 px-3 bg-red-400 text-white font-semibold rounded-lg"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ViewAllStudyModal item={item} refetch={refetch}></ViewAllStudyModal>
      <RejectedModal id={id}></RejectedModal>
    </div>
  );
};

export default ViewAllStudy;
