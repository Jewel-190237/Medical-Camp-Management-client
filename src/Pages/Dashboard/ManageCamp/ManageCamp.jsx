import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

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
    }
    refetch();


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
                                    {/* <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                                </td>
                                <th>{item.time}</th>
                                <th>{item.location}</th>
                                <th>{item.healthCarePName}</th>
                                <th>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-lg"> <FaEdit className="text-orange-400"></FaEdit> </button>
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

export default ManageCamp;