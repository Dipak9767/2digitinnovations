import React from 'react'

const Say = () => {
    return (
        <div className='min-w-screen py-8 mt-8'>
            <div className='md:max-w-7xl max-w-screen mx-auto text-black flex justify-between p-4 md:p-0'>
                <div className='hidden md:block'>
                    <img src="/say1.png" alt="image" />
                </div>
                <div className='w-full relative flex flex-col items-center  '>
                    <div className='w-full relative flex flex-col items-center '>
                        <h2 className='md:text-[8rem] text-[3rem] text-center font-bold stroke-text mt-[-3rem] relative'>{`SAY'S`}</h2>
                        <p className='md:text-4xl text-xl w-full md:absolute text-center   top-[3rem]  pl-6 md:w-[60%]'>
                           {
                            ` People’s Say About Our
                            Support & Services`
                           }
                        </p>
                    </div>
                    <div className='w-full flex flex-col items-end'>
                        <div className='w-full h-[55vh] md:h-auto flex flex-col  md:flex-row flex-wrap md:flex-nowrap gap-4 overflow-auto'>
                            <div className='w-{50%] h-full bg-[#DFDFDF] p-8 px-10 flex flex-col gap-4 items-start justify-between'>
                                <img src="/qoute.png" alt="image" />
                                <div className='border-b border-gray-700 pb-8'>
                                    I had the pleasure of working with 2 Digit Innovations for a React-Native development project,
                                    and I must say that his performance was exceptional. His skills in
                                    React-Native development were outstanding,
                                    and he demonstrated a strong understanding of the principles and best practices
                                    of mobile application development
                                </div>
                                <div className='w-full flex justify-between'>
                                    <div>
                                        <p className='font-bold'>Jayen Ashar</p>
                                        <p className='text-sm'>Scaleup Consulting</p>
                                    </div>
                                    <img src="/chat.png" alt="image" />
                                </div>
                            </div>
                            <div className='w-{50%] h-full bg-[#DFDFDF] p-8 px-10 flex flex-col gap-4 items-start justify-between '>
                                <img src="/qoute.png" alt="" />
                                <div className='border-b border-gray-700 pb-8'>
                             {
                                `   2 Digit Innovatoions, Great job on the React-Native and Next.js project! Your work was 
                                impressive and demonstrated a strong understanding of both technologies. Your communication was
                                 excellent, and your willingness to go the extra mile to ensure a polished final product was much appreciated.
                                 Your team's performance was also good, and the collaboration was seamless.`
                             }
                                </div>
                                <div className='w-full flex justify-between'>
                                    <div>
                                        <p className='font-bold'>Furlong</p>
                                        <p className='text-sm'>JJ owen Limited</p>
                                    </div>
                                    <img src="/chat.png" alt="image" />
                                </div>
                            </div>
                        </div>
                        <button className='bg-[#6C55F9] text-white py-2 px-8 mr-10 mt-4 md:mt-8'>See More...</button>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <img src="/say2.png" alt="image" />
                </div>
            </div>
        </div>
    )
}

export default Say