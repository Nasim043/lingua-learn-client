import { useContext, useEffect, useState } from "react";
// import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-toastify";
// import Swal from "sweetalert2";


const StudentSelectedClass = () => {
    const [axiosSecure] = useAxiosSecure()
    const [classes, setClasses] = useState()
    const { user } = useContext(AuthContext);
    useEffect(() => {
        axiosSecure.get(`/users/selected/${user?.email}`)
            .then(res => {
                setClasses(res.data)
            })
    }, [user, axiosSecure])

    const handleDelete = (classId) => {
        console.log(classId);
        fetch(`https://b7a12-summer-camp-server-side-nasim043.vercel.app/users/selected/delete/${classId}`, {
            method: 'PATCH',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {

                axiosSecure.get(`/users/selected/${user?.email}`)
                    .then(res => {
                        setClasses(res.data)
                    })
                if (data.modifiedCount) {
                    // Swal.fire({
                    //     position: 'top-right',
                    //     icon: 'success',
                    //     title: 'Class deleted successfully',
                    //     showConfirmButton: false,
                    //     timer: 1500
                    // })
                    toast.success('Class deleted successfully', {
                        closeOnClick: true,
                      })
                }
            })
    }

    return (
        <div>
            <h3 className="text-mysecondary text-center text-2xl md:text-3xl font-semibold mb-4 py-4 md:py-10 md:mb-10 bg-my-card">My Selected Classes</h3>
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
                            <th>Action</th>
                            <th>Action</th>
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
                                <td>
                                    <Link to='../studentpayment' state={singleClass} className="btn btn-warning normal-case btn-sm">Pay</Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(singleClass._id)} className="btn btn-error normal-case btn-sm">Delete</button>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default StudentSelectedClass;