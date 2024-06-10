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
    const [allCamp, setAllCamp] = useState(camps);
    // console.log(allCamp)
    refetch();



    const [query, setQuery] = useState('');
    console.log(query);


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
            <div>
                <h2 className="text-3xl font-bold text-center mt-8 text-emerald-400">Available Camp</h2>
                <p className="text-center mx-auto md:w-3/4 mb-10">
                    <p className="text-center">Join us for a day dedicated to promoting health and wellness within our community! The Community Health and Wellness Fair is a free event open to all ages, offering a wide range of healthcare services and educational resources. At the fair, attendees will have the opportunity to receive complimentary health screenings including blood pressure checks, cholesterol tests, and glucose monitoring</p>
                </p>
            </div>
            <div className="text-center mb-4">
                <input onChange={e => setQuery(e.target.value)} type="text" name="campName" placeholder="Type a camp name" className="input input-bordered input-success w-full max-w-xs" />
                
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