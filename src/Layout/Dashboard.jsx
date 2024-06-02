import { FaBook, FaCalendarDay, FaHome, FaList, FaPaypal, FaShoppingCart,  FaUsers, FaUtensils } from "react-icons/fa";
import { FaBookBible, FaMarsAndVenus, FaUsersViewfinder } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {

    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-500">
                <ul className="menu p-4">

                    {
                        isAdmin ?
                            <>
                                <li className="p-1 uppercase text-white"><NavLink to='/dashboard/adminHome'>
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                                </li>
                                <li className="p-1 uppercase text-white"><NavLink to='/dashboard/addItems'>
                                    <FaUtensils></FaUtensils>
                                    Add Items</NavLink>
                                </li>
                                <li className="p-1 uppercase text-white"><NavLink to='/dashboard/manageItems'>
                                    <FaList></FaList>
                                    Manage Items</NavLink>
                                </li>
                                <li className="p-1 uppercase text-white"><NavLink to='/dashboard/manageBookings'>
                                    <FaBook></FaBook>
                                    Manage Bookings</NavLink>
                                </li>
                                <li className="p-1 uppercase text-white"><NavLink to='/dashboard/allUsers'>
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                                </li>
                                
                            </>
                            :
                            <>
                                <li className="p-1 uppercase text-white"><NavLink to='/dashboard/userHome'>
                                    <FaHome></FaHome>
                                    User Home</NavLink>
                                </li>
                                <li className="p-1 uppercase text-white"><NavLink to='/dashboard/Reservation'>
                                    <FaCalendarDay></FaCalendarDay>
                                    Reservation</NavLink>
                                </li>
                                <li className="p-1 uppercase text-white"><NavLink to='/dashboard/paymentHistory'>
                                    <FaPaypal></FaPaypal>
                                    Payment History</NavLink>
                                </li>
                                <li className="p-1 uppercase text-white"><NavLink to='/dashboard/cart'>
                                    <FaShoppingCart></FaShoppingCart>
                                    My Cart</NavLink>
                                </li>
                                <li className="p-1 uppercase text-white"><NavLink to='/dashboard/addReview'>
                                    <FaUsersViewfinder></FaUsersViewfinder>
                                    Add Review</NavLink>
                                </li>
                                <li className="p-1 uppercase text-white"><NavLink to='/dashboard/myBooking'>
                                    <FaBookBible></FaBookBible>
                                    My Booking</NavLink>
                                </li>
                            </>
                    }

                    <div className="divider"></div>


                    {/* shared Dashboard    */}
                    <li className="p-1 uppercase text-white"><NavLink to='/'>
                        <FaHome></FaHome>
                        Home</NavLink>
                    </li>
                    <li className="p-1 uppercase text-white"><NavLink to='/menu'>
                        <FaMarsAndVenus></FaMarsAndVenus>
                        Order</NavLink>
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