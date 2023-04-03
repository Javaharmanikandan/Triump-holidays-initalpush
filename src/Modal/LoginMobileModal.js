import React, { useEffect, useState } from 'react'
import TimerElement from '../Elements/TimerElement'

function LoginMobileModal(props) {
    const [stage, setStage] = useState(1);


    const StageUpdater = (id) => {
        setStage(id)
    }

    const ComponentSwticher = (id) => {

        switch (id) {
            case 1:
                return <MobileNumberForm Handler={StageUpdater} />;
            case 2:
                return <MobileOtpConfirm Handler={StageUpdater} />;
            case 3:
                return <SuccessOtp Handler={StageUpdater} />;
            default:
                return <>Sorry</>
        }
    }



    return (
        <>
            <div onClick={props.Handler} className={props.active ? 'fixed inset-0 bg-black/30 z-50 transition-all duration-300' : "hidden"}></div>
            <div className={props.active ? 'fixed w-full  bg-white rounded-t-[20px] z-50 transition-all bottom-0 duration-300' : "fixed w-full h-1/3 bg-white rounded-t-[20px] transition-all translate-y-full z-50 bottom-0 duration-300"}>


                {ComponentSwticher(stage)}

            </div>
        </>
    )
}

export default LoginMobileModal


const MobileNumberForm = (props) => {
    return (
        <>
            <div className='my-5 mx-3'>
                <p className='capitalize text-xl text-center'>create acctount</p>

                <div className='flex flex-col gap-y-5 my-5 '>
                    <label for="MobileNumb" className='capitalize text-md w-fit'>enter mobile number</label>
                    <div className='flex border border-gray-300 bg-[#F7F7F7] h-12 rounded-[5px] w-full overflow-hidden'>
                        <div className='px-3 h-full border-r border-gray-300 flex justify-center items-center'>
                            <p>+91</p>
                        </div>
                        <input className='w-full bg-none bg-[#F7F7F7] focus:outline-none px-4' type="text" id='MobileNumb' name="" />

                    </div>
                    <p className='text-sm text-black/40'>OTP will send to this number</p>
                    <div className='flex justify-center'>
                        <div onClick={() => props.Handler(2)} className='bg-red-500 px-5 py-2 rounded-[5px] w-fit cursor-pointer active:opacity-50'>
                            <p className='text-white capitalize'>continue</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



const MobileOtpConfirm = (props) => {

    useEffect(() => {
        const inputs = document.querySelectorAll('#otp > *[id]');
        for (let i = 0; i < inputs.length; i++) { inputs[i].addEventListener('keydown', function (event) { if (event.key === "Backspace") { inputs[i].value = ''; if (i !== 0) inputs[i - 1].focus(); } else { if (i === inputs.length - 1 && inputs[i].value !== '') { return true; } else if (event.keyCode > 47 && event.keyCode < 58) { inputs[i].value = event.key; if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } else if (event.keyCode > 64 && event.keyCode < 91) { inputs[i].value = String.fromCharCode(event.keyCode); if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } } }); }
    }, [])

    return (
        <>
            <div className='my-5 mx-3'>
                <p className='capitalize text-xl text-center'>create acctount</p>

                <div className='flex flex-col gap-y-5 my-5 '>
                    <label for="MobileNumb" className='capitalize text-md w-fit'>Enter OTP</label>
                    <div id="otp" class="flex flex-row gap-x-2 justify-start text-center ">
                        <input class=" border focus:border-red-500 focus:outline-none h-10 w-10 text-center  rounded" type="text" id="first" maxlength="1" />
                        <input class=" border focus:border-red-500 focus:outline-none h-10 w-10 text-center form-control rounded" type="text" id="second" maxlength="1" />
                        <input class=" border focus:border-red-500 focus:outline-none h-10 w-10 text-center form-control rounded" type="text" id="third" maxlength="1" />
                        <input class=" border focus:border-red-500 focus:outline-none h-10 w-10 text-center form-control rounded" type="text" id="fourth" maxlength="1" />
                    </div>
                    <TimerElement seconds={30} />
                    <div className='flex justify-center'>
                        <div onClick={() => props.Handler(3)} className='bg-red-500 px-5 py-2 rounded-[5px] w-fit'>
                            <p className='text-white capitalize'>login</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


const SuccessOtp = () => {


    return (
        <>
            <div className='my-5 mx-3'>
                <p className='capitalize text-xl text-center'>Logged in successfully</p>

                <div className='grid place-content-center gap-y-5 my-5 '>
                   <img className='h-44 w-auto' src="assets/images/success-green.png" alt="" />
                </div>
            </div>
        </>
    )
}
