import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='min-w-screen'>
            <div className='w-full relative md:min-h-[80vh] min-h-[60vh]'>
                <img className='absolute top-0 bg-contain h-full' src="/laptop.png" alt="" />
                <div className='w-full absolute top-0 md:min-h-[80vh] min-h-[60vh] bg-black opacity-70 '></div>
                <div className='w-full relative md:min-h-[80vh] min-h-[60vh] flex flex-col gap-4 items-center justify-center z-10'>
                    <h2 className='text-4xl font-bold text-white'>HackeThon</h2>
                    <p className='text-2xl font-bold text-white'>23-june-2023</p>
                </div>
            </div>
            <div className='md:max-w-5xl max-w-screen p-8 mx-auto text-black flex flex-col gap-8 text-center items-center'>
                <p className='text-xl text-center'>
                    {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has survived not only five centuries`}
                </p>
                <h2 className='text-4xl font-bold'>Where does it come from?</h2>
                <p className='text-xl text-center'>
                    {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has survived not only five centuries`}
                </p>
                <p className='text-xl text-center'>
                    {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has survived not only five centuries`}
                </p>
                <p className='text-xl text-center'>
                    {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has survived not only five centuries`}
                </p>
                <button className='bg-[#6C55F9] text-white py-2 px-8  rounded-md '>More Blogs</button>
            </div>
            <div className='md:max-w-5xl max-w-screen mx-auto p-4 md:p-0'>
                <div className='w-full flex flex-col md:flex-row md:flex-wrap gap-8 mt-10 text-black'>
                    <div className='rounded-xl w-full md:w-[30%] overflow-hidden bg-[#BFBFBF33] h-[70vh]'>
                        <div className='h-[40vh] rounded-xl overflow-hidden'>
                            <img src="/blog1.png" alt="" />
                        </div>
                        <div className=' h-[30vh]  text-center py-2 flex flex-col gap-2 px-8'>
                            <span className='text-[#656565]'>23 june 2023</span>
                            <p className='text-2xl font-bold text-black'>Hackethon</p>
                            <p className='h-[15vh] overflow-hidden text-[#656565] '>AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July</p>
                            <Link href={`/blogs/26556`}>Read More...</Link>

                        </div>
                    </div>
                    <div className='rounded-xl w-full md:w-[30%] overflow-hidden bg-[#BFBFBF33] h-[70vh]'>
                        <div className='h-[40vh] rounded-xl overflow-hidden'>
                            <img src="/blog1.png" alt="" />
                        </div>
                        <div className=' h-[30vh]  text-center py-2 flex flex-col gap-2 px-8'>
                            <span className='text-[#656565]'>23 june 2023</span>
                            <p className='text-2xl font-bold text-black'>Hackethon</p>
                            <p className='h-[15vh] overflow-hidden text-[#656565] '>AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July</p>
                            <Link href={`/blogs/26556`}>Read More...</Link>

                        </div>
                    </div>
                    <div className='rounded-xl w-full md:w-[30%] overflow-hidden bg-[#BFBFBF33] h-[70vh]'>
                        <div className='h-[40vh] rounded-xl overflow-hidden'>
                            <img src="/blog1.png" alt="" />
                        </div>
                        <div className=' h-[30vh]  text-center py-2 flex flex-col gap-2 px-8'>
                            <span className='text-[#656565]'>23 june 2023</span>
                            <p className='text-2xl font-bold text-black'>Hackethon</p>
                            <p className='h-[15vh] overflow-hidden text-[#656565] '>AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July AI User Group. 28 June. JavaScript Workshop - Build a React App Using Web Database. 11 July</p>
                            <Link href={`/blogs/26556`}>Read More...</Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page