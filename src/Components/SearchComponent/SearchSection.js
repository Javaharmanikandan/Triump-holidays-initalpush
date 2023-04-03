import React from 'react'

function SearchSection() {
    return (
        <>
            <div className="relative mt-16 my-16 hidden md:flex lg:flex xl:flex flex-row md:flex-row lg:flex-row xl:flex-row justify-center w-full gap-x-16  items-stretch">
                <div className="relative z-10 gap-y-5 flex flex-col md:flex-col lg:flex-row xl:flex-row gap-x-3 p-3.5 px-10 bg-white md:rounded-none  lg:rounded-full shadow-md w-fit after:rounded-md    " >
                    <div className="flex gap-x-2 items-center border border-black/20 p-2 rounded-[5px]">
                        <img className="h-10" src="assets/images/svg/map.svg" alt="" />
                        <p className="capitalize text-sm">destination</p>
                        <img className="h-2" src="assets/images/svg/down-arrow.svg" alt="" />
                    </div>
                    <div className="flex gap-x-2 items-center border border-black/20 p-2 rounded-[5px]">
                        <img className="h-10" src="assets/images/svg/map.svg" alt="" />
                        <p className="capitalize text-sm">destination</p>
                        <img className="h-2" src="assets/images/svg/down-arrow.svg" alt="" />

                    </div> <div className="flex gap-x-2 items-center border border-black/20 p-2 rounded-[5px]">
                        <img className="h-10" src="assets/images/svg/map.svg" alt="" />
                        <p className="capitalize text-sm">destination</p>
                        <img className="h-2" src="assets/images/svg/down-arrow.svg" alt="" />

                    </div> <div className="flex gap-x-2 items-center border border-black/20 p-2 rounded-[5px]">
                        <img className="h-10" src="assets/images/svg/map.svg" alt="" />
                        <p className="capitalize text-sm">destination</p>
                        <img className="h-2" src="assets/images/svg/down-arrow.svg" alt="" />

                    </div>
                </div>
                <div className="h-50 w-fit p-2 px-5 bg-red-500 flex justify-center items-center " style={{WebkitMask:"url('assets/images/svg/btn-shape.svg')", WebkitMaskPosition:"center", WebkitMaskSize:"100%", WebkitMaskRepeat:"no-repeat"}}>
                    <p className="text-white">Go</p>
                </div>

            </div>

            <div className='flex my-5 md:hidden lg:hidden xl:hidden flex-col gap-y-5 bg-white p-5 rounded-[10px] mx-2  z-20 relative shadow-md'>
                <div className='flex justify-between gap-x-4'>
                    <div className="flex gap-x-2 items-center justify-between border w-full border-black/20 p-3 rounded-[5px]">
                        <img className="h-6" src="assets/images/svg/map.svg" alt="" />
                        <p className="capitalize text-xs">destination</p>
                        <img className="h-2 w-auto" src="assets/images/svg/down-arrow.svg" alt="" />
                    </div>
                    <div className="flex gap-x-2 items-center justify-between w-full border border-black/20 p-3 rounded-[5px]">
                         <img className="h-6" src="assets/images/svg/map.svg" alt="" />
                         <p className="capitalize text-xs">destination</p>
                        <img className="h-2" src="assets/images/svg/down-arrow.svg" alt="" />
                    </div>
                </div>
                <div className='flex justify-between gap-x-4'>
                    <div className="flex gap-x-2 items-center justify-between w-full border border-black/20 p-3 rounded-[5px]">
                         <img className="h-6" src="assets/images/svg/map.svg" alt="" />
                         <p className="capitalize text-xs">destination</p>
                        <img className="h-2" src="assets/images/svg/down-arrow.svg" alt="" />
                    </div>
                    <div className="flex gap-x-2 items-center justify-between w-full border border-black/20 p-3 rounded-[5px]">
                         <img className="h-6" src="assets/images/svg/map.svg" alt="" />
                         <p className="capitalize text-xs">destination</p>
                        <img className="h-2" src="assets/images/svg/down-arrow.svg" alt="" />
                    </div>
                </div>

                <div className='w-full flex justify-center'>
                    <div className='flex gap-x-3 w-fit p-3 bg-red-500 rounded-full cursor-pointer'>
                        <img src="assets/images/svg/search.svg" alt="" />
                        <p className='capitalize text-sm font-bold text-white'>search destination</p>
                    </div>
                </div>

            </div>
           
        </>
    )
}

export default SearchSection