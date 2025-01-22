import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const ViewAllStudyTutor = () => {
  const axiosSecure = useAxiosSecure()
  const {data: session = []} = useQuery({
    queryKey:['session'],
    queryFn: async() =>{
      const res = await axiosSecure.get('/studySessionsAll')
      return res.data
    }
  })
  console.log(session)
  return (
    <div>
      <h3 className="text-center text-2xl md:text-3xl font-semibold mb-5">
        View All Study Session
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {
          session?.map(item => (
            <div>
              <div>
                <img className="h-[200px] w-full object-cover" src={item.image} alt="" />
                <div>
                  <h3 className="text-lg font-bold mt-3 mb-2">{item.title}</h3>
                  <h3 className="font-semibold">{item.description}</h3>
                  {
                    item.status === 'rejected' && (
                      <button className="btn bg-blue-500 font-semibold">New Approval Request</button>
                    )
                  }
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ViewAllStudyTutor;
