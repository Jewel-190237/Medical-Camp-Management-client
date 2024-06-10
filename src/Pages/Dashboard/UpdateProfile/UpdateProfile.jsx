import { MdUpdate } from "react-icons/md";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';
import 'sweetalert2/src/sweetalert2.scss'
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const UpdateProfile = () => {
    const navigate = useNavigate();
    const axiosSecurePublic = useAxiosPublic();

    const user = useLoaderData();
    console.log(user);
    const handleUpdateProfile = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;

        const currentUser = { name, email, photo };
        console.log(currentUser);

        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */

            if (result.isConfirmed) {
                axiosSecurePublic.put(`/updateProfile/${user[0]._id}`, currentUser)
                    .then(res => {
                        console.log(res.data);
                    })
                Swal.fire("Saved!", "", "success");
                navigate('/dashboard/profile');

            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }
    return (
        <div className="ml-8">
            <p className="text-center font-bold text-3xl">
                Update Profile of {user[0]?.name}
            </p>
            <form onSubmit={handleUpdateProfile}>
                <div className="md:flex gap-4 ">
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text"> Name: </span>
                        <input type="text" name="name" defaultValue={user[0]?.name} className="input input-bordered w-full input-success" />
                    </div>
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text ">Email</span>
                        <input type="text" name="email" defaultValue={user[0]?.email} className="input input-bordered w-full input-success" />
                    </div>
                </div>
                <div className="form-control md:w-full p-4">
                    <span className="label-text ">Photo url: </span>
                    <input type="text" name="photo" defaultValue={user[0]?.photo} className="input input-bordered w-full input-success" />
                </div>
                <button className=" btn btn-block bg-emerald-800 btn-outline">
                    <MdUpdate className="text-xl"></MdUpdate>
                    <input type="submit" value="Update Profile" />
                </button>
            </form>
        </div>
    );
};

export default UpdateProfile;