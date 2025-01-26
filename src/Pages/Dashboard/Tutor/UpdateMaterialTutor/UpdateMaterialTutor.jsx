import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const image_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateMaterialTutor = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const {data:getMaterialForUpdate = {}} =useQuery({
    queryKey:['getMaterialForUpdate', id],
    queryFn: async() => {
        const res = await axiosSecure(`/getMaterialForUpdate/${id}`)
        return res.data
    }
  })
  console.log(getMaterialForUpdate)
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imabb and then get url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const materialsItem = {
        title: data.title,
        image: res.data.data.url,
        googleLink: data.googleLink,
      };
      // send data to database
      const materialsRes = await axiosSecure.post("materials", materialsItem);
      if (materialsRes.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Materials uploaded successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      console.log(materialsItem);
    }
    console.log(res.data);
  };
  return (
    <div className="mx-4 lg:mx-0">
      <h3 className="text-center mb-5 text-2xl md:text-3xl font-semibold">
        Update Materials
      </h3>
      <div className="bg-[#d0e293] md:w-3/4 mx-auto px-5 lg:px-8 py-6 rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Title</span>
            </div>
            <input
              type="text"
              placeholder="Title"
              {...register("title", { required: true })}
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Google Drive Link</span>
            </div>
            <input
              type="text"
              placeholder="Google Drive Link"
              {...register("googleLink", { required: true })}
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full my-4">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full"
            />
          </label>
          <button className="btn bg-blue-500 hover:bg-blue-500 text-lg font-semibold text-white">
            Submit Materials
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateMaterialTutor;
