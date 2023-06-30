import React from 'react'

const Clients = () => {
    return (
        <div className='min-w-screen border'>
            <div className='md:max-w-5xl max-w-screen mx-auto text-black flex gap-1 py-8 px-4 md:px-0'>
                <img className=' h-10 md:h-auto' src="/rightArrow.png" alt="" />
                <div className='w-full flex  items-center justify-evenly '>
                    <img className=' h-5 md:h-10'
                        src="/client1.png" alt="" />
                    <img className=' h-5 md:h-10'
                        src="/client2.png" alt="" />
                    <img className=' h-5 md:h-10 hidden md:block'
                        src="/client3.png" alt="" />
                    <img className=' h-5 md:h-12 hidden md:block'
                        src="/client4.png" alt="" />
                </div>
                <img className=' h-10 md:h-auto' src="/leftArrow.png" alt="" />
            </div>
        </div>
    )
}

export default Clients