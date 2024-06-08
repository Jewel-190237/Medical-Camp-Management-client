import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ShowCamp from "../Home/Camp/ShowCamp";
import { useEffect, useState } from "react";



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
    const [allCamp, setAllCamp] = useState(camps);
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

    const [query, setQuery] = useState('');
    console.log(query);

    // console.log('Camp Name = ', allCamp[0]?.campName);
    // const allCampName = allCamp.map(item => ({ name: item.campName }));
    // console.log('All camp name in here', allCampName);





    useEffect(() => {
        axiosSecurePublic.get('/camps')
            .then(res => {
                console.log(res.data);
                setAllCamp(res.data);
            })
    }, []);
    console.log('allCamp', allCamp);


    return (
        <div>
            <div className="flex justify-evenly m-4">
                <input onChange={e => setQuery(e.target.value)} type="text" name="campName" placeholder="Type a camp name" className="input input-bordered input-success w-full max-w-xs" />
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
                        allCamp.filter((item) => {
                            return query.toLowerCase() === '' ? item : item.campName.toLowerCase().includes(query)
                        }).map(camp => <ShowCamp key={camp._id} camp={camp}></ShowCamp>)
                    }
                </div>
            </div>

        </div>
    );
};

export default AvailableCamp;