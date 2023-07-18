import React from 'react'
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()
    const userName = useSelector((state) => state.user.username);

    const verifyUser = () => {
        if (!userName) {
            toast.error("Create your account first  or login by your existing acocount.")
        } else {
            navigate('/Dashbaord')
        }
    }
    return (
        <div className='absolute flex z-[10] mt-[30px] 3xl:mt-[68px]'>
            <div className='flex gap-y-3 flex-col md:flex-row  justify-center items-center w-[100vw]'>
                {/* center links */}
                <div className='flex flex-wrap gap-x-2 sm:gap-x-[20px] md:gap-x-[29px] '>
                    {/* Dashboard link */}
                    <div onClick={verifyUser} className='cursor-pointer flex  gap-x-2 justify-center items-center'>
                        <div className='flex justify-center items-center'>
                            <img src="dashboard.svg" alt="" className=' ' />
                        </div>
                        <div className='flex justify-center text-[10px] font-bold items-center  text-white'>
                            <p>DASHBAORD</p>
                        </div>
                    </div>
                    {/* Profile link */}
                    <div className='cursor-pointer flex gap-x-2 justify-center items-center'>
                        <div className='flex justify-center items-center'>
                            <img src="user.svg" alt="" className=' ' />
                        </div>
                        <div className='flex justify-center text-[10px] font-bold items-center  text-white'>
                            <p>PROFILE</p>
                        </div>
                    </div>
                    {/* Signup link */}
                    <div className='cursor-pointer flex gap-x-2 justify-center items-center'>
                        <div className='flex justify-center items-center'>
                            <img src="signup.svg" alt="" className=' ' />
                        </div>
                        <div className='flex justify-center text-[10px] font-bold items-center  text-white'>
                            <p>Sign Up</p>
                        </div>
                    </div>
                    {/* Sign in link */}
                    <div className='cursor-pointer flex gap-x-2 justify-center items-center'>
                        <div className='flex justify-center items-center'>
                            <img src="signin.svg" alt="" className=' ' />
                        </div>
                        <div className='flex justify-center text-[10px] font-bold items-center  text-white'>
                            <p>Sign In</p>
                        </div>
                    </div>

                </div>
                {/* sign up button */}
                <div className=' relative md:left-[80px] 3xl:left-[130px]'>
                    <Link to="/register">
                        <button className='px-10 py-1 rounded-lg bg-white text-[#2D3748] font-bold '>
                            Sign Up
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}
