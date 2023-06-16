import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
// import Swal from "sweetalert2";

const InstructorUpdateClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const classInfo = {
            name: form.name.value,
            available_seats: parseInt(form.available_seats.value, 10),
            price: parseFloat(form.price.value),
        }
        // console.log(classInfo);

        axiosSecure.patch(`/classes/edit/${data._id}`, classInfo)
            .then(res => {
                // console.log(res);
                if (res.data.modifiedCount) {
                    // Swal.fire({
                    //     position: 'top-end',
                    //     icon: 'success',
                    //     title: 'Class updated successfully',
                    //     showConfirmButton: false,
                    //     timer: 1500
                    // })
                    toast.success('Class updated successfully', {
                        closeOnClick: true,
                      })
                    navigate('../instructormanageclass');
                }
            })
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto my-4 md:my-10 px-14 py-6 shadow-lg rounded-md">
                <h3 className='text-3xl font-bold text-center mb-3 text-mysecondary'>Update a Class</h3>
                <div className="mb-4">
                    <label htmlFor="className" className="block text-gray-700 font-bold mb-2">
                        Class Name
                    </label>
                    <input
                        type="text"
                        id="className"
                        defaultValue={data.name}
                        name="name"
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="instructorName" className="block text-gray-700 font-bold mb-2">
                        Instructor Name
                    </label>
                    <input
                        type="text"
                        id="instructorName"
                        defaultValue={data?.instructor_name}
                        className="w-full bg-gray-100 border border-gray-300 rounded-md p-2"
                        readOnly
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="instructorEmail" className="block text-gray-700 font-bold mb-2">
                        Instructor Email
                    </label>
                    <input
                        type="email"
                        id="instructorEmail"
                        defaultValue={data?.instructor_email}
                        className="w-full bg-gray-100 border border-gray-300 rounded-md p-2"
                        readOnly
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="availableSeats" className="block text-gray-700 font-bold mb-2">
                        Available Seats
                    </label>
                    <input
                        type="number"
                        id="availableSeats"
                        defaultValue={data?.available_seats}
                        name="available_seats"
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        defaultValue={data?.price}
                        name="price"
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-myprimary text-mysecondary font-bold py-2 px-4 rounded"
                >
                    Update
                </button>
            </form>
        </>
    );
};

export default InstructorUpdateClass;