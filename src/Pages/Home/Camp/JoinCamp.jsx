import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { MdAddCircle } from "react-icons/md";

const JoinCamp = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const [emailUser, setUser] = useState([]);
    const camp = useLoaderData();
    // eslint-disable-next-line no-unused-vars
    const { _id, campName, healthCarePName, location, campFees } = camp;

    useEffect(() => {
        fetch(`http://localhost:5000/joinUser/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUser(data)
                console.log(data)
            })
    }, [user])

    console.log(emailUser);
    console.log(emailUser[0]?.name);
    const userName = emailUser[0]?.name;
    // console.log(emailUser[0]?.email;)
    // const userEmail = emailUser[0]?.email;

    const handleCreateCamp = event => {
        event.preventDefault();
        const form = event.target;
        const age = form.age.value;
        const gender = form.gender.value;
        const phoneNumber = form.phoneNumber.value;
        const emergencyContact = form.emergencyContact.value;

        const registeredInfo = { userName,campName, healthCarePName, location, campFees, age, gender, phoneNumber, emergencyContact};

        console.log(registeredInfo)

        // const assignmentName = form.assignmentName.value;
        // const difficultyLevel = form.difficultyLevel.value;
    }
    return (
        <div>
            {/* show previous information */}
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
                        <span className="input input-bordered w-full input-success flex items-center"> {user?.email} </span>
                    </div>
                </div>
            </div>
            {/* input information */}
            <div>
                <form onSubmit={handleCreateCamp}>
                    <div className="md:flex gap-4 ">
                        <div className="form-control md:w-1/2 p-4">
                            <span className="label-text text-lime-200">Age </span>
                            <input type="number" name="age" placeholder="Enter age" className="input input-bordered w-full input-success" />
                        </div>
                        <div className="form-control md:w-1/2 p-4">
                            <span className="label-text text-lime-200">Gender</span>
                            <select className='input input-bordered w-full input-success text-lime-200' name="gender" id="">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>

                    </div>
                    <div className="md:flex gap-4 ">
                        <div className="form-control md:w-1/2 p-4">
                            <span className="label-text text-lime-200">Phone Number </span>
                            <input type="number" name="phoneNumber" placeholder="Enter Phone Number" className="input input-bordered w-full input-success" />
                        </div>
                        <div className="form-control md:w-1/2 p-4">
                            <span className="label-text text-lime-200">Emergency Contact</span>
                            <input type="number" name="emergencyContact" placeholder="Enter Emergency Contact" className="input input-bordered w-full input-success" />
                        </div>
                    </div>

                    <button className=" btn btn-block bg-emerald-800 btn-outline">
                        <MdAddCircle className="text-xl"></MdAddCircle>
                        <input type="submit" value="Confirm Register" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default JoinCamp;