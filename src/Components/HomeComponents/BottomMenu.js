import React from 'react'

function BottomMenu() {
  return (
    <>
    <div className='w-full fixed bottom-0 bg-[#79ADD5]/20 p-2 MobileView-DesktopHide-block z-30 backdrop-blur-sm'>
        <div className='flex justify-between bg-[#79ADD5] p-5 text-white'>
            <p className='capitalize text-center'>Top <br/> packages </p>
            <p className='capitalize text-center'>international <br/> packages </p>
            <p className='capitalize text-center'>domestic <br/> packages </p>
            
        </div>
        
    </div>
    </>
  )
}

export default BottomMenu