import React from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
const page = () => {
    return (
        <main className="md:min-w-screen bg-white">
            <div className='min-w-screen md:py-8 mt-4'>
                <div className='md:max-w-5xl max-w-full   mx-auto text-black p-4 md:p-0'>
                    <div className='md:w-[35%] pl-2'>
                        <h2 className='text-4xl font bold mb-4'>Whats up?</h2>
                        <p className='text-2xl font bold'>Lets Know about ourself we try to answer every query.</p>
                    </div>
                    <div className='w-full  flex flex-col-reverse md:flex-row items-center gap-4 p-4 mt-8'>
                        <div className='md:w-[40%] md:h-[70%] flex justify-center items-center mx-auto mt-8 md:mt-0'>
                            <img className='w-full'
                                src="/call.png" alt="" />
                        </div>
                        <div className='md:w-[50%] mt-4 md:-0 '>
                            <div className='w-full relative flex flex-col  '>
                                <h2 className='md:text-[8rem] text-[3rem] text-center md:text-left stroke-text mt-[-3rem] relative'>CALL</h2>
                                <p className='md:text-4xl text-xl w-full md:absolute text-center md:top-[3rem] pl-6 mt-[-1rem] md:mt-0'>
                                    Ready to Work Together
                                    In News Projects ?
                                </p>
                            </div>
                            <div className='flex flex-col mt-4 gap-3 justify-start items-start'>
                                <input type="text" className='bg-[#e4e4e4] p-3 rounded-md w-full outline-none' placeholder='Your Name' />
                                <input type="email" className='bg-[#e4e4e4] p-3 rounded-md w-full outline-none' placeholder='Your Email' />
                                <input type="number" className='bg-[#e4e4e4] p-3 rounded-md w-full outline-none' placeholder='Your Phone number' />
                                <input type="text" className='bg-[#e4e4e4] p-3 rounded-md w-full outline-none' placeholder='Your Location' />
                                <textarea className='bg-[#e4e4e4] p-3 rounded-md w-full outline-none' placeholder='Your Message' rows={3} type="text" />
                                <button className='bg-[#6C55F9] text-white py-2 px-8 mr-10 rounded-md '>Send Message</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full relative flex flex-col mt-20 px-2 md:px-0'>
                        <h2 className='md:text-[8rem] text-[3rem] text-center md:text-left stroke-text mt-[-3rem] relative'>LOCATION</h2>
                        <p className='md:text-4xl text-xl w-full md:absolute md:text-left text-center md:top-[4.5rem] pl-6 mt-[-1rem] md:mt-0'>
                            LOCATION INFORMATION
                        </p>
                        <div className='flex gap-4 my-4 items-center'>
                            <FaMapMarkerAlt className='text-2xl text-[#6C55F9]'/>
                            <p className='md:text-2xl text-xl font-bold'>Indirapuram, Ghaziabad, Uttar Pradesh, India, Pincode : 201014</p>
                        </div>
                        <div className='flex gap-4 my-4 items-center'>
                            <FaEnvelope className='text-2xl text-[#6C55F9]'/>
                            <p className='text-xl '>info@2digitinnovations.com</p>
                        </div>
                        <div className='flex gap-4 my-4 items-center'>
                            <FaPhone className='text-2xl text-[#6C55F9]'/>
                            <p className='text-xl '>+91 7814042409</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page