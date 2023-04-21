
import React, { useState } from 'react'

function Itenerary(props) {
    const iteneryDetails = props.data && props.data;

    const [Expand, setExpand] = useState(false);


    return (
        <>
            <div className={props.id===props.active ? 'flex flex-col p-5 transition-all duration-300 bg-white shadow-lg rounded-[10px]': 'flex flex-col rounded-[10px transition-all duration-300 p-5 bg-[#F7F7F7]'}>
                <div className='flex justify-between   rounded-[5px]'>
                    <div className='flex gap-x-5'>
                        <img className='w-[200px] h-[100px] object-cover rounded-[10px]' src={iteneryDetails && iteneryDetails.thumbnail_image} alt={iteneryDetails && iteneryDetails.title} />
                        <div className='flex flex-col justify-between'>
                            <div>
                            <h1>{iteneryDetails && iteneryDetails.day}  </h1>
                            <h2 style={{margin:15}}>{iteneryDetails && iteneryDetails.title}</h2>
                            </div>
                        </div>
                    </div>
                    <img onClick={()=>{props.activeHandler(props.id)}} className={props.id===props.active? ' transition-all duration-300 cursor-pointer' : ' transition-all duration-300  rotate-180 cursor-pointer'}   src="../../assets/images/svg/double-arrow.svg" alt="" />

                </div>
                <div className={props.id===props.active? 'block transition-all duration-300':'transition-all duration-300 hidden'}>     
                <div className='flex flex-col md:flex-col lg:flex-row xl:flex-row  justify-between items-start lg:items-center xl:items-center gap-x-20 gap-y-5'>

                <div className='mt-5 flex flex-col gap-y-2'>

                {iteneryDetails && iteneryDetails.stage.map((itemStage,indexStage) => 
                            <div className='flex flex-col gap-y-2 '>
                                <div className='flex items-center gap-x-2'>
                                    <div className='h-5 w-5 rounded-full bg-red-300 flex justify-center items-center'>
                                        <div className='h-3 w-3 rounded-full bg-red-500'></div>
                                    </div>
                                    <p>{itemStage.stage_content} <span class='text-red-500'>(1hr   )</span></p>
                                </div>
                                <div className={`border border-dashed border-black h-0  w-5 rotate-90  ${iteneryDetails.stage.length === indexStage+1 ? 'hidden':''}`}></div>
                            </div>)}
                       
                      
                       
                     
                        
                        </div>
                        <img      style={{marginLeft: 60}}className='hidden h-64 ml-16 w-auto lg:block xl:block' src="/assets/images/filled.png" alt="image" />
                        <div className='w-full lg:w-1/5 xl:w-1/5 lg:hidden xl:hidden'>
                            <div className='w-full flex flex-row  lg:flex-col xl:flex-col gap-x-2 relative'>
                                {/* <img className='hidden lg:absolute xl:absolute top-0' src="assets/images/svg/curve.svg" alt="" /> */}
                            <div className='flex w-full flex-col items-center'>
                                <img className='w-14 rounded-lg object-contain' src="/assets/images/stop1.png" alt="" />
                            </div>
                            <div className='flex w-full flex-col items-center lg:items-end xl:items-end'>
                                <img className='w-14 rounded-lg object-contain' src="/assets/images/stop2.png" alt="" />
                            </div>
                            <div className='flex w-full flex-col items-center'>
                                <img className='w-14 rounded-lg object-contain' src="/assets/images/stop3.png" alt="" />
                            </div>
                            <div className='flex w-full flex-col items-center lg:items-end xl:items-end'>
                                <img className='w-14 rounded-lg object-contain' src="/assets/images/stop4.png" alt="" />
                            </div>
                            <div className='flex w-full flex-col items-center lg:items-end xl:items-end'>
                                <img className='w-14 rounded-lg object-contain' src="/assets/images/stop5.png" alt="" />
                            </div>
                            </div>
                        </div>

                {/* {iteneryDetails && iteneryDetails.stage.map((itemStage,indexStage) =>    
                    <div className='flex flex-col gap-y-2 '>
                        <div className='flex items-center gap-x-2'>
                            <div className='h-5 w-5 rounded-full bg-red-300 flex justify-center items-center'>
                                <div className='h-3 w-3 rounded-full bg-red-500'></div>
                            </div>
                            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
                            <p>{itemStage.stage_content}</p>

                            <img  style={{width:75,height:75,objectFit:'contain',borderRadius:25,marginRight:30}}src="https://media-cdn.tripadvisor.com/media/photo-s/23/c9/05/fe/caption.jpg" />
                            </div>
                        </div>
                        <div className='border border-dashed border-black h-0  w-5 rotate-90'></div>
                    </div>)} */}
                  
    
                </div>
                </div>
            </div>
        </>
    )
}

export default Itenerary