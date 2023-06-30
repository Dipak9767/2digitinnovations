import React from 'react'

const Services = () => {
    return (
        <div className='min-w-screen py-8 mt-8'>
            <div className='md:max-w-5xl max-w-screen mx-auto text-black flex flex-col p-4 md:p-0'>
                <div className='w-full relative   flex flex-col items-center '>
                    <h2 className='md:text-[8rem] text-[3rem] text-center mt-[-2rem] font-bold stroke-text'>SERVICES</h2>
                    <p className='md:text-4xl text-xl w-full md:absolute top-16 md:w-[80%] text-center md:px-16  '>
                        Great Features To Do Your Buisness
                        Growth & Development
                    </p>
                </div>
                <div className='flex flex-col md:flex-row '>
                    <div className=' py-16 items-center justify-end w-[50%] hidden md:flex'>
                        <img className='w-[90%]'
                            src="/services.png" alt="" />
                    </div>
                    <div className=' h-full flex flex-col gap-4 py-8'>
                        <div className='p-3 h-[12%] w-full md:w-[70%] rounded-md  items-center justify-between flex gap-4 bg-[#dfdfdf]'>
                            <img className='w-14'
                                src="/service1.png" alt="" />
                            <div>
                                <p className='font-bold text-xl '>Graphics Design</p>
                                <p>Elevate Your Brand with Striking Graphic Designs!</p>
                            </div>
                            <img className='w-14'
                                src="/arrow.png" alt="" />
                        </div>
                        <div className='md:ml-12 p-3 h-[15%] w-full md:w-[70%] rounded-md  items-center justify-between flex gap-4 bg-[#dfdfdf]'>
                            <img className='w-14'
                                src="/service2.png" alt="" />
                            <div>
                                <p className='font-bold text-xl '>App Development</p>
                                <p>Where Creativity Meets Mobile Development!</p>
                            </div>
                            <img className='w-14'
                                src="/arrow.png" alt="" />
                        </div>
                        <div className='md:ml-20 p-3 h-[15%] w-full md:w-[70%] rounded-md  items-center justify-between flex gap-4 bg-[#dfdfdf]'>
                            <img className='w-14'
                                src="/service3.png" alt="" />
                            <div>
                                <p className='font-bold text-xl '>UI & UX design</p>
                                <p>Designing Delightful Experiences: UI/UX Perfected</p>
                            </div>
                            <img className='w-14'
                                src="/arrow.png" alt="" />
                        </div>
                        <div className='md:ml-12 p-3 h-[15%] w-full md:w-[70%] rounded-md  items-center justify-between flex gap-4 bg-[#dfdfdf]'>
                            <img className='w-14'
                                src="/service4.png" alt="" />
                            <div>
                                <p className='font-bold text-xl '>Custome Service</p>
                                <p>Empowering Customers with Unparalleled Service</p>
                            </div>
                            <img className='w-14'
                                src="/arrow.png" alt="" />
                        </div>
                        <div className='p-3 h-[15%] w-full md:w-[70%] rounded-md  items-center justify-between flex gap-4 bg-[#dfdfdf]'>
                            <img className='w-14'
                                src="/service5.png" alt="" />
                            <div>
                                <p className='font-bold text-xl '>Web Development</p>
                                <p>Innovative Solutions for the Digital Age!</p>
                            </div>
                            <img className='w-14'
                                src="/arrow.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services