import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UploadMaterials = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { id } = useParams();
  const sessionId = id;
  const tutorEmail = user?.email
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
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
        sessionId: data.sessionId,
        tutorEmail: user?.email,
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
    }
  };
  return (
    <div className="mx-4 lg:mx-0">
      <h3 className="text-center mb-5 text-2xl md:text-3xl font-semibold">
        Upload Materials
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
          <label className="form-control w-full my-2">
            <div className="label">
              <span className="label-text">SessionId</span>
            </div>
            <input
              type="text"
              placeholder="SessionId"
              defaultValue={sessionId}
              {...register("sessionId")}
              disabled
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full my-2">
            <div className="label">
              <span className="label-text">Tutor Email</span>
            </div>
            <input
              type="text"
              placeholder="SessionId"
              defaultValue={tutorEmail}
              {...register("tutorEmail")}
              disabled
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

export default UploadMaterials;
