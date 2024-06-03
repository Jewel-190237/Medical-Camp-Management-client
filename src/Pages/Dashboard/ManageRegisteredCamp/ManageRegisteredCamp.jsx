import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
const ManageRegisteredCamp = () => {
    const axiosSecure = useAxios();
    const { data: camp = [], refetch } = useQuery({
        queryKey: ['camp'],
        queryFn: async () => {
            const res = await axiosSecure.get('/registeredCamp')
            return res.data;
        }
    })
    console.log(camp)

    refetch();
    return (
        <>
        <div className="flex justify-evenly py-8">
            <h2 className="text-4xl">Manage Registered Camp</h2>
        </div>

        <div className="w-full mx-10">
            <h2 className="text-4xl ">Total Registered Camp Camp: {camp.length}</h2>
            <table className="table table-zebra w-full ">
                {/* head */}
                <thead className="bg-slate-700 text-white">
                    <tr>
                        <th>
                            Sl No
                        </th>
                        <th>Camp Name</th>
                        <th>Location</th>
                        <th> Healthcare Professional</th>
                        
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
                            <th>{item.location}</th>
                            <th>{item.healthCarePName}</th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </>
    );
};

export default ManageRegisteredCamp;