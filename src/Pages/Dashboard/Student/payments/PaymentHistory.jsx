import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../../Provider/AuthProvider";

const PaymentHistory = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const [payments, setPayments] = useState()
    useEffect(() => {
        axiosSecure.get(`/paymentHistory/${user?.email}`)
            .then(res => setPayments(res.data))
    }, [user, axiosSecure])
    return (
        <div>
            <h3 className="text-mysecondary text-center text-2xl md:text-3xl font-semibold mb-4 py-4 md:py-10 md:mb-10 bg-my-card">My Payment History</h3>
            <div className="overflow-x-auto md:ml-4 mb-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Image</th>
                            <th>Course Name</th>
                            <th>Instructor name</th>
                            <th>Instructor email</th>
                            <th>Pay</th>
                            <th>Transaction ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments?.map((payment, index) => <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={payment.image} alt={payment.name} />
                                        </div>
                                    </div>
                                </td>
                                <td>{payment.course_name}</td>
                                <td>{payment.instructor_name}</td>
                                <td>{payment.instructor_email}</td>
                                <td>${payment.price}</td>
                                <td>{payment.transactionId}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;