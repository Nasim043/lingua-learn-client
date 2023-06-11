import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ADminClasses = () => {
    const [axiosSecure] = useAxiosSecure()
    const [classes, setClasses] = useState()
    useEffect(() => {
        axiosSecure.get('/classes')
            .then(res => setClasses(res.data))
    }, [axiosSecure])

    const handleStatus = (classes, status) => {
        classes.status = status;
        fetch(`http://localhost:5000/classes/${classes?._id}`, {
            method: 'PATCH',
            body: JSON.stringify(classes),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {

                axiosSecure.get('/classes')
                    .then(res => setClasses(res.data))

                if (data.matchedCount) {
                    Swal.fire({
                        position: 'top-right',
                        icon: 'success',
                        title: `${classes.name} class is ${classes.status}`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleModalData = (data) => {
        window.feedback_modal.showModal();
    }

    return (
        <div>
            <h3 className="text-mysecondary text-center text-2xl md:text-3xl font-semibold mb-4 py-4 md:py-10 md:mb-10 bg-my-card">Manage Classes</h3>
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
                            <th>status</th>
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
                                <td>{singleClass.price}</td>
                                <td>{singleClass.status}</td>
                                <td>
                                    <button onClick={() => handleStatus(singleClass, 'approved')} disabled={singleClass.status === 'approved' || singleClass.status === 'denied' ? 'disabled' : ''} className="btn btn-warning normal-case btn-sm mb-2 md:mr-2">Approve</button>
                                    <button onClick={() => handleStatus(singleClass, 'denied')} disabled={singleClass.status === 'approved' || singleClass.status === 'denied' ? 'disabled' : ''} className="btn btn-error normal-case btn-sm mb-2 md:mr-2">Deny</button>
                                    {/* <button onClick={() => handleModalData(singleClass)} className="btn btn-warning normal-case btn-sm mb-2 md:mr-2">send feedback</button> */}
                                    <Link to='../adminfeedback' state={setClasses} className="btn btn-warning normal-case btn-sm mb-2 md:mr-2">send feedback</Link>
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

export default ADminClasses;