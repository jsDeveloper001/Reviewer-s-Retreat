import React from 'react';

const Contact = () => {
    return (
        <div className='mt-2 md:mt-5 mx-auto w-10/12'>
            <h2 className='text-center text-4xl font-black mb-4'>Contact Us</h2>
            <p className='text-base text-[#131313B3]'>Thank you for your interest in Reviewer's Retreat. We're thrilled to hear from you! Whether you have questions, feedback, or simply want to say hello, we're here to assist you.
            </p>
            <div className='mt-6 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className='text-[#131313B3] text-base'>
                    <address>
                        <strong className='text-black text-lg'>Our Address:</strong><br />
                        <p className='mt-1'>
                            Reviewer's Retreat Headquarters<br />
                            123 Bookworm Boulevard<br />
                            Cityville, State, Zip Code<br />
                            Country
                        </p>
                    </address>
                </div>
                <div>
                    <strong>Contact Number:</strong>
                    <p>
                        Main Office: +1 (123) 456-7890<br />
                        Customer Support: +1 (987) 654-3210
                    </p>
                </div>
                <div>
                    <strong className='text-lg'>Email:</strong>
                    <p className='lg:ms-3'>
                        <span className='font-bold'>General Inquiries:</span> <span className='text-blue-500 hover:cursor-pointer'>info@reviewersretreat.com</span><br />
                        <span className='font-bold'>Customar Support:</span> <span className='text-blue-500 hover:cursor-pointer'>info@reviewersretreat.com</span><br />
                        <span className='font-bold'>Advertising and Partnerships:</span> <span className='text-blue-500 hover:cursor-pointer'>info@reviewersretreat.com</span><br />
                    </p>
                </div>
            </div>
            <div className='mt-12'>
                <h2 className='font-bold text-lg md:text-2xl lg:text-4xl text-green-700 text-center mb-1'>Send Your Valueable FeedBack</h2>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name:</span>
                                </label>
                                <input type="text" placeholder="Enter your full name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email:</span>
                                </label>
                                <input type="email" placeholder="Enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Message:</span>
                                </label>
                                <textarea name="" id="" cols="30" rows="30" className='input input-bordered min-h-32' placeholder='Write from here'></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Contact;