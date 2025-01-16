import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import {useQuery} from '@tanstack/react-query'
import ViewAllStudyModal from "../ViewAllStudyModal/ViewAllStudyModal";

const ViewAllStudy = () => {
    const axiosSecure = useAxiosSecure();
    const {data: session = [], refetch} = useQuery({
        queryKey: ['session'],
        queryFn: async () => {
            const res = await axiosSecure.get('/studySessionsAll')
            return res?.data
        }
    })
    console.log(session)
  return (
    <div>
      <h3 className="text-center text-2xl md:text-3xl font-semibold my-5">
        View All Study Session
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Tutor Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              session?.map(item =>(
                <tr key={item._id}>
                  <th></th>
                  <td>{item.title}</td>
                  <td>{item.tutorName}</td>
                  <td>{item.status}</td>
                  <td className="flex items-center gap-3 md:gap-5">
                    <button onClick={()=>document.getElementById('my_modal_1').showModal()} className="py-1 px-2 bg-blue-500 text-white">Approve</button>
                    <button className="py-1 px-3 bg-blue-500 text-white">Reject</button>
                  </td>
                </tr>
              ) )
            }
          </tbody>
        </table>
      </div>
      <ViewAllStudyModal></ViewAllStudyModal>
    </div>
  );
};

export default ViewAllStudy;
