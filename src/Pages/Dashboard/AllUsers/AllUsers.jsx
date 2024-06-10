import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import { FaTrashAlt, FaUsers } from "react-icons/fa";

import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

const AllUsers = () => {
    const axiosSecure = useAxios();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['Users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })
    console.log(users);
    
    const handleMakeAdmin = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be make admin",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make admin"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(result => {
                        console.log(result.data);
                        Swal.fire({
                            title: `${user.name} is admin now`,
                            icon: "success"
                        });
                        refetch();
                    })
            }
        });
    }

    const handleDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${item._id}`)
                    .then(result => {
                        console.log(result.data);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        refetch();
                    })
            }
        });
    }

    return (
        <>
            <div className="flex justify-evenly py-8">
                <h2 className="text-4xl">ManageAll Users</h2>
            </div>

            <div className="w-full mx-10">
                <h2 className="text-4xl">Total Users: {users.length}</h2>
                <table className="table table-zebra w-full ">
                    {/* head */}
                    <thead className="bg-slate-700 text-white">
                        <tr>
                            <th>
                                Sl No
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item, index) => <tr key={item._id}>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>

                                <td>
                                    {item.name}
                                    {/* <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                                </td>
                                <th>{item.email}</th>
                                <th>
                                    { item.role === 'admin' ? 'Admin': <button onClick={() => handleMakeAdmin(item)} className="btn btn-ghost btn-lg bg-slate-600"><FaUsers className="text-white text-2xl  "></FaUsers></button>}
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-lg"><FaTrashAlt className="text-red-800"></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AllUsers;