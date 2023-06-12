import { useEffect, useState } from "react";
import HomePageSection from "../Shared/HomePageSection";

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/classes/popular')
            .then(res => res.json())
            .then(data => {
                setClasses(data)
            })
    }, [])
    return (
        <div className="px-4 py-4 md:px-16 lg:px-8 lg:py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl my-20">
            <HomePageSection heading="Discover Popular Language Classes" subheading="Learn a new language with our highly-rated and sought-after classes"></HomePageSection>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                {
                    classes?.map(singleClass => <div className='shadow-lg flex flex-col rounded-lg bg-my-card' key={singleClass._id}>
                        <div className="relative">
                            <a href="#">
                                <img className="h-48 rounded w-full object-cover object-center"
                                    src={singleClass.image}
                                    alt={setClasses.name} />
                                <div
                                    className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25 rounded-lg">
                                </div>
                            </a>
                        </div>
                        <div className="px-6 py-4">
                            <a className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">{singleClass.name}</a>
                            <p className="text-gray-500 text-sm">{singleClass.instructor_name}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;