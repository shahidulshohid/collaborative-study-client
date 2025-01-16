import { useParams } from "react-router-dom";
import Container from "../../Shared/Container/Container";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { compareAsc, format } from "date-fns";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const ReadMorePage = () => {
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
  } = session;
  return (
    <div className="my-12">
      <Container>
        <div className="md:flex gap-10">
          <div>
            <img className="h-full" src={image} alt="" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
            <h4 className="text-xl font-semibold">Tutor Name: {tutorName}</h4>
            <p>
              Registration start date: {" "}
              {resStartDate && format(new Date(resStartDate), "P")}
            </p>
            <p>
              Registration end date:{" "}
              {resEndDate && format(new Date(resEndDate), "P")}
            </p>
            <p>
              Class start date:{" "}
              {claStartDate && format(new Date(claStartDate), "P")}
            </p>
            <p>
              Class end date: {claEndDate && format(new Date(claEndDate), "P")}
            </p>
            <p>Session Duration: {sessionDuration}</p>
            <p className="text-gray-500">{description}</p>
            <div className="flex items-center gap-1">
              <p className="text-lg">Registration</p>
              <p>
                <HiOutlineArrowNarrowRight className="w-8 mt-1" />
              </p>
              <p>
                {resEndDate &&compareAsc(
                  new Date(),
                  format(new Date(resEndDate), "P")
                ) === 1 ? (
                  <button disabled className="btn text-lg">Closed</button>
                ) : (
                  <button className="btn text-lg text-green-500">
                    Book now
                  </button>
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
