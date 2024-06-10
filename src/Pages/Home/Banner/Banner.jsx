import { Link } from "react-router-dom"
import img1 from "../../../assets/a.jpg"
import img2 from "../../../assets/b.jpg"
import img3 from "../../../assets/g.jpg"
import img4 from "../../../assets/h.jpg"

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px]">
                <div id="item1" className="carousel-item w-full relative">
                    <img src={img1} className="w-full" />
                    <div className="absolute rounded-2xl flex text-white gap-6 items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className="w-2/3 mx-auto space-y-7 p-4">
                            <h1 className="text-5xl text-center font-bold">Medical Camp Management System</h1>
                            <h1 className="text-4xl text-center">Efficiently Organize Medical Camps with Ease!</h1>
                            <p className="text-center">Welcome to our Medical Camp Management System, your comprehensive solution for orchestrating successful healthcare events. From scheduling and registration to resource allocation and reporting, our intuitive platform streamlines every aspect of medical camp management. With user-friendly interfaces and powerful features, we empower organizers to efficiently plan, execute, and evaluate medical camps.</p>
                            <div className="flex justify-evenly">
                                <Link to='/availableCamp'><button className="btn btn-primary">Explore More</button></Link>
                                <Link to='/login'><button className="btn btn-secondary">Lets Start</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full relative">
                    <img src={img2} className="w-full" />
                    <div className="absolute rounded-2xl flex text-white gap-6 items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className="w-2/3 mx-auto space-y-7 p-4">
                            <h1 className="text-5xl text-center font-bold">Medical Camp Management System</h1>
                            <h1 className="text-4xl text-center">Efficiently Organize Medical Camps with Ease!</h1>
                            <p className="text-center">Welcome to our Medical Camp Management System, your comprehensive solution for orchestrating successful healthcare events. From scheduling and registration to resource allocation and reporting, our intuitive platform streamlines every aspect of medical camp management. With user-friendly interfaces and powerful features, we empower organizers to efficiently plan, execute, and evaluate medical camps.</p>
                            <div className="flex justify-evenly">
                                <Link to='/availableCamp'><button className="btn btn-primary">Explore More</button></Link>
                                <Link to='/login'><button className="btn btn-secondary">Lets Start</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full relative">
                    <img src={img3} className="w-full" />
                    <div className="absolute rounded-2xl flex text-white gap-6 items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className="w-2/3 mx-auto space-y-7 p-4">
                            <h1 className="text-5xl text-center font-bold">Medical Camp Management System</h1>
                            <h1 className="text-4xl text-center">Efficiently Organize Medical Camps with Ease!</h1>
                            <p className="text-center">Welcome to our Medical Camp Management System, your comprehensive solution for orchestrating successful healthcare events. From scheduling and registration to resource allocation and reporting, our intuitive platform streamlines every aspect of medical camp management. With user-friendly interfaces and powerful features, we empower organizers to efficiently plan, execute, and evaluate medical camps.</p>
                            <div className="flex justify-evenly">
                                <Link to='/availableCamp'><button className="btn btn-primary">Explore More</button></Link>
                                <Link to='/login'><button className="btn btn-secondary">Lets Start</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full relative">
                    <img src={img4} className="w-full" />
                    <div className="absolute rounded-2xl flex text-white gap-6 items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className="w-2/3 mx-auto space-y-7 p-4">
                            <h1 className="text-5xl text-center font-bold">Medical Camp Management System</h1>
                            <h1 className="text-4xl text-center">Efficiently Organize Medical Camps with Ease!</h1>
                            <p className="text-center">Welcome to our Medical Camp Management System, your comprehensive solution for orchestrating successful healthcare events. From scheduling and registration to resource allocation and reporting, our intuitive platform streamlines every aspect of medical camp management. With user-friendly interfaces and powerful features, we empower organizers to efficiently plan, execute, and evaluate medical camps.</p>
                            <div className="flex justify-evenly">
                                <Link to='/availableCamp'><button className="btn btn-primary">Explore More</button></Link>
                                <Link to='/login'><button className="btn btn-secondary">Lets Start</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
            {/* <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full rounded-2xl" />
                    <div className="absolute rounded-2xl flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-6">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute rounded-2xl flex text-white gap-6 items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className="w-2/3 mx-auto space-y-7 p-4">
                            <h1 className="text-6xl text-center font-bold">StudyUnityHub</h1>
                            <h1 className="text-4xl text-center">Where Learning Meets Collaboration</h1>
                            <p className="text-center">Welcome to our Online Group Study Hub! Unite, Learn, and Succeed Together. Join a community of dedicated learners collaborating in real-time. Elevate your study experience with interactive sessions, shared resources, and supportive peers. Lets achieve academic excellence, hand in hand!</p>
                            <div className="flex justify-evenly">
                                <Link to='/assignments'><button className="btn btn-primary">Explore More</button></Link>
                                <Link to='/login'><button className="btn btn-secondary">Lets Start</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-6">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute flex text-white gap-6 items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className="w-2/3 space-y-7 p-4">
                            <h1 className="text-4xl">Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className="btn btn-primary">Discover More</button>
                            <button className="btn btn-secondary ml-5">Latest Car</button>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-6">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute flex text-white gap-6 items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className="w-2/3 space-y-7 p-4">
                            <h1 className="text-4xl">Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className="btn btn-primary">Discover More</button>
                            <button className="btn btn-secondary ml-5">Latest Car</button>
                        </div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-6">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute flex text-white gap-6 items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className="w-2/3 space-y-7 p-4">
                            <h1 className="text-4xl">Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className="btn btn-primary">Discover More</button>
                            <button className="btn btn-secondary ml-5">Latest Car</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}


export default Banner;