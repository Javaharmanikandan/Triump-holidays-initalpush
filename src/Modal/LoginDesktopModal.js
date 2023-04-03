import React from 'react'

function LoginDesktopModal(props) {

    const OverlayHandler = (e) => {

        if (e.target.id === 'overlay') props.Handler()

    }

    return (
        <>
            <div id='overlay' onClick={OverlayHandler} className={props.active? 'fixed inset-0 bg-black/30 z-50 transition-all duration-300 flex justify-center items-center' : 'hidden'}>
                <div className={props.active?'w-4/5 h-4/5 bg-red-500 relative':'hidden'}>
                    <div className=''>
                        <p className='font-Gloom text-white p-10 w-2/5 text-4xl text-center pt-14'>Let’s fly together to your dream destination</p>
                    </div>

                    <div className='w-3/5 h-full bg-white absolute right-0 top-0 p-5 rounded-l-[20px]'>
                        <div className='flex justify-center items-center h-full w-full'>
                            <div className='flex flex-col gap-4'>
                                <p className='capitalize text-2xl font-bold'>create account</p>
                                <div className='flex gap-x-5 my-2'>
                                    <div className='p-4 border rounded-md flex gap-x-3 items-center'>
                                        <img className='w-5' src="assets/images/google.png" alt="" />
                                        <p className='capitalize'>Sign up with Google</p>
                                    </div>
                                    <div className='p-4 border rounded-md flex gap-x-3 items-center'>
                                        <img className='w-5' src="assets/images/facebook.png" alt="" />
                                        <p className='capitalize'>Sign up with Google</p>
                                    </div>
                                </div>
                                <p className='text-2xl opacity-25 font-bold text-center'>-or-</p>

                                <input className='border-b focus:outline-none py-3' type="text" name=""  placeholder='Full Name'/>
                                <input className='border-b focus:outline-none py-3' type="text" name=""  placeholder='Full Name'/>
                                <input className='border-b focus:outline-none py-3' type="text" name=""  placeholder='Full Name'/>
                                <p className='capitalize text-xl text-white w-full py-3 text-center bg-[#363334] rounded-md'>create account</p>
                                <p className='text-sm'>Already have an account? Log in</p>
                            </div>
                        </div>
                    </div>
                    <img className='w-2/6 h-auto absolute left-36 bottom-16' src="assets/images/plane.png" alt="" />
                </div>

            </div>
        </>
    )
}

export default LoginDesktopModal