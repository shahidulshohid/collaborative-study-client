import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ViewAllMaterialsAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { data: allMaterials = [], refetch } = useQuery({
    queryKey: ["allMaterials"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allMaterialsAdmin");
      return res.data;
    },
  });
  console.log(allMaterials);
  const handleDeleteMaterials = async (id) => {
    console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/deleteMaterialsData/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Materials has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <h3 className="text-center text-2xl md:text-3xl font-semibold my-5 dark:text-white">
        View All Materials
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allMaterials?.map((material) => (
          <div key={material._id}>
            <div>
              <img
                className="h-[180px] w-full object-cover rounded-lg"
                src={material.image}
                alt=""
              />
            </div>
            <h3 className="text-sm font-semibold my-2 dark:text-white">{material.title}</h3>
            <div className="flex justify-between items-center">
              <a
                className="text-black font-semibold text-lg  underline dark:text-white"
                href={material.googleLink}
                target="_blank"
              >
                Google Drive Link
              </a>
              <button onClick={() => {handleDeleteMaterials(material._id)}} className="px-4 py-2 bg-red-400 font-semibold text-lg text-white rounded-lg mt-2">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllMaterialsAdmin;
