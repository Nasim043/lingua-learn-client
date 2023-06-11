import { useLocation } from "react-router-dom";

const Feedback = () => {
    const location = useLocation();
    const data = location.state;
    console.log(data);
    const handleSubmit = () => {

    }
    return (
        <>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto my-4 md:my-10 px-14 py-6 shadow-lg rounded-md">
                <h3 className='text-3xl font-bold text-center mb-3 text-mysecondary'>Add a Class</h3>
                <div className="mb-4">
                    <label htmlFor="className" className="block text-gray-700 font-bold mb-2">
                        Class Name
                    </label>
                    <textarea className="textarea textarea-warning" placeholder="Bio"></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-myprimary text-mysecondary font-bold py-2 px-4 rounded"
                >
                    Add
                </button>
            </form>
        </>
    );
};

export default Feedback;