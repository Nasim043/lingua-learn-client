import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import logo from '../../assets/logo.png'
import useUserRoles from "../../hooks/useUserRoles";

const Navbar = () => {
    const { isAdmin, isInstructor, isStudent } = useUserRoles()
    console.log(isAdmin, isInstructor, isStudent);
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
            }).catch((error) => {
                console.log(error.message);
            });
    }

    const navItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/instructors">Instructors</NavLink></li>
        <li><NavLink to="/classes">Classes</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        {/* {
            user && <li><NavLink to="/dashboard">DashBoard</NavLink></li>
        } */}
        {
            user && isAdmin && (
                <li><NavLink to="/dashboard/adminusers">DashBoard</NavLink></li>
            )
        }

        {
            user && isInstructor && (
                <li><NavLink to="/dashboard/instructormanageclass">DashBoard</NavLink></li>
            )
        }

        {
            user && isStudent && (
                <li><NavLink to="/dashboard/studentselectedclass">DashBoard</NavLink></li>
            )
        }
    </>
    return (
        <div className="w-full bg-mysecondary">
            <div className="navbar px-2 md:px-4 py-3 mx-auto md:max-w-full lg:max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="#fbbd0d" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="my-menu menu menu-sm dropdown-content mt-3 p-2 shadow bg-mysecondary rounded-box w-52 opacity-50 z-10">
                            {navItems}
                        </ul>
                    </div>
                    <Link className="uppercase text-2xl font-extrabold text-myprimary font-my-font flex items-center">
                        <img src={logo} className="h-10 mr-1" />
                        <div className="flex-col leading-tight font-logo text-xl hidden sm:inline-flex">
                            <span>Lingua</span>
                            <span>Learn</span>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="my-menu menu menu-horizontal px-1 text-myprimary">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center">
                        {
                            user ? <>
                                <button onClick={handleLogOut} className="flex mx-auto text-mysecondary bg-myprimary border-0 py-1 px-3 focus:outline-none hover:bg-yellow-400 rounded">Logout</button>
                                <img src={user?.photoURL} className="h-10 w-10 rounded-full ml-1" />
                            </> :
                                <>
                                    <Link to="login">
                                        <button className="flex mx-auto text-mysecondary bg-myprimary border-0 py-2 px-8 focus:outline-none hover:bg-yellow-400 rounded text-lg">Login</button>
                                    </Link>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;