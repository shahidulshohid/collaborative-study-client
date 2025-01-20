import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const ManagePersonalNode = () => {
    const axiosPublic = useAxiosPublic()
    const {user} = useAuth()
    const {data: notes = [], refetch} = useQuery({
        queryKey:['notes', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allNotes/${user?.email}`)
            return res.data
        }
    })
    console.log(notes)
  return (
    <div>
      <h3 className="text-center text-2xl md:text-3xl font-semibold">
        Manage Your Personal Notes
      </h3>
      <p className="max-w-2xl mx-auto text-center mb-5">
        Create Your Personal Notes allows students to organize their thoughts,
        study materials, or reminders in one place. Easily save and manage your
        notes with a simple and intuitive interface tailored for effective
        learning
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            notes?.map(note => (
                <div key={note._id} className="text-center bg-base-200 py-5 px-5">
                    <h3 className="text-lg font-semibold">Student Account</h3>
                    <h4 className="font-semibold">{note.studentEmail}</h4>
                    <p>{note.description}</p>
                    <div className="flex justify-center items-center gap-5 mt-2">
                        <button className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold">Update</button>
                        <button className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold">Delete</button>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default ManagePersonalNode;
