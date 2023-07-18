import React, { useState } from 'react';
import Navbar from './compoents/Navbar';
import Signinfooter from './compoents/Signinfooter';
import Signincard from './compoents/signincard';

export default function Login() {
   
    return (
        <div className='relative'>
            <Navbar />
            {/* Background image of sign in */}
            <img src="background-login.png" alt="" className='object-fit h-[85vh] 3xl:h-[1162px] w-full' />
            {/* Green Mask of sign in */}
            <div className='absolute top-0 left-0 right-0'>
                <img src="green.png" alt="" className='object-fill  h-[86vh] 3xl:h-[1162px] w-[100vw] p-0 m-0' />
            </div>
            <Signincard />
            <Signinfooter />
        </div>
    );
}
