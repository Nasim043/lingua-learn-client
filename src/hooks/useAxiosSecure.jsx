import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

// Create default base URL
const axiosSecure = axios.create({
    baseURL: "https://b7a12-summer-camp-server-side-nasim043.vercel.app",
})

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    // Working with axios interceptor using axiosSecure
    // request
    useEffect(() => {
        axiosSecure.interceptors.request.use((request) => {
            const token = localStorage.getItem('access_token');
            if (token) {
                request.headers.Authorization = `Bearer ${token}`;
            }
            return request;
        });

        // response
        axiosSecure.interceptors.response.use((response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await logOut();
                    navigate('/login');
                }
                return Promise.reject(error);
            });
    }, [logOut, navigate])


    return [axiosSecure];
};

export default useAxiosSecure;