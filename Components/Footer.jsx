import React from 'react'

const Footer = () => {
    return (
        <div className='min-w-screen md:py-8 md:mt-8'>
            <div className='md:max-w-5xl max-w-full flex flex-col gap-4  mx-auto text-black p-4 md:p-0'>
                <div className='w-full grid md:grid-cols-4 gap-3 md:gap-6'>
                    <div className=' flex flex-col items-center'>
                        <img className='w-[10rem] mt-[-0.5rem]' src="Logo 1.png" alt="" />
                        <p className='text-xl font-bold my-4'>Follow</p>
                        <div className='flex gap-3'>
                            <img src="fb.png" alt="" />
                            <img src="tweet.png" alt="" />
                            <img src="insta.png" alt="" />
                            <img src="linkedin.png" alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-2 md:gap-4 '>
                        <p className='text-xl font-bold mb-2 md:mb-4'>Services</p>
                        <p>App Development</p>
                        <p>Web Development</p>
                        <p>Custome Service</p>
                        <p>UI & UX Designing</p>
                        <p>SEO Optimization</p>
                    </div>
                    <div className='flex flex-col items-center gap-2 md:gap-4 text-center md:text-left'>
                        <p className='text-xl font-bold mb-2 md:mb-4'>Contact</p>
                        <p>Indirapuram, Ghaziabad, Uttar Pradesh, India, Pincode : 201014</p>
                        <p className='text-[#6C55F9]'>info@2digitinnovations.com</p>
                        <p className='text-[#6C55F9]'>+91 7814042409</p>
                    </div>
                    <div className='flex flex-col items-center gap-2 md:gap-4 '>
                        <p className='text-xl font-bold mb-2 md:mb-4'>Quick Links</p>
                        <p>Our Apps.</p>
                        <p >Find us on Clutch.</p>
                        <p >+91 7814042409</p>
                        <div className='w-full flex  border-b border-black items-center justify-between'>
                            <img src="/msg.png" alt="" />
                            <input className='w-[70%] p-2 outline-none' placeholder='Your Email' type="email" />
                            <p>SignUp</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col md:flex-row justify-between py-4'>
                    <span>Copy@ 2023 <span className='text-[#6C55F9]'>2 Digit Innovations.</span> All Rights reserved</span>
                    <div className='flex gap-4'>
                        <p>Setting & Privacy</p>
                        <p>FAQs</p>
                        <p>Contact</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer