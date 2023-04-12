import React from 'react'

function PackageComponent(props) {
    return (
        <>
            <div className='flex border relative  p-5  rounded-lg sm:border-none md:border-none lg:border-none xl:border-none flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row bg-[#E8ECF6] sm:bg-white md:bg-white lg:bg-white xl:bg-white py-5 '>
                <div className='border-0  sm:border md:border lg:border xl:border border-gray-400 p-5 rounded-[5px]'>
                    <p className='capitalize font-normal text-center text-xl mb-5 MobileHide-DesktopView-block'>package</p>

                    <div className='flex justify-between gap-x-2'>
                        <img className='w-[100px] h-auto rounded-lg MobileView-DesktopHide-block' src="assets/images/ddt1.png" alt="" />
                    <table className=''>
                        <tr>
                            <td><p className='capitalize text-sm'>destination</p></td>
                            <td>:</td>
                            <td><p className='capitalize text-sm'>{props.data && props.data.location}</p></td>
                        </tr>
                        <tr>
                            <td><p className='capitalize text-sm'>Duration</p></td>
                            <td>:</td>
                            <td><p className='capitalize text-sm'>{props.data && props.data.duration}</p></td>
                        </tr>
                        <tr>
                            <td><p className='capitalize text-sm'>cost</p></td>
                            <td>:</td>
                            <td><p className='capitalize text-sm'>{props.data && props.data.location}</p></td>
                        </tr>
                    </table>
                    </div>
                </div>
                <div className='border-0 sm:border md:border lg:border xl:border border-gray-400 p-5 rounded-[5px]'>
                    <p className='capitalize font-normal text-start text-xl mb-5 MobileHide-DesktopView-block'>package</p>

                    <ul className='flex gap-5 flex-wrap'>
                        <li>
                            <List />
                        </li>
                        <li>
                            <List />
                        </li>
                        <li>
                            <List />
                        </li>
                        <li>
                            <List />
                        </li>
                    </ul>

                    <p className='capitalize font-normal text-start text-md mb-3 MobileHide-DesktopView-block'>documents</p>

                    <div className='hidden sm:flex md:flex lg:flex xl:flex gap-2 flex-wrap mb-2'>
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />


                    </div>
                    <p className=' hidden sm:block md:block lg:block xl:block capitalize text-red-500 underline underline-offset-4'>download all</p>


                </div>
                <div className='  sm:hidden md:hidden lg:hidden xl:hidden absolute w-8 h-16 rounded-l-full bg-white right-[-1px] top-1/2'></div>
                <div className='  sm:hidden md:hidden lg:hidden xl:hidden absolute w-8 h-16 rounded-l-full bg-white left-[-1px] top-1/2 rotate-180'></div>
            </div>
            <div className='flex flex-wrap gap-2 my-2 sm:hidden md:hidden lg:hidden xl:hidden'>
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
            </div>
            <p className='capitalize text-start block sm:hidden md:hidden lg:hidden xl:hidden text-red-500 underline underline-offset-4'>download all</p>
        </>
    )
}

export default PackageComponent

const Box = () => {
    return (
        <div className='flex'>
            <div className='flex p-3 gap-x-2 bg-gray-300 rounded-[10px] items-center'>
                <p className='text-sm text-black/50'>Final itienerary pdf</p>
                <img src="assets/images/svg/pdf.svg" alt="" />
            </div>
        </div>
    )
}

const List = () => {
    return (
        <div className='flex flex-row sm:flex-col md:flex-col lg:flex-col xl:flex-col items-center gap-2'>
            <img src="assets/images/svg/tick-green.svg" alt="" />
            <p>Contacted and finalized package</p>
        </div>
    )
}