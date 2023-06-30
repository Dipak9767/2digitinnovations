import Link from 'next/link';
import React from 'react'
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';

const page = () => {
    return (
        <div className='min-w-screen border'>
            <div className='md:max-w-5xl max-w-screen mx-auto text-black flex flex-col gap-1 py-8 px-4 md:px-0'>
                <div className='w-full text-center'>
                    <h2 className='text-4xl font-bold'>Bolgs</h2>
                    <p className='text-2xl font-bold text-[#6C55F9]'>Code your dreams with us</p>
                </div>
                <div className='w-[70%] mx-auto shadow-custom rounded-xl px-4 mt-8 items-center flex gap-4'>
                    <AiOutlineSearch className='text-2xl font-bold text-[#6C55F9]' />
                    <input className='outline-none w-full p-2' type="text" placeholder='Search Your Blog' />
                    <AiOutlineUser className='text-2xl font-bold text-[#6C55F9]' />
                </div>
                <div className='w-full flex flex-col md:flex-row md:flex-wrap gap-8 mt-10'>
                    <div className='rounded-xl w-full md:w-[30%] overflow-hidden bg-[#BFBFBF33] h-[70vh]'>
                        <div className='h-[40vh] rounded-xl overflow-hidden'>
                            <img src="/blog1.png" alt="" />
                        </div>
                        <div className=' h-[30vh]  text-center py-2 flex flex-col gap-2 px-8'>
                            <span className='text-[#656565]'>23 june 2023</span>
                            <p className='text-2xl font-bold'>Hackethon</p>
                            <p className='h-[15vh] overflow-hidden text-[#656565] '>{`AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July 
                            AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July
                            AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July
                            `}</p>
                            <Link href={`/blogs/26556`}>Read More...</Link>

                        </div>
                    </div>
                    <div className='rounded-xl w-full md:w-[30%] overflow-hidden bg-[#2D242533] h-[110vh]'>
                        <div className='h-[40vh] rounded-xl overflow-hidden'>
                            <img src="/blog2.png" alt="" />
                        </div>
                        <div className=' h-[70vh]  text-center py-2 flex flex-col gap-2 px-8'>
                            <span className='text-[#656565]'>23 june 2023</span>
                            <p className='text-2xl font-bold'>Hackethon</p>
                            <p className='h-[60vh] overflow-hidden text-[#656565] '>{`AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July 
                            AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July
                            AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July
                            `}</p>
                            <Link href={`/blogs/26556`}>Read More...</Link>
                        </div>
                    </div>
                    <div className='rounded-xl w-full md:w-[30%] overflow-hidden bg-[#BFBFBF33] h-[70vh]'>
                        <div className='h-[40vh] rounded-xl overflow-hidden'>
                            <img src="/blog1.png" alt="" />
                        </div>
                        <div className=' h-[30vh]  text-center py-2 flex flex-col gap-2 px-8'>
                            <span className='text-[#656565]'>23 june 2023</span>
                            <p className='text-2xl font-bold'>Hackethon</p>
                            <p className='h-[15vh] overflow-hidden text-[#656565] '>{`AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July 
                            AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July
                            AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July
                            `}</p>
                            <Link href={`/blogs/26556`}>Read More...</Link>
                        </div>
                    </div>
                    <div className='rounded-xl w-full md:w-[30%] overflow-hidden bg-[#2D242533] md:mt-[-40vh] h-[110vh]'>
                        <div className='h-[40vh] rounded-xl overflow-hidden'>
                            <img src="/blog2.png" alt="" />
                        </div>
                        <div className=' h-[70vh]  text-center py-2 flex flex-col gap-2 px-8'>
                            <span className='text-[#656565]'>23 june 2023</span>
                            <p className='text-2xl font-bold'>Hackethon</p>
                            <p className='h-[60vh] overflow-hidden text-[#656565] '>{`I User Group.Learn more about how PaLM 2 powers Google's generative AI features and tools like Bard and the PaLM API. Updates from 2023 I/O: Our Bold and Responsible Approach to AI in action How Google is applying AI to Learn more about how PaLM 2 powers Google's generative AI features and tools like Bard and the PaLM API. Updates from 2023 I/O: Our Bold and Responsible Approach to AI in action How Google is applying AI to 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July`}</p>
                            <Link href={`/blogs/26556`}>Read More...</Link>
                        </div>
                    </div>
                    <div className='rounded-xl w-full md:w-[30%] overflow-hidden bg-[#BFBFBF33] h-[70vh]'>
                        <div className='h-[40vh] rounded-xl overflow-hidden'>
                            <img src="/blog1.png" alt="" />
                        </div>
                        <div className=' h-[30vh]  text-center py-2 flex flex-col gap-2 px-8'>
                            <span className='text-[#656565]'>23 june 2023</span>
                            <p className='text-2xl font-bold'>Hackethon</p>
                            <p className='h-[15vh] overflow-hidden text-[#656565] '>{`AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July 
                            AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July
                            AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July
                            `}</p>
                            <Link href={`/blogs/26556`}>Read More...</Link>
                        </div>
                    </div>
                    <div className='rounded-xl w-full md:w-[30%] overflow-hidden bg-[#2D242533] md:mt-[-40vh] h-[110vh]'>
                        <div className='h-[40vh] rounded-xl overflow-hidden'>
                            <img src="/blog2.png" alt="" />
                        </div>
                        <div className=' h-[70vh]  text-center py-2 flex flex-col gap-2 px-8'>
                            <span className='text-[#656565]'>23 june 2023</span>
                            <p className='text-2xl font-bold'>Hackethon</p>
                            <p className='h-[60vh] overflow-hidden text-[#656565] '>{`AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July 
                            AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July
                            AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July
                            `}</p>
                            <Link href={`/blogs/26556`}>Read More...</Link>
                        </div>
                    </div>
                    <div className='rounded-xl w-full md:w-[30%] overflow-hidden bg-[#BFBFBF33] h-[70vh]'>
                        <div className='h-[40vh] rounded-xl overflow-hidden'>
                            <img src="/blog1.png" alt="" />
                        </div>
                        <div className=' h-[30vh]  text-center py-2 flex flex-col gap-2 px-8'>
                            <span className='text-[#656565]'>23 june 2023</span>
                            <p className='text-2xl font-bold'>Hackethon</p>
                            <p className='h-[15vh] overflow-hidden text-[#656565] '>{`AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July 
                            AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July
                            AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July
                            `}</p>
                            <Link href={`/blogs/26556`}>Read More...</Link>
                        </div>
                    </div>
                    <div className='rounded-xl w-full md:w-[30%] overflow-hidden bg-[#2D242533]  h-[110vh]'>
                        <div className='h-[40vh] rounded-xl overflow-hidden'>
                            <img src="/blog2.png" alt="" />
                        </div>
                        <div className=' h-[70vh]  text-center py-2 flex flex-col gap-2 px-8'>
                            <span className='text-[#656565]'>23 june 2023</span>
                            <p className='text-2xl font-bold'>Hackethon</p>
                            <p className='h-[60vh] overflow-hidden text-[#656565] '>{`AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July 
                            AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July
                            AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July
                            `}</p>
                            <Link href={`/blogs/26556`}>Read More...</Link>
                        </div>
                    </div>
                    <div className='rounded-xl w-full md:w-[30%] overflow-hidden bg-[#BFBFBF33]  h-[70vh]'>
                        <div className='h-[40vh] rounded-xl overflow-hidden'>
                            <img src="/blog1.png" alt="" />
                        </div>
                        <div className=' h-[30vh]  text-center py-2 flex flex-col gap-2 px-8'>
                            <span className='text-[#656565]'>23 june 2023</span>
                            <p className='text-2xl font-bold'>Hackethon</p>
                            <p className='h-[15vh] overflow-hidden text-[#656565] '>{`AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July 
                            AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July
                            AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July
                            `}</p>
                            <Link href={`/blogs/26556`}>Read More...</Link>
                        </div>
                    </div>
                    <div className='rounded-xl w-full md:w-[30%] overflow-hidden bg-[#2D242533] md:mt-[-40vh] h-[110vh]'>
                        <div className='h-[40vh] rounded-xl overflow-hidden'>
                            <img src="/blog2.png" alt="" />
                        </div>
                        <div className=' h-[70vh]  text-center py-2 flex flex-col gap-2 px-8'>
                            <span className='text-[#656565]'>23 june 2023</span>
                            <p className='text-2xl font-bold'>Hackethon</p>
                            <p className='h-[60vh] overflow-hidden text-[#656565] '>{`AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July 
                            AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July
                            AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July
                            `}</p>
                            <Link href={`/blogs/26556`}>Read More...</Link>
                        </div>
                    </div>
                    <div className='rounded-xl w-full md:w-[30%] overflow-hidden bg-[#BFBFBF33] h-[70vh]'>
                        <div className='h-[40vh] rounded-xl overflow-hidden'>
                            <img src="/blog1.png" alt="" />
                        </div>
                        <div className=' h-[30vh]  text-center py-2 flex flex-col gap-2 px-8'>
                            <span className='text-[#656565]'>23 june 2023</span>
                            <p className='text-2xl font-bold'>Hackethon</p>
                            <p className='h-[15vh] overflow-hidden text-[#656565] '>{`AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July 
                            AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July
                            AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July
                            `}</p>
                            <Link href={`/blogs/26556`}>Read More...</Link>
                        </div>
                    </div>
                    <div className='rounded-xl w-full md:w-[30%] overflow-hidden bg-[#2D242533] md:mt-[-40vh] h-[110vh]'>
                        <div className='h-[40vh] rounded-xl overflow-hidden'>
                            <img src="/blog2.png" alt="" />
                        </div>
                        <div className=' h-[70vh]  text-center py-2 flex flex-col gap-2 px-8'>
                            <span className='text-[#656565]'>23 june 2023</span>
                            <p className='text-2xl font-bold'>Hackethon</p>
                            <p className='h-[60vh] overflow-hidden text-[#656565] '>{`AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July 
                            AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July
                            AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July
                            `}</p>
                            <Link href={`/blogs/26556`}>Read More...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page