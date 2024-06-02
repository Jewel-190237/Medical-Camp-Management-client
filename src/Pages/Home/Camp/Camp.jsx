import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import ShowCamp from "./ShowCamp";

const Camp = () => {
    const axiosSecure = useAxios();

    const { data: camps = [], refetch } = useQuery({
        queryKey: ['Users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/camps')
            return res.data;
        }
    })
    refetch();

    return (
        <div>
            camp: {camps.length}
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            {
                camps.map(camp => <ShowCamp key={camp._id} camp={camp}></ShowCamp>)
            }
            </div>
        </div>
    );
};

export default Camp;