import React from 'react'

const Fact = () => {
    return (
        <div className='min-w-screen py-8 mt-8'>
            <div className='md:max-w-5xl max-w-screen  mx-auto text-black p-4 md:p-0  '>
                <div className=' w-full md:w-[50%] '>
                    <div className='w-full relative flex flex-col '>
                        <h2 className='md:text-[8rem] text-[3rem]  text-center md:text-left font-bold stroke-text mt-[-3rem] relative'>FACT</h2>
                        <p className='md:text-4xl text-xl  md:absolute top-[3rem] text-center md:text-left md:pl-6'>
                            Let’s See Our Company
                            Achievement
                        </p>
                        <p className='md:pl-6 '>
                            Successfully launching and delivering high-quality websites or web applications for clients across various industries.
                            Building a strong portfolio of visually appealing, user-friendly, and functional websites or web applications.
                        </p>
                    </div>
                </div>
                <div className='w-full grid md:grid-cols-3 gap-4 pl-6 mt-8'>
                    <div style={{ transform: 'perspective(1000px) rotateY(15deg)' }}
                     className='md:p-8 p-4 bg-[#6C55F9] rounded-xl  text-white flex flex-col md:gap-4 justify-center items-center'>
                        <img src="/fact1.png" alt="" />
                        <h3 className='text-2xl font-bold'>500+</h3>
                        <p>Project Completed</p>
                    </div>
                    <div style={{ transform: 'perspective(1000px) rotateY(15deg)' }}
                    className='md:p-8 p-4 bg-[#6C55F9] rounded-xl text-white flex flex-col  md:gap-4 justify-center items-center'>
                        <img src="/fact2.png" alt="" />
                        <h3 className='text-2xl font-bold'>1000+</h3>
                        <p>Satisfied Clients</p>
                    </div>
                    <div style={{ transform: 'perspective(1000px) rotateY(15deg)' }}
                     className='md:p-8 p-4 bg-[#6C55F9] rounded-xl text-white flex flex-col  md:gap-4 justify-center items-center'>
                        <img src="/fact3.png" alt="" />
                        <h3 className='text-2xl font-bold'>50+</h3>
                        <p>Expert Teams</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fact