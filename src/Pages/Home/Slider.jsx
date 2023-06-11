// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from '../../assets/picture/7800.jpg';
import img2 from '../../assets/picture/20610.jpg';
// import img3 from '../../assets/picture/6435775.jpg';
import img4 from '../../assets/picture/7454886.jpg';
// import img5 from '../../assets/picture/8614070.jpg';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const Slider = () => {
    return (
        <div className="mb-14">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className="bg-my-card h-96">
                    <div className="flex justify-center items-center py-12 px-4">
                        <div className="container mx-auto flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 md:pl-7 md:pe-4">
                                <h1 className="text-4xl font-bold text-black mb-4">Embrace the World of Language Learning</h1>
                                <p className="text-black text-lg mb-6">Expand your horizons and discover the joy of learning languages from around the globe</p>
                                <Link to='/all-toys' className='bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6'>Explore More</Link>
                            </div>
                            <div className="md:w-1/2">
                                <img src={img1} alt="Toy Image" className="h-64 md:h-[512px] rounded-lg" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-my-card rounded-lg h-96">
                    <div className="flex justify-center items-center py-12 px-4">
                        <div className="container mx-auto flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 md:pl-7 md:pe-4">
                                <h1 className="text-4xl font-bold text-black mb-4">Language Learning Made Engaging and Fun</h1>
                                <p className="text-black text-lg mb-6">Immerse yourself in interactive lessons, captivating content, and interactive activities for an enjoyable language learning experience</p>
                                <Link to='/all-toys' className='bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6'>Shop Now</Link>
                            </div>
                            <div className="md:w-1/2">
                                <img src={img2} alt="Toy Image" className="h-64 md:h-[512px] rounded-lg" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-my-card rounded-lg h-96">
                    <div className="flex justify-center items-center py-12 px-4">
                        <div className="container mx-auto flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 md:pl-7 md:pe-4">
                                <h1 className="text-4xl font-bold text-black mb-4">Unlock the Power of English</h1>
                                <p className="text-black text-lg mb-6">Master English communication and fluency with our immersive language programs.</p>
                                <Link to='/all-toys' className='bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6'>Shop Now</Link>
                            </div>
                            <div className="md:w-1/2">
                                <img src={img4} alt="Toy Image" className="h-64 md:h-[512px] rounded-lg" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;