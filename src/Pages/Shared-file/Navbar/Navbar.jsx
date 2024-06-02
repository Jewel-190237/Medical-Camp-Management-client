import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png"
import user1 from "../../../assets/user.png"
import { useContext, useEffect, useState } from "react";
import { Tooltip } from 'react-tooltip';
import './Navbar.css'
import { AuthContext } from "../../../Providers/AuthProvider";


const Navbar = () => {

    
    const { user, logOutUser } = useContext(AuthContext);
    console.log(user);
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme])

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark')
        }
        else
            setTheme('light')
    }

    const navLinks = <>
        {/* <li id="link"><NavLink to="/">Home</NavLink></li> */}
        <li id="link"> <NavLink to='/'>Home </NavLink> </li>
        <li id="link1"> <NavLink to='/dashboard'>Dashboard</NavLink></li>
        <li id="link1"> <NavLink to='/createAssignment'>Create Assignment</NavLink></li>
        <li id="link1"> <NavLink to='/pendingAssignments'>Pending Assignments</NavLink></li>

    </>

    const handleSignOut = () => {
        logOutUser()
            .then()
            .catch()
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <img className="w-1/12 rounded-full" src={logo} alt="" />
                    <h1 className="text-2xl text-center font-bold ml-4"><span className="text-green-300 text-3xl">S</span>tudy<span className="text-yellow-300 text-3xl">U</span>nity<span className="text-red-500 text-3xl">H</span>ub</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                {
                    user ?
                        <div className="navbar-end gap-3">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {
                                            user.photoURL?
                                                <img alt="user" src={user.photoURL} />
                                                :
                                                <img alt="user" src={user1} />
                                        }

                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">

                                    <Link to='/myAssignments'> <li><a>Attempt Assignment</a></li> </Link>
                                    <li onClick={handleSignOut}><a>Logout</a></li>
                                </ul>
                            </div>

                            <button onClick={handleSignOut} ><a id="clickable" className="btn  my-anchor-element bg-slate-600 text-white outline outline-1 outline-green-700">Log Out</a>
                                <Tooltip anchorSelect="#clickable" clickable>
                                    <p className="">Are You sure to Logout?</p>
                                </Tooltip>
                            </button>

                        </div>
                        :
                        <div className="navbar-end gap-3">
                            {/* <img className="w-1/12 rounded-full" src={user1} alt="" /> */}
                            <Link to='/login'><button className="btn bg-slate-600 text-white outline outline-1 outline-green-700">
                                Login
                                <Tooltip anchorSelect="#clickable" clickable>
                                    <p className="">Are You sure?</p>
                                </Tooltip>
                            </button></Link>
                        </div>
                }
                <label className="swap swap-rotate ml-4">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" onChange={handleToggle} />
                    {/* sun icon */}
                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                    {/* moon icon */}
                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>
            </div>
        </div>
    );
};

export default Navbar;