
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";

const ViewBookSession = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { data: session = [] } = useQuery({
    queryKey: ["session", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/bookedSessions/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <div className=" mb-5">
        <h3 className="text-center text-2xl md:text-3xl font-semibold">
          View Your Booked Study Sessions
        </h3>
        <p className="max-w-2xl mx-auto text-center">
          View Your Booked Study Sessions" allows users to see all their
          scheduled study sessions in one place. It provides session details,
          including date, time, subject, and tutor, ensuring easy access and
          organization.
        </p>
      </div>
      <div className="overflow-x-auto bg-gray-200">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="font-semibold text-lg">Image</th>
              <th className="font-semibold text-lg">title</th>
              <th className="font-semibold text-lg">Payment</th>
              <th className="font-semibold text-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            {session?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.title}</td>
                <td>${item.registrationFee}</td>
                <th>
                  <Link to={`/dashboard/viewDetails/${item._id}`}>
                    <button className="flex items-center gap-1 px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600">
                    <TbListDetails  className="mt-1 text-lg"/>
                      View Details
                    </button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewBookSession;
