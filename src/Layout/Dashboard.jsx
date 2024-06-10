import { FaBook, FaCalendarDay, FaHome, FaList, FaShoppingCart, FaUser, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import { MdPayment } from "react-icons/md";

const Dashboard = () => {

    const [isAdmin] = useAdmin();

    return (
        <div className="flex">

            <div className="w-64 min-h-screen bg-slate-700">
                <ul className="menu p-4">

                    {
                        isAdmin ?
                            <>
                                <li className="p-1 uppercase text-white"><NavLink to='/dashboard/adminHome'>
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                                </li>
                                <li className="p-1 uppercase text-white"><NavLink to='/dashboard/profile'>
                                    <FaUser></FaUser>
                                    Profile</NavLink>
                                </li>
                                <li className="p-1 uppercase text-white"><NavLink to='/dashboard/addCamp'>
                                    <FaUtensils></FaUtensils>
                                    Add A Camp</NavLink>
                                </li>
                                <li className="p-1 uppercase text-white"><NavLink to='/dashboard/manageCamp'>
                                    <FaList></FaList>
                                    Manage Camp</NavLink>
                                </li>
                                <li className="p-1 uppercase text-white"><NavLink to='/dashboard/manageRegisteredCamp'>
                                    <FaBook></FaBook>
                                    Manage Registered Camp</NavLink>
                                </li>
                                <li className="p-1 uppercase text-white"><NavLink to='/dashboard/allUsers'>
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                                </li>

                            </>
                            :
                            <>
                                <li className="p-1 uppercase text-white"><NavLink to='/dashboard/profile'>
                                    <FaUser></FaUser>
                                    Profile</NavLink>
                                </li>
                                <li className="p-1 uppercase text-white"><NavLink to='/dashboard/analytics'>
                                    <FaCalendarDay></FaCalendarDay>
                                    Analytics</NavLink>
                                </li>
                                <li className="p-1 uppercase text-white"><NavLink to='/dashboard/paymentHistory'>
                                    <MdPayment></MdPayment>
                                    Payment History</NavLink>
                                </li>
                                <li className="p-1 uppercase text-white"><NavLink to='/dashboard/registeredCamp'>
                                    <FaShoppingCart></FaShoppingCart>
                                    Registered Camps
                                </NavLink>
                                </li>

                            </>
                    }

                    <div className="divider"></div>


                    {/* shared Dashboard    */}
                    <li className="p-1 uppercase text-white"><NavLink to='/'>
                        <FaHome></FaHome>
                        Home</NavLink>
                    </li>

                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;