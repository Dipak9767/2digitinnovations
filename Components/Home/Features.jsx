import React from 'react'

const Features = () => {
    return (
        <div className='min-w-screen md:py-8 md:mt-8'>
            <div className='md:max-w-5xl max-w-screen mx-auto text-black flex flex-col-reverse md:flex-row gap-1 p-4 md:p-0'>
                <div className='w-auto flex justify-center py-8 md:py-0'>
                    <img className='md:h-[80%] md:w-[30%] w-[15%] h-[30%]'
                        src="/Fblike.png" alt="" />
                    <img className='mt-4 h-[40%] md:h-[90%] w-[50%] md:w-[75%]'
                        src="/sittingMan.png" alt="" />
                </div>
                <div className='w-full h-full flex flex-col justify-start relative '>
                    <div className='w-full relative  flex flex-col justify-center md:items-start items-center'>
                        <h2 className='md:text-[8rem] text-[3rem] text-center md:mt-[-2rem] font-bold stroke-text'>FEATURES</h2>
                        <p className='md:text-4xl font-bold md:absolute bottom-3 text-center md:text-left md:pl-8 w-full md:w-[70%] mt-[-1rem] md:mt-0'>
                            Services we Provide to Our clients.
                        </p>
                    </div>
                    <div className='w-full grid md:grid-cols-2 md:pl-8 mt-4 gap-3 md:gap-8 items-center'>
                        <div className='md:w-full w-[90%] flex  gap-2 items-center mx-auto'>
                            <img className='h-8 md:h-14'
                                src="/feature1.png" alt="" />
                            <div>
                                <p className='font-bold md:text-xl md:mb-2'>Website Development Company</p>
                                <span>Unlocking the Power of the Web for Your Business</span>
                            </div>
                        </div>
                        <div className='md:w-full w-[90%] flex  gap-2 items-center mx-auto'>
                            <img className='h-8 md:h-14'
                                src="/feature2.png" alt="" />
                            <div>
                                <p className='font-bold md:text-xl md:mb-2'>Mobile Apps Development Company</p>
                                <span>Empowering Businesses Through Mobile Solutions!</span>
                            </div>
                        </div>
                        <div className='md:w-full w-[90%]  flex gap-2 items-center mx-auto'>
                            <img className='h-8 md:h-14'
                                src="/feature3.png" alt="" />
                            <div>
                                <p className='font-bold md:text-xl md:mb-2'>Digital Marketing Agency</p>
                                <span>Navigating the Digital Frontier with Expertise!</span>
                            </div>
                        </div>
                        <div className='md:w-full w-[90%]  flex gap-2 items-center mx-auto'>
                            <img className='h-8 md:h-14'
                                src="/feature4.png" alt="" />
                            <div>
                                <p className='font-bold md:text-xl md:mb-2'>Website and App Designing</p>
                                <span>Creating Seamless User Journeys through Design Excellence!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features