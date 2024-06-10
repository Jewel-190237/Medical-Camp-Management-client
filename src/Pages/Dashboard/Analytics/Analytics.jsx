/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { FaUsers } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { CiMedicalCase } from "react-icons/ci";
import { FaHouseMedicalCircleCheck } from "react-icons/fa6";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];



const Analytics = () => {
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

    const { data: information = [] } = useQuery({
        queryKey: ['admin-states'],
        queryFn: async () => {
            const info = await axiosSecure.get('/admin-states')
            return info.data;
        }
    })
    console.log(information);


    //customize ber chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const data = [
        {
            name: 'Users',
            uv: information.users,
            pv: 2,
            amt: 8,
        },
        {
            name: 'Camp',
            uv: information.camps,
            pv: 7,
            amt: 6,
        },
        {
            name: 'RegisteredCamp',
            uv: information.registeredCamps,
            pv: 9,
            amt: 2,
        },
        {
            name: 'Payments',
            uv: information.payments,
            pv: 3,
            amt: 2,
        },
    ];

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

  
    return (
        <div className="m-10">
            <h2 className="text-4xl">
                <span> Welcome </span>
                <span className="text-blue-600">
                    {
                        currentUser[0]?.name ? currentUser[0].name : 'Back'
                    }
                </span>
                <span> to Analytics</span>
            </h2>
            <div>
                <div className="flex gap-4 justify-center mt-8">
                    <div className="stat border border-lime-800 rounded-2xl mx-auto">
                        <div className="stat-title text-center"> Total Users</div>
                        <div className="stat-value text-primary flex gap-3 mx-auto"><FaUsers></FaUsers>{information?.users}</div>
                        <div className="stat-desc text-center">21% more than last month</div>
                    </div>
                    <div className="stat border border-lime-800 rounded-2xl  mx-auto">
                        <div className="stat-title text-center"> Total Camp</div>
                        <div className="stat-value text-primary flex gap-3 mx-auto"><CiMedicalCase></CiMedicalCase> {information?.camps}</div>
                        <div className="stat-desc text-center">21% more than last month</div>
                    </div>
                    <div className="stat border border-lime-800 rounded-2xl  mx-auto">
                        <div className="stat-title text-center"> Total Registered Camp</div>
                        <div className="stat-value text-primary flex gap-3 mx-auto items-center"><FaHouseMedicalCircleCheck></FaHouseMedicalCircleCheck> {information?.registeredCamps}</div>
                        <div className="stat-desc text-center">21% more than last month</div>
                    </div>
                    <div className="stat border border-lime-800 rounded-2xl mx-auto">
                        <div className="stat-title text-center"> Total Payments</div>
                        <div className="stat-value text-primary flex gap-3 mx-auto items-center"><MdPayment></MdPayment> {information?.payments}</div>
                        <div className="stat-desc text-center">21% more than last month</div>
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-center mt-4">
                <div className="w-full">
                    <BarChart
                        width={900}
                        height={500}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 4]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                
            </div>
        </div>
    );
};

export default Analytics;