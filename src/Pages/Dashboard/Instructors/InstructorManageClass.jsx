import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const InstructorManageClass = () => {
    const { user, loading } = useContext(AuthContext);

    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [] } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes/${user?.email}`)
            return res.data;
        }
    })

    return (
        <>
            <h3 className="text-mysecondary text-center text-2xl md:text-3xl font-semibold mb-4 py-4 md:py-10 md:mb-10 bg-my-card">All Classes</h3>
            <div className="overflow-x-auto md:ml-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Available Seats</th>
                            <th>Enrolled Students</th>
                            <th>Status</th>
                            <th>Feedback</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes?.map((singleClass, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{singleClass.name}</td>
                                <td>${singleClass.price}</td>
                                <td>{singleClass.available_seats}</td>
                                <td>{singleClass?.enrolled || 0}</td>
                                <td>{singleClass.status}</td>
                                <td>{singleClass?.feedback}</td>
                                <td>
                                    <Link to='../instructorupdateclass' state={singleClass} className="btn btn-warning normal-case btn-xs mb-2 mr-2">update</Link>
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