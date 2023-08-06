import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const Statistics = () => {
    const [statistics, setStatistics] = useState([])
    useEffect(() => {
        fetch('statistics.json')
            .then(res => res.json())
            .then((data) => setStatistics(data))
    }, [])
    return (
        <section className="text-gray-600 body-font px-4 py-4 lg:py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8" data-aos="fade-up" data-aos-duration="1000">
                {
                    statistics.map(({ id, name, number, image }) => (
                        <div className="flex items-center gap-3 sm:p-8" key={id}>
                            <img src={image} alt={name} className="h-12 w-12 sm:w-16 sm:h-16"></img>
                            <div>
                                <CountUp end={number} duration={5} enableScrollSpy className="text-2xl" />
                                <span className="text-2xl">+</span>
                                <p>{name}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Statistics;