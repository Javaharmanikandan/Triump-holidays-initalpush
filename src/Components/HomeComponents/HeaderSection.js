import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import useFetchData from '../../CustomHooks/useFetchData';

function HeaderSection(props) {
    const [usepackage, setPackage] = useState({destination:"", checkin:"", checkout:"",guest:""})
    const [dropDownControll, setdropDownControll] = useState({destination:false, checkin:false, checkout:false, guest:false})
    const navigate = useNavigate();

       const { data: bannerAndFaqData, loading, error, refetch } = useFetchData(
        "/banner-faq/list","get",[]);

        const bannerData = bannerAndFaqData && bannerAndFaqData.data.banner;
        const faqData = bannerAndFaqData && bannerAndFaqData.data.faq;

    return (
        <>
        
            <div className=" w-full bg-green-200 relative p-5  pb-48">
                <img className="absolute inset-0 h-full w-full object-cover" src={bannerData && bannerData.banner_image} alt="" />
                <div className="hidden sm:hidden md:hidden lg:hidden xl:hidden  z-10 relative  md:float-right lg:float-right xl:float-right gap-x-2 px-20">
                    <div className='flex flex-col w-fit cursor-pointer group'>
                        <p className="text-white">Domestic packages</p>
                        <div className='h-1 w-full group-hover:bg-red-600 rounded-full'></div>
                    </div>
                    <div className='flex flex-col w-fit cursor-pointer group'>
                        <p className="text-white">International packages</p>
                        <div className='h-1 w-full group-hover:bg-red-600 rounded-full'></div>
                    </div>
                    <img className='w-5' src="assets/images/svg/glob.svg" alt="" />
                    <img className='w-5' src="assets/images/svg/circle-user.svg" alt="" />
                </div>

                <div className="relative flex justify-center w-full mt-24 ">
                    <p className="text-5xl font-Gloom text-center font-bold capitalize text-white">{bannerData && bannerData.banner_text}</p>
                </div>

                <div className="relative mt-16 mb-5 hidden md:flex lg:flex xl:flex flex-row md:flex-row lg:flex-row xl:flex-row justify-center w-full gap-x-16  items-stretch">
                    <div className="relative z-10 gap-y-5 flex flex-col md:flex-col lg:flex-row xl:flex-row gap-x-3 p-3.5 bg-white w-fit after:rounded-md  md:after:w-[0%] lg:after:w-[107%] xl:after:2-[107%] after:content-[''] after:bg-white after:w-[0%] after:h-full after:absolute  after:skew-y-[0deg] after:skew-x-[340deg] after:z-[-1] after:top-0 after:-left-6 after:zindex-[-5px]" >
                        <div onClick={()=> {setdropDownControll({destination:true})}} className="flex gap-x-2 items-center border border-black/20 p-2 rounded-[5px] cursor-pointer relative">
                            <img className="h-10" src="assets/images/svg/map.svg" alt="" />
                            <p className="capitalize text-sm">{usepackage.destination === ""? 'destination': usepackage.destination}</p>
                            <img className="h-2" src="assets/images/svg/down-arrow.svg" alt="" />
                            
                            <div  onClick={()=> {setdropDownControll({destination:false})}} className={dropDownControll.destination?'fixed inset-0' : 'hidden'}></div>
                            <div className={dropDownControll.destination? 'absolute p-5 bg-white top-20 rounded-[5px]': 'hidden'}>
                                <ul className='flex  flex-col gap-1'>
                                    <li className='flex gap-1 opacity-50'> <img className='w-3 ' src="assets/images/svg/location.svg" alt=""/><p>Singapore</p></li>

                                </ul>   
                            </div>
                        </div>
                        <div className="flex gap-x-2 items-center border border-black/20 p-2 rounded-[5px] cursor-pointer relative">
                            <img className="h-10" src="assets/images/svg/calendar1.svg" alt="" />
                            <p className="capitalize text-sm">check in</p>
                            <img className="h-2" src="assets/images/svg/down-arrow.svg" alt="" />

                          

                        </div> <div className="flex gap-x-2 items-center border border-black/20 p-2 rounded-[5px] cursor-pointer">
                            <img className="h-10" src="assets/images/svg/calendar1.svg" alt="" />
                            <p className="capitalize text-sm">check out</p>
                            <img className="h-2" src="assets/images/svg/down-arrow.svg" alt="" />

                        </div> <div className="flex gap-x-2 items-center border border-black/20 p-2 rounded-[5px] cursor-pointer">
                            <img className="h-10" src="assets/images/svg/guests.svg" alt="" />
                            <p className="capitalize text-sm">guests</p>
                            <img className="h-2" src="assets/images/svg/down-arrow.svg" alt="" />

                        </div>
                    </div>
                    <div onClick={() => { navigate('/search') }} className="h-auto cursor-pointer w-fit p-2 px-5 bg-red-500 flex justify-center items-center " style={{WebkitMask:"url('assets/images/svg/btn-shape.svg')", WebkitMaskPosition:"center", WebkitMaskSize:"100%", WebkitMaskRepeat:"no-repeat"}}>
                        <p className="text-white">Go</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HeaderSection