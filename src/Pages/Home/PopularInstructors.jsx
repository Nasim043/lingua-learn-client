import { useEffect, useState } from "react";
import HomePageSection from "../Shared/HomePageSection";
import { motion } from "framer-motion"

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState();

    useEffect(() => {
        fetch('https://b7a12-summer-camp-server-side-nasim043.vercel.app/instructors/popular')
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
            })
    }, []);
    return (
        <div>
            <section className="px-4 py-4 md:px-4 lg:px-4 lg:py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                <HomePageSection heading="Meet Our Expert Language Instructors" subheading="Learn from experienced instructors who are passionate about teaching languages"></HomePageSection>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-right" data-aos-duration="1000">
                    {instructors && instructors.map((instructor) =>
                        <motion.div
                            whileHover={{ scale: 1.2, transition: { duration: 0.5 }, }} whileTap={{ scale: 0.9 }}
                            className="h-full flex items-center bg-my-card border p-4 rounded-lg hover:border-myprimary overflow-hidden" key={instructor._id}>
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center rounded-full mr-4" src={instructor.image} />
                            <div className="">
                                <h2 className="text-gray-900 title-font font-medium">{instructor.name}</h2>
                                <p className="text-gray-500">{instructor.email}</p>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default PopularInstructors;