import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";

const UploadMaterials = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: sessionId = [] } = useQuery({
    queryKey: ["sessionId"],
    queryFn: async () => {
      const res = await axiosSecure.get("/studySessionsAll");
      return res.data;
    },
  });
  // console.log(sessionId)

  return (
    <div className="mx-4 lg:mx-0">
      <h3 className="text-center mb-5 text-2xl md:text-3xl font-semibold">
        All Approved Session
      </h3>
      {/* <div className="md:flex gap-2">
        {
          sessionId?.map(item => (
            <div key={item._id}>
              {
                item.status === "approved" && (
                  <div>
                    <img src={item?.image} alt="" />
                  </div>
                )
              }
            </div>
          ))
        }
      </div> */}
    </div>
  );
};

export default UploadMaterials;
