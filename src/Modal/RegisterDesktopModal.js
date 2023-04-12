import React, { useContext,useState, useEffect } from 'react'
import { AuthApi } from '../_api_/AuthApi';
import { AuthContext } from '../Context/AuthContext';
import { auth } from '../Utility/firebase.config';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import useFetchData from '../CustomHooks/useFetchData';
import { useForm } from "react-hook-form";

function RegisterDesktopModal(props) {

    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();

    const [otp, setOtp] = useState("809862");
    const [ph, setPh] = useState("8098629606");
    const [user, setUser] = useState(null);
    //Set basic details
    const [fullName,setFullName] =useState();
    const [email,setEmail] =useState();
    const [mobile,setMobile] =useState();
    const [password,setPassword] =useState();

    


  
    // function onCaptchVerify() {
    //   if (!window.recaptchaVerifier) {
    //     window.recaptchaVerifier = new RecaptchaVerifier(
    //       "recaptcha-container",
    //       {
    //         size: "invisible",
    //         callback: (response) => {
    //           onSignup();
    //         },
    //         "expired-callback": () => {},
    //       },
    //       auth
    //     );
    //   }
    // }



    // function onSignup() {
    //     onCaptchVerify();
    //     const appVerifier = window.recaptchaVerifier;  
    //     const formatPh = "+" + ph;
    //     signInWithPhoneNumber(auth, formatPh, appVerifier)
    //       .then((confirmationResult) => {
    //         window.confirmationResult = confirmationResult;
    //         toast.success("OTP sended successfully!");
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   }
    
    //   function onOTPVerify() {
        

    //     window.confirmationResult
    //       .confirm(otp)
    //       .then(async (res) => {
    //         console.log(res);
    //         setUser(res.user);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   }




    const [ currentUser, setCurrentUser ] = useContext(AuthContext);

    console.log(currentUser,"Current users login")
  

    


const baseUrl = process.env.REACT_APP_SERVER_BASE_URL + "/user/register";

    const payload={
        name:fullName,
        email:email,
        phone:mobile,
        password:password
    }


    console.log(baseUrl)

     useEffect(()=>{

        // onSignup();

     },[])


    const OverlayHandler = (e) => {

        if (e.target.id === 'overlay') props.Handler()

    }

   const  loginCall =async ()=>{


    const data = await AuthApi.userRegister(baseUrl,payload)

 
    }

    function handleChange(e){

        console.log(e.target.value)
    
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

                                <input className='border-b focus:outline-none py-3' type="text" autocomplete="off" name="" onChange={e => setFullName(e.target.value)} placeholder='Full Name'/>
                                <input className='border-b focus:outline-none py-3' type="text" autocomplete="off" name=""   onChange={e => setMobile(e.target.value)}  placeholder='Mobile Number'/>
                                <input className='border-b focus:outline-none py-3' type="text" autocomplete="off" name=""  onChange={e => setEmail(e.target.value)}   placeholder='Email Address'/>
                                <input className='border-b focus:outline-none py-3' type="password" autocomplete="off" name=""  onChange={e => setPassword(e.target.value)}  placeholder='Password'/>

                                <p onClick={()=>{loginCall()}} className='capitalize text-xl text-white w-full py-3 text-center bg-[#363334] rounded-md'>create account</p>
                                <p className='text-sm'>Already have an account? Log in</p>
                            </div>
                        </div>
                    </div>
                    <img className='w-2/6 h-auto absolute left-36 bottom-16' src="assets/images/plane.png" alt="" />
                </div>

            </div>

            <Toaster />
        </>
    )
}

export default RegisterDesktopModal