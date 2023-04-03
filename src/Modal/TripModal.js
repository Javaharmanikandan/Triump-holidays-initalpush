import React from 'react'
import { useForm } from "react-hook-form";
import useFetchData from '../CustomHooks/useFetchData';



function TripModal(props) {

    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();

    const { refetch } = useFetchData("");
   
    const onSubmit = async(data) =>{

       // alert("Thanks For ur details! we Will catch up u shortly! ");

       const storeDetails= await refetch("/trippackage/trip-plan","post",data);

       console.log(storeDetails && storeDetails.message,"After Store")
       if(storeDetails && storeDetails.status){
        alert(storeDetails && storeDetails.message)
          reset()
       }
       else{
        alert(storeDetails && storeDetails.message)
       }
      

    } 
     

 
    const OverlayHandler = (e) => {

        if (e.target.id === 'overlay_card') props.Handler()

    }

    return (
        <div id='overlay_card' onClick={OverlayHandler} className={props.active ? 'fixed inset-0 bg-black/30 z-50 transition-all duration-300 flex justify-center items-center' : 'hidden'}>
            <div className={props.active ? 'w-4/5 h-4/5 bg-white relative p-10 overflow-y-scroll ' : 'hidden'}>
                <p className='capitalize text-center text-2xl font-bold my-5 sticky top-0 w-full z-10 bg-white '>plan your trip</p>
                <form onSubmit={handleSubmit(onSubmit)}>


                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-500 peer" placeholder=" " {...register("email", { required: 'Email address is required' ,pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid Email address"
      } })} />
                            <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-500 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            {errors.email && <span style={{color:"red",fontSize:11}}>{errors.email.message}</span>}

                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="tel" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-500 peer" placeholder=" " {...register("phone", { required: true})} />
                            <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-500 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                            {errors.phone && <span style={{color:"red",fontSize:11}}>{"Phone number is required"}</span>}
                        </div>

                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-500 peer" placeholder=" " {...register("firstName", { required: true,pattern: /^[A-Za-z]+$/i })} />
                            <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-500 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                            {errors.firstName && <span style={{color:"red",fontSize:11}}>{"First Name  is required"}</span>}
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-500 peer" placeholder=" " {...register("lastName", { required: true,pattern: /^[A-Za-z]+$/i })} />
                            <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-500 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                            {errors.lastName && <span style={{color:"red",fontSize:11}}>{"Last Name  is required"}</span>}

                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        {/* <div className="relative z-0 w-full mb-6 group">
                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-500 peer" placeholder=" " {...register("phone", { required: true })} />
                            <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-500 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                        </div> */}
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="date" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-500 peer" placeholder=" " {...register("checkIn", { required: true })} />
                            <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-500 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Check in</label>
                            {errors.checkIn && <span style={{color:"red",fontSize:11}}>{"Check In date is required"}</span>}

                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="date" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-500 peer" placeholder=" " {...register("checkOut", { required: true })} />
                            <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-500 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Check out</label>
                            {errors.checkOut && <span style={{color:"red",fontSize:11}}>{"Check Out date is required"}</span>}

                        </div>

                    </div>
                    <button type="submit" className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600">Submit</button>
                </form>

            </div>

        </div>
    )
}

export default TripModal