import React from 'react'

const page = () => {
    return (
        <div className='w-full 0'>
            <div className='w-full h-[45vh] md:h-[80vh] relative '>
                <img className='h-[40vh] md:h-[80vh] w-full absolute top-0 '
                    src='/vector2.png' alt='image' />
                <div className='md:max-w-5xl max-w-full flex flex-col md:flex-row  justify-between mx-auto text-black p-4 md:p-0 relative '>
                    <div className='md:w-[35%] flex flex-col items-start gap-4 text-white md:mt-[15%]'>
                        <h2 className='text-4xl font-bold'>JOIN OUT TEAM !</h2>
                        <p>Be at the forefront of technology - join our software development elite.</p>
                        <button className='py-3 px-6 bg-white text-black rounded-md'>View Our Open Positions...</button>
                    </div>
                    <div className=' hidden md:block w-[60%]'>
                        <img src="/robot.png" alt="" />
                    </div>
                </div>
                <div className='absolute bottom-[5%] md:left-[47%] left-[40%] text-black gap-2 cursor-pointer'>
                    <div className='bg-white border-2 border-[#6C55F9] p-4 rounded-[50%]'>
                        <img src="downArrow.png" alt="" />
                    </div>
                    Learn More
                </div>
            </div>
            <div className='md:max-w-5xl max-w-full flex flex-col items-center mx-auto text-black p-4 gap-10  md:py-4 md:px-0'>
                <p className='md:text-4xl text-2xl text-center font-bold w-full md:w-[70%]'>{`"Driving Technological Advancements through Software Development"`}</p>
                <div className='flex flex-col md:flex-row gap-4'>
                    <div className='p-10 text-white bg-[#6C55F9]'>
                        <p className='text-xl font-bold mb-4'>Life at 2Digit Innovations</p>
                        <span>{`The word Lorem Ipsum is derived from the Latin word which means “pain itself”. 
                        It is a kind of a text filler tool that is used by the webmaster on the website.
                        Basically, this tool is used to create 
                        dummy content on the website when it’s new.`}</span>
                    </div>
                    <div className='p-10 text-white bg-[#6C55F9]'>
                        <p className='text-xl font-bold mb-4'>Life at 2Digit Innovations</p>
                        <span>{`The word Lorem Ipsum is derived from the Latin word which means “pain itself”. 
                        It is a kind of a text filler tool that is used by the webmaster on the website.
                        Basically, this tool is used to create 
                        dummy content on the website when it’s new.`}</span>
                    </div>
                    <div className='p-10 text-white bg-[#6C55F9]'>
                        <p className='text-xl font-bold mb-4'>Life at 2Digit Innovations</p>
                        <span>{`The word Lorem Ipsum is derived from the Latin word which means “pain itself”. 
                        It is a kind of a text filler tool that is used by the webmaster on the website.
                        Basically, this tool is used to create 
                        dummy content on the website when it’s new.`}</span>
                    </div>
                </div>
            </div>
            <div className='md:max-w-5xl max-w-screen mx-auto text-black flex flex-col-reverse md:flex-row gap-1 p-4 my-14 md:p-0'>
                <div className='w-auto flex justify-center py-8 md:py-0'>
                    <img className='md:h-[80%] md:w-[30%] w-[15%] h-[30%]'
                        src="/Fblike.png" alt="" />
                    <img className='mt-4 h-[40%] md:h-[90%] w-[50%] md:w-[75%]'
                        src="/sittingMan.png" alt="" />
                </div>
                <div className='w-full h-full flex flex-col justify-start relative '>
                    <div className='w-full relative  flex flex-col justify-center md:items-start items-center'>
                        <h2 className='md:text-[8rem] text-[3rem] text-center md:mt-[-2rem] font-bold stroke-text'>ROLES</h2>
                        <p className='md:text-4xl font-bold md:absolute bottom-3 text-center md:text-left md:pl-8 w-full md:w-[70%] mt-[-1rem] md:mt-0'>
                            Wants to design something nice?
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
            <div className='md:max-w-5xl max-w-screen mx-auto text-black flex flex-col-reverse md:flex-row gap-1 mt-8 p-4 my-14 md:p-0'>
                <div className='w-full h-full flex flex-col justify-start relative '>
                    <div className='w-full relative  flex flex-col justify-center  items-center'>
                        <h2 className='md:text-[6rem] text-[3rem] text-center md:mt-[-2rem] font-bold stroke-text'>FEATURED WORK</h2>
                        <p className='md:text-4xl font-bold md:absolute bottom-3 text-center  md:pl-8 w-full md:w-[70%] mt-[-1rem] md:mt-0'>
                            OUR WORK
                        </p>
                    </div>
                    <div className='w-full mt-8 md:pt-4 flex flex-col items-center'>
                        <div className='w-full grid md:grid-cols-3 gap-2 md:gap-0'>
                            <div className='  flex flex-col gap-4 p-2'>
                                <div className='flex items-center justify-start gap-2 h-[10vh] '>
                                    <img className='w-32' src="/client2.png" alt="image" />
                                </div>
                                <div className='relative h-[50vh] md:h-[65vh]'>
                                    <img className='absolute top-[-10vh] left-[25%] md:w-[15vw] w-[50vw]'
                                        src="/alertrak2.png" alt="image" />
                                    <img className='absolute top-32 left-[10%] md:w-[10vw] w-[40vw]'
                                        src="/alertrak1.png" alt="image" />
                                </div>
                            </div>
                            <div className='  flex flex-col gap-4 p-2'>
                                <div className='flex items-center justify-start gap-2 h-[10vh] '>
                                    <img className='w-12' src="/festa.png" alt="image" />
                                    FESTA SHQIPTAR
                                </div>
                                <div className='relative h-[40vh] md:h-[55vh]'>
                                    <img className='absolute top-10 right-0 md:w-[15vw] w-[50vw]'
                                        src="/festa1.png" alt="image" />
                                    <img className='absolute top-32 right-0 md:w-[10vw] w-[50vw]'
                                        src="/festa2.png" alt="image" />
                                    <img className='absolute top-56 right-0 md:w-[15vw] w-[50vw]'
                                        src="/festa3.png" alt="image" />
                                </div>
                            </div>
                            <div className='  flex flex-col gap-4 p-2'>
                                <div className='flex items-center justify-start gap-2 h-[10vh] '>
                                    <img className='w-12' src="/bf.png" alt="image" />
                                    BF APP
                                </div>
                                <div className='relative  h-[50vh] md:h-[65vh]'>
                                    <img className='absolute top-0 left-[5%] md:w-[10vw] w-[30vw]'
                                        src="/bf1.png" alt="image" />
                                    <img className='absolute top-48 md:left-[40%] left-[30%] md:w-[8vw] w-[25vw]'
                                        src="/bf2.png" alt="image" />

                                </div>
                            </div>

                        </div>
                        <button className='bg-[#6C55F9] text-white py-2 px-8 mr-10 rounded-md mt-4'>See More...</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page