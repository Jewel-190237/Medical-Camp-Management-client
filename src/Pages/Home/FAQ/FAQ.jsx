import image from '../../../assets/cranium.png'

const FAQ = () => {
    return (
        <div className='rounded-xl m-4 w-full p-4 mx-auto'>
            <div>
                <div>
                    <h2 className="text-2xl font-bold text-center mt-8 text-emerald-400">Frequent Asked Question</h2>
                    <p className="text-center mx-auto md:w-3/4 mb-10">
                        <p>Your burning questions, answered! Dive into our comprehensive FAQ section to find solutions, tips, and insights to common queries. Whether you are curious about our products, policies, or processes, weve got you covered with detailed responses crafted to make your experience seamless and hassle-free. Explore now and empower yourself with knowledge </p>
                    </p>
                </div>

            </div>
            <div className=" flex md:flex-row flex-col">
                <div>
                    <img className='w-1/2 mx-auto ' src={image} alt="" />
                </div>
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            What is a medical camp?
                        </div>
                        <div className="collapse-content">
                            <p>A medical camp is a temporary healthcare event where medical professionals offer services such as consultations, screenings, vaccinations, and health education to the public, often in underserved or remote areas</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Who can attend a medical camp?
                        </div>
                        <div className="collapse-content">
                            <p>Medical camps are typically open to all members of the community, regardless of age, gender, or socioeconomic status. Some camps may have specific target groups or requirements for participation</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            What services are provided at a medical camp?
                        </div>
                        <div className="collapse-content">
                            <p>Services offered at a medical camp may include general health check-ups, blood pressure monitoring, blood sugar testing, dental check-ups, eye examinations, immunizations, and health education sessions on topics such as nutrition, hygiene, and disease prevention.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            How can I find a medical camp in my area?
                        </div>
                        <div className="collapse-content">
                            <p>Information about upcoming medical camps is often disseminated through local newspapers, community bulletin boards, social media channels, and websites of healthcare organizations or government health departments.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Do I need to bring any documents to a medical camp?
                        </div>
                        <div className="collapse-content">
                            <p>It is advisable to bring any relevant medical records, identification documents, and health insurance information to a medical camp, especially if you are seeking specific treatments or consultations.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Can I volunteer at a medical camp?
                        </div>
                        <div className="collapse-content">
                            <p>It is advisable to bring any relevant medical records, identification documents, and health insurance information to a medical camp, especially if you are seeking specific treatments or consultations.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Are there any age restrictions for attending a medical camp?
                        </div>
                        <div className="collapse-content">
                            <p>While most medical camps welcome participants of all ages, certain services or activities may have age restrictions or guidelines. Parents or guardians may need to accompany children, especially for vaccinations or screenings.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;