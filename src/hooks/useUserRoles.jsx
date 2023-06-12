import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useUserRoles = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { data, isLoading } = useQuery({
        queryKey: ['isAdmin', 'isInstructor', 'isStudent', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: fetchUserRole
    })

    async function fetchUserRole() {
        const response = await axiosSecure.get(`users/role/${user?.email}`);
        return response.data;
    }

    const role = data?.role;
    const isAdmin = role === 'admin';
    const isInstructor = role === 'instructor';
    const isStudent = role === 'student';
    // const isStudent = !isAdmin && !isInstructor
    const dbUser = data?.user;

    return { role, isAdmin, isInstructor, isStudent, dbUser, isLoading };
};

export default useUserRoles;