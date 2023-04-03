import React from 'react'

function HoverableImage(props) {
    return (
        <>
            <div className='relative group'>
                <img className='w-full h-full object-cover ' src={props.image} alt="" />
                <div className='hidden group-hover:block'>
                    <div className='absolute  items-center cursor-pointer flex gap-x-2 rounded-full bottom-0 right-0 py-2 px-3 m-2 bg-white/40 backdrop-blur-sm text-white'>
                        <img className='' src="assets/images/svg/window.svg" alt="" />
                        <p className='text-sm'>see all photo</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HoverableImage