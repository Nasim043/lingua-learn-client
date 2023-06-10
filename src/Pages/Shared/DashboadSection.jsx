import { FaBars } from "react-icons/fa";

const DashboadSection = ({ heading }) => {
    return (
        <section className="bg-[#FBF9F1] pt-1 pb-5 md:py-8 text-center mb-12">
            <div className="flex justify-end">
                <label htmlFor="my-drawer-2" className="btn btn-circle bg-mysecondary drawer-button md:hidden mt-3 mr-3 z-10 border-myprimary">
                    <FaBars className="bg-myprimary"></FaBars>
                </label>
            </div>
            <div className="px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-gray-800 uppercase text-center">{heading}</h2>

            </div>
        </section>
    );
};

export default DashboadSection;