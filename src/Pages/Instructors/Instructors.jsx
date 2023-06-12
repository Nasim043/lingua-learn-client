import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../Shared/SectionTitle";
import useTitle from "../../hooks/useTitle";
import { motion } from "framer-motion"

const Instructors = () => {
    const [axiosSecure] = useAxiosSecure();
    const [instructors, setInstructors] = useState();
    const [instructorLoading, setInstructorLoading] = useState(true);
    useTitle('Instructors');

    useEffect(() => {
        axiosSecure.get("users/instructors").
            then((response) => {
                setInstructorLoading(false)
                setInstructors(response.data);
            });
    }, [axiosSecure]);

    return (
        <>
            {
                instructorLoading && <div className="flex justify-center items-center h-screen">
                    <span className="text-mysecondary loading loading-bars loading-lg"></span>
                </div>
            }
            <SectionTitle heading={"Meet our Instructors"} subheading={"Personalized learning from experienced professionals"}></SectionTitle>
            <section className="my-container mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* hover:border-b-4 hover:border-myprimary hover:shadow-lg hover:rounded-xl transition duration-300 ease-in-out transform hover:scale-103 */}
                    {instructors && instructors.map((instructor) =>
                        <motion.div
                            whileHover={{
                                scale: 1.2,
                                transition: { duration: 0.5 },
                            }}
                            whileTap={{ scale: 0.9 }}
                            className="h-full flex items-center bg-my-card border p-4 rounded-lg hover:border-myprimary" key={instructor._id}>
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center rounded-full mr-4" src={instructor.image} />
                            <div className="">
                                <h2 className="text-gray-900 title-font font-medium">{instructor.name}</h2>
                                <p className="text-gray-500">{instructor.email}</p>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>
        </>
    );
};

export default Instructors;