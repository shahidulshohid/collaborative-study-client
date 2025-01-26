import { Link } from "react-router-dom";
import useAuth from "../../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ViewAllMaterialsTutor = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: viewMaterials = [] } = useQuery({
    queryKey: ["viewMaterials", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/viewMaterialsTutor/${user?.email}`);
      return res.data;
    },
  });
  console.log(viewMaterials);
  return (
    <div>
      <h3 className="text-center mb-5 text-2xl md:text-3xl font-semibold">
        View All Materials
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            viewMaterials?.map(material => (
                <div key={material._id}>
                    <div>
                        <img className="w-full h-[200px] object-cover" src={material.image} alt="" />
                    </div>
                    <h3 className="text-sm font-semibold mt-3">Study Session Material Id: {material.sessionId}
                    </h3>
                    <a className="text-lg font-semibold underline" href={material.googleLink} target="_blank">MaterialLink</a>
                    <p className="text-green-500 font-semibold">{material.tutorEmail}</p>
                    <div className="flex items-center justify-between mt-3">
                        <Link to={`/dashboard/updateMaterial/${material._id}`} className="px-4 py-2 rounded-lg font-semibold bg-blue-500 text-white">Update</Link>
                        <button className="px-4 py-2 rounded-lg font-semibold bg-blue-500 text-white">Delete</button>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default ViewAllMaterialsTutor;
