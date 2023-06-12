import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUsers, FaBars, FaCreditCard } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import useUserRoles from "../hooks/useUserRoles";
import useTitle from "../hooks/useTitle";

const Dashboard = () => {
    const { isAdmin, isInstructor, isStudent } = useUserRoles()
    const { user } = useContext(AuthContext);
    useTitle('Dashboard');
    return (
        <div className="drawer md:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                {/* <DashboadSection heading={`Welcome ${user?.displayName}`}> */}
                <div className="flex justify-end">
                    <label htmlFor="my-drawer-2" className="btn btn-circle bg-mysecondary drawer-button md:hidden mt-4 mr-3 z-10 border-myprimary"><FaBars className="bg-myprimary"></FaBars></label>
                </div>
                {/* </DashboadSection> */}
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-mysecondary">
                    {/* Sidebar content here */}
                    {
                        user ?
                            <div className="ml-4">
                                <div className="flex justify-between mb-4">
                                    <img className="h-14 w-14 rounded-full" src={user.photoURL} alt="" />
                                </div>
                                <div className="mb-4">
                                    <p className="text-2xl font-medium text-white">{user.displayName}</p>
                                    <p className="text-base font-medium text-white">{user.email}</p>
                                    {/* <p className="text-sm font-medium text-white capitalize">{role} Dashboard</p> */}
                                </div>
                            </div>
                            : ""
                    }

                    {
                        isAdmin && (
                            <>
                                <li><NavLink to='/dashboard/adminclasses'><GiTeacher></GiTeacher>Manage Classes</NavLink></li>
                                <li><NavLink to='/dashboard/adminusers'><FaUsers></FaUsers>Manage Users</NavLink></li>
                            </>
                        )
                    }

                    {
                        isInstructor && (
                            <>
                                <li><NavLink to='/dashboard/instructoraddclass'><GiTeacher></GiTeacher>Add a Class</NavLink></li>
                                <li><NavLink to='/dashboard/instructormanageclass'><FaUsers></FaUsers>All Class</NavLink></li>
                            </>
                        )
                    }

                    {
                        isStudent && (
                            <>
                                <li><NavLink to='/dashboard/studentselectedclass'><GiTeacher></GiTeacher>My Selected Class</NavLink></li>
                                <li><NavLink to='/dashboard/studentenrolledclass'><FaUsers></FaUsers>My Enrolled Class</NavLink></li>
                                <li><NavLink to='/dashboard/studentpaymenthistory'><FaCreditCard></FaCreditCard>Payment History</NavLink></li>
                            </>
                        )
                    }

                    <li><Link to='/'><FaHome></FaHome>Home Page</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;