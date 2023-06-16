import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
// import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CheckoutForm = ({ data }) => {
    const { price } = data;
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    // console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
            // console.log('payment method', paymentMethod)
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        // console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                course_id: data._id,
                course_name: data?.name,
                instructor_name: data?.instructor_name,
                instructor_email: data?.instructor_email,
                image: data?.image,
                date: new Date(),

            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    // console.log('data', res.data);
                    if (res.data.insertResult.insertedId) {
                        // Swal.fire({
                        //     position: 'top-right',
                        //     icon: 'success',
                        //     title: 'Payment done successfully',
                        //     showConfirmButton: false,
                        //     timer: 1500
                        // })
                        toast.success('Payment done successfully', {
                            closeOnClick: true,
                          })
                        navigate('../studentselectedclass')
                    }
                })
        }
    }

    return (
        <>
            <div className="flex justify-center">
                <form className="w-11/12 md:w-2/3 my-8 p-6 bg-my-card" onSubmit={handleSubmit}>
                    <h3 className="text-mysecondary font-medium">Payable amount is: ${data.price}</h3>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button className="btn btn-warning btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                        Pay
                    </button>
                </form>
            </div>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {/* {transactionId && <p className="text-mysecondary ml-8">Transaction complete with transactionId: {transactionId}</p>} */}
            {transactionId && ''}
        </>
    );
};

export default CheckoutForm;