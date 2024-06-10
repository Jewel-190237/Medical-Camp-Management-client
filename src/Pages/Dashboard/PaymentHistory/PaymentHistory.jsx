import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxios();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment?email=${user?.email}`)
            return res.data;
        }
    })
    console.log(payments);
    return (
        <div className="m-10">
            <div>
                <he className="text-3xl">Total Payment: {payments.length}</he>
            </div>
            <div className="w-full ">
                <table className="table table-zebra w-full ">
                    {/* head */}
                    <thead className="bg-slate-700 text-white">
                        <tr>
                            <th>
                                Sl No
                            </th>
                            <th>Camp Name</th>
                            <th>Fees</th>
                            <th>Transaction ID</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((item, index) => <tr key={item._id}>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>

                                <td>
                                    {item.campName}
                                </td>
                                <th>{item.amount}</th>
                                <th>{item.transactionId}</th>
                                <th>{item.status}</th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default PaymentHistory;