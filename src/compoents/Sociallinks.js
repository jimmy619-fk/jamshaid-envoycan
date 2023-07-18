// import { FacebookAuthProvider, GoogleAuthProvider } from '@firebase/auth';
import React from 'react'
import { auth } from '../firebase';
import firebase from 'firebase/compat/app'; // Import the main firebase module
import 'firebase/compat/auth'; // Import the individual modules
import 'firebase/compat/firestore';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
export default function Sociallinks({ register }) {


    const navigate = useNavigate()
    const gradientStyle = {
        background: 'linear-gradient(41deg, #313860 0%, #151928 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };

    // Register using Google provider using firebase

    const handleSocialIconClick = async (provider) => {
        try {
            if (provider === 'Google') {
                // Use Firebase Google Sign-In popup
                const googleProvider = new firebase.auth.GoogleAuthProvider();
                await auth.signInWithPopup(googleProvider);
                toast.success(`Congrats, Account login using Gmail.`);
                navigate('/Dashbaord')

            } else {
                toast.error(`Currently you can only use Gmail .`);
            }

            // After successful sign-in, the user will be automatically registered in Firebase


        } catch (error) {
            console.error('Error registering user:', error);
            toast.error('Error registering user. Please try again.');
        }
    };
    return (
        <div className='flex flex-col '>
            <div className='relative mt-[30px] 3xl:mt-[47px] flex justify-center items-center'>
                <p style={gradientStyle} className={register ? "text-[18px] font-bold text-[#2D3748]" : 'blur-[2px] backdrop-blur-lg relative top-1 text-[18px] font-bold  text-sign'}>{register ? "Register with" : "Sign in with"}</p>
                <p style={gradientStyle} className={register ? 'hidden' : 'absolute  text-[18px] font-bold  text-sign'}>{register ? "Register with" : "Sign in with"} </p>
            </div>
            {/*Social icons login */}
            <div className='flex justify-center items-center gap-x-2 md:gap-x-3 mt-[30px] 3xl:mt-[46px]'>
                <div
                    onClick={() => handleSocialIconClick("Facebook")}
                    className='cursor-pointer hover:scale-110 transition-all shadow-md  flex justify-center items-center h-[45px] w-[45px] md:h-[75px] md:w-[74.33px] border-[4px] rounded-xl'>
                    <img src="facebook.svg" alt="" />
                </div>
                <div
                    onClick={() => handleSocialIconClick("Apple")}
                    className='cursor-pointer hover:scale-110 transition-all shadow-xl  flex justify-center items-center h-[45px] w-[45px] md:h-[75px] md:w-[74.33px] border-[5px] rounded-xl'>
                    <img src="apple.svg" alt="" />
                </div>
                <div
                    onClick={() => handleSocialIconClick("Google")}
                    className='cursor-pointer hover:scale-110 transition-all shadow-md  flex justify-center items-center h-[45px] w-[45px] md:h-[75px] md:w-[74.33px] border-[3px] rounded-xl'>
                    <img src="google.svg" alt="" />
                </div>

            </div>

        </div>
    )
}
