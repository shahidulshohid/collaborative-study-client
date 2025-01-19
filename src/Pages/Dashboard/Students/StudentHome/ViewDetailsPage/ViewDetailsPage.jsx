import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import useAuth from "../../../../../Hooks/useAuth";
import Swal from "sweetalert2";

const ViewDetailsPage = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const { data: session = {} } = useQuery({
    queryKey: ["session", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/bookedSession/${id}`);
      return res.data;
    },
  });

  const {
    image,
    title,
    tutorName,
    description,
    resStartDate,
    resEndDate,
    claStartDate,
    claEndDate,
    sessionDuration,
    registrationFee,
    tutorEmail,
    studentEmail,
    studySessionId,
  } = session;

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const review = form.review.value
    const rating = form.rating.value
    const reviewData = {
      review, 
      rating,
      studentEmail: user?.displayName,
      studentEmail: user?.email,
      studySessionId,
    }
    axiosPublic.post('/reviews', reviewData)
    .then(res => {
      if(res.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Review and Rating added successfully",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }
  return (
    <div className="mb-12">
      <h3 className="text-center text-2xl md:text-3xl font-semibold my-5">
        View Details Your Booked Study Sessions
      </h3>
      <div>
        <img
          className="h-[300px] w-full mx-auto object-cover"
          src={image}
          alt=""
        />
        <div className="space-y-2 mt-5">
          <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
          <p className="text-gray-500">{description}</p>
          <div className="md:flex items-center gap-24">
            <h4 className="text-lg font-semibold">Tutor Name: {tutorName}</h4>
            <h4 className="text-lg font-semibold">Tutor Email: {tutorEmail}</h4>
          </div>
          <h4 className="text-lg font-semibold">
            Student Email: {studentEmail}
          </h4>
          <div className="flex items-center gap-20">
            <p className="font-semibold">
              Registration start date:{" "}
              {resStartDate && format(new Date(resStartDate), "P")}
            </p>
            <p className="font-semibold">
              Registration end date:{" "}
              {resEndDate && format(new Date(resEndDate), "P")}
            </p>
          </div>
          <div className="flex gap-32">
            <p className="font-semibold">
              Class start date:{" "}
              {claStartDate && format(new Date(claStartDate), "P")}
            </p>
            <p className="font-semibold">
              Class end date: {claEndDate && format(new Date(claEndDate), "P")}
            </p>
          </div>
          <div className="md:flex items-center gap-36">
            <p className="font-semibold">
              Session Duration: {sessionDuration} hours
            </p>
            <p className="font-semibold">
              Registration Fee: $
              {registrationFee == 0 ? "Free" : registrationFee}
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 mx-auto space-y-5">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mt-8">
              Please Provide Your
              <small className="text-primary text-xl md:text-2xl font-semibold">
                {" "}
                Review and Rating
              </small>
            </h3>
            <p>
              This session provided an engaging and insightful experience,
              offering a perfect platform to explore ideas and share
              perspectives. The well-organized structure and interactive
              discussions made it truly memorable.
            </p>
          </div>
          <div className="bg-[#d0e293] px-3 py-5 md:px-5 md:py-8 rounded-lg">
            <form onSubmit={handleSubmit}>
              <div>
                <label>Student Name</label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  disabled
                  placeholder="Student Name"
                  className="input w-full input-bordered mt-1"
                />
              </div>
              <div>
                <label>Student Email</label>
                <input
                  type="text"
                  defaultValue={user?.email}
                  disabled
                  placeholder="Student Name"
                  className="input w-full input-bordered mt-1"
                />
              </div>
              <div>
                <label>Your Review</label>
                <textarea
                  type="text"
                  name="review"
                  placeholder="Your Review"
                  className="input w-full input-bordered mt-1"
                />
              </div>
              <div>
                <label>Your Rating</label>
                <input
                  type="text"
                  name="rating"
                  placeholder="Your Rating"
                  className="input w-full input-bordered mt-1"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 px-4 py-2 rounded-lg text-white font-semibold mt-3 hover:bg-blue-600"
                >
                  Send Review & Rating
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsPage;
