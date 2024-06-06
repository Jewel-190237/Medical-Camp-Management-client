import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ShowCamp from "../Home/Camp/ShowCamp";
import { useState } from "react";

const AvailableCamp = () => {
    const axiosSecurePublic = useAxiosPublic();

    const { data: camps = [], refetch } = useQuery({
        queryKey: ['Users'],
        queryFn: async () => {
            const res = await axiosSecurePublic.get('/camps')
            return res.data;
        }
    })
    
    console.log(camps);
    const [value, setValue] = useState([]);
    // const [allCamp, setAllCamp] = useState(camps);
    // console.log(allCamp)
    refetch();

    const handleLevel = (event) => {
        setValue(event.target.value)
    }
    const level = value.toString();
    // const level = 'Easy';
    // const level = 'Medium';
    // console.log(typeof level)
    console.log(level)

    // useEffect(() => {
    //     fetch(`https://assignment-11-server-livid-pi.vercel.app/assignmentLevel?difficultyLevel=${level}`, { credentials: 'include' })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             // setAssignment(data);
    //         })
    // }, []);
    return (
        <div>
            <div className="flex justify-evenly m-4">
                <input type="text" placeholder="Type here something" className="input input-bordered input-success w-full max-w-xs" />
                <p className="text-center font-bold m-4 text-emerald-400 text-xl ">Difficulty Level:
                    <select className='text-xl form-select ml-8' name="difficultyLevel" onChange={handleLevel} >
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </p>
            </div>
            <div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                    {
                        camps.map(camp => <ShowCamp key={camp._id} camp={camp}></ShowCamp>)
                    }
                </div>
            </div>

        </div>
    );
};

export default AvailableCamp;