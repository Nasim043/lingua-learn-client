import useTitle from "../../hooks/useTitle";
import Contactus from "./Contactus";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import Slider from "./Slider";
import Statistics from "./Statistics";
import Testimonial from "./Testimonial";
import Subscribe from "./subscribe";

const Home = () => {
    useTitle('Home');
    return (
        <>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Testimonial></Testimonial>
            <Statistics></Statistics>
            <Contactus></Contactus>
            <Subscribe></Subscribe>
        </>
    );
};

export default Home;