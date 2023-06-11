import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";


const AdminUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const [users, setUsers] = useState()
    useEffect(() => {
        axiosSecure.get('/users')
            .then(res => setUsers(res.data))
    }, [axiosSecure])

    const handleRole = (user, role) => {
        user.role = role;
        fetch(`http://localhost:5000/users/${user.email}`, {
            method: 'PATCH',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {

                axiosSecure.get('/users')
                    .then(res => setUsers(res.data))

                if (data.matchedCount) {
                    Swal.fire({
                        position: 'top-right',
                        icon: 'success',
                        title: `${user.name}, you are ${user.role} now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div>
            <h3 className="text-mysecondary text-center text-2xl md:text-3xl font-semibold mb-4 py-4 md:py-10 md:mb-10 bg-my-card">Manage users</h3>
            <div className="overflow-x-auto md:ml-4 mb-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button onClick={() => handleRole(user, 'instructor')} disabled={user.role === 'instructor' ? 'disabled' : ''} className="btn btn-warning normal-case btn-sm mb-2 mr-2">make instructor</button>
                                    <button onClick={() => handleRole(user, 'admin')} disabled={user.role === 'admin' ? 'disabled' : ''} className="btn btn-warning normal-case btn-sm mb-2 mr-2">make admin</button>

                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminUsers;