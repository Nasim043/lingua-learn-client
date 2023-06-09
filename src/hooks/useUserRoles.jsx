import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useUserRoles = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { data, isLoading } = useQuery({
        queryKey: ['userRole', user?.role],
        enabled: !loading,
        queryFn: fetchUserRole
    })

    async function fetchUserRole() {
        const response = await axiosSecure.get(`users/role/${user.email}`);
        return response.data;
    }

    const role = data?.role;
    const isAdmin = role === 'admin';
    const isInstructor = role === 'instructor';
    const isStudent = role === 'student';

    return { role, isAdmin, isInstructor, isStudent };
};

export default useUserRoles;