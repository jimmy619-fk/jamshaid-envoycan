import React, { useState } from 'react'
import { db } from '../firebase'; // Import the Firebase db object
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
export default function Registerformfields() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Perform form validation here
        if (!formData.name || !formData.email || !formData.password) {
            toast.error('Please fill in all the fields')
            return;
        } else {
            toast.success('User registered')
        }
        try {
            // Save the form data in the "registered users" collection
            await db.collection('registered users').add(formData);

            // Optionally, you can reset the form fields after successful submission
            setFormData({
                name: '',
                email: '',
                password: '',
            });

            console.log('Form data saved:', formData);
        } catch (error) {
            toast.error('Error registering user. Please try again.');
        }

        // You can now proceed with form submission or further processing

        console.log('Form submitted:', formData);
    };
    return (
        <form action="" onSubmit={handleSubmit}>
            <div className='flex flex-col sm:gap-y-3 3xl:gap-y-7 ml-[10px] mr-[10px] sm:ml-[51px] sm:mr-[52px]'>
                {/* full name */}
                <div className='flex flex-col'>
                    <label className=' text-[#2D3748]  font-normal text-[14px] leading-[19.6px]'>
                        Name
                    </label>
                    <input
                        className='rounded-md outline-none border-gray-200 border p-2 placeholder:text-[14px] '
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        name="name"
                        id=""
                        placeholder='Your full name'
                    />
                </div>
                {/* full name */}
                <div className='flex flex-col'>
                    <label className=' text-[#2D3748]  font-normal text-[14px] leading-[19.6px]'>
                        Email
                    </label>
                    <input
                        className='rounded-md outline-none border-gray-200 border p-2 placeholder:text-[14px] '
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        name="email"
                        id=""
                        placeholder='Your email address'
                    />
                </div>
                {/* password */}
                <div className='flex flex-col'>
                    <label className=' text-[#2D3748]  font-normal text-[14px] leading-[19.6px]'>
                        Password
                    </label>
                    <input
                        className='rounded-md outline-none border-gray-200 border p-2 placeholder:text-[14px] '
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        name="password"
                        id=""
                        placeholder='Your password'
                    />
                </div>
                {/* remember me */}
                <div className='flex  items-center gap-x-2'>
                    {/* toggle button */}
                    <label class="relative inline-flex gap-x-2 items-center mb-5 cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none    rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#ADF22F]"></div>
                        <p className='font-normal text-[12px] text-[#2D3748]'>Remember me</p>

                    </label>


                </div>

                {/* button of sign in */}
                <div>
                    <button className='p-2 w-full bg-[#2D3748] text-white rounded-md'>SIGN UP</button>
                </div>
                {/* Dont have account? link */}
                <div className='flex justify-center items-center gap-x-1'>
                    <div>
                        <p className='text-[#A0AEC0] font-normal text-[14px]'>Don't have an account?</p>
                    </div>
                    <div>
                        <Link to='/'>
                            <p className='cursor-pointer text-[#2D3748] font-bold text-[14px]'>Sign in</p>
                        </Link>
                    </div>

                </div>
            </div>
        </form>
    )
}
