import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const image_hosting_token = import.meta.env.VITE_image_upload_token;

const InstructorAddClass = () => {
    const [className, setClassName] = useState('');
    const [availableSeats, setAvailableSeats] = useState(0);
    const [price, setPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure()

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

    const handleFileChange = (event) => {
        setSelectedImage(event.target.files[0]);
    };
    const formReset = () => {
        setClassName('');
        setAvailableSeats(0);
        setPrice(0);
        setSelectedImage(null);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', selectedImage);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((response) => {
                if (response.success) {
                    const image_url = response.data.display_url;
                    const classInfo = {
                        image: image_url,
                        name: className,
                        instructor_name: user?.displayName,
                        instructor_email: user?.email,
                        available_seats: availableSeats,
                        price: price,
                        status: 'pending'
                    }
                    axiosSecure.post('/classes', classInfo)
                        .then(data => {
                            if (data.data.insertedId) {
                                formReset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })

    };

    return (
        <>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto my-4 md:my-10 px-14 py-6 shadow-lg rounded-md">
                <h3 className='text-3xl font-bold text-center mb-3 text-mysecondary'>Add a Class</h3>
                <div className="mb-4">
                    <label htmlFor="className" className="block text-gray-700 font-bold mb-2">
                        Class Name
                    </label>
                    <input
                        type="text"
                        id="className"
                        value={className}
                        onChange={(e) => setClassName(e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="classImage">
                        Class Image
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="classImage"
                        type="file"
                        onChange={handleFileChange}
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
                        // value={user?.name}
                        defaultValue={user?.displayName}
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
                        // value={user?.email}
                        defaultValue={user?.email}
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
                        value={availableSeats}
                        onChange={(e) => setAvailableSeats(parseInt(e.target.value, 10))}
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
                        value={price}
                        onChange={(e) => setPrice(parseFloat(e.target.value))}
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-myprimary text-mysecondary font-bold py-2 px-4 rounded"
                >
                    Add
                </button>
            </form>
        </>
    );
};

export default InstructorAddClass;