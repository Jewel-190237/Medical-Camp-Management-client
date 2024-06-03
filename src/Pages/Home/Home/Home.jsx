import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import Banner from "../Banner/Banner";
import ShowCamp from "../Camp/ShowCamp";

const Home = () => {
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
            <Banner></Banner>
            {/* show popular camp */}
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

export default Home;