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
    </div>
  );
};

export default ManagePersonalNode;
