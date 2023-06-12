import useTitle from "../../hooks/useTitle";
import Contactus from "./Contactus";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import Slider from "./Slider";
import Testimonial from "./Testimonial";

const Home = () => {
    useTitle('Home');
    return (
        <>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Testimonial></Testimonial>
            <Contactus></Contactus>
        </>
    );
};

export default Home;