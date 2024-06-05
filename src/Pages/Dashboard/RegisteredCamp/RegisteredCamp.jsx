import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const RegisteredCamp = () => {

    const { user } = useContext(AuthContext);
    // const [camp, setCamp] = useState([]);
    const [campN, setCampN] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/registeredCampParticipant/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setCamp(data)
    //             console.log(data)
    //         })
    // }, [user])

    // console.log(camp);


    useEffect(() => {
        fetch(`http://localhost:5000/registeredCampParticipantN?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCampN(data);
            })
    }, [user]);

    console.log('CampN', campN)

    return (
        <>
            <div className="flex justify-evenly py-8">
                <h2 className="text-4xl">Manage Registered Camp</h2>
            </div>

            <div className="w-full mx-10">
                <h2 className="text-4xl">Total Camp: {campN.length}</h2>
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            campN.map((item, index) => <tr key={item._id}>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>

                                <td>
                                    {item.campName}
                                </td>
                                <th>{item.campFees}</th>
                                <th>{item.payment === 'paid' ? 'Paid' : <Link to='/dashboard/payment'> <button className="btn btn-outline ">Pay</button> </Link>}
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default RegisteredCamp;