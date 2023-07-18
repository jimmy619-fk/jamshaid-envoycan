import React from 'react'

export default function Dashboardcards({ heading, amount, percent, icons }) {
    return (
        <div className='bg-white flex flex-col gap-y-3 rounded-xl p-3 mt-[30px] 3xl:mt-[42px]'>
            {/* upperpart */}
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <div>
                        <p className='text-[#A0AEC0] font-bold tracking-[1px] text-[12px]'>{heading}</p>
                    </div>
                    <div>
                        <p className='text-[18px] font-bold text-[#2D3748]'>{amount}</p>
                    </div>

                </div>
                <div>
                    <img src={icons} alt="" />
                </div>

            </div>
            {/* lower part */}
            <div className='flex gap-x-2'>
                <div>
                    <p className={percent.includes('-') ? 'text-[14px] font-bold text-[#E53E3E]' : 'text-[14px] font-bold text-[#48BB78]'}>
                        {percent}
                    </p>
                </div>
                <div>
                    <p className='text-[14px] font-normal text-[#A0AEC0]'>Since last month</p>
                </div>

            </div>


        </div>
    )
}
