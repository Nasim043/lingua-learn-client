import HomePageSection from "../Shared/HomePageSection";
import { motion } from "framer-motion"
import { toast } from "react-toastify";

const Contactus = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        toast.success('Message sent successfully', {
            closeOnClick: true,
          })
    }
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto" data-aos="fade-right" data-aos-duration="1000">
                <HomePageSection heading="Get in Touch" subheading="Have questions? Contact our team for more information or assistance"></HomePageSection>
                <form onSubmit={handleSubmit} className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input type="text" id="name" name="name" required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-myprimary focus:bg-white focus:ring-1 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-myprimary focus:bg-white focus:ring-1 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                <textarea id="message" name="message" required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-myprimary focus:bg-white focus:ring-1 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <motion.button
                                whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 1 },
                                }}
                                whileTap={{ scale: 0.9 }}
                                className="flex mx-auto btn btn-md normal-case font-normal mt-10 text-mysecondary bg-myprimary border-0 px-8 focus:outline-none hover:bg-yellow-400 rounded text-lg">
                                Submit
                            </motion.button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contactus;