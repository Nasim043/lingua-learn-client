import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    {
                        user ?
                            <div className="ml-4">
                                <div className="flex justify-start mb-4">
                                    <img className="h-14 w-14 rounded-full" src={user.photoURL} alt="" />
                                </div>
                                <div className="mb-4">
                                    <p className="text-xl font-medium">Welcome, {user.displayName}</p>
                                    {/* <p className="text-sm font-medium">{user.email}</p> */}
                                </div>
                            </div>
                            : ""
                    }
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;