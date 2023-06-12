import { useEffect, useState } from "react";
import HomePageSection from "../Shared/HomePageSection";
import { motion } from "framer-motion"

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/instructors/popular')
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
                console.log(data);
            })
    }, []);
    return (
        <div>
            <HomePageSection heading="Meet Our Expert Language Instructors" subheading="Learn from experienced instructors who are passionate about teaching languages"></HomePageSection>
            <section className="max-w-7xl mx-auto mb-14 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {instructors && instructors.map((instructor) =>
                        <motion.div
                            whileHover={{ scale: 1.2, transition: { duration: 0.5 }, }} whileTap={{ scale: 0.9 }}
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
        </div>
    );
};

export default PopularInstructors;