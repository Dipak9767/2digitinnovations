import React from 'react'

const page = () => {
    return (
        <main className="md:min-w-screen bg-white">
            <div className='min-w-screen md:py-8 mt-4'>
                <div className='md:max-w-5xl max-w-full   mx-auto text-black p-4 md:p-0'>
                    <div className='md:w-[40%] pl-2'>
                        <h2 className='text-4xl font bold mb-8'>CHECK OUT A FEW WEB
                            RECENT PROJECTS</h2>
                        <p>Transforming ideas into immersive mobile and web experiences that seamlessly integrate business strategies with user aspirations.</p>
                    </div>
                    <div className='w-full mt-8 md:pt-4 flex flex-col items-center'>
                        <div className='w-full grid md:grid-cols-3 gap-2 md:gap-0'>
                            <div className='  flex flex-col gap-4 p-2'>
                                <div className='flex items-center justify-start gap-2 h-[10vh] '>
                                    <img className='w-28' src="/fintax.png" alt="image" />

                                </div>
                                <div className='relative h-[40vh] md:h-[55vh]'>
                                    <img className='absolute top-10 right-0 md:w-[15vw] w-[50vw]'
                                        src="/fintax1.png" alt="image" />
                                    <img className='absolute top-32 right-16 md:w-[15vw] w-[50vw]'
                                        src="/fintax2.png" alt="image" />
                                    <img className='absolute top-56 right-0 md:w-[15vw] w-[50vw]'
                                        src="/fintax3.png" alt="image" />
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
                                    <img className='w-28' src="/adn.png" alt="image" />

                                </div>
                                <div className='relative h-[40vh] md:h-[55vh]'>
                                    <img className='absolute top-10 left-0 md:w-[15vw] w-[50vw]'
                                        src="/adn1.png" alt="image" />
                                    <img className='absolute top-32 left-10 md:w-[15vw] w-[50vw]'
                                        src="/adn2.png" alt="image" />
                                    <img className='absolute top-56 left-0 md:w-[15vw] w-[50vw]'
                                        src="/adn3.png" alt="image" />
                                </div>
                            </div>
                            <div className='  flex flex-col gap-4 p-2'>
                                <div className='flex items-center justify-start gap-2 h-[10vh] '>
                                    <img className='w-12' src="/guru.png" alt="image" />
                                    GURUBOX
                                </div>
                                <div className='relative h-[40vh] md:h-[55vh]'>
                                    <img className='absolute top-10 left-0 md:w-[15vw] w-[50vw]'
                                        src="/guru1.png" alt="image" />
                                    <img className='absolute top-32 left-10 md:w-[15vw] w-[50vw]'
                                        src="/guru2.png" alt="image" />
                                    <img className='absolute top-56 left-0 md:w-[15vw] w-[50vw]'
                                        src="/guru3.png" alt="image" />
                                </div>
                            </div>
                            <div className='  flex flex-col gap-4 p-2'>
                                <div className='flex items-center justify-start gap-2 h-[10vh] '>
                                    <img className='w-12' src="/mentorplus.png" alt="image" />
                                    MENTORPLUS
                                </div>
                                <div className='relative h-[40vh] md:h-[55vh]'>
                                    <img className='absolute top-10 left-0 md:w-[15vw] w-[50vw]'
                                        src="/mentor1.png" alt="image" />
                                    <img className='absolute top-32 left-10 md:w-[15vw] w-[50vw]'
                                        src="/mentor2.png" alt="image" />
                                    <img className='absolute top-56 left-0 md:w-[15vw] w-[50vw]'
                                        src="/mentor3.png" alt="image" />
                                </div>
                            </div>
                            <div className='  flex flex-col gap-4 p-2'>
                                <div className='flex items-center justify-start gap-2 h-[10vh] '>
                                    <img className='w-32' src="/client2.png" alt="image" />
                                </div>
                                <div className='relative h-[40vh] md:h-[55vh]'>
                                    <img className='absolute top-10 right-0 md:w-[15vw] w-[50vw]'
                                        src="/aler1.png" alt="image" />
                                    <img className='absolute top-32 right-10 md:w-[15vw] w-[50vw]'
                                        src="/aler2.png" alt="image" />
                                    <img className='absolute top-56 right-0 md:w-[15vw] w-[50vw]'
                                        src="/aler3.png" alt="image" />
                                </div>
                            </div>

                           
                        </div>
                        <button className='bg-[#6C55F9] text-white py-2 px-8 mr-10 rounded-md mt-4'>See More...</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page