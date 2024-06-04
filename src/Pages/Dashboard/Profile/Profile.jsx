import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const [emailUser, setUser] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/joinUser/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUser(data)
                console.log(data)
            })
    }, [user])

    console.log(emailUser);

    return (
        <div className=" bg-base-100 w-1/2 shadow-xl mx-auto">
            <figure className="px-10 pt-10">
                <img src={emailUser[0]?.photo} alt="" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name: {emailUser[0]?.name}</h2>
                <h2 className="card-title">Email: {emailUser[0]?.email}</h2>
                <div className="card-actions">
                <Link to={`/dashboard/updateProfile/${emailUser[0]?.email}`}> <button  className="btn btn-ghost btn-lg"> <FaEdit className="text-orange-400"> </FaEdit> Update Profile </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Profile;