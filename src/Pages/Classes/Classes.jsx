import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Classes = () => {
    const [classes, setClasses] = useState();
    const [axiosSecure] = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get("classes")
            .then(res => setClasses(res.data))
    }, [axiosSecure])
    console.log(classes);
    return (
        <section className="text-gray-600 body-font max-w-7xl mx-auto">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
                        <div className="h-1 w-20 bg-yellow-500 rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                </div>
                <div className="grid grid-cols-1 md;grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        classes?.map(singleClass =>
                            <div className="bg-gray-100 p-6 rounded-lg" key={singleClass._id}>
                                <img className="h-40 rounded w-full object-cover object-center mb-6" src={singleClass.image} alt={singleClass.name} />
                                <h3 className="tracking-widest text-yellow-500 text-xs font-medium">SUBTITLE</h3>
                                <h2 className="text-2xl text-gray-900 font-medium title-font mb-4">{singleClass.name}</h2>
                                <h2 className="text-lg text-myprimary font-medium title-font">{singleClass.instructor_name}</h2>
                                <h2 className="text-lg text-gray-900 font-medium">${singleClass.price}</h2>
                                <h2 className="text-lg text-gray-900 font-medium title-font">{singleClass.available_seats} seats available</h2>
                                <button className="flex mx-auto mt-10 text-mysecondary bg-myprimary border-0 py-2 px-8 focus:outline-none hover:bg-yellow-400 rounded text-lg">Select</button>
                            </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Classes;