import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from "react";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { useContext } from "react";
import photo from "../assets/signIn.jpg"
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { AuthContext } from "../Providers/AuthProvider";
// import UseTitle from "../Components/Pages/Layouts/UseTitle";




const Register = () => {
    // UseTitle('Register')

    const axiosSecurePublic = useAxiosPublic();
    const { createUser } = useContext(AuthContext)

    const [passwordError, setPasswordError] = useState(null)
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();


    const handleRegister = async (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');

        const userInfo = {
            name: name,
            email: email
        }

        setPasswordError('');
        console.log(name, email, password);

        const uppercase = /[A-Z]/.test(password);
        const lowercase = /[a-z]/.test(password);
        const length = password.length >= 6;


        if (!uppercase || !lowercase || !length) {
            setPasswordError("Password must contain at least one uppercase letter, one lowercase letter, and have a minimum length of 6 characters.");
            return;
        }

        try {
            await createUser(email, password)
                .then(result => {
                    console.log(result);
                    axiosSecurePublic.post('/users', userInfo)
                })

            Swal.fire({
                icon: 'success',
                title: 'Registration successfully',
                showConfirmButton: false,
                timer: 2000
            });
            navigate('/');
        } catch (error) {

            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Registration failed',
                text: 'Please try again later.'
            });
        }
    }

    return (
        <div>
            <div className=" min-h-screen rounded-xl mb-8">
                <h1 className="text-4xl text-center font-bold text-green-600 mt-4">Register Now</h1>
                <div className="hero-content flex">
                    <div className="text-center flex-1 ">
                        <img className="rounded-2xl w-full" src={photo} alt="" />
                    </div>
                    <div className="md:w-5/12 w-full rounded-2xl" >
                        <form onSubmit={handleRegister} className="card-body rounded-2xl">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="flex">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password" placeholder="Password" className="input w-full border-slate-300 pr-16" required />
                                    <span onClick={() => setShowPassword(!showPassword)} className="mt-4 -ml-5">
                                        {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                                    </span>
                                </div>
                                {passwordError && <p className="text-xs text-red-500">{passwordError}</p>}

                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-block btn-outline bg-emerald-800">Register</button>
                            </div>
                            <div>
                                <p className="text-center">Already have an account?  Please
                                    <Link className="font-bold font-xl ml-8" to='/login'>
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;