import React from 'react'

const Contact = () => {
    return (
        <div className='min-w-screen py-8 mt-8'>
            <div className='md:max-w-5xl max-w-screen  mx-auto text-black flex flex-col-reverse md:flex-row  gap-4 p-4  '>
                <div className='w-[50%] flex justify-center mx-auto mt-8 md:mt-0'>
                    <img className='w-full'
                        src="/call.png" alt="" />
                </div>
                <div className='md:w-[50%] '>
                    <div className='w-full relative flex flex-col  '>
                        <h2 className='md:text-[8rem] text-[3rem] text-center md:text-left stroke-text mt-[-3rem] relative'>CALL</h2>
                        <p className='md:text-4xl text-xl w-full md:absolute text-center top-[3rem] md:pl-6 md:w-[90%]'>
                            Ready to Work Together
                            In News Projects ?
                        </p>
                    </div>
                    <div className='flex flex-col mt-4 gap-3 justify-start items-start'>
                        <input type="text" className='bg-[#e4e4e4] p-3 rounded-md w-full outline-none'placeholder='Your Name' />
                        <input type="email" className='bg-[#e4e4e4] p-3 rounded-md w-full outline-none'placeholder='Your Email' />
                        <textarea className='bg-[#e4e4e4] p-3 rounded-md w-full outline-none'placeholder='Your Message' rows={3} type="text" />
                        <button className='bg-[#6C55F9] text-white py-2 px-8 mr-10 rounded-md '>Send Message</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact