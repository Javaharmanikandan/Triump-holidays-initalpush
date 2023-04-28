import React, { useState } from "react";
import { useNavigate } from "react-router";
import useFetchData from "../../CustomHooks/useFetchData";
import DatePicker from "react-datepicker";
import addDays from 'date-fns/addDays'  

import "react-datepicker/dist/react-datepicker.css";
function HeaderSection() {
  const [datePicker, setDatePicker] = useState(false);
 
  const [date, setDate] = useState(new Date());
  const [date1, setDate1] = useState(new Date(Date.now() + 3600 * 1000 * 24));

  const [destination, setDesignation] = useState("");
  const [guest, setGuest] = useState("");
  const [destinationId, setDestinationId] = useState("");

  const [dropDownControll, setdropDownControll] = useState({
    destination: false,
    checkin: false,
    checkout: false,
    guest: false,
  });

  const [designationSelected, setDesignationSeleted] = useState();
  const navigate = useNavigate();

  const {
    data: bannerAndFaqData,
    loading,
    error,
    refetch,
  } = useFetchData("/banner-faq/list", "get", []);

  const { data: designationData } = useFetchData(
    "/master/destination-list",
    "get",
    []
  );

  console.log(designationData, "design");

  const bannerData = bannerAndFaqData && bannerAndFaqData.data.banner;
  const faqData = bannerAndFaqData && bannerAndFaqData.data.faq;

  const replaceCall = (id, name) => {
    setDesignation(name);
    setDestinationId(id);
    setdropDownControll({ destination: false });

    const shareed = {
      designationId: id,
    };
  };

  const goWithDetails = async () => {
    if (destinationId === "") {
      alert("Please Select Destination");
    } else {
      let payloadData = {
        designationId: destinationId,
        designation_name: destination,
        guests: guest,
        checkIn: date,
        checkOut: date1,
      };

      navigate("/search", { state: payloadData });
    }
  };

  const GuestCall = (name) => {
    setGuest(name);
    setdropDownControll({ guest: false });
  };

  const HandlerforHide = (e) => {
    const id = e.target.id;
    switch (id) {
      case "overlay":
        setdropDownControll({ destination: false });

        break;
      case "overlayBtn":
        setdropDownControll({ destination: true });

        break;

      case "destiImage":
        setdropDownControll({ destination: true });
        break;

      case "destiImage1":
        setdropDownControll({ destination: true });
        break;
      case "destiName":
        setdropDownControll({ destination: true });
        break;
      case "overlayGuest":
        setdropDownControll({ guest: false });

        break;
      case "Guestbtn":
        setdropDownControll({ guest: true });

        break;

      case "GuestName":
        setdropDownControll({ guest: true });

        break;

      case "GuestImage":
        setdropDownControll({ guest: true });

        break;

      case "GuestImage1":
        setdropDownControll({ guest: true });

        break;

      default:
        break;
    }
  };

  function showDatePicker() {
    setDatePicker(true);
  }

  function setDateFun(date) {
    setDate(date);
    setdropDownControll({ destination: false });
  }

  function setDateFun1(date) {
    setDate1(date);
    setdropDownControll({ destination: false });
  }

  return (
    <>
      <div className=" w-full bg-green-200  relative p-5  pb-48">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={bannerData && bannerData.banner_image}
          alt=""
        />
        <div className="hidden sm:hidden md:hidden lg:hidden xl:hidden  z-10 relative  md:float-right lg:float-right xl:float-right gap-x-2 px-20">
          <div className="flex flex-col w-fit cursor-pointer group">
            <p className="text-white">Domestic packages</p>
            <div className="h-1 w-full group-hover:bg-red-600 rounded-full"></div>
          </div>
          <div className="flex flex-col w-fit cursor-pointer group">
            <p className="text-white">International packages</p>
            <div className="h-1 w-full group-hover:bg-red-600 rounded-full"></div>
          </div>
          <img className="w-5" src="assets/images/svg/glob.svg" alt="" />
          <img className="w-5" src="assets/images/svg/circle-user.svg" alt="" />
        </div>

        <div className="relative flex justify-center w-full mt-24 ">
          <p className="text-5xl font-Gloom text-center font-bold capitalize text-white">
            {bannerData && bannerData.banner_text}
          </p>
        </div>
   
        <div className="relative mt-16 mb-5  max-md:absolute md:flex lg:flex flex-col md:flex-row   justify-center  gap-x-12  items-center">
          <div
            id="sampleTest"
            onClick={(e) => {
              HandlerforHide(e);
            }}
            className="relative  z-10 gap-y-5 flex flex-col md:flex-col lg:flex-row  gap-x-3 max-md:p-3.5 rounded-t-lg bg-white  after:rounded-md  md:after:w-[0%] lg:after:w-[107%] xl:after:2-[107%] after:content-[''] after:bg-white after:w-[0%] after:h-full after:absolute  after:skew-y-[0deg] after:skew-x-[340deg] after:z-[-1] after:top-0 after:-left-6 after:zindex-[-5px]"
          >
      <div className="flex gap-2 my-3 md:m-3 ">
            <div
              id="overlayBtn"
              onClick={HandlerforHide}
              className="flex gap-x-2  items-center border border-black/20 px-2 rounded-[5px] cursor-pointer relative"
            >
              <img
                id="destiImage"
                className="h-10"
                src="../../assets/images/svg/map.svg"
                alt=""
              />
              <p id="destiName" className="capitalize text-sm">
                {destination === "" ? "destination" : destination}
              </p>
              <img
                id="destiImage1"
                className="h-2"
                src="../../assets/images/svg/down-arrow.svg"
                alt=""
              />
              <div className="flex">
                <div
                  id="overlay"
                  onClick={HandlerforHide}
                  className={
                    dropDownControll.destination ? "fixed inset-0" : "hidden"
                  }
                ></div>
                <div
                  className={
                    dropDownControll.destination
                      ? "absolute p-5 left-0 bg-white top-20 rounded-[5px]"
                      : "hidden"
                  }
                >
                  <ul className="flex flex-col gap-1">
                    {designationData &&
                      designationData.data.map((item, index) => (
                        <li
                          onClick={() => {
                            replaceCall(item.destination_id, item.location);
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
              
            </div>
            <div className="flex gap-x-2  items-center border border-black/20 p-2 rounded-[5px] cursor-pointer relative">
                <img
                  className="h-10"
                  src="assets/images/svg/calendar1.svg"
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="capitalize text-sm">check in</p>
                  <DatePicker
                    selected={date}
                    onChange={(date) => setDateFun(date)}
                    dateFormat="yyyy-MM-dd"
                    customInput={
                      <p className="text-[12px] cursor-pointer active:opacity-50">
                        {date.toDateString()}
                      </p>
                    }
                  />
                </div>
                {/* <img
                className="h-2"
                src="assets/images/svg/down-arrow.svg"
                alt=""
              /> */}
              </div>{" "}
              </div>
            <div className="bg-white flex my-2 md:m-3 rouned-b-lg gap-2">
              <div className="flex gap-x-2 items-center border  border-black/20 px-3.5 p-2 rounded-[5px] cursor-pointer">
                <img
                  className="h-10"
                  src="assets/images/svg/calendar1.svg"
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="capitalize text-sm">check out</p>
                  <DatePicker
                    minDate={new Date(date)}
                    selected={date1}
                    onChange={(date) => setDateFun1(date)}
                    dateFormat="yyyy-MM-dd"
                    customInput={
                      <p className="text-[12px] cursor-pointer active:opacity-50">
                        {date1.toDateString()}
                      </p>
                    }
                  />
                </div>
                {/* <img
                className="h-2"
                src="assets/images/svg/down-arrow.svg"
                alt=""
              /> */}
              </div>{" "}
              <div
                id="Guestbtn"
                onClick={HandlerforHide}
                className="relative flex gap-x-2 items-center border border-black/20 px-3.5 p-2 rounded-[5px] cursor-pointer"
              >
                <img
                  id="GuestImage"
                  onClick={HandlerforHide}
                  className="h-10"
                  src="assets/images/svg/guests.svg"
                  alt=""
                />
                <p
                  id="GuestName"
                  onClick={HandlerforHide}
                  className="capitalize text-sm"
                >
                  {guest === "" ? "Guests" : guest}
                </p>
                <img
                  id="GuestImage1"
                  onClick={HandlerforHide}
                  className="h-2"
                  src="../../assets/images/svg/down-arrow.svg"
                  alt=""
                />

                <div
                  id="overlayGuest"
                  onClick={HandlerforHide}
                  className={
                    dropDownControll.guest
                      ? "fixed inset-0 bg-black/0 z-59"
                      : "hidden"
                  }
                ></div>
                <div
                  className={
                    dropDownControll.guest
                      ? "absolute p-5 bg-white top-20 rounded-[5px]"
                      : "hidden"
                  }
                >
                  <ul className="flex  flex-col gap-1">
                    {Array(10)
                      .fill(1)
                      .map((el, i) => (
                        <li
                          className="flex gap-1 opacity-50"
                          id="libtn"
                          onClick={() => {
                            GuestCall(i + 1);
                          }}
                        >
                          {" "}
                          {i + 1}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="h-auto cursor-pointer max-md:hidden w-fit p-2 py-8 px-5 bg-red-500 flex justify-center items-center "
            style={{
              WebkitMask: "url('assets/images/svg/btn-shape.svg')",
              WebkitMaskPosition: "center",
              WebkitMaskSize: "100%",
              WebkitMaskRepeat: "no-repeat",
            }}
            onClick={() => {
              goWithDetails();
            }}
          >
            <p className="text-white ">Go</p>
          </div>
          <div onClick={() => {
              goWithDetails();
            }} className='w-full flex justify-center md:hidden mr-16'>
                    <div className='flex gap-x-3 w-fit p-3 bg-red-500 rounded-full cursor-pointer'>
                        <img src="assets/images/svg/search.svg" alt="" />
                        <p className='capitalize text-sm font-bold text-white'>search destination</p>
                    </div>
                </div>
        </div>
      </div>
    </>
  );
}

export default HeaderSection;
