import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../Shared/SectionTitle";
import useUserRoles from "../../hooks/useUserRoles";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitle from "../../hooks/useTitle";
// import Swal from "sweetalert2";
import { motion } from "framer-motion"
import { toast } from "react-toastify";

const Classes = () => {
    const [classes, setClasses] = useState();
    const [classesLoading, setClassesLoading] = useState(true);
    const { user } = useContext(AuthContext);
    const { isAdmin, isInstructor } = useUserRoles()
    const [axiosSecure] = useAxiosSecure();
    useTitle('Classes');
    useEffect(() => {
        axiosSecure.get("classes/approved")
            .then(res => {
                setClassesLoading(false)
                setClasses(res.data)
            })
    }, [axiosSecure])

    const handleSelected = (classId) => {
        if (user) {
            fetch(`https://b7a12-summer-camp-server-side-nasim043.vercel.app/users/selected/${classId}`, {
                method: 'PATCH',
                body: JSON.stringify(user),
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then((res) => res.json())
                .then(data => {
                    if (data.error) {
                        // Swal.fire({
                        //     position: 'top-right',
                        //     icon: 'error',
                        //     title: data.message,
                        //     showConfirmButton: false,
                        //     timer: 1500
                        // })
                        toast.success(data.message, {
                            closeOnClick: true,
                          })
                    } else {
                        // Swal.fire({
                        //     position: 'top-right',
                        //     icon: 'success',
                        //     title: 'Class added successfully',
                        //     showConfirmButton: false,
                        //     timer: 1500
                        // })
                        toast.success('Class added successfully', {
                            closeOnClick: true,
                          })
                    }
                })
        } else {
            // Swal.fire({
            //     position: 'top-right',
            //     icon: 'error',
            //     title: 'You need to login to select a class',
            //     showConfirmButton: false,
            //     timer: 1500
            // })
            toast.error('You need to login to select a class', {
                closeOnClick: true,
              })
        }
    }

    return (
        <>
            {
                classesLoading && <div className="flex justify-center items-center h-screen">
                    <span className="text-mysecondary loading loading-bars loading-lg"></span>
                </div>
            }
            <SectionTitle heading={"our Classes"} subheading={"Find your passion in our comprehensive class offerings"}></SectionTitle>
            <section className="my-container">
                <div className="container px-5 pb-24 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            classes?.map(singleClass =>
                                <div className={singleClass.available_seats === 0 ? 'bg-red-200 p-6 rounded-lg' : 'bg-[#FBF9F1] p-6 rounded-lg'} key={singleClass._id}>
                                    <img className="h-48 rounded w-full object-cover object-center mb-6" src={singleClass.image} alt={singleClass.name} />
                                    {/* <h3 className="tracking-widest text-yellow-500 text-xs font-medium">SUBTITLE</h3> */}
                                    <h2 className="text-2xl text-gray-900 font-bold mb-4">{singleClass.name}</h2>
                                    <h2 className="text-xl text-mysecondary font-semibold">{singleClass.instructor_name}</h2>
                                    <h2 className="text-lg text-gray-900 font-medium">${singleClass.price}</h2>
                                    <h2 className="text-lg text-gray-900 font-medium">{singleClass.available_seats} seats available</h2>
                                    {/* <button className="flex mx-auto mt-10 text-mysecondary bg-myprimary border-0 py-2 px-8 focus:outline-none hover:bg-yellow-400 rounded text-lg">Select</button> */}
                                    <motion.button
                                        whileHover={{
                                            scale: 1.1,
                                            transition: { duration: 0.5 },
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => handleSelected(singleClass._id)} disabled={(user && isAdmin) || (user && isInstructor) || singleClass.available_seats === 0 ? 'disabled' : ''}
                                        className="btn btn-md normal-case font-normal flex mx-auto mt-10 text-mysecondary bg-myprimary border-0 px-8 focus:outline-none hover:bg-yellow-400 rounded text-lg">
                                        Select
                                    </motion.button>
                                </div>)
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Classes;