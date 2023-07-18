import React from 'react'
import { Table, Progress } from 'flowbite-react';
export default function Socialtraffic() {
    return (
        <div className='p-3 flex flex-col mb-4'>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='text-[18px] font-bold text-[#2D3748]'>Social traffic</p>
                </div>
                <div className=''>
                    <button className='bg-[#ADF22F] text-white rounded-xl px-4  text-[10px] font-bold p-3 '>SEE ALL</button>
                </div>
            </div>
            {/* border */}
            <div className='mt-4 mb-3 border-b border-[#E2E8F0] w-full'> </div>
            {/* table */}
            <Table striped>
                <Table.Head>
                    <Table.HeadCell className='text-[#A0AEC0] text-[10px] font-bold'>
                        REFERRAL
                    </Table.HeadCell>
                    <Table.HeadCell className='text-[#A0AEC0] text-[10px] font-bold'>
                        VISITORS
                    </Table.HeadCell>
                    <Table.HeadCell className='text-[#A0AEC0] text-[10px] font-bold'>

                    </Table.HeadCell>


                </Table.Head>
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="text-[14px] font-bold whitespace-nowrap  text-gray-500 dark:text-white">
                            Facebook
                        </Table.Cell>
                        <Table.Cell>
                            3
                        </Table.Cell>

                        <Table.Cell className=' w-[40%]'>


                            45
                            <Progress
                                size="sm"
                                color="dark"
                                progress={45}
                            />

                        </Table.Cell>


                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="text-[14px] font-bold  whitespace-nowrap  text-gray-500 dark:text-white">
                            <p>
                                Google
                            </p>
                        </Table.Cell>
                        <Table.Cell>
                            3
                        </Table.Cell>
                        <Table.Cell className=' w-[40%]'>


                            20
                            <Progress
                                size="sm"
                                color="green"
                                progress={20}
                            />

                        </Table.Cell>


                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="text-[14px] font-bold  whitespace-nowrap  text-gray-500 dark:text-white">
                            Apple
                        </Table.Cell>
                        <Table.Cell>
                            3
                        </Table.Cell>
                        <Table.Cell className=' w-[40%]'>


                            0
                            <Progress
                                size="sm"
                                class='blue'
                                progress={0}
                            />

                        </Table.Cell>


                    </Table.Row>


                </Table.Body>
            </Table>
        </div>
    )
}
