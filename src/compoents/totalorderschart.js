import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jul',
        totalorders: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Aug',
        totalorders: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Sep',
        totalorders: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Oct',
        totalorders: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Nov',
        totalorders: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Dec',
        totalorders: 2390,
        pv: 3800,
        amt: 2500,
    },
];

export default function Totalorderschart() {
    return (
        <div className='bg-white '>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    className='mt-5 '
                    width={350}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barSize={20}
                >
                    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                    <YAxis domain={[0, 10]} />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="totalorders" fill="#8884d8" background={{ fill: '#eee' }} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
