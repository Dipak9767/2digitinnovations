
import { QA } from '@/common'
import React, { useState } from 'react'

const Seo = () => {
    const [selected, setSelected] = useState(0)

    return (
        <div className='min-w-screen py-8 mt-8'>
            <div className='md:max-w-5xl max-w-screen  mx-auto text-black flex flex-col md:flex-row p-4 md:p-0 '>
                <div className='w-fullmd:w-[50%] '>
                    <div className='w-full relative flex flex-col '>
                        <h2 className='md:text-[8rem] text-[3rem]  text-center md:text-left font-bold stroke-text mt-[-3rem] relative'>SEO</h2>
                        <p className='md:text-4xl text-xl w-full md:absolute  top-[3rem] text-center md:text-left mdpl-6'>
                            Manage Business SEO
                            Optimization Easily
                        </p>
                        <p className='pl-6 w-[80%]'>
                            Unleashing the Potential of Organic Growth: SEO Solutions That Work
                        </p>
                    </div>
                    {
                        QA?.map((item, idx) => (
                            <div key={idx} className='flex flex-col justify-start  items-start mb-2 w-full mt-2 md:pl-6'>
                                <div className={`grid grid-cols-2 items-center bg-[#6C55F9] w-full p-4 rounded-md   relative 
                        ${selected === idx + 1 && 'border-b-0 rounded-br-none rounded-bl-none'}  `}>
                                    <div className='col-span-2'>
                                        <p className="text-white  font-bold md:text-xl text-lg w-full">
                                            {item.question}
                                        </p>
                                    </div>
                                    <div
                                        className="absolute right-5 cursor-pointer"

                                    >
                                        {
                                            selected === (idx + 1) ?
                                                < img src='/right.png' alt='image' className="text-White font-bold text-xl " onClick={() => {
                                                    setSelected(0);
                                                }} />
                                                :
                                                < img src='/down.png' alt='image' className="text-White font-bold text-xl " onClick={() => {
                                                    setSelected((idx + 1));
                                                }} />
                                        }
                                    </div>
                                </div>
                                {selected === (idx + 1) &&
                                    <div className="w-full   bg-[#6C55F9] text-white text-md rounded-br-md rounded-bl-md border-2 border-custom-gold border-t-0 pb-2">
                                        <div className='overflow-auto md:max-h-[25vh]  p-4'>
                                            <p>{item.answer}</p>
                                        </div>

                                    </div>
                                }

                            </div>
                        ))
                    }
                </div>
                <div className='w-full md:w-[50%] flex items-center justify-center mt-6 md:mt-0'>
                    <img className='w-[50%] md:w-full'
                    src="/speaker.png" alt="" />
                </div>
            </div>
        </div>

    )
}

export default Seo