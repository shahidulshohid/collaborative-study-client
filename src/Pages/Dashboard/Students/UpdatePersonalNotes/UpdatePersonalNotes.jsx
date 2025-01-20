import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePersonalNotes = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { data: updateData = {} } = useQuery({
    queryKey: ["updateData", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/updateNotes/${id}`);
      return res.data;
    },
  });
  const handleUpdateNoteSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    console.log(title, description);
    const newData = {
      email: user?.email,
      title,
      description,
    };
    axiosPublic.patch(`/updateStudentNote/${id}`, newData).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Personal notes update is successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div>
      <h3 className="text-center text-2xl md:text-3xl font-semibold">
        Update Your Personal Notes
      </h3>
      <p className="max-w-2xl mx-auto text-center mb-5">
        Update Your Personal Notes allows students to organize their thoughts,
        study materials, or reminders in one place. Easily save and manage your
        notes with a simple and intuitive interface tailored for effective
        learning
      </p>
      <div className="bg-[#d0e293] px-3 py-5 md:px-5 md:py-8 rounded-lg w-3/4 mx-auto">
        <form onSubmit={handleUpdateNoteSubmit}>
          <div>
            <label>Student Email</label>
            <input
              type="text"
              defaultValue={user?.email}
              disabled
              placeholder="Student Name"
              className="input w-full input-bordered mt-1"
            />
          </div>
          <div>
            <label>Note Title</label>
            <input
              type="text"
              name="title"
              defaultValue={updateData.title}
              placeholder="Title"
              className="input w-full input-bordered mt-1"
            />
          </div>
          <div>
            <label>Note Description</label>
            <textarea
              type="text"
              defaultValue={updateData.description}
              name="description"
              placeholder="Description"
              className="input w-full input-bordered mt-1"
            />
          </div>
          <div className="text-center mt-3">
            <button className="px-3 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600">
              Update Personal Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePersonalNotes;
