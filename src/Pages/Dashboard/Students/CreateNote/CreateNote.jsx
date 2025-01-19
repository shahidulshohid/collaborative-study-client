import useAuth from "../../../../Hooks/useAuth";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const CreateNote = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const handleNoteSubmit = (e) => {
    e.preventDefault();
    const studentEmail = user?.email;
    const title = e.target.title.value;
    const description = e.target.description.value;
    const noteData = { studentEmail, title, description };

    axiosPublic.post("/notes", noteData).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Note Created Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div>
      <h3 className="text-center text-2xl md:text-3xl font-semibold my-5">
        Create Your Note
      </h3>
      <div className="bg-[#d0e293] px-3 py-5 md:px-5 md:py-8 rounded-lg w-3/4 mx-auto">
        <form onSubmit={handleNoteSubmit}>
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
            <textarea
              type="text"
              name="title"
              placeholder="title"
              className="input w-full input-bordered mt-1"
            />
          </div>
          <div>
            <label>Note Description</label>
            <textarea
              type="text"
              name="description"
              placeholder="Description"
              className="input w-full input-bordered mt-1"
            />
          </div>
          <div className="text-center mt-3">
            <button className="px-3 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600">
              Create Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNote;
