import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Feedback = () => {
    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        data.feedback = e.target.feedback.value;
        fetch(`https://b7a12-summer-camp-server-side-nasim043.vercel.app/classes/feedback/${data?._id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((resData) => {
                // console.log(resData);
                if (resData.matchedCount) {
                    Swal.fire({
                        position: 'top-right',
                        icon: 'success',
                        title: `Send feedback successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('../adminclasses');
                }
            })
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto my-4 md:my-10 px-14 py-6 shadow-lg rounded-md">
                <h3 className='text-3xl font-bold text-center mb-6 text-mysecondary'>Give a feedback</h3>
                <div className="mb-4">
                    <textarea className="textarea textarea-warning textarea-md w-full max-w-xs"
                        placeholder="Why you are approved or reject this course?"
                        defaultValue={data?.feedback}
                       name="feedback"
                    ></textarea>
                </div>
                <button type="submit" className="bg-myprimary text-mysecondary font-bold py-2 px-4 rounded">Submit</button>
            </form>
        </>
    );
};

export default Feedback;