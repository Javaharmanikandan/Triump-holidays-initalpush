import React, { useContext, useState, useEffect } from "react";
import { AuthApi } from "../_api_/AuthApi";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import OtpInput from "otp-input-react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from '../Utility/firebase.config';

function Register() {
    const [otp, setOtp] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [userDetails,setUserDetails] =useState();


  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const baseUrl = process.env.REACT_APP_SERVER_BASE_URL + "/user/register";

  useEffect(() => {
    const dataChack = async () => {
      let dataCheck = await localStorage.getItem("Truimp-UserData");
      let isAuth = JSON.parse(dataCheck);
      console.log(isAuth);
      // if(isAuth && isAuth !== 'undefined') {
      //     console.log("isAuth")
      //    navigate('/')
      // }
    };

    dataChack();
  }, []);


  function onCaptchVerify(dataget) {

    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSubmit(dataget);
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  const onSubmit = async (dataget) => {

  setUserDetails(dataget)

    // setShowOTP(true);
    onCaptchVerify(dataget);

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+91" + dataget.mobile;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
      });

    // alert("Thanks For ur details! we Will catch up u shortly! ");
  };


  const storeData = async()=>{

    const payload = {
        name: userDetails.userName,
        email: userDetails.email,
        phone: userDetails.mobile,
        password: userDetails.password,
      };
      
      const data = await AuthApi.userRegister(baseUrl, payload);
  
      console.log(data, "Retrun");
      if (data && data.status) {
        toast.success(data && data.message, {
          position: "bottom-center",
        });
  
        navigate("/");
      } else {
        toast.error(data && data.message, {
          position: "bottom-center",
        });
  
      }
  }


  function onOTPVerify() {
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        storeData()
      })
      .catch((err) => {
      });
  }





  const OverlayHandler = (e) => {
    // if (e.target.id === 'overlay') props.Handler()
  };
  return (
    <>
      <div
        id="overlay"
        onClick={OverlayHandler}
        className="relative py-16 bg-black/30 z-50 transition-all duration-300 flex justify-center items-center"
      >
        <div className="w-4/5 h-4/5 pt-40 bg-red-500 relative">
          <div className="">
            <p className="font-Gloom text-white px-16 pb-60  w-2/5 text-4xl text-center pt-14">
              Let’s fly together to your dream destination
            </p>
          </div>

          <div className="5/5 sm:w-3/5 h-full bg-white absolute right-0 top-0 p-5 rounded-l-[20px]">
          {!showOTP ? (  
          <>
          <div className="flex justify-center items-center h-full w-full">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-4">
                  <p className="capitalize text-2xl font-bold">
                    Create Your Account
                  </p>
                
                  <input
                    className="border-b focus:outline-none py-3"
                    type="text"
                    autocomplete="off"
                    name="userName"
                    {...register("userName", { required: true })}
                    placeholder="Full Name"
                  />
                  {errors.userName && (
                    <span style={{ color: "red", fontSize: 10 }}>
                      {"Full Name required *"}
                    </span>
                  )}

                  <input
                    className="border-b focus:outline-none py-3"
                    type="email"
                    autocomplete="off"
                    name="userName"
                    {...register("email", {
                      required: "Email address is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid Email address",
                      },
                    })}
                    placeholder="Email Address"
                  />
                  {errors.email && (
                    <span style={{ color: "red", fontSize: 11 }}>
                      {errors.email.message}
                    </span>
                  )}

                  <input
                    className="border-b focus:outline-none py-3"
                    type="text"
                    autocomplete="off"
                    name="userName"
                    {...register("mobile", { required: true })}
                    placeholder="Mobile Number"
                  />
                  {errors.mobile && (
                    <span style={{ color: "red", fontSize: 10 }}>
                      {" Mobile Number required *"}
                    </span>
                  )}

                  <input
                    className="border-b focus:outline-none py-3"
                    type="text"
                    autocomplete="off"
                    name=""
                    {...register("password", { required: true })}
                    placeholder="Password "
                  />
                  {errors.password && (
                    <span style={{ color: "red", fontSize: 10 }}>
                      {"Password required *"}
                    </span>
                  )}

                  <button className="capitalize text-sm text-white w-full py-3 text-center bg-[#f04444] rounded-md">
                    Create account
                  </button>

                  <p className="text-sm">
                    Already have an account?{" "}
                    <span
                      style={{ color: "#f04444" }}
                      onClick={() => {
                        navigate("/login");
                      }}
                      className='cursor-pointer active:opacity-50'
                    >
                      Sign In
                    </span>
                  </p>
                </div>
              </form>
            </div>
</> ):(

<>


            <div className="flex justify-center items-center h-full w-full">
                <div className="flex flex-col gap-4">
                  <p className="capitalize text-2xl font-bold">
                    Enter Otp
                  </p>
                
                  <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container "
               
                ></OtpInput>

                 

                


                  <button onClick={()=>onOTPVerify()} className="capitalize text-sm text-white w-full py-3 text-center bg-[#363334] rounded-md">
                   Verify Otp
                  </button>

                </div>
            </div>
            </>)}

        <div id="recaptcha-container"></div>


          </div>
          <img
            className="w-2/6 h-auto absolute left-36 bottom-16"
            src="assets/images/plane.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Register;
