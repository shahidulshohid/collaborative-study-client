import {useQuery} from '@tanstack/react-query'
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
const ShowStudySection = () => {
    const axiosPublic = useAxiosPublic()
    const {data: session = [], isLoading, refetch} = useQuery({
        queryKey: ['session'],
        queryFn: async() => {
           const res = await axiosPublic.get('/studySessions')
           return res.data
        }
    })
    console.log(session)
    return (
        <div>
           {
            session?.map(item => <div key={item._id}></div>)
           }
        </div>
    );
};

export default ShowStudySection;