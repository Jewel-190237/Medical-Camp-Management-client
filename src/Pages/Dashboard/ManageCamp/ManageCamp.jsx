import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss'

const ManageCamp = () => {
    const axiosSecure = useAxios();

    const { data: camp = [], refetch } = useQuery({
        queryKey: ['camp'],
        queryFn: async () => {
            const res = await axiosSecure.get('/camps')
            return res.data;
        }
    })
    console.log(camp)

    const handleDelete = id => {
        console.log(id);
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
                axiosSecure.delete(`/deleteCamp/${id}`)
                    .then(result => {
                        console.log(result.data);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Camp has been deleted.",
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
                <h2 className="text-4xl">Manage All Camp</h2>
            </div>

            <div className="w-full mx-10">
                <h2 className="text-4xl">Total Camp: {camp.length}</h2>
                <table className="table table-zebra w-full ">
                    {/* head */}
                    <thead className="bg-slate-700 text-white">
                        <tr>
                            <th>
                                Sl No
                            </th>
                            <th>Camp Name</th>
                            <th>Time</th>
                            <th>Location</th>
                            <th> Healthcare Professional</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            camp.map((item, index) => <tr key={item._id}>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>

                                <td>
                                    {item.campName}
                                </td>
                                <th>{item.time}</th>
                                <th>{item.location}</th>
                                <th>{item.healthCarePName}</th>
                                <th>
                                    <Link to={`/dashboard/updateCamp/${item._id}`}> <button className="btn btn-ghost btn-lg"> <FaEdit className="text-orange-400"></FaEdit>  </button></Link>

                                </th>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg"><FaTrashAlt className="text-red-800"></FaTrashAlt></button>
                                </th>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ManageCamp;