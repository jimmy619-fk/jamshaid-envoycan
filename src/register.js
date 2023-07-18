import React from 'react'
import Navbar from './compoents/Navbar'
import Registerform from './compoents/Registerform'

export default function Register() {
    return (
        <div className=' relative rounded-xl w-full '>
            <Navbar />
            {/* Background image of sign in */}
            <img src="regback.png" alt="" className=' h-[40vh] md:h-auto  p-3 rounded-3xl ' />
            {/* Green Mask of sign in */}
            <img src="reggreen.png" alt="" className=' h-[40vh] md:h-auto  absolute top-0 p-3 rounded-3xl' />

            <div className='mt-5 md:mt-0 flex flex-col gap-y-2 lg:gap-y-4 absolute top-[80px] lg:top-[120px] justify-center items-center w-full'>
                <p className='text-[14px] lg:text-[32px] font-bold text-white'>Welcome!</p>
                <p className='text-center text-white font-normal text-[10px] lg:text-[14px] mt-[6px] lg:mt-[14px]'>Use these awesome forms to login or create new
                    <br /> account in your project for free.

                </p>
                {/* Registerform */}
                <Registerform />
            </div>



        </div>
    )
}
