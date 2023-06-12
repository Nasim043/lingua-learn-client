import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import DashboadSection from "../../Shared/DashboadSection";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";

const StudentEnrolledClass = () => {
    const [axiosSecure] = useAxiosSecure()
    const [classes, setClasses] = useState()
    const { user } = useContext(AuthContext);
    useEffect(() => {
        axios.get(`https://b7a12-summer-camp-server-side-nasim043.vercel.app/users/enrolled/${user?.email}`)
            .then(res => {
                setClasses(res.data)
            })
    }, [user, axiosSecure])
    return (
        <div>
            <DashboadSection heading={"My enrolled classes"}></DashboadSection>
            <div className="overflow-x-auto md:ml-4 mb-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Instructor name</th>
                            <th>Instructor email</th>
                            <th>Available seats</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes?.map((singleClass, index) => <tr key={singleClass._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={singleClass.image} alt={setClasses.name} />
                                        </div>
                                    </div>
                                </td>
                                <td>{singleClass.name}</td>
                                <td>{singleClass.instructor_name}</td>
                                <td>{singleClass.instructor_email}</td>
                                <td>{singleClass.available_seats}</td>
                                <td>${singleClass.price}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentEnrolledClass;