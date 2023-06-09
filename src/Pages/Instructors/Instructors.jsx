import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../Shared/SectionTitle";

const Instructors = () => {
    const [axiosSecure] = useAxiosSecure();
    const [instructors, setInstructors] = useState();

    useEffect(() => {
        axiosSecure.get("instructors").
            then((response) => {
                setInstructors(response.data);
            });
    }, [axiosSecure]);

    return (
        <>
            <SectionTitle heading={"Meet our Instructors"} subheading={"Personalized learning from experienced professionals"}></SectionTitle>
            <div className="max-w-7xl mx-auto mb-14 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {instructors?.map((instructor) =>
                        <div className="h-full flex flex-col items-center text-center overflow-hidden hover:border-b-4 hover:border-myprimary hover:shadow-lg hover:rounded-xl transition duration-300 ease-in-out transform hover:scale-105 " key={instructor._id}>
                            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/201x201" />
                            <div className="w-full">
                                <h2 className="title-font font-medium text-lg text-gray-900">{instructor.name}</h2>
                                <h3 className="text-gray-500 mb-3">{instructor.email}</h3>
                                <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                            </div>
                        </div>)
                    }
                </div >
            </div>
        </>
    );
};

export default Instructors;