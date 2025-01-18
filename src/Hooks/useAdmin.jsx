import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    // const {data:isAdmin, isPending: isAdminLoading} = useQuery({
    //     queryKey:[user?.email, 'isAdmin'],
    //     queryFn: async() => {
    //         const res = await axiosSecure.get(`/users/admin/${user?.email}`)
    //         console.log(res.data)
    //         return res?.data?.admin
    //     }
    // })
    // return [isAdmin, isAdminLoading]
    
    const {data:role, isLoading} = useQuery({
        queryKey:['role', user?.email],
        queryFn: async()=> {
            const {data} = await axiosSecure(`/users/role/${user?.email}`)
            return data.role
        }
    })
    return [role, isLoading]
};

export default useAdmin;