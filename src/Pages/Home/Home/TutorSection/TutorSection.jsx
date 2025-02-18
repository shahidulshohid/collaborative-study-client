import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Marquee from "react-fast-marquee";

const TutorSection = () => {
    const axiosPublic = useAxiosPublic()
    const {data:tutors = []} = useQuery({
        queryKey:['tutors'],
        queryFn: async() => {
            const res = await axiosPublic.get('/students/tutor')
            return res.data
        }
    })
    return (
        <div className="mb-16">
            <h3 className="text-center text-[#3939c8] text-2xl md:text-3xl font-semibold my-5 dark:text-white mb-8">All Tutors</h3>
            <Marquee>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    tutors?.map(tutor => (
                        <div key={tutor._id}>
                            <div className="flex border-2 items-center gap-3 rounded-full w-full p-2 dark:bg-white">
                                <img className="h-[80px] w-[80px] object-cover rounded-full" src={tutor.photo} alt="" />
                                <div>
                                    <h3 className="text-sm">Name: {tutor.name}</h3>
                                    <p className="text-sm">Email: {tutor.email}</p>
                                    <p className="uppercase text-sm">Role: {tutor.role}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            </Marquee>
        </div>
    );
};

export default TutorSection;