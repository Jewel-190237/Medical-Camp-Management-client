import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';
import 'sweetalert2/src/sweetalert2.scss'
import DatePicker from "react-datepicker";
import { MdAddCircle } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";
import useAxios from "../../../Hooks/useAxios";


const AddCamp = () => {
    // UseTitle('Create Assignment')

    const axiosSecure = useAxios();
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext);
    const email = user.email;

    const navigate = useNavigate();

    // E.Location


    const handleCreateCamp = event => {
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

        const newCamp = { email, campName, participantCount, healthCarePName, campFees, photo_url, time, description, location }

        console.log(newCamp);

        axiosSecure.post('/camps', newCamp)
            .then(res => {
                console.log(res.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Camp Added successfully',
                    showConfirmButton: false,
                    timer: 2000
                });
                navigate('/')

            })


        // fetch('https://assignment-11-server-livid-pi.vercel.app/assignments', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newAssignment)
        // })

        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         Swal.fire({
        //             icon: "Success",
        //             title: "Camp Added Successfully",
        //             showConfirmButton: false,
        //             timer: 2000
        //         });
        //         navigate('/')
        //     })
    }
    return (
        <div className="bg-slate-700 rounded-xl w-10/12 mx-auto p-10">
            <div>
                <h2 className="text-3xl font-bold text-center mt-8 text-emerald-400">Create a New Camp</h2>
                <p className="text-center mx-auto md:w-3/4 mb-10">
                    <p className="text-lime-200">Assignment Creation Portal. Seamlessly craft assignments to guide and inspire your students learning journeys. Elevate education with precision, purpose, and passion</p>
                </p>
            </div>
            <form onSubmit={handleCreateCamp}>
                <div className="md:flex gap-4 ">
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text text-lime-200">Camp Name: </span>
                        <input type="text" name="campName" placeholder="Enter Camp Name" className="input input-bordered w-full input-success" />
                    </div>
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text text-lime-200">Participant Count: </span>
                        <input type="number" name="participantCount" placeholder="Enter Participant Count" className="input input-bordered w-full input-success" />
                    </div>

                </div>
                <div className="md:flex gap-4 ">
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text text-lime-200">Healthcare Professional Name: </span>
                        <input type="text" name="healthCarePName" placeholder="Healthcare Professional Name" className="input input-bordered w-full input-success" />
                    </div>
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text text-lime-200">Camp Fees:</span>
                        <input type="number" name="campFees" placeholder="Enter Camp Fees" className="input input-bordered w-full input-success" />
                    </div>
                </div>
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text text-lime-200">Photo url: </span>
                        <input type="text" name="photo_url" placeholder="Enter Photo url" className="input input-success input-bordered w-full" />
                    </div>
                    <div className="form-control p-4 text-lime-200">
                        Select Due Time:
                        <DatePicker className=" input input-success input-bordered " showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                </div>
                <div className="md:flex gap-4 mb-4 ">
                    <div className="form-control w-full p-4">
                        <span className="label-text text-lime-200">Location:</span>
                        <input type="text" name="location" placeholder="Enter Location" className="input input-success input-bordered w-full" />
                    </div>
                    <div className="form-control w-full p-4">
                        <span className="label-text text-lime-200">Description:</span>
                        <input type="text" name="description" placeholder="Enter Assignment Description" className="input input-success input-bordered w-full" />
                    </div>
                </div>
                <button className=" btn btn-block bg-emerald-800 btn-outline">
                    <MdAddCircle className="text-xl"></MdAddCircle>
                    <input type="submit" value="Add Camp" />
                </button>
            </form>
        </div>
    );
};

export default AddCamp;