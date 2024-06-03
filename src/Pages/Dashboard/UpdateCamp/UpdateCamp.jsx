import { MdAddCircle } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';
import 'sweetalert2/src/sweetalert2.scss'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import useAxios from "../../../Hooks/useAxios";
import { useState } from "react";

const UpdateCamp = () => {
    const camp = useLoaderData();
    const {campName, participantCount, healthCarePName, campFees, photo_url, description, location } = camp;

    console.log(camp);

    // const navigate = useNavigate();
    // const axiosSecure = useAxios();
    const [startDate, setStartDate] = useState(new Date());

    const handleUpdateCamp = event => {
        event.preventDefault();
        const form = event.target;

        const campName = form.campName.value;
        const participantCount = form.participantCount.value;
        const healthCarePName = form.healthCarePName.value;
        const campFees = form.campFees.value;
        const photo_url = form.photo_url.value;
        const time = startDate;
        const description = form.description.value;
        const location = form.location.value;

        const updateCamp = {campName, participantCount, healthCarePName, campFees, photo_url, time, description, location }

        console.log(updateCamp);
        
    }
    return (
        <div>
            <form onSubmit={handleUpdateCamp}>
                <div className="md:flex gap-4 ">
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text text-lime-200">Camp Name: </span>
                        <input type="text" name="campName" defaultValue={campName} className="input input-bordered w-full input-success" />
                    </div>
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text text-lime-200">Participant Count: </span>
                        <input type="number" name="participantCount" defaultValue={participantCount} className="input input-bordered w-full input-success" />
                    </div>

                </div>
                <div className="md:flex gap-4 ">
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text text-lime-200">Healthcare Professional Name: </span>
                        <input type="text" name="healthCarePName" defaultValue={healthCarePName} className="input input-bordered w-full input-success" />
                    </div>
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text text-lime-200">Camp Fees:</span>
                        <input type="number" name="campFees" defaultValue={campFees} className="input input-bordered w-full input-success" />
                    </div>
                </div>
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text text-lime-200">Photo url: </span>
                        <input type="text" name="photo_url" defaultValue={photo_url} className="input input-success input-bordered w-full" />
                    </div>
                    <div className="form-control p-4 text-lime-200">
                        Select Due Time:
                        <DatePicker className=" input input-success input-bordered " showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                </div>
                <div className="md:flex gap-4 mb-4 ">
                    <div className="form-control w-full p-4">
                        <span className="label-text text-lime-200">Location:</span>
                        <input type="text" name="location" defaultValue={location} className="input input-success input-bordered w-full" />
                    </div>
                    <div className="form-control w-full p-4">
                        <span className="label-text text-lime-200">Description:</span>
                        <input type="text" name="description" defaultValue={description} className="input input-success input-bordered w-full" />
                    </div>
                </div>
                <button className=" btn btn-block bg-emerald-800 btn-outline">
                    <MdAddCircle className="text-xl"></MdAddCircle>
                    <input type="submit" value="Update Camp" />
                </button>
            </form>

        </div>
    );
};

export default UpdateCamp;