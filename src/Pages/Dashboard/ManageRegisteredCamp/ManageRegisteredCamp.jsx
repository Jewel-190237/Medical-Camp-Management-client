import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import { GrStatusGood } from "react-icons/gr";
import { ImCancelCircle } from "react-icons/im";
import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss'

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

    const handleConfirm = async (id) => {
        console.log(id);
        axiosSecure.patch(`/updateRegisteredCampAdmin/${id}`)
            .then(result => {
                console.log(result.data);
                Swal.fire({
                    title: "Confirmed!",
                    text: "Payment confirmed successfully.",
                    icon: "success"
                });
                refetch();
            })
    }
    const handleCancel = async (id) => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be cancel Payment",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/deleteRegisteredCamp/${id}`)
                    .then(result => {
                        console.log(result.data);
                        Swal.fire({
                            title: "canceled!",
                            text: "Your payment has been canceled.",
                            icon: "success"
                        });
                        refetch();
                    })
            }
        });

    }

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
                            <th>Participant Name</th>
                            <th>Camp Name</th>
                            <th>Camp Fees</th>
                            <th> Payment Status</th>
                            <th> Conformation Status</th>
                            <th> Cancellation</th>

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
                                {/* updateRegisteredCampAdmin */}
                                <th>{item.userName}</th>
                                <td>{item.campName}</td>
                                <td>{item.campFees}</td>
                                <th>{item.payment}</th>


                                <th>{item.conformationStatus === 'confirmed' && item.payment === 'paid'  ? 'confirm': item.payment === 'paid' ? <button onClick={() => handleConfirm(item._id)} className="btn">pending</button> : <button disabled className="btn">pending</button> }  </th>


                                <th> {item.payment === 'paid' && item.conformationStatus === 'confirmed' ? <button disabled className="btn"><ImCancelCircle className="text-2xl text-red-500"></ImCancelCircle> </button> : <button onClick={() => handleCancel(item._id)} className="btn"><GrStatusGood className="text-2xl text-green-400"></GrStatusGood></button>} </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ManageRegisteredCamp;