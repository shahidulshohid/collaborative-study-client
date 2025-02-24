import { useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ViewAllStudyUpdate = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const { data: defaultSession = {} } = useQuery({
    queryKey: ["defaultSession", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/studySessions/${id}`);
      return res.data;
    },
  });
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
    const image = form.image.value;

    // session information
    const allUpdateData = {
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
      image,
    };
    // send session data to database
    axiosSecure
      .patch(`/updateAllStudySession/${id}`, allUpdateData)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Data update is successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="mx-4 lg:mx-0">
      <h3 className="text-center mb-5 text-2xl md:text-3xl font-semibold">
        Update study session
      </h3>
      <div className="bg-[#d0e293] px-5 lg:px-8 py-6">
        <form onSubmit={handleCreateSessionForm}>
          {/* first title and description */}
          <div className="lg:flex gap-3 mb-3">
            <div className="w-full">
              <label className="text-gray-700 " htmlFor="job_title">
                Title
              </label>
              <input
                defaultValue={defaultSession.title}
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
                defaultValue={defaultSession.description}
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
                defaultValue={defaultSession.tutorName}
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
                defaultValue={defaultSession.tutorEmail}
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
                  defaultValue={defaultSession.resStartDate}
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
                  defaultValue={defaultSession.resEndDate}
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
                  defaultValue={defaultSession.claStartDate}
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
                  defaultValue={defaultSession.claEndDate}
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
                defaultValue={defaultSession.sessionDuration}
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
                defaultValue={defaultSession.registrationFee}
                placeholder="Registration fee"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="w-full">
              <label className="text-gray-700 " htmlFor="job_title">
                Image
              </label>
              <input
                defaultValue={defaultSession.image}
                name="image"
                type="text"
                placeholder="Image"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="mt-6">
            <button className="disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-white text-xl transition-colors duration-300 bg-blue-500 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 w-full">
              Update Study Session
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ViewAllStudyUpdate;
