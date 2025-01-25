import axios from "axios";

const axiosPublic = axios.create({
    // baseURL:'https://collaborative-study-server-phi.vercel.app'
    baseURL: import.meta.env.VITE_API_URL
})

const useAxiosPublic = () => {
    return axiosPublic
}
export default useAxiosPublic;

