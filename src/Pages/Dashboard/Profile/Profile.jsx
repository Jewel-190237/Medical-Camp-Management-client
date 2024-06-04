import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

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
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name: {emailUser[0].name}</h2>
                <h2 className="card-title">Email: {emailUser[0].email}</h2>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;