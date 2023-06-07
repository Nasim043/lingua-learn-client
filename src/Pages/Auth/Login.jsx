import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    useTitle('Login')
    const { login, googleLogIn } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();
    const [error, setError] = useState('')
    const from = location.state?.from?.pathname || '/'


    // google login
    const handleGoogleLogin = () => {
        googleLogIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const newUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => console.log(error.message))
    }

    // TODO: github login
    // github login
    // const handleGithubLogin = () => {
    //     githubLogIn()
    //         .then(result => {
    //             console.log(result.user);
    //             Swal.fire({
    //                 position: 'center',
    //                 icon: 'success',
    //                 title: 'Login Successfull',
    //                 showConfirmButton: false,
    //                 timer: 1500
    //             })
    //             navigate(from, { replace: true })
    //         })
    //         .catch(error => console.log(error.message))
    // }
    const onSubmit = (data) => {
        console.log(data);
        login(data.email, data.password)
            .then(result => {
                reset();
                console.log(result.user);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successfull',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message.split('/')[1].slice(0, -2));
            })
    }
    return (
        <div className="my-container">
            <div className="card w-11/12 sm:w-4/5 max-w-xl mx-auto shadow-2xl bg-base-100 mb-10">
                <div className="card-body">
                    <h3 className='text-3xl font-bold text-center mb-3 text-[#293749]'>Login to have fun</h3>
                    <div className="form-control">
                        <button className="btn btn-outline btn-primary mb-2" onClick={handleGoogleLogin}><FaGoogle className='me-2'></FaGoogle> Login with Google</button>
                        {/* <button className="btn btn-outline" onClick={handleGithubLogin}><FaGithub className='me-2'></FaGithub> Login with Github</button> */}
                    </div>
                    <div className="divider my-3">OR</div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email <span className='text-red-500 text-lg'></span></span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password <span className='text-red-500 text-lg mt-1'></span></span>
                            </label>
                            <input type="password" {...register("password", { required: true })} placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    {error && <span className='text-sm mt-1 error'>{error}</span>}
                    <p className='mt-3'>Don&apos;t have an account?  <Link to='/signup' className="link link-hover text-primary">Sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;