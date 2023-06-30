import React from 'react'

const page = () => {
    return (
        <div className='w-full md:min-h-[127vh]  relative '>
            <div className="h-full md:min:h-[70vh] md:max-w-5xl p-4 md:p-0 max-w-screen text-black flex flex-col md:flex-row items-center md:items-start mx-auto justify-between md:pt-3">
                <div className='md:w-[70%] relative flex flex-col items-center md:items-start mt-8 '>
                    <h2 className='md:text-[7rem] text-[3rem] text-center md:text-left stroke-text  relative'>ABOUT US</h2>
                    <p className='md:text-4xl text-xl w-full text-center md:text-left md:absolute  md:left-4 md:top-[6.5rem] '>
                        About Our Cpmpany
                    </p>
                    <p className='md:pl-4 md:w-[60%]'>{`2 digit innovations is a one-stop destination for website and mobile application development. We are a team of experienced, skilled, and trained 
                    professionals who take every possible effort to offer you and your users a lifetime experience.`}</p>
                </div>
                <div className='md:w-[30%] z-10 md:h-[70vh] flex justify-center '>
                    <img className='md:h-[50vh] h-[30vh]'
                        src="/boy.png" alt="image" />
                </div>
            </div>
            <div className="h-[40vh] md:h-[50vh] relative ">
                <div className='max-w-5xl h-full  z-10 relative mx-auto flex flex-col md:flex-row  justify-end md:justify-start items-center md:gap-6'>
                    <div className='  w-full text-left relative '>
                        <h2 className='md:text-[8rem] text-[3rem] text-center font-bold stroke-text'>HISTORY</h2>
                        <p className='md:text-4xl w-full text-xl font-bold text-center md:absolute md:bottom-12  md:pl-8'>
                            {
                                `Our History`
                            }
                        </p>
                    </div>
                    <div className='w-full md:pl-1 p-2 text-center'>
                        <p>
                            {
                                `We started our journey just 3 years ago in 2019. During the Covid-19 Pandemic 
                                we opt work from home culture and deliver best to our valued customers with a success rate..`
                            }
                        </p>
                    </div>
                </div>
                <img className='h-[40vh] md:h-[60vh] w-full absolute bottom-0 '
                    src='/vector1.png' alt='image' />
            </div>

            <div className=" md:max-w-5xl mt-8  max-w-screen text-black flex flex-col md:flex-row items-start mx-auto justify-between pt-3">
                <div className=' mt-8 w-full flex flex-col items-center gap-4 p-4 md:p-0'>
                    <div className='w-full p-10 bg-[#6C55F9] text-white text-center rounded-xl'>
                        <p className='mb-2 font-bold text-2xl'>2018</p>
                        <p className='md:w-[50%] mx-auto '>Inception by the founder and CEO Surya Prakash Chaturvedi.</p>
                    </div>
                    <img className='h-14' src="/arrowDown.png" alt="" />
                    <div className='w-full p-10 bg-[#6C55F9] text-white text-center rounded-xl'>
                        <p className='mb-2 font-bold text-2xl'>2019</p>
                        <p className='md:w-[50%] mx-auto '>Building trust by delivering viable digital solutions to our clients..</p>
                    </div>
                    <img className='h-14' src="/arrowDown.png" alt="" />
                    <div className='w-full p-10 bg-[#6C55F9] text-white text-center rounded-xl'>
                        <p className='mb-2 font-bold text-2xl'>2020</p>
                        <p className='md:w-[50%] mx-auto '>Proving our dynamic nature by efficiently shifting to work from home culture and yet managing to grow our team, revenue, and products.</p>
                    </div>
                    <img className='h-14' src="/arrowDown.png" alt="" />
                    <div className='w-full p-10 bg-[#6C55F9] text-white text-center rounded-xl'>
                        <p className='mb-2 font-bold text-2xl'>2021</p>
                        <p className='md:w-[50%] mx-auto '>Turning our temporary clients to permanent clients by meeting their demands on time, efficient relationships, and upskilling ourselves with current market needs.</p>
                    </div>
                    <img className='h-14' src="/arrowDown.png" alt="" />
                    <div className='w-full p-10 bg-[#6C55F9] text-white text-center rounded-xl'>
                        <p className='mb-2 font-bold text-2xl'>2022</p>
                        <p className='md:w-[50%] mx-auto '>Adding new products and services to our system based on extensive research and market demand. Thriving hard to increase our professional network by the end of year.</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default page