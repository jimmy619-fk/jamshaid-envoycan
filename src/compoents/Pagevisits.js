import React, { useEffect, useState } from 'react'
import { Table } from 'flowbite-react';
import { db } from '../firebase';
export default function Pagevisits() {
    const [pageVisits, setPageVisits] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection('pages').onSnapshot((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                visitors: doc.data().visitors,
            }));
            setPageVisits(data);
        });

        return () => unsubscribe();
    }, []);
    return (
        <div className=' p-3 flex flex-col mb-4'>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='text-[18px] font-bold text-[#2D3748]'>Page visits</p>
                </div>
                <div className=''>
                    <button className='bg-[#ADF22F] text-white rounded-xl px-4  text-[10px] font-bold p-3 '>SEE ALL</button>
                </div>
            </div>
            {/* border */}
            <div className='mt-4 mb-3 border-b border-[#E2E8F0] w-full'> </div>
            {/* table */}

            {/* table */}
            <Table striped>
                <Table.Head>
                    <Table.HeadCell className='text-[#A0AEC0] text-[10px] font-bold'>
                        PAGE NAME
                    </Table.HeadCell>
                    <Table.HeadCell className='text-[#A0AEC0] text-[10px] font-bold'>
                        VISITORS
                    </Table.HeadCell>
                    <Table.HeadCell className=' text-[#A0AEC0] text-[10px] font-bold'>
                        UNIQUE USERS
                    </Table.HeadCell>
                    <Table.HeadCell className='text-[#A0AEC0] text-[10px] font-bold'>
                        BOUNCE RATE
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className='divide-y'>
                    {pageVisits.map((page) => (
                        <Table.Row key={page.id} className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                            <Table.Cell className='whitespace-nowrap font-medium text-gray-500 dark:text-white'>
                                {page.id}
                            </Table.Cell>
                            <Table.Cell>{page.visitors}</Table.Cell>
                            {/* Add other table cells for UNIQUE USERS and BOUNCE RATE */}
                            <Table.Cell>...</Table.Cell>
                            <Table.Cell>...</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>

        </div>
    )
}
