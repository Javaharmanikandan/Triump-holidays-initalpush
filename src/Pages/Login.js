import React, { useContext,useState, useEffect } from 'react'
import { AuthApi } from '../_api_/AuthApi';
import { useNavigate } from 'react-router';
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';

function Login() {
    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();

    const [userName,setUserName] =useState();
    const [password,setPassword] =useState();
const navigate=useNavigate()
    const baseUrl = process.env.REACT_APP_SERVER_BASE_URL + "/user/login";


    useEffect(() => {

        const dataChack =async()=>{

        let dataCheck =await localStorage.getItem('Truimp-UserData')
         let isAuth =JSON.parse(dataCheck);
         console.log(isAuth)
        if(isAuth && isAuth !== 'undefined') {
            console.log("isAuth")
           navigate('/')
        }
    }
    
    dataChack();
     }, [])


        const onSubmit = async(dataget) =>{

            // alert("Thanks For ur details! we Will catch up u shortly! ");

            const payload={
                email_phone:dataget.userName,
                password:dataget.password
            }

            console.log(payload,"Payload")
     
            const data = await AuthApi.userLogin(baseUrl,payload)
            if(data && data.status)
            {
             

              toast.success(data && data.message,{
                position: "bottom-center"
            });

              navigate("/")
            }
            else{        
                toast.error(data && data.message,{
                    position: "bottom-center"
                });
                // navigate("/")       
            }
           
     
         } 

    const OverlayHandler = (e) => {

        // if (e.target.id === 'overlay') props.Handler()

    }
  return (
  
   <>
       <div id='overlay' onClick={OverlayHandler} className='relative py-16 bg-black/30  transition-all duration-300 flex justify-center items-center' >
                <div className='w-4/5 h-4/5 pt-40 bg-red-500 relative'>
                    <div className=''>
                        <p className='font-Gloom text-white sm:pr-28 px-16 pb-60 md:w-2/5 text-4xl text-center pt-14'>Let’s fly together to your dream destination</p>
                    </div>

                    <div className='5/5 md:w-3/5 h-full bg-white absolute right-0 top-0 p-5 rounded-l-[20px]'>
                        <div className='flex justify-center items-center h-full w-full'>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div className='flex flex-col gap-4'>
                                <p className='capitalize text-2xl font-bold'>Login Your Account</p>
                            
                                
                                <input className='border-b focus:outline-none py-3' type="text" autocomplete="off" name="userName" {...register("userName", { required: true})} placeholder='Email or Mobile'/>
                                {errors.userName && <span style={{color:"red",fontSize:10}}>{"Email or Mobile required *"}</span>}

                                <input className='border-b focus:outline-none py-3' type="text" autocomplete="off" name=""   {...register("password", { required: true})} placeholder='Password '/>
                                {errors.password && <span style={{color:"red",fontSize:10}}>{"Password required *"}</span>}

                                <button className='capitalize text-sm text-white w-full py-3 text-center bg-[#f04444] rounded-md'>Login account</button>
                               
                                <p className='text-sm'>Don't have an account? <span  style={{color:"#f04444"}} onClick={()=>{navigate("/register")}} className='cursor-pointer active:opacity-50'>Sign up</span></p>
                            </div>
                            </form>
                        </div>
                    </div>
                    <img className='w-2/6 h-auto absolute left-36 bottom-16' src="assets/images/plane.png" alt="" />
                </div>

            </div>

   </>
  )
}

export default Login