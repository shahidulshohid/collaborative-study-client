import { useParams } from "react-router-dom";
import Container from "../../Shared/Container/Container";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
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
    claEndDAte,
    sessionDuration,
  } = session;
  console.log(session);
  return (
    <div className="my-12">
      <Container>
        <div className="flex gap-5">
          <div>
            <img className="h-full" src={image} alt="" />
          </div>
          <div>
            <h3>{title}</h3>
            <h4>{tutorName}</h4>
            <p>{description}</p>
            <p>
              Registration start date:{" "}
              {resStartDate && format(new Date(resStartDate), "P")}
            </p>
            <p>
              Registration end date:{" "}
              {resEndDate && format(new Date(resEndDate), "P")}
            </p>
            <p>{description}</p>
            <p>
              Class start date:{" "}
              {claStartDate && format(new Date(claStartDate), "P")}
            </p>
            <p>
              Class end date: {claEndDAte && format(new Date(claEndDAte), "P")}
            </p>
            <p>Session Duration: {sessionDuration}</p>
            <div className="flex items-center gap-1">
              <p className="text-xl">Registration</p>
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
