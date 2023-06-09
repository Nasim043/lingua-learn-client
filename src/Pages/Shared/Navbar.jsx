import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useUserRoles from "../../hooks/useUserRoles";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const { role, isAdmin, isInstructor, isStudent } = useUserRoles()
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
        {
            isAdmin && (
                <li><NavLink to="/dashboard/adminusers">DashBoard</NavLink></li>
            )
        }

        {
            isInstructor && (
                <li><NavLink to="/dashboard/instructormanageclass">DashBoard</NavLink></li>
            )
        }

        {
            isStudent && (
                <li><NavLink to="/dashboard/studentselectedclass">DashBoard</NavLink></li>
            )
        }
    </>
    return (
        <>
            <div className="navbar bg-mysecondary px-4 lg:px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="#fbbd0d" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="my-menu menu menu-sm dropdown-content mt-3 p-2 shadow bg-mysecondary rounded-box w-52 opacity-50">
                            {navItems}
                        </ul>
                    </div>
                    <Link className="uppercase text-2xl font-extrabold text-myprimary font-my-font">
                        <div className="flex flex-col leading-tight">
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
                                <img src={user?.photoURL} className="w-10 rounded-full ml-1" />
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
        </>
    );
};

export default Navbar;