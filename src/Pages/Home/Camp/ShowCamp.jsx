/* eslint-disable react/prop-types */

import { FcViewDetails } from "react-icons/fc";
import { Link } from "react-router-dom";

const ShowCamp = ({ camp }) => {
    const { _id, campName, healthCarePName, participantCount, photo_url, campFees } = camp;
    console.log(camp);
    console.log(campName, campFees);

    return (
        <div>
            <div className="card bg-slate-700 shadow-xl mb-4 p-4">
                <figure><img src={photo_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-green-600 text-2xl font-bold">
                        {campName}
                    </h2>
                    <p className="text-green-600 mb-4"><span className="text-xl">Specialist:  {healthCarePName} </span> </p>
                    <hr />
                    <div className="flex justify-between">
                        <p className="text-green-600">Camp Fees: <span className="font-bold "> {campFees} </span> </p>
                        <p className="text-green-600">Participant: <span className="font-bold"> {participantCount} </span></p>
                    </div>
                    <hr />
                    <div className="flex justify-between gap-4">
                        <Link to={`/campDetails/${_id}`} className="btn btn-outline btn-block my-2 bg-emerald-800 ">
                            <button className="flex gap-4 ">
                                <FcViewDetails></FcViewDetails>
                                View Details
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCamp;