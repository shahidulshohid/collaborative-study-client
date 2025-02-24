import Swal from "sweetalert2";
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
      <h3 className="text-center text-2xl md:text-3xl font-semibold dark:text-white">
        Create Your Personal Notes
      </h3>
      <p className="max-w-2xl mx-auto text-center mb-5 dark:text-white">
        Create Your Personal Notes allows students to organize their thoughts,
        study materials, or reminders in one place. Easily save and manage your
        notes with a simple and intuitive interface tailored for effective
        learning
      </p>
      <div className="px-3 py-5 md:px-5 md:py-8 rounded-lg w-3/4 mx-auto dark:bg-white">
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
            <input
              type="text"
              name="title"
              placeholder="Title"
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
              Create Notes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNote;
