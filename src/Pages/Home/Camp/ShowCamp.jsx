/* eslint-disable react/prop-types */

import { FcViewDetails } from "react-icons/fc";
import { Link } from "react-router-dom";



const ShowCamp = ({ camp }) => {
    const { _id, campName, healthCarePName, location, participantCount, photo_url, time,  campFees } = camp;

    return (
        <div>
            <div className="card bg-slate-700 shadow-xl mb-4 p-4">
                <figure><img src={photo_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-green-600 text-2xl font-bold">
                        {campName}
                    </h2>
                    <p className="text-green-600 font-bold mb-4"><span className="font-bold"> {healthCarePName} </span> </p>
                    <hr/>
                    <p className="text-green-600 text-xl font-bold">Camp </p>
                    <p className="text-green-600">Camp Fees <span className="font-bold ml-5"> {campFees} </span> </p>
                    <p className="text-green-600">Participant: <span className="font-bold ml-5"> {participantCount} </span></p>
                    <p className="text-green-600">Time: <span className="font-bold ml-5"> {time} </span></p>
                    <p className="text-green-600">Location: <span className="font-bold ml-5"> {location} </span></p>
                    <hr />
                    <div className="flex justify-between gap-4">
                        <Link to={`/campDetails/${_id}`} className="btn btn-outline my-2 bg-emerald-800 w-1/2">
                            <button className="flex gap-4 ">
                                <FcViewDetails></FcViewDetails>
                                Details
                            </button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCamp;