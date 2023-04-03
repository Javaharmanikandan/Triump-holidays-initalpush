import React from 'react'

function DetailCard(props) {
    return (
        <>
            <div className='shadow-lg p-5 my-5 rounded-lg  flex-col items-center gap-5 MobileHide-DesktopView-flex'>
                <div className='flex justify-between gap-5 w-full '>
                    <div className='flex flex-col gap-y-0.5'>
                        <p className='text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm'>${props.data && props.data.price}</p>
                        <p className='opacity-40 text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm'>{props.data && props.data.ratings}</p>
                    </div>
                    <div className='flex flex-col items-end gap-y-0.5'>
                        <p className='text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-red-500'>{props.data && props.data.duration}</p>
                        {/* <div className='px-1 py-1 bg-red-500 w-fit rounded-[5px]  '>
                            <p className='text-white text-xs font-medium'>55%off</p>
                        </div> */}

                        {props.data && props.data.discount !=0 ? <div className='px-1 py-1 bg-red-500 w-fit rounded-[5px] absolute -top-3 -right-3 '>
                    <p className='text-white text-xs font-medium'>{props.data && props.data.discount_type ==="percentage" ? props.data.discount+"% off":"$ "+props.data.discount}</p>
                </div>:null}
                    </div>
                </div>

                <div className='bg-gray-300/20 p-5 rounded-lg flex flex-wrap gap-5 justify-between'>
                    <div className='flex flex-col items-end w-fit'>
                        <div className='flex justify-between items-center gap-4'>
                            <img src="assets/images/svg/calendar.svg" alt="" />
                            <p className='opacity-25'>Check-in</p>
                        </div>
                        <p>May 15,2023</p>
                    </div>
                    <div className='flex flex-col items-end w-fit'>
                        <div className='flex justify-between items-center gap-4'>
                            <img src="assets/images/svg/calendar.svg" alt="" />
                            <p className='opacity-25'>Check-out</p>
                        </div>
                        <p>May 15,2023</p>
                    </div>
                    <div className='flex flex-col items-end w-fit'>
                        <div className='flex justify-between items-center gap-4'>
                            <img src="assets/images/svg/user.svg" alt="" />
                            <p className='opacity-25'>Guest</p>
                        </div>
                        <p>2 Guest</p>
                    </div>


                </div>
                    <p onClick={props.Handler} className='px-5 py-2 cursor-pointer bg-red-500 capitalize w-fit text-white rounded-md'>plan your trip</p>

            </div>

            <div className='w-full fixed bottom-0 left-0 bg-white MobileView-DesktopHide-block z-30 shadow-lg'>
                <div className='flex justify-between items-center p-4 '>     
                <div className='flex flex-col gap-5'>     
                <div className='flex gap-x-2'>
                    <p className='text-md'>25,000</p> 
                    <p className='text-red-500 text-sm'>5d/3n</p>
                </div>
               <p className='underline underline-offset-4'>10-15 mar</p>
                </div>

                <p onClick={props.Handler} className='px-5 py-2 bg-red-500 capitalize w-fit text-white rounded-md'>plan your trip</p>
                </div>

                
            </div>
        </>
    )
}

export default DetailCard