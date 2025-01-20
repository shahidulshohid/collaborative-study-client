import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAdmin from "../../../../Hooks/useAdmin";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";

const ViewBookSession = () => {
    const {user} = useAuth()
    const {role} = useAdmin()
    const axiosPublic = useAxiosPublic()
    const {data:session = []} = useQuery({
        queryKey:['session', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/bookedSessions/${user?.email}`)
            console.log(res.data)
            return res.data
        }
    })

    return (
        <div>
            <div className=" mb-5">
            <h3 className="text-center text-2xl md:text-3xl font-semibold">View Your Booked Study Sessions</h3>
            <p className="max-w-2xl mx-auto text-center">
            View Your Booked Study Sessions" allows users to see all their scheduled study sessions in one place. It provides session details, including date, time, subject, and tutor, ensuring easy access and organization.
            </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    session?.map((item => (
                        <div key={item._id}>
                            <img className="h-[200px] w-full object-cover" src={item.image} alt="" />
                            <div>
                                <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                                <p className="mb-2">{item.description.substring(0,50)}...</p>
                                <Link to={`/dashboard/viewDetails/${item._id}`}><button className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600">View Details
                                <IoIosArrowRoundForward className="mt-1 text-lg" /></button></Link>
                            </div>
                        </div>
                    )))
                }
            </div>
        </div>
    );
};

export default ViewBookSession;