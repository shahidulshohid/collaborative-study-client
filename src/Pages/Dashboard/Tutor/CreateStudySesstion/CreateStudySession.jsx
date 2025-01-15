import { useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateStudySession = () => {
  const { user } = useAuth();
  const [SessionStartDate, SetSessionStartDate] = useState(new Date());
  const [SessionEndDate, SetSessionEndDate] = useState(new Date());
  console.table({SessionStartDate, SessionEndDate})
  return (
    <div className="mx-4 lg:mx-0 p-3 lg:p-5">
      <h3 className="text-center mb-3 text-3xl">Create study session</h3>
      <form>
        {/* first */}
        <div className="lg:flex gap-3 mb-3">
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
              Session Description
            </label>
            <input
              name="description"
              type="text"
              placeholder="Session Description"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
        </div>
        {/* second */}
        <div className="lg:flex gap-3 mb-3">
          <div className="w-full">
            <label className="text-gray-700 " htmlFor="job_title">
              Tutor Name
            </label>
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Tutor Name"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div className="w-full">
            <label className="text-gray-700 " htmlFor="job_title">
              Tutor Email
            </label>
            <input
              name="email"
              type="text"
              defaultValue={user?.email}
              disabled
              placeholder="Tutor Email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-white-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
        </div>
        {/* third */}
        <div className="lg:flex gap-3 mb-3">
          <div className="w-full">
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Registration start date</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className="border p-2 rounded-md w-full"
                selected={SessionStartDate}
                onChange={(date) => SetSessionStartDate(date)}
              />
            </div>
          </div>
          <div className="w-full">
            <label className="text-gray-700 " htmlFor="job_title">
              Registration start date
            </label>
            <input
              name="email"
              type="text"
              defaultValue={user?.email}
              disabled
              placeholder="Tutor Email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-white-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateStudySession;
