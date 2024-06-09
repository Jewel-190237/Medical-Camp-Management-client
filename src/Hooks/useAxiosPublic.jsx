import axios from "axios";

const axiosSecurePublic = axios.create({
    baseURL: 'https://server-site-lilac.vercel.app'
})
const useAxiosPublic = () => {
    return axiosSecurePublic
};

export default useAxiosPublic;