import React from 'react'
import FaqElement from '../../Elements/FaqElement'
import useFetchData from '../../CustomHooks/useFetchData';

function FrequentlyAskQuestion() {


    const { data: bannerAndFaqData, loading, error, refetch } = useFetchData(
        "/banner-faq/list","get",[]);

        const faqData = bannerAndFaqData && bannerAndFaqData.data.faq;


    return (
        <>
            <div className='bg-top bg-cover py-20' style={{backgroundImage:"url('assets/images/faq-bg.png')"}}>

                <div className='container-wrapper'>
                    <p className='brand-title text-center capitalize'>Frequently asked questions</p>
                      
                    <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between items-center'>
                        <div className='flex flex-col gap-y-4 ga-x-3 py-3 w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3'>

                        {faqData && faqData.map((item, index) => (
                            <FaqElement data={item} />
                        ))}
                            
                        </div>

                        <img className='w-auto h-52 sm:h-60 md:h-60 lg:h-64 xl:96 object-cover' src="assets/images/van-img.png" alt="" />
                    </div>

                    <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row justify-between items-center rounded-md  sm:bg-[#F4F7FE] md:bg-[#F4F7FE] lg:bg-[#F4F7FE] xl:bg-[#F4F7FE] px-5 py-5' style={{ WebkitMask:"url('assets/images/svg/btm-cutter.svg'), " ,WebkitMaskRepeat:"no-repeat" , WebkitMaskSize:"cover"}}>
                        <div className=''>
                            <p className='my-3 '>Exciting offers to our inbox trust us we won’t spam</p>
                            <div className='flex justify-center'>
                                <div className=' px-3 h-20 sm:px-10 md:px-10 lg:px-10 xl:px-10  w-fit bg-[#363334] flex justify-center items-center  rounded-md relative' style={{ clipPathip: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }}>
                                    <div className='w-20 h-20  bg-white sm:bg-[#F4F7FE] md:bg-[#F4F7FE] lg:bg-[#F4F7FE] xl:bg-[#F4F7FE] absolute top-0 left-0' style={{ clipPath: "circle(20.1% at -1% 50%)" }}>
                                    </div>
                                    <input className='bg-[#363334] text-white focus:outline-none' type="text" name="" placeholder='Enter your Email' />
                                </div>
                                <div className=' px-8 h-20  cursor-pointer w-fit bg-red-500 flex justify-center items-center  rounded-md relative' style={{ clipPathip: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }}>
                                    <div className='w-20 h-20  bg-white sm:bg-[#F4F7FE] md:bg-[#F4F7FE] lg:bg-[#F4F7FE] xl:bg-[#F4F7FE] absolute top-0 right-0' style={{ clipPath: "circle(20.1% at 100% 50%)" }}>
                                    </div>
                                    <p className='text-white'>subscribe</p>

                                </div>
                            </div>
                        </div>

                        <img className='w-auto h-32' src="assets/images/footer-art.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FrequentlyAskQuestion