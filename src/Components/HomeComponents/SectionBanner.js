import React from 'react'

function SectionBanner() {
    return (
        <>
            <div className='bg-cover bg-center bg-clip-padding' style={{ backgroundImage: "url('assets/images/sec-banner.png')", WebkitMask: "url('assets/images/svg/bubble.svg')", WebkitMaskRepeat:"no-repeat" , WebkitMaskSize:"cover" }}>
                <div className='brand-container py-20 flex flex-col-reverse sm:flex-row md:flex-row lg:flex-row xl:flex-row items-center justify-center gap-x-36'>
                    <div>
                        <div className='flex gap-x-10 '>
                            <div className='py-5'>
                                <div className='flex flex-col justify-start w-fit items-center gap-y-3'>
                                    <img className='h-5 w-auto' src="assets/images/svg/guid.svg" alt="" />
                                    <p className='capitalize text-white text-md text-center'>expert <br /> guidance</p>
                                </div>
                            </div>

                            <div className='py-5'>
                                <div className='flex flex-col justify-start w-fit items-center gap-y-3'>
                                    <img className='h-5 w-auto' src="assets/images/svg/alarm.svg" alt="" />
                                    <p className='capitalize text-white text-md text-center'>expert <br /> guidance</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-x-10'>
                            <div className='py-5'>
                                <div className='flex flex-col justify-start w-fit items-center gap-y-3'>
                                    <img className='h-5 w-auto' src="assets/images/svg/light.svg" alt="" />
                                    <p className='capitalize text-white text-md text-center'>expert <br /> guidance</p>
                                </div>
                            </div>

                            <div className='py-5'>
                                <div className='flex flex-col justify-start w-fit items-center gap-y-3'>
                                    <img className='h-5 w-auto' src="assets/images/svg/percent.svg" alt="" />
                                    <p className='capitalize text-white text-md text-center'>expert <br /> guidance</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className='text-4xl font-Gloom font-bold text-white text-center'>Unlock Your Dream destination</p>
                </div>
            </div>
        </>
    )
}

export default SectionBanner