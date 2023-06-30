import React from 'react'

const Who = () => {
    return (
        <div className='min-w-screen py-8 mt-8'>
            <div className='max-w-5xl max-w-screen mx-auto text-black flex flex-col md:flex-row '>
                <div className='md:w-1/2 h-full flex flex-col px-4 md:px-0'>
                    <div className='w-full h-[70%] relative'>
                        <h2 className='md:text-[8rem] text-[3rem] text-center md:text-left font-bold stroke-text mt-[-3rem]'>WHO</h2>
                        <p className='md:text-4xl text-xl w-full font-bold md:absolute top-12 text-center md:text-left md:pl-6'>
                            We’re Awards Winning
                            Modern Business Solutions
                            Agency
                        </p>
                        <p className='md:mt-12 mt-8 text-lg md:pl-6 text-center md:text-left'>Achieve Excellence with our Award-Winning Modern Business Solutions</p>
                    </div>
                    <div className='grid grid-cols-2 md:px-6 md:mt-8 mt-4 gap-4 md:gap-8'>
                        <div className='flex gap-2 p-4 bg-[#dfdfdf] items-center rounded-md'>
                            <img src="check.png" alt="" />
                            <p className='text-black font-bold'>Digital Marketing</p>
                        </div>
                        <div className='flex gap-2 p-4 bg-[#dfdfdf] items-center rounded-md'>
                            <img src="check.png" alt="" />
                            <p className='text-black font-bold'>Web Development</p>
                        </div>
                        <div className='flex gap-2 p-4 bg-[#dfdfdf] items-center rounded-md'>
                            <img src="check.png" alt="" />
                            <p className='text-black font-bold'>UI & UX design</p>
                        </div>
                        <div className='flex gap-2 p-4 bg-[#dfdfdf] items-center rounded-md'>
                            <img src="check.png" alt="" />
                            <p className='text-black font-bold'>App Development</p>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2 w-full mt-3 md:mt-0'>
                    <img className='w-[50%] md:w-full mx-auto'
                        src="/about.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Who