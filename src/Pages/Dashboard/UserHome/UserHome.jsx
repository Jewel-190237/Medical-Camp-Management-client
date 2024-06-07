import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";

const UserHome = () => {
    const axiosSecure = useAxios()
    const { user } = useContext(AuthContext);

    const { data: currentUser = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/currentUser?email=${user?.email}`)
            return res.data;
        }
    })
    console.log(user);
    console.log(currentUser[0]?.name);
    const { data: information } = useQuery({
        queryKey: ['admin-states'],
        queryFn: async () => {
            const info = await axiosSecure.get('/admin-states')
            return info.data;
        }
    })
    console.log(information)
    return (
        <div>
            <h2 className="text-4xl">
                <span> Welcome </span>
                {
                    currentUser[0]?.name ? currentUser[0].name : 'Back'
                }
                to Analytics
            </h2>
        </div>
    );
};

export default UserHome;