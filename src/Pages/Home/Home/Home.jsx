import { useQuery } from "@tanstack/react-query";
import Banner from "../Banner/Banner";
import ShowCamp from "../Camp/ShowCamp";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import d1 from '../../../assets/d1.jpg'
import d2 from '../../../assets/d2.jpg'
import d3 from '../../../assets/d3.jpg'
import d4 from '../../../assets/d4.jpg'
import d5 from '../../../assets/d5.jpg'
import d6 from '../../../assets/d6.jpg'
import vax from '../../../assets/vax.png'

const Home = () => {
    // const axiosSecure = useAxios();
    const axiosSecurePublic = useAxiosPublic();

    const { data: camps = [], refetch } = useQuery({
        queryKey: ['Users'],
        queryFn: async () => {
            const res = await axiosSecurePublic.get('/camps')
            return res.data;
        }
    })
    refetch();
    return (
        <div>
            <Banner></Banner>
            {/* show popular camp */}
            <div>
                <div>
                    <h2 className="text-3xl font-bold text-center mt-8 text-emerald-400">Popular Camp</h2>
                    <p className="text-center mx-auto md:w-3/4 mb-10">
                        <p>Step into the realm where passion for healthcare meets the efficiency of cutting-edge management. Our renowned medical camp provides not just education but an immersive experience in holistic care. Join us as we blend expertise, compassion, and innovation, setting the standard for excellence in medical camp management</p>
                    </p>
                </div>
                <div>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                        {
                            camps.map(camp => <ShowCamp key={camp._id} camp={camp}></ShowCamp>)
                        }
                    </div>
                </div>
                <p className="text-center">
                    <Link to='/availableCamp'> <button className="btn bg-emerald-900 btn-outline">Show All Camp</button> </Link>
                </p>

            </div>
            {/* specialist */}
            <div>
                <div>
                    <h2 className="text-3xl font-bold text-center mt-8 text-emerald-400">Our Specialist Doctors</h2>
                    <p className="text-center mx-auto md:w-3/4 mb-10">
                        <p>Within the halls of our medical center, a symphony of specialized knowledge orchestrates the path to wellness. Our specialist doctors, each a maestro in their field, dedicate their expertise to unraveling the complexities of health. With a blend of unwavering dedication and profound empathy, they stand as beacons of hope, illuminating the journey towards healing and empowerment. Step into their realm, where every consultation is a masterpiece of precision, compassion, and transformation care.</p>
                    </p>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                    <div className="card bg-base-100 shadow-2xl border border-green-800">
                        <figure className="p-4 relative">
                            <img src={d1} alt="Shoes" className="w-full rounded-badge" />
                            <span className=" absolute bg-slate-400 p-3 rounded-xl text-black font-extrabold text-2xl top-3/4 mx-auto"> Nuro Specialist</span>
                        </figure>
                        <h2 className=" font-bold pt-4 text-2xl text-green-600 text-center">Dr. Robert Dalton</h2>
                        <p className="text-center pb-3">MBBS, FCPS in USA</p>
                        <p className="pl-4 mr-4 pb-4 text-justify">Embark on a journey of care led by our nursing specialists, where each patient is met with expertise, empathy, and unwavering support. Within the intricate tapestry of healthcare, our nurses stand as guardians of comfort and companionship, weaving together the threads of medical knowledge with the warmth of human connection. At our center, they are not just caregivers; they are advocates for wellness, guiding you through every step of your healing journey with compassion and dedication</p>

                    </div>
                    <div className="card bg-base-100 shadow-2xl border border-green-800">
                        <figure className="p-4 relative">
                            <img src={d2} alt="Shoes" className="w-full rounded-badge" />
                            <span className=" absolute bg-slate-400 p-3 rounded-xl text-black font-extrabold text-2xl top-3/4 mx-auto"> Eye Specialist</span>
                        </figure>
                        <h2 className=" font-bold pt-4 text-2xl text-green-600 text-center">Dr. Robert Dalton</h2>
                        <p className="text-center pb-3">MBBS(KMC), FCPS in Rasia</p>
                        <p className="pl-4 mr-4 pb-4 text-justify">Step into the world of clarity and vision, where every gaze holds the promise of a brighter tomorrow. Our eye specialists are the architects of sight, sculpting precision and expertise into every consultation. With a blend of cutting-edge technology and compassionate care, they illuminate the path towards visual wellness, restoring not just eyesight but also hope. Join us as we embark on a journey to see the world anew, guided by the skilled hands and caring hearts of our eye specialist doctors.</p>

                    </div>
                    <div className="card bg-base-100 shadow-2xl border border-green-800">
                        <figure className="p-4 relative">
                            <img src={d3} alt="Shoes" className="w-full rounded-badge" />
                            <span className=" absolute bg-slate-400 p-3 rounded-xl text-black font-extrabold text-2xl top-3/4 mx-auto"> Gynee Specialist</span>
                        </figure>
                        <h2 className=" font-bold pt-4 text-2xl text-green-600 text-center">Dr. Robert Dalton</h2>
                        <p className="text-center pb-3">MBBS, FCPS in USA</p>
                        <p className="pl-4 mr-4 pb-4 text-justify">Welcome to a sanctuary of feminine health and empowerment, where every womans journey is met with understanding, respect, and expert care. Our gynecological specialists are more than doctors; they are advocates for womens wellness, guiding each patient through the intricate terrain of their health with compassion and expertise. With a commitment to dignity and empowerment, they navigate the complexities of gynecological care, ensuring that every woman feels heard, supported, and empowered in her journey towards health and vitality</p>

                    </div>
                    <div className="card bg-base-100 shadow-2xl border border-green-800">
                        <figure className="p-4 relative">
                            <img src={d4} alt="Shoes" className="w-full rounded-badge" />
                            <span className=" absolute bg-slate-400 p-3 rounded-xl text-black font-extrabold text-2xl top-3/4 mx-auto"> ChilDren Specialist</span>
                        </figure>
                        <h2 className=" font-bold pt-4 text-2xl text-green-600 text-center">Dr. Abbas Uddin</h2>
                        <p className="text-center pb-3">MBBS(CMK), FCPS in Germany</p>
                        <p className="pl-4 mr-4 pb-4 text-justify">Where each patient is met with expertise, empathy, and unwavering support. Within the intricate tapestry of healthcare, our nurses stand as guardians of comfort and companionship, weaving together the threads of medical knowledge with the warmth of human connection. At our center, they are not just caregivers; they are advocates for wellness, guiding you through every step of your healing journey with compassion and dedication</p>

                    </div>
                    <div className="card bg-base-100 shadow-2xl border border-green-800">
                        <figure className="p-4 relative">
                            <img src={d5} alt="Shoes" className="w-full rounded-badge" />
                            <span className=" absolute bg-slate-400 p-3 rounded-xl text-black font-extrabold text-2xl top-3/4 mx-auto"> Kardiologist</span>
                        </figure>
                        <h2 className=" font-bold pt-4 text-2xl text-green-600 text-center">Dr. Halima Parveen</h2>
                        <p className="text-center pb-3">MBBS(KMU), FCPS in UK</p>
                        <p className="pl-4 mr-4 pb-4 text-justify">In the realm of cardiovascular health, our cardiologists stand as pillars of expertise and compassion, dedicated to safeguarding the beating heart of every patient. With advanced medical knowledge and a profound commitment to care, they navigate the intricate pathways of heart health, guiding individuals towards vitality and well-being. Join us on a journey where each heartbeat is cherished, each concern addressed, and each life transformed through the skilled hands and compassionate hearts of our cardiologist doctors</p>

                    </div>
                    <div className="card bg-base-100 shadow-2xl border border-green-800">
                        <figure className="p-4 relative">
                            <img src={d6} alt="Shoes" className="w-full rounded-badge" />
                            <span className=" absolute bg-slate-400 p-3 rounded-xl text-black font-extrabold text-2xl top-3/4 mx-auto"> Heart Specialist</span>
                        </figure>
                        <h2 className=" font-bold pt-4 text-2xl text-green-600 text-center">Dr. Sadia Tasmim</h2>
                        <p className="text-center pb-3">MBBS(RU), FCPS in Canada</p>
                        <p className="pl-4 mr-4 pb-4 text-justify">Step into a world where every giggle, every tear, and every milestone matters. Our pediatric specialists are more than just doctors; theyre guardians of childhood, champions of tiny triumphs, and healers of little hearts. With a blend of expertise and empathy, they navigate the intricate landscape of pediatric care, ensuring that each childs journey to health is met with personalized attention and unwavering support. Join us as we embark on a mission to nurture, protect, and celebrate the precious lives entrusted to our care</p>

                    </div>
                </div>

            </div>
            {/* vaxination */}
            <div>
                <h2 className="text-3xl font-bold text-center mt-8 text-emerald-400">Vaxination Service</h2>
                <p className="text-center mx-auto md:w-3/4 mb-10">
                    <p>Step into the realm where passion for healthcare meets the efficiency of cutting-edge management. Our renowned medical camp provides not just education but an immersive experience in holistic care. Join us as we blend expertise, compassion, and innovation, setting the standard for excellence in medical camp management</p>
                </p>
            </div>
            <div className="hero ">
                <div className="flex  flex-col md:flex-col lg:flex-row w-full items-center gap-8">
                    <div className="w-full">
                        <img className='w-2/3 rounded-3xl p-3 mx-auto' src={vax} />
                    </div>
                    <div className="p-3 w-full">
                        <h1 className="text-xl font-bold p-3  bg-[#23BE0A0D] rounded-xl text-center">Why Our Vaxination Service Different From Others</h1>
                        <hr />
                        <p className="p-3 text-justify">Discover the difference in our vaccination service where safety, expertise, and care converge to protect what matters most: your health. With a commitment to excellence and a focus on personalized care, we go beyond the routine, ensuring every vaccination experience is seamless, informed, and tailored to your needs. Trust in our team of experienced professionals to guide you through the process with empathy and precision, safeguarding you and your loved ones against preventable diseases. Join us as we redefine vaccination services, setting a new standard in healthcare delivery and peace of mind</p>

                    </div>
                </div>
            </div>
            <h2 className="text-3xl text-center font-bold mb-8">Get Started Now</h2>
            <div className="grid md:grid-cols-4 grid-cols-2">
                {/* card1 */}
                <div className="card text-black border border-green-600">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-6xl text-blue-700">1</h2>
                        <p className="text-2xl">Vaxination Inform and Sign Up</p>
                        <p>At first have to sign up </p>
                    </div>
                </div>
                {/* card2 */}
                <div className="card text-black border border-green-600">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-6xl text-blue-700">2</h2>
                        <p className="text-2xl">First dose start and gain immunity</p>
                        <p>At first have to sign up </p>
                    </div>
                </div>
                {/* card3 */}
                <div className="card text-black border border-green-600">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-6xl text-blue-700">3</h2>
                        <p className="text-2xl">After 21 Day give second does</p>
                        <p>At first have to sign up </p>
                    </div>
                </div>
                {/* card4 */}
                <div className="card text-black border border-green-600">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-6xl text-blue-700">4</h2>
                        <p className="text-2xl">Day 28 Full dose done and verify again</p>
                        <p>At first have to sign up </p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;