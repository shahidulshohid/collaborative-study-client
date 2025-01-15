import { useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const CreateStudySession = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()
  const [registrationStartDate, setRegistrationStartDate] = useState(
    new Date()
  );
  const [registrationEndDate, setRegistrationEndDate] = useState(new Date());
  const [classStartDate, setClassStartDate] = useState(new Date());
  const [classEndDate, setClassEndDate] = useState(new Date());

  const handleCreateSessionForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const tutorName = user?.displayName;
    const tutorEmail = user?.email;
    const resStartDate = registrationStartDate;
    const resEndDate = registrationEndDate;
    const claStartDate = classStartDate;
    const claEndDate = classEndDate;
    const sessionDuration = form.duration.value;
    const registrationFee = 0;
    const status = "pending";

    // session information
    const sessionInfo = {
      title,
      description,
      tutorName,
      tutorEmail,
      resStartDate,
      resEndDate,
      claStartDate,
      claEndDate,
      sessionDuration,
      registrationFee,
      status,
    };
    // send session data to database 
    axiosSecure.post('/studySessions', sessionInfo)
    .then(res => {
        console.log(res.data)
    })
  };

  return (
    <div className="mx-4 lg:mx-0 p-3 lg:p-5">
      <h3 className="text-center mb-3 text-2xl md:text-3xl">
        Create study session
      </h3>
      <form onSubmit={handleCreateSessionForm}>
        {/* first title and description */}
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
        {/* second tutor name and email */}
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
        {/* third start and end date registration*/}
        <div className="lg:flex gap-3 mb-3">
          <div className="w-full">
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Registration start date</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className="border p-2 rounded-md w-full"
                selected={registrationStartDate}
                onChange={(date) => setRegistrationStartDate(date)}
              />
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Registration end date</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className="border p-2 rounded-md w-full"
                selected={registrationEndDate}
                onChange={(date) => setRegistrationEndDate(date)}
              />
            </div>
          </div>
        </div>
        {/* fourth start and end date class*/}
        <div className="lg:flex gap-3 mb-3">
          <div className="w-full">
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Class start date</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className="border p-2 rounded-md w-full"
                selected={classStartDate}
                onChange={(date) => setClassStartDate(date)}
              />
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Class end date</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className="border p-2 rounded-md w-full"
                selected={classEndDate}
                onChange={(date) => setClassEndDate(date)}
              />
            </div>
          </div>
        </div>
        {/* five */}
        <div className="lg:flex gap-3 mb-3">
          <div className="w-full">
            <label className="text-gray-700 " htmlFor="job_title">
              Session duration
            </label>
            <input
              name="duration"
              type="number"
              placeholder="Session duration"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-white-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div className="w-full">
            <label className="text-gray-700 " htmlFor="job_title">
              Registration fee
            </label>
            <input
              name="sessionFee"
              type="number"
              defaultValue={0}
              disabled
              placeholder="Registration fee"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button className="disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-white text-xl transition-colors duration-300 bg-blue-500 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 w-full">
            Create Study Session
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateStudySession;
