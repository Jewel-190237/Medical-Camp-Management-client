import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const axiosSecure = axios.create({
    baseURL: 'https://server-site-lilac.vercel.app'
})
const useAxios = () => {

    const { logOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    axiosSecure.interceptors.request.use(function (config) {
        const token = window.localStorage.getItem('access-token');
        console.log('Interceptors', token);
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        return Promise.reject(error);
    })

    //interceptors 401, 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response
    }, async (error) => {
        const status = error.response.status;

        //for 401, 403 logout user and move to login page
        if (status === 401 || status === 403) {
            await logOutUser();
            navigate('/login');

        }
        return Promise.reject(error)
    })

    return axiosSecure;
};

export default useAxios;