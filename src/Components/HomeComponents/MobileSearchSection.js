import React from 'react'

function MobileSearchSection() {
    return (
        <>
            <div className='flex md:hidden lg:hidden xl:hidden flex-col gap-y-5 bg-white p-5 rounded-[10px] mx-2 -mt-16 z-20 relative shadow-md'>
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
            <div className='block md:hidden lg:hidden xl:hidden'>
                <p className='text-center mx-2 my-2 text-black/40'>Triumph Holidays, a leading travel company based in Chennai handling specialised in International & Domestic Holidays.</p>
            </div>
        </>
    )
}

export default MobileSearchSection