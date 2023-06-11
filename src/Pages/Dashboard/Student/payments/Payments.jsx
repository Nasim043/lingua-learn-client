import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payments = () => {
    const location = useLocation();
    const data = location.state;
    // console.log(data);
    return (
        <div>
            <h3 className="text-mysecondary text-center text-2xl md:text-3xl font-semibold mb-4 py-4 md:py-10 md:mb-10 bg-my-card">Pay For The {data.name} Course</h3>
            <Elements stripe={stripePromise}>
                <CheckoutForm data={data}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payments;