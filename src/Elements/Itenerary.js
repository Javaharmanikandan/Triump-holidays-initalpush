
import React, { useState } from 'react'

function Itenerary(props) {
    const iteneryDetails = props.data && props.data;
    const [Expand, setExpand] = useState(false);
    return (
        <>
            <div className={Expand? 'flex flex-col p-5 transition-all duration-300 bg-white shadow-lg rounded-[10px]': 'flex flex-col rounded-[10px transition-all duration-300 p-5 bg-[#F7F7F7]'}>
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
                    <img onClick={()=>{setExpand(!Expand)}} className={Expand? ' transition-all duration-300 cursor-pointer' : ' transition-all duration-300  rotate-180 cursor-pointer'}   src="../../assets/images/svg/double-arrow.svg" alt="" />

                </div>
                <div className={Expand? 'block transition-all duration-300':'transition-all duration-300 hidden'}>     
                <div className='mt-5 flex flex-col gap-y-2'>


                {iteneryDetails && iteneryDetails.stage.map((itemStage,indexStage) =>    
                    <div className='flex flex-col gap-y-2 '>
                        <div className='flex items-center gap-x-2'>
                            <div className='h-5 w-5 rounded-full bg-red-300 flex justify-center items-center'>
                                <div className='h-3 w-3 rounded-full bg-red-500'></div>
                            </div>
                            <p>{itemStage.stage_content}</p>
                            {/* <p>stop 1; Hop-on Hop-off big bus sightseeing tour <span class='text-red-500'>(1hr)</span></p> */}
                        </div>
                        <div className='border border-dashed border-black h-0  w-5 rotate-90'></div>
                    </div>)}
                  
    
                </div>
                </div>
            </div>
        </>
    )
}

export default Itenerary