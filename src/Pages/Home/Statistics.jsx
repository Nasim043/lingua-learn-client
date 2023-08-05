import student from '../../assets/audience.png'
import courses from '../../assets/book.png'
import graduation from '../../assets/graduated.png'
import teacher from '../../assets/training.png'
import CountUp from 'react-countup';
const Statistics = () => {
    return (
        <section className="text-gray-600 body-font px-4 py-4 lg:py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex items-center gap-3 p-8">
                    <img src={student} className="w-16 h-16"></img>
                    <div>
                        <CountUp end={750} duration={7} enableScrollSpy className="text-2xl"/>
                        <span className="text-2xl">+</span>
                        <p>Active Student</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <img src={courses} className="w-16 h-16"></img>
                    <div>
                    <CountUp end={15} duration={5} enableScrollSpy className="text-2xl"/>
                        <span className="text-2xl">+</span>
                        <p>Interactive Courses</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <img src={graduation} className="w-16 h-16"></img>
                    <div>
                    <CountUp end={1000} duration={7} enableScrollSpy className="text-2xl"/>
                        <span className="text-2xl">+</span>
                        <p>Graduate Students</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <img src={teacher} className="w-16 h-16"></img>
                    <div>
                    <CountUp end={10} duration={5} enableScrollSpy className="text-2xl"/>
                        <span className="text-2xl">+</span>
                        <p>Certified Teachers</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Statistics;