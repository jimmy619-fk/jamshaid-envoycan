import React from 'react'
import Sociallinks from './Sociallinks'
import Registerformfields from './Registerformfields'

export default function Registerform() {
    return (
        <div className='   flex flex-col justify-center items-center mb-3 '>
            <div className='bg-white md:w-[452px] h-[600px]   rounded-2xl'>
                <Sociallinks register={true} />
                {/* OR */}
                <div className=' flex justify-center items-center mt-[14px] 3xl:mt-[24.32px]'>
                    <p className=' text-[20px] font-bold text-[#A0AEC0]'>or</p>
                </div>
                {/* Register form fill fields */}
                <Registerformfields />

            </div>

        </div>
    )
}
