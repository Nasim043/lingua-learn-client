import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const InstructorManageClass = () => {
    const { user, loading } = useContext(AuthContext);

    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes/${user?.email}`)
            return res.data;
        }
    })

    return (
        <>
            <h3 className="text-mysecondary text-center text-lg my-4 md:my-10">Use your admin previlege to make students instructors or admin</h3>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Class Name</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes?.map((singleClass, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{singleClass.name}</td>
                                <td>{singleClass.price}</td>
                                <td>{singleClass.available_seats}</td>
                                <td>{singleClass.status}</td>
                                <td>
                                    <button className="btn btn-warning normal-case btn-xs mb-2 mr-2">update</button>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default InstructorManageClass;