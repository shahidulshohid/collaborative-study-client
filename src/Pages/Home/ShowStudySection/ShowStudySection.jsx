import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { compareAsc, format } from "date-fns";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
const ShowStudySection = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: session = []
  } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const res = await axiosPublic.get("/studySessions");
      return res?.data;
    },
  });

  return (
    <div className="my-12">
        <h3 className="text-center text-2xl md:text-3xl font-semibold my-5">Show Study Session</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {session?.map((item) => (
        <div key={item._id}>
          <div>
            <img
              className="h-[250px] w-full object-cover"
              src={item.image}
              alt=""
            />
            <div className="p-3 border space-y-1">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-500">{item.description}</p>
              <div className="flex items-center gap-1">
                <p className="text-xl">Registration is</p>
                <p>
                  <HiOutlineArrowNarrowRight className="w-8 mt-1" />
                </p>
                <p>
                  {compareAsc(
                    new Date(),
                    format(new Date(item.resEndDate), "P")
                  ) === 1 ? (
                    <button className="btn text-lg text-red-500">Closed</button>
                  ) : (
                    <button className="btn text-lg text-green-500">Ongoing</button>
                  )}
                </p>
              </div>
              <Link to={`readMore/${item._id}`}><button className="px-5 py-1 bg-blue-500 text-white rounded-sm text-lg mt-3">Read More</button></Link>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ShowStudySection;
