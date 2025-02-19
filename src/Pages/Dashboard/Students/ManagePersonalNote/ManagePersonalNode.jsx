import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManagePersonalNode = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { data: notes = [], refetch } = useQuery({
    queryKey: ["notes", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/allNotes/${user?.email}`);
      return res.data;
    },
  });

  const handleDeleteNote = (id) => {
    axiosPublic.delete(`/notes/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Personal notes delete is successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div>
      <h3 className="text-center text-2xl md:text-3xl font-semibold dark:text-white">
        Manage Your Personal Notes
      </h3>
      <p className="max-w-2xl mx-auto text-center mb-5 dark:text-white">
        Create Your Personal Notes allows students to organize their thoughts,
        study materials, or reminders in one place. Easily save and manage your
        notes with a simple and intuitive interface tailored for effective
        learning
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {notes?.map((note) => (
          <div key={note._id} className="text-center bg-base-200 py-5 px-5">
            <h3 className="text-lg font-semibold">Student Account</h3>
            <h4 className="font-semibold">{note.studentEmail}</h4>
            <h4 className="font-semibold">{note.title}</h4>
            <p>{note.description}</p>
            <div className="flex justify-center items-center gap-5 mt-2">
              <Link to={`/dashboard/updatePersonalNotes/${note._id}`}>
                <button className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold">
                  Update
                </button>
              </Link>
              <button
                onClick={() => handleDeleteNote(note._id)}
                className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        {
          notes?.length === 0 && (
            <h2 className="text-2xl md:4xl dark:text-white my-12">DATA NOT FOUND</h2>
          )
        }
      </div>
    </div>
  );
};

export default ManagePersonalNode;
