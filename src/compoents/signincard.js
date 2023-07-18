import React from 'react'
import Sociallinks from './Sociallinks'
import Signinform from './Signinform'

export default function Signincard() {
    return (
        <div className=' absolute top-[100px]  3xl:top-[180.5px] left-0 right-0  flex justify-center items-center '>
            {/* form */}
            <div className='bg-white rounded-xl h-[490px] w-[250px] sm:w-[300px] md:w-[400px] 3xl:h-[614px] 3xl:w-[453px]'>
                {/* sign with social links */}
                <Sociallinks />
                {/* OR */}
                <div className=' flex justify-center items-center mt-[14px] 3xl:mt-[20.32px]'>
                    <p className='absolute text-[20px] font-bold text-[#A0AEC0]'>or</p>
                    <p className='top-1 blur-[1px]   relative text-[18px] font-bold text-[#A0AEC0]'>or</p>
                </div>
                {/* FOrm */}
                <Signinform />
            </div>
        </ div>
    )
}
