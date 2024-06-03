import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const JoinCamp = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const userName = user?.displayName;
    const camp = useLoaderData();
    // eslint-disable-next-line no-unused-vars
    const { _id, campName, healthCarePName, location, participantCount, photo_url, time, campFees, description } = camp;
    return (
        <div>
            <div>
                <div className="md:flex gap-4 ">
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text text-lime-200">Camp Name: </span>
                        <span className="input input-bordered w-full input-success flex items-center"> {campName} </span>
                    </div>
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text text-lime-200">Camp Fees: </span>
                        <span className="input input-bordered w-full input-success flex items-center"> {campFees} </span>
                    </div>
                </div>
                <div className="md:flex gap-4 ">
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text text-lime-200">Location </span>
                        <span className="input input-bordered w-full input-success flex items-center"> {location} </span>
                    </div>
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text text-lime-200">Healthcare Professional Name </span>
                        <span className="input input-bordered w-full input-success flex items-center"> {healthCarePName} </span>
                    </div>
                </div>
                <div className="md:flex gap-4 ">
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text text-lime-200">Participant Name  </span>
                        <span className="input input-bordered w-full input-success flex items-center"> {userName} </span>
                    </div>
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text text-lime-200">Participant Email </span>
                        <span className="input input-bordered w-full input-success flex items-center"> {healthCarePName} </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinCamp;