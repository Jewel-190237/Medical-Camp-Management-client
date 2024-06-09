import { useQuery } from "@tanstack/react-query";
import { MdAddTask } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const CampDetails = () => {

    const camp = useLoaderData();
    const axiosSecurePublic = useAxiosPublic();
    const { _id, campName, healthCarePName, location, participantCount, photo_url, time, campFees, description } = camp;

    

    const {data: registeredCampCount = [] } = useQuery({
        queryKey: ['registeredCamp'],
        queryFn: async () => {
            const res = await axiosSecurePublic.get(`/registeredCampCount/${_id}`)
            return res.data;
        }
    })

    console.log('Registered Count',registeredCampCount);
    return (
        <div className="bg-slate-700 rounded-2xl p-4">
            <div>
                <h2 className="text-2xl font-bold text-center mt-8 text-emerald-400">Camp Details of {campName}</h2>
                <p className="text-center mx-auto md:w-3/4 mb-10">
                    <p className="text-lime-200">Assignment Insights: Unlocking the Path to Academic Excellence. Delve into the intricacies of each task, from deadlines to resources, grading criteria, and more. Illuminate your academic path with clarity and precision through comprehensive assignment details. </p>
                </p>
            </div>
            <div className="hero ">
                <div className="flex  flex-col md:flex-col lg:flex-row w-full gap-8">
                    <div className="w-full">
                        <img className='w-full rounded-3xl p-3' src={photo_url} alt={campName} />
                    </div>
                    <div className="p-3 w-full">
                        <h1 className="text-xl font-bold p-3 text-[#23BE0A] bg-[#23BE0A0D] rounded-xl ">Camp Name: {campName}</h1>
                        <p className="m-1 p-2 text-[#23BE0A] bg-[#23BE0A0D] rounded-xl ">healthCarePName : {healthCarePName}</p>
                        <hr />
                        <p className="font-bold text-[#23BE0A] bg-[#23BE0A0D] rounded-xl p-2">Description: <span className="font-thin">{description}</span></p>
                        <hr />
                        <div >
                            <div className="p-2 text-[#23BE0A] bg-[#23BE0A0D] rounded-xl w-full">
                                <div className="flex mt-1 ">
                                    <p className="mr-12">Camp Fees:</p>
                                    <p className="font-bold">{campFees}</p>
                                </div>
                                <div className="flex mt-1 ">
                                    <p className="mr-14">Participant </p>
                                    <p className="font-bold">{participantCount}</p>
                                </div>
                                <div className="flex mt-1 ">
                                    <p className="mr-12">Due Time</p>
                                    <p className="font-bold">{time}</p>
                                </div>
                                <div className="flex mt-1 p-2  ">
                                    <p className="mr-16"> Email:</p>
                                    <p className="font-bold">{location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-outline btn-block  my-2 bg-emerald-700 ">
            <Link to={`/joinCamp/${_id}`}>
                <button className="flex gap-4">
                    <MdAddTask className="text-xl"></MdAddTask>
                    Join Camp
                </button>
            </Link>
        </button>
            {/* <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-block my-2 bg-emerald-700 ">
            <Link to={`/assignmentForm/${_id}`} >
                <button className="flex gap-4">
                    <MdAddTask className="text-xl"></MdAddTask>
                    Take Assignment
                </button>
            </Link>
        </button> */}
        </div>
    );
};

export default CampDetails;