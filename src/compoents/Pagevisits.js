import React from 'react'
import { Table } from 'flowbite-react';
export default function Pagevisits() {
    return (
        <div className=' p-3 flex flex-col mb-4 '>
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
            <Table >
                <Table.Head>
                    <Table.HeadCell className='text-[#A0AEC0] text-[10px] font-bold'>
                        PAGE NAME
                    </Table.HeadCell>
                    <Table.HeadCell className='text-[#A0AEC0] text-[10px] font-bold'>
                        VISITORS
                    </Table.HeadCell>
                    <Table.HeadCell className='hidden md:inline text-[#A0AEC0] text-[10px] font-bold'>
                        UNIQUE USERS
                    </Table.HeadCell>
                    <Table.HeadCell className='hidden md:inline text-[#A0AEC0] text-[10px] font-bold'>
                        BOUNCE RATE
                    </Table.HeadCell>

                </Table.Head>
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-500 dark:text-white">
                            /
                        </Table.Cell>
                        <Table.Cell>
                            3
                        </Table.Cell>
                        <Table.Cell className='hidden md:inline'>
                            4
                        </Table.Cell>
                        <Table.Cell className='hidden md:inline'>
                            9
                        </Table.Cell>

                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            <p>
                                /register
                            </p>
                        </Table.Cell>
                        <Table.Cell>
                            3
                        </Table.Cell>
                        <Table.Cell className='hidden md:inline'>
                            33
                        </Table.Cell>
                        <Table.Cell className='hidden md:inline'>
                            2
                        </Table.Cell>

                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            /login
                        </Table.Cell>
                        <Table.Cell>
                            3
                        </Table.Cell>
                        <Table.Cell className='hidden md:inline' >
                            3
                        </Table.Cell>
                        <Table.Cell className='hidden md:inline'>
                            3
                        </Table.Cell>

                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            <p>
                                /Dashboard
                            </p>
                        </Table.Cell>
                        <Table.Cell>
                            3
                        </Table.Cell>
                        <Table.Cell className='hidden md:inline'>
                            1
                        </Table.Cell>
                        <Table.Cell className='hidden md:inline'>
                            9
                        </Table.Cell>

                    </Table.Row>

                </Table.Body>
            </Table>

        </div>
    )
}
