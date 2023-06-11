import useTitle from "../../hooks/useTitle";
import Slider from "./Slider";
import Testimonial from "./Testimonial";

const Home = () => {
    useTitle('Home');
    return (
        <>
            <Slider></Slider>
            <Testimonial></Testimonial>
        </>
    );
};

export default Home;