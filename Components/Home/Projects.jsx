import React from 'react'

const Projects = () => {
    return (
        <div className='min-w-screen py-8 p-4 md:p-0 mt-8'>
            <div className='md:max-w-5xl max-w-screen mx-auto text-black flex flex-col '>
                <div className='w-full relative h-  flex flex-col items-center '>
                    <h2 className='md:text-[8rem] text-[3rem]  text-center mt-[-2rem] font-bold stroke-text'>PROJECTS</h2>
                    <p className='md:text-4xl text-xl w-full md:absolute  top-16 md:w-[60%] text-center md:px-16  '>
                        Checkout our Recently
                        Completed Projects
                    </p>
                </div>
                <div className='w-full mt-2 md:mt-8'>
                    <div className='md:w-full md:h-auto h-[60vh] w-auto flex md:flex-row flex-col flex-wrap md:flex-nowrap gap-8 justify-center overflow-auto  '>
                        <div className='h-[50vh]  md:h-[70vh] relative '>
                            <img className='h-full relative'
                                src="/project.jpg" alt="" />
                            <div className=' absolute bottom-4 left-4 z-10  '>
                                <p
                                    style={{
                                        background: 'linear-gradient(to right, #186EF2, #6D18EF)',
                                    }}
                                    className='p-2 text-white text-xl rounded-tl-xl rounded-tr-xl w-[50%]'>Markrting</p>
                                <p
                                    className='p-8 text-2xl font-bold bg-[#6C55F9] text-white w-[80%]'
                                >
                                    Tech Website
                                    Solution</p>
                            </div>
                        </div>
                        <div className='h-[50vh] md:h-[70vh] relative '>
                            <img className='h-full relative'
                                src="/project.jpg" alt="" />
                            <div className=' absolute bottom-4 left-4 z-10  '>
                                <p
                                    style={{
                                        background: 'linear-gradient(to right, #186EF2, #6D18EF)',
                                    }}
                                    className='p-2 text-white text-xl rounded-tl-xl rounded-tr-xl w-[50%]'>Technology</p>
                                <p
                                    className='p-8 text-2xl font-bold bg-[#6C55F9] text-white w-[80%]'
                                >
                                    App Platform
                                    Integration
                                </p>
                            </div>
                        </div>
                        <div className='h-[50vh] md:h-[70vh] relative '>
                            <img className='h-full relative'
                                src="/project.jpg" alt="" />
                            <div className=' absolute bottom-4 left-4 z-10  '>
                                <p
                                    style={{
                                        background: 'linear-gradient(to right, #186EF2, #6D18EF)',
                                    }}
                                    className='p-2 text-white text-xl rounded-tl-xl rounded-tr-xl w-[50%]'>Software</p>
                                <p
                                    className='p-8 text-2xl font-bold bg-[#6C55F9] text-white w-[80%]'
                                >
                                    Software Tools
                                    Development
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects