import React, { useState } from "react";
import { useNavigate } from "react-router";
import useFetchData from "../../CustomHooks/useFetchData";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
function SearchSection(props) {

    const [date, setDate] = useState(props.data.checkIn);
    const [date1, setDate1] = useState(props.data.checkOut);

    console.log(props.data.designation_name,"Props")
    const navigate = useNavigate();

    const { data: designationData } = useFetchData(
        "/master/destination-list",
        "get",
        []
      );



    const [destination ,setDesignation] =useState(props.data.designation_name);
    const [guest ,setGuest] =useState(props.data.guests)
    const [destinationId ,setDestinationId] =useState(props.data.designationId)
    
    const [dropDownControll, setdropDownControll] = useState({
      destination: false,
      checkin: false,
      checkout: false,
      guest: false,
    });


  const replaceCall = (id,name) => {


    setDesignation(name);
    setDestinationId(id);
    setdropDownControll({ destination: false })

    const shareed = {
      designationId: id,
    };
  
  };

 const goWithDetails = async() =>{

  if(destinationId ===""){
  alert("Please Select Destination")
  }
  else{
    let payloadData={
      designationId: destinationId,
      guests:guest,
      checkIn:date,
      checkOut:date1,
    }


    navigate("/search", { state: payloadData });

  }
  
  }


  const GuestCall = (name) => {

    setGuest(name)
    setdropDownControll({ guest: false })
  
  };





  const HandlerforHide = (e) => {

    const id = e.target.id;
    switch (id) {
        case 'overlay':
            setdropDownControll({ destination: false })

            break;
        case 'overlayBtn':
            setdropDownControll({ destination: true })

            break;
        case 'libtn':
            setdropDownControll({ destination: false })

            break;
        case 'overlayGuest':
            setdropDownControll({ guest: false })

            break;
        case 'Guestbtn':
            setdropDownControll({ guest: true })

            break;

        default:
            break;
    }


}
    return (
        <>
          <div className="relative mt-16 mb-5 hidden md:flex lg:flex xl:flex flex-row md:flex-row lg:flex-row xl:flex-row justify-center w-full gap-x-16  items-stretch">
          <div className="relative z-10 gap-y-5 flex flex-col md:flex-col lg:flex-row xl:flex-row gap-x-3 p-3.5 bg-white w-fit after:rounded-md  md:after:w-[0%] lg:after:w-[107%] xl:after:2-[107%] after:content-[''] after:bg-white after:w-[0%] after:h-full after:absolute  after:skew-y-[0deg] after:skew-x-[340deg] after:z-[-1] after:top-0 after:-left-6 after:zindex-[-5px]">
            <div
             id='overlayBtn' onClick={HandlerforHide}
              className="flex gap-x-2 items-center border border-black/20 p-2 rounded-[5px] cursor-pointer relative"
            >
              <img className="h-10" src="assets/images/svg/map.svg" alt="" />
              <p className="capitalize text-sm">
                {destination === ""
                  ? "destination"
                  : destination}
              </p>
              <img
                className="h-2"
                src="assets/images/svg/down-arrow.svg"
                alt=""
              />

              <div
               id='overlay' onClick={HandlerforHide}
                className={
                  dropDownControll.destination ? "fixed inset-0" : "hidden"
                }
              ></div>
              <div
                className={
                  dropDownControll.destination
                    ? "absolute p-5 bg-white top-20 rounded-[5px]"
                    : "hidden"
                }
              >
                <ul className="flex flex-col gap-1" >
                  {designationData &&
                    designationData.data.map((item, index) => (
                      <li
                        onClick={() => {
                          replaceCall(item.destination_id ,item.location);
                        }}
                        className="flex gap-1 opacity-50"
                      >
                        {" "}
                        <img
                          className="w-3 "
                          src="assets/images/svg/location.svg"
                          alt=""
                        />
                        <p>{item.location}</p>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="flex gap-x-2 items-center border border-black/20 p-2 rounded-[5px] cursor-pointer relative">
              <img
                className="h-10"
                src="assets/images/svg/calendar1.svg"
                alt=""
              />
               <div className="flex flex-col">
              <p className="capitalize text-sm">check in</p>
              <DatePicker selected={date} onChange={(date) => setDate(date)}   dateFormat="yyyy-MM-dd" customInput={<p className="text-[12px] cursor-pointer active:opacity-50">{date1.toDateString()}</p>}/>
             </div>
              <img
                className="h-2"
                src="assets/images/svg/down-arrow.svg"
                alt=""
              />
            </div>{" "}
            <div className="flex gap-x-2 items-center border border-black/20 p-2 rounded-[5px] cursor-pointer">
              <img
                className="h-10"
                src="assets/images/svg/calendar1.svg"
                alt=""
              />
                             <div className="flex flex-col">

              <p className="capitalize text-sm">check out</p>
              <DatePicker selected={date1} onChange={(date) => setDate1(date)}   dateFormat="yyyy-MM-dd"  customInput={<p className="text-[12px] cursor-pointer active:opacity-50">{date1.toDateString()}</p>}/>
              </div>
              <img
                className="h-2"
                src="assets/images/svg/down-arrow.svg"
                alt=""
              />
            </div>{" "}
            <div id='Guestbtn' onClick={HandlerforHide} className="relative flex gap-x-2 items-center border border-black/20 p-2 rounded-[5px] cursor-pointer">
                            <img className="h-10" src="assets/images/svg/guests.svg" alt="" />
                            <p className="capitalize text-sm">{guest === ""
                  ? "Guests"
                  : guest}</p>
                            <img className="h-2" src="assets/images/svg/down-arrow.svg" alt="" />

                            <div id='overlayGuest' onClick={HandlerforHide} className={dropDownControll.guest ? 'fixed inset-0 bg-black/0 z-59' : 'hidden'}></div>
                            <div className={dropDownControll.guest ? 'absolute p-5 bg-white top-20 rounded-[5px]' : 'hidden'}>
                                <ul className='flex  flex-col gap-1'>
                                {Array(10).fill(1).map((el, i) =>
                                    <li className='flex gap-1 opacity-50' id='libtn' onClick={()=>{GuestCall(i+1)}}> {i+1}</li>
                                )}

                                </ul>
                            </div>
                        </div>
          </div>
          <div
            className="h-auto cursor-pointer w-fit p-2 px-5 bg-red-500 flex justify-center items-center "
            style={{
              WebkitMask: "url('assets/images/svg/btn-shape.svg')",
              WebkitMaskPosition: "center",
              WebkitMaskSize: "100%",
              WebkitMaskRepeat: "no-repeat",
            }}
            onClick={()=>{goWithDetails()}}
          >
            <p className="text-white">Go</p>
          </div>
        </div>

            <div className='flex my-5 md:hidden lg:hidden xl:hidden flex-col gap-y-5 bg-white p-5 rounded-[10px] mx-2  z-20 relative shadow-md'>
                <div className='flex justify-between gap-x-4'>
                    <div className="flex gap-x-2 items-center justify-between border w-full border-black/20 p-3 rounded-[5px]">
                        <img className="h-6" src="assets/images/svg/map.svg" alt="" />
                        <p className="capitalize text-xs">destination</p>
                        <img className="h-2 w-auto" src="assets/images/svg/down-arrow.svg" alt="" />
                    </div>
                    <div className="flex gap-x-2 items-center justify-between w-full border border-black/20 p-3 rounded-[5px]">
                         <img className="h-6" src="assets/images/svg/map.svg" alt="" />
                         <p className="capitalize text-xs">destination</p>
                        <img className="h-2" src="assets/images/svg/down-arrow.svg" alt="" />
                    </div>
                </div>
                <div className='flex justify-between gap-x-4'>
                    <div className="flex gap-x-2 items-center justify-between w-full border border-black/20 p-3 rounded-[5px]">
                         <img className="h-6" src="assets/images/svg/map.svg" alt="" />
                         <p className="capitalize text-xs">destination</p>
                        <img className="h-2" src="assets/images/svg/down-arrow.svg" alt="" />
                    </div>
                    <div className="flex gap-x-2 items-center justify-between w-full border border-black/20 p-3 rounded-[5px]">
                         <img className="h-6" src="assets/images/svg/map.svg" alt="" />
                         <p className="capitalize text-xs">destination</p>
                        <img className="h-2" src="assets/images/svg/down-arrow.svg" alt="" />
                    </div>
                </div>

                <div className='w-full flex justify-center'>
                    <div className='flex gap-x-3 w-fit p-3 bg-red-500 rounded-full cursor-pointer'>
                        <img src="assets/images/svg/search.svg" alt="" />
                        <p className='capitalize text-sm font-bold text-white'>search destination</p>
                    </div>
                </div>

            </div>
           
        </>
    )
}

export default SearchSection