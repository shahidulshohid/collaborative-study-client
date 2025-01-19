import { Link, useNavigate, useParams } from "react-router-dom";
import Container from "../../Shared/Container/Container";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { compareAsc, format } from "date-fns";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import useAdmin from "../../../Hooks/useAdmin";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const ReadMorePage = () => {
  const navigate = useNavigate()
  const { user } = useAuth();
  const [role] = useAdmin();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { data: session = {} } = useQuery({
    queryKey: ["session", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/studySessions/${id}`);
      return res?.data;
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
    _id,
    tutorEmail,
  } = session;

  // for session booked
  const handleSessionBooked = (id) => {
    const freeBookedSession = {
      studentEmail: user?.email,
      studySessionId: _id,
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
    };
    axiosSecure.post("/bookedSession", freeBookedSession).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Payment Successful",
          text: "Your payment has been processed successfully!",
        });
        navigate('/dashboard/viewBookSession')
      }
    });
  };
  return (
    <div className="mt-12">
      <Container>
        <div className="md:flex gap-10">
          <div className="mb-5 md:mb-0">
            <img className="h-full w-full object-cover" src={image} alt="" />
          </div>
          <div className="space-y-2 w-full">
            <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
            <h4 className="text-xl font-semibold">Tutor Name: {tutorName}</h4>
            <div className="flex items-center gap-12">
              <p>
                Registration start date:{" "}
                {resStartDate && format(new Date(resStartDate), "P")}
              </p>
              <p>
                Registration end date:{" "}
                {resEndDate && format(new Date(resEndDate), "P")}
              </p>
            </div>
            <div className="flex gap-24">
              <p>
                Class start date:{" "}
                {claStartDate && format(new Date(claStartDate), "P")}
              </p>
              <p>
                Class end date:{" "}
                {claEndDate && format(new Date(claEndDate), "P")}
              </p>
            </div>
            <p>Session Duration: {sessionDuration}</p>
            <p>
              Registration Fee:{" "}
              {registrationFee == 0 ? "Free" : registrationFee}
            </p>
            <p className="text-gray-500">{description}</p>
            <div className="flex items-center gap-1">
              <p className="text-lg">Registration</p>
              <p>
                <HiOutlineArrowNarrowRight className="w-8 mt-1" />
              </p>
              <p>
                {resEndDate &&
                compareAsc(new Date(), format(new Date(resEndDate), "P")) ===
                  1 ? (
                  <button disabled className="btn text-lg">
                    Closed
                  </button>
                ) : role === "admin" || role === "tutor" ? (
                  <button disabled className="btn text-lg">
                    Book Now
                  </button>
                ) : registrationFee === 0 ? (
                  <button
                    onClick={handleSessionBooked}
                    className="btn text-lg text-green-500"
                  >
                    Book Now
                  </button>
                ) : (
                  <Link to={`/paymentPage/${_id}`}>
                    <button className="btn text-lg text-green-500">
                      Book Now
                    </button>
                  </Link>
                )}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ReadMorePage;
