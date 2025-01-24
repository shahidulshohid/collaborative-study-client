const UploadMaterials = () => {
  return (
    <div className="mx-4 lg:mx-0">
      <h3 className="text-center mb-5 text-2xl md:text-3xl font-semibold">
        Upload Materials
      </h3>
      <div className="bg-[#d0e293] md:w-3/4 mx-auto px-5 lg:px-8 py-6 rounded-xl">
      <form>
          <div className="w-full">
            <label className="text-gray-700 " htmlFor="job_title">
              Title
            </label>
            <input
              name="title"
              type="text"
              placeholder="Title"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-white-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div className="w-full">
            <label className="text-gray-700 " htmlFor="job_title">
              SessionId
            </label>
            <input
              name="sessionId"
              type="text"
              placeholder="SessionId"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
      </form>
      </div>
    </div>
  );
};

export default UploadMaterials;
