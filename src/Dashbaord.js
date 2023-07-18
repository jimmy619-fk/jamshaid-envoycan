import React from 'react'
import Asidedashboard from './compoents/Asidedashboard'
import Dashboardhead from './compoents/Dashboardhead'
import Dashboardcards from './compoents/Dashboardcards'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Totalorderschart from './compoents/totalorderschart';
import Pagevisits from './compoents/Pagevisits';
import Socialtraffic from './compoents/Socialtraffic';
const data = [
    {
        name: 'Jan',
        sales: 4000,
        nonsales: 2400,
        amt: 2400,
    },
    {
        name: 'Feb',
        sales: 3000,
        nonsales: 1398,
        amt: 2210,
    },
    {
        name: 'March',
        sales: 2000,
        nonsales: 9800,
        amt: 2290,
    },
    {
        name: 'Apr',
        sales: 2780,
        nonsales: 3908,
        amt: 2000,
    },
    {
        name: 'May',
        sales: 1890,
        nonsales: 4800,
        amt: 2181,
    }, {
        name: 'Jun',
        sales: 2390,
        nonsales: 3800,
        amt: 2500,
    },
    {
        name: 'Jul',
        sales: 3490,
        nonsales: 4300,
        amt: 2100,
    },
    {
        name: 'Aug',
        sales: 3490,
        nonsales: 4300,
        amt: 2100,
    },
    {
        name: 'Sep',
        sales: 3490,
        nonsales: 4300,
        amt: 2100,
    },
    {
        name: 'Oct',
        sales: 3490,
        nonsales: 4300,
        amt: 2100,
    },
    {
        name: 'Nov',
        sales: 3490,
        nonsales: 4300,
        amt: 2100,
    },
    {
        name: 'Dec',
        sales: 3490,
        nonsales: 4300,
        amt: 2100,
    },
];







export default function Dashbaord() {



    return (
        <div className=' relative rounded-xl w-[100vw] '>
            {/* Background image of sign in */}
            <img src="dashboardmask.png" alt="" className='h-[40vh] md:h-auto w-full  ' />

            {/* Green Mask of sign in */}
            <img src="dashboardback.png" alt="" className='h-[40vh] md:h-auto w-full   absolute top-0 ' />
            {/* Board content main */}
            <div className='flex absolute w-full top-0 lg:ml-5 lg:mr-5 mt-4'>
                {/* ASIDE BAR */}
                <div className='z-[200] w-0 md:w-auto'>
                    <Asidedashboard />
                </div>
                <div className=' w-[100vw] lg:w-full mx-7 p-3'>
                    {/* Header of dashboard */}
                    <Dashboardhead />
                    {/* Cards of Dshbaord */}
                    <div className='grid md:grid-cols-2 gap-y-2 lg:grid-cols-3 xl:grid-cols-4 space-x-3 mx-5'>
                        <Dashboardcards
                            heading="TODAY&apos;S MONEY"
                            amount="$53,897"
                            percent="+3.48%"
                            icons="moneyicon.svg"
                        />
                        <Dashboardcards
                            heading="TODAY&apos;S USERS"
                            amount="3,200"
                            percent="+5.20%"
                            icons="globalicon.svg"

                        />
                        <Dashboardcards
                            heading="NEW CLIENTS"
                            amount="+2,503"
                            percent="-2.82%"
                            icons="client.svg"

                        />
                        <Dashboardcards
                            heading="TOTAL SALES"
                            amount="$173,000"
                            percent="+8.12%"
                            icons="sales.svg"

                        />
                    </div>

                    {/* 2 graphs */}
                    <div className='grid grid-cols-2 xll:grid-cols-3 space-x-3 mx-5 mt-[40px] 3xl:mt-[55px]'>
                        <div className='p-3 shadow-lg bg-gradient-to-r from-[#313860] to-[#151928]  col-span-2 rounded-xl'>
                            <div className='flex flex-col'>
                                <div>
                                    <p className='text-[18px] font-bold text-white'>Sales overview</p>
                                </div>
                                <div>
                                    <p className='text-[14px] font-normal text-white'><span className='text-[#48BB78]'>(+5) more</span> in 2021</p>
                                </div>

                            </div>
                            {/* graph */}
                            <div>
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart
                                        className="mt-[10px]"
                                        width={750}
                                        height={300}
                                        data={data}
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" stroke="#ffff" />
                                        <YAxis stroke="#ffff" />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="nonsales" stroke="#3182CE" activeDot={{ r: 8 }} />
                                        <Line type="monotone" dataKey="sales" stroke="#ffff" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className='bg-white flex flex-col  p-3 shadow-md col-span-2 xll:col-span-1 rounded-xl'>
                            <div className='flex flex-col'>
                                <div>
                                    <p className='text-[12px] font-bold text-gray-400'>Performance</p>
                                </div>
                                <div>
                                    <p className='text-[18px] font-bold text-[#2D3748]'>Total orders</p>
                                </div>

                            </div>
                            {/* graph */}
                            <div className='bg-white'>
                                <Totalorderschart />
                            </div>
                        </div>

                    </div>



                    {/* table */}
                    <div className='grid mt-5 xll:grid-cols-3 space-x-3 mx-5 mb-5'>
                        <div className='p-3 shadow-xl md:col-span-2 rounded-xl'>
                            {/* page visits */}
                            <Pagevisits />
                        </div>
                        <div className='p-3 shadow-xl  col-span-1 rounded-xl'>
                            {/* Social traffic */}
                            <Socialtraffic />
                        </div>
                    </div>
                </div>

            </div>




        </div>
    )
}
