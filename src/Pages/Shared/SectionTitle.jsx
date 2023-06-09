const SectionTitle = ({ heading, subheading }) => {
    return (
        <div>
            {/* <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 uppercase">{heading}</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">{subheading}</p> */}

            <section className="bg-[#FBF9F1] py-12 text-center mb-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-800 uppercase">{heading}</h2>
                    <p className="text-lg text-gray-600 mt-2">{subheading}</p>
                </div>
            </section>
        </div>
    );
};

export default SectionTitle;