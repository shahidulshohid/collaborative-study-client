import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const UploadMaterials = () => {
  const { id } = useParams();
  const sessionId = id;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="mx-4 lg:mx-0">
      <h3 className="text-center mb-5 text-2xl md:text-3xl font-semibold">
        Upload Materials
      </h3>
      <div className="bg-[#d0e293] md:w-3/4 mx-auto px-5 lg:px-8 py-6 rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Title</span>
            </div>
            <input
              type="text"
              placeholder="Title"
              {...register("title")}
              className="input input-bordered w-full"
            />
          </label>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default UploadMaterials;
