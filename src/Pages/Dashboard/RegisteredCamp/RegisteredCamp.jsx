import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

const RegisteredCamp = () => {

    const { user } = useContext(AuthContext);
    const axiosSecure = useAxios();

    const { data: registeredCamp = [], refetch } = useQuery({
        queryKey: ['RegisteredCamp'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/registeredCampParticipantN?email=${user?.email}`)
            return res.data;
        }
    })
    console.log('A lot of Registered Camp in here', registeredCamp);


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
                <h2 className="text-4xl">Total Camp: {registeredCamp.length}</h2>
                <table className="table table-zebra w-full ">
                    {/* head */}
                    <thead className="bg-slate-700 text-white">
                        <tr>
                            <th>
                                Sl No
                            </th>
                            <th>Camp Name</th>
                            <th>Fees</th>
                            <th>Payment Status</th>
                            <th>Conformation Status </th>
                            <th>Cancel Button </th>
                            <th>FeedBack</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            registeredCamp.map((item, index) => <tr key={item._id}>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>

                                <td>
                                    {item.campName}
                                </td>
                                <th>{item.campFees}</th>
                                <th>{item.payment === 'paid' ? 'Paid' : <Link to={`/dashboard/payment/${item._id}`}> <button className="btn btn-outline ">Pay</button> </Link>}
                                </th>
                                <td>{item.conformationStatus}</td>
                                <td>{item.cancelButton === 'noCancel' ? <button disabled className="btn btn-outline">cancel</button> : <button onClick={() => handleCancel(item._id)} className="btn btn-outline">{item.cancelButton}</button>} </td>
                                <td>{item.feedback}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default RegisteredCamp;