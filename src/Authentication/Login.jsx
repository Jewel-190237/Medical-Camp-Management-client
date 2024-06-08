import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
// import { TiUserAdd } from "react-icons/ti";
import { FaSignInAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import photo from "../assets/signIn.jpg"
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
// import UseTitle from "../Components/Pages/Layouts/UseTitle";
// import UseTitle from "../layout/UseTitle";




const Login = () => {

    //  UseTitle('Login')

    const axiosSecurePublic = useAxiosPublic()
    const location = useLocation();
    const naviGate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const { signInUser, googleSignIn } = useContext(AuthContext)

    const handleSignIn = async (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        try {
            // Attempt to sign in
            await signInUser(email, password);
            axiosSecurePublic.post('/jwt', { email: email })
                .then(res => {
                    console.log(res.data)
                    if (res.data) {
                        window.localStorage.setItem('access-token', res.data)
                        // setUser(currentUser);
                        // setLoading(false);
                    }

                })

            naviGate(location?.state ? location.state : '/');
            Swal.fire({
                icon: 'success',
                title: 'Login successful!',
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Login failed',
                text: 'Please check your credentials and try again.'
            });
        }

    }

    const handlesSignInWithGoogle = () => {
        googleSignIn()
            .then(result => {
                // console.log(result.user);
                // console.log('LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL');

                const currentUserInfo = {
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL
                }
                // console.log(currentUserInfo);
                axiosSecurePublic.post('/users', currentUserInfo);
                naviGate(location?.state ? location.state : '/');
                Swal.fire({
                    icon: 'success',
                    title: 'Login successful!',
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Login failed',
                    text: 'Please try again later.'
                });
            });
    }


    return (
        <div>
            <div className=" rounded-2xl mb-8">
                <h1 className="text-4xl text-center font-bold text-green-600 mt-4">Login Here</h1>
                <div className="hero-content flex gap-8">
                    <div className="text-center flex-1 ">
                        <img className="rounded-2xl w-full" src={photo} alt="" />
                    </div>
                    <div className="md:w-5/12 w-full rounded-2xl">

                        <form onSubmit={handleSignIn} className="card-body rounded-2xl">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <div className="flex">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password" placeholder="Enter Your Password" className="input w-full border-slate-300 pr-16" required />
                                    <span onClick={() => setShowPassword(!showPassword)} className="mt-4 -ml-5 ">
                                        {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                                    </span>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                {/* <button className="btn bg-green-700 text-white">Login</button> */}

                                <button className="btn btn-outline  bg-emerald-800 w-full mt-4">
                                    <FaSignInAlt></FaSignInAlt>
                                    Login
                                </button>
                            </div>
                            <div>
                                <p className="text-center"> or,  Continue with</p>
                            </div>
                            <div className="flex gap-3 justify-center">
                                <button onClick={handlesSignInWithGoogle} className="btn btn-outline btn-block text-xl text-green-700">
                                    <FaGoogle></FaGoogle> Google
                                </button>
                            </div>
                            <div>
                                <p className="text-center mt-4">New Here ? please
                                    <Link className="font-bold ml-4 text-cyan-800" to='/register'>
                                        Register
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

export default Login;