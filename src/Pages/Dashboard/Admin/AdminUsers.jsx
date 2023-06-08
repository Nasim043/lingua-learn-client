import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const AdminUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })

    const handleRole = (user, role) => {
        user.role = role;
        console.log(user);
        fetch(`http://localhost:5000/users/${user.email}`, {
            method: 'PATCH',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                refetch();
                console.log(users);
                console.log('data', data);
                if (data.matchedCount) {
                    Swal.fire({
                        position: 'center',
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
            <h3 className="text-mysecondary text-center text-lg my-4 md:my-10">Use your admin previlege to make students instructors or admin</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
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
                                    {
                                        user?.role === 'instructor' ? <button className="btn btn-warning normal-case btn-sm mb-2 mr-2" disabled="disabled">make instructor</button>
                                            : <button onClick={() => handleRole(user, 'instructor')} className="btn btn-warning normal-case btn-sm mb-2 mr-2">make instructor</button>
                                    }
                                    {
                                        user?.role === 'admin' ? <button className="btn btn-warning normal-case btn-sm mb-2 mr-2" disabled="disabled">make admin</button>
                                            : <button onClick={() => handleRole(user, 'admin')} className="btn btn-warning normal-case btn-sm mb-2 mr-2">make admin</button>
                                    }
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