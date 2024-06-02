import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
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

    const handleCreateAssignment = event => {
        event.preventDefault();
        const form = event.target;

        const assignmentName = form.assignmentName.value;
        const difficultyLevel = form.difficultyLevel.value;
        const assignmentTitle = form.assignmentTitle.value;
        const assignmentMark = form.assignmentMark.value;
        const photo_url = form.photo_url.value;
        const dueTime = startDate;
        const description = form.description.value;

        const newAssignment = { email, assignmentName, difficultyLevel, assignmentTitle, assignmentMark, photo_url, dueTime, description }

        console.log(newAssignment);

        axiosSecure.post('/camps', newAssignment)
            .then(res => {
                console.log(res.data);
                Swal.fire({
                    icon: "Success",
                    title: "Camp Added Successfully",
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
                <h2 className="text-3xl font-bold text-center mt-8 text-emerald-400">Create a New Assignment</h2>
                <p className="text-center mx-auto md:w-3/4 mb-10">
                    <p className="text-lime-200">Assignment Creation Portal. Seamlessly craft assignments to guide and inspire your students learning journeys. Elevate education with precision, purpose, and passion</p>
                </p>
            </div>
            <form onSubmit={handleCreateAssignment}>
                <div className="md:flex gap-4 ">
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text text-lime-200">Name: </span>
                        <input type="text" name="assignmentName" placeholder="Enter Assignment Name" className="input input-bordered w-full input-success" />
                    </div>
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text text-lime-200">Difficulty level</span>
                        <select className='input input-bordered w-full input-success text-lime-200' name="difficultyLevel" id="">
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>
                </div>
                <div className="md:flex gap-4 ">
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text text-lime-200">Assignment Title: </span>
                        <input type="text" name="assignmentTitle" placeholder="Enter Assignment Title" className="input input-bordered w-full input-success" />
                    </div>
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text text-lime-200">Assignment Mark:</span>
                        <input type="number" name="assignmentMark" placeholder="Enter Assignment Mark" className="input input-bordered w-full input-success" />
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
                        <span className="label-text text-lime-200">Description:</span>
                        <input type="text" name="description" placeholder="Enter Assignment Description" className="input input-success input-bordered w-full" />
                    </div>
                </div>
                <button className=" btn btn-block bg-emerald-800 btn-outline">
                    <MdAddCircle className="text-xl"></MdAddCircle>
                    <input type="submit" value="Create Assignment" />
                </button>
            </form>
        </div>
    );
};

export default AddCamp;