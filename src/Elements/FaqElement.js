import React, { useState } from 'react'

function FaqElement(props) {
    console.log(props.data.question)
    const [active, SetActive] = useState(false)
    return (
        <>
            <div className='flex flex-col w-full gap-y-2 '>
                <div onClick={()=> SetActive(!active)} className='flex justify-between gap-x-3 cursor-pointer'>
                    <p className='text-xl'>{props.data && props.data.question}</p>
                    <img src={active ? "assets/images/svg/line.svg" :"assets/images/svg/plus.svg"} alt="" />
                </div>
                <div className={active ? 'bg-[#F7F7F7] p-2 sm:p-5 md:p-5 lg:p-5 xl:p-5' :"hidden"}>
                    <p>{props.data && props.data.answer}</p>
                </div>
            </div>
        </>
    )
}

export default FaqElement