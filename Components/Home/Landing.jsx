import React from 'react'

const Landing = () => {
    return (
        <div className='w-full md:min-h-[127vh]  relative '>
            <div className="h-full md:max-w-5xl max-w-screen text-black flex flex-col md:flex-row items-start mx-auto justify-between pt-3">
                <div className=' md:w-1/2 flex h-[100%] flex-col p-4 md:p-0 md:mt-[15vh]'>
                    <div className=' w-[70%] flex relative '>
                        <h2 className='text-4xl font-bold capitalize '>Great Companies are built on great Products</h2>
                        <img className='absolute top-[-2.5rem] right-[-6rem] h-40'
                            src="/bulb.png" alt="image" />
                    </div>
                    <div className='w-[70%]' >
                        Ignite the most powerfull growth engine you have ever built for your company
                    </div>
                </div>
                <div className=' z-10 p-4'>
                    <img className='md:h-[70vh]'
                        src="/flying man.png" alt="image" />
                </div>
            </div>
            <div className="h-[40vh]   md:h-[50vh] relative ">
                <div className='max-w-5xl h-full  z-10 relative mx-auto flex flex-col md:flex-row  justify-end md:justify-start items-center md:gap-6'>
                    <div className='  w-full text-left relative '>
                        <h2 className='md:text-[8rem] text-[3rem] text-center font-bold stroke-text'>BRAND</h2>
                        <p className='md:text-4xl w-full text-xl font-bold text-center md:absolute md:bottom-6 md:text-left md:pl-8'>
                           {
                            ` We've More Then 254+
                            Global Partners`
                           }
                        </p>
                    </div>
                    <div className='w-full md:pl-1 p-2 text-center'>
                        <p>
                            {
                                `"Building Seamless Digital Experiences: Your Vision, Our Expertise"At
                                2 Digit Innovations, we are dedicated to
                                crafting seamless digital experiences
                                that eave a lasting impression.`
                            }
                        </p>
                    </div>
                </div>
                <img className='h-[40vh] md:h-[60vh] w-full absolute bottom-0 '
                    src='/vector1.png' alt='image' />
            </div>
        </div>
    )
}

export default Landing