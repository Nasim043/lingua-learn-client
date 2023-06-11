import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useUserRoles from "../hooks/useUserRoles";


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const { isAdmin, isLoading } = useUserRoles();
    const location = useLocation();

    if (loading || isLoading) {
        return <div className="flex justify-center items-center h-screen">
            <span className="text-mysecondary loading loading-bars loading-lg"></span>
        </div>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;