import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import useFetchData from "../../CustomHooks/useFetchData";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";
import DatePicker from "react-datepicker";

function DetailCard(props) {
  const [currentUser, setCurrentUser] = useContext(AuthContext);
  const [date, setDate] = useState(new Date());
  const [date1, setDate1] = useState(new Date(Date.now() + ( 3600 * 1000 * 24)));
  const [guest, setGuest] = useState(1);
  const [guestDropdown, setDropdownGuest] = useState(false);

  const [str, setstr] = useState("fjhjv");
  const navigate = useNavigate();
  const { refetch } = useFetchData();
  const onSubmit = async () => {
    // alert("Thanks For ur details! we Will catch up u shortly! ");

    let dataCheck = await localStorage.getItem("Truimp-UserData");
    let isAuth = JSON.parse(dataCheck);
    console.log(isAuth);
    if (!isAuth || isAuth === "undefined") {
      console.log("isAuth");
      navigate("/login");
    } else {
      // const pay = {user_id:isAuth}

      const pay = {
        trippackage_id: props.id,
        user_id: isAuth.user_id,
        check_in: date.toISOString().slice(0, 10),
        check_out: date1.toISOString().slice(0, 10),
        guest: 2,
      };

      const storeDetails = await refetch("/user/trip-plan", "post", pay);

      if (storeDetails && storeDetails.status) {
        toast.success(storeDetails && storeDetails.message, {
          position: "bottom-center",
        });
      } else {
        toast.error(storeDetails && storeDetails.message, {
          position: "bottom-center",
        });
        // navigate("/")
      }
    }
  };

  const GuestCall = (name) => {
    setGuest(name);
    setDropdownGuest(false);
  };

  const HandlerforHide = (e) => {
    const id = e.target.id;
    switch (id) {
      case "overlayGuest":
        setDropdownGuest(false);

        break;

      case "Guestbtn":
        setDropdownGuest(true);

        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className="shadow-lg p-5 my-5 rounded-lg  flex-col items-center gap-5 MobileHide-DesktopView-flex">
        <div className="flex justify-between gap-5 w-full ">
          <div className="flex flex-col gap-y-0.5">
            <p className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm">
              ${props.data && props.data.price}
            </p>
            <p className="opacity-40 text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm">
              {props.data && props.data.ratings}
            </p>
          </div>
          <div className="flex flex-col items-end gap-y-0.5">
            <p className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-red-500">
              {props.data && props.data.duration}
            </p>
            {/* <div className='px-1 py-1 bg-red-500 w-fit rounded-[5px]  '>
                            <p className='text-white text-xs font-medium'>55%off</p>
                        </div> */}

            {props.data && props.data.discount != 0 ? (
              <div className="px-1 py-1 bg-red-500 w-fit rounded-[5px] ">
                <p className="text-white text-xs font-medium">
                  {props.data && props.data.discount_type === "percentage"
                    ? props.data.discount + "% off"
                    : "$ " + props.data.discount}
                </p>
              </div>
            ) : null}
          </div>
        </div>

        <div className="bg-gray-300/20 p-5 rounded-lg flex flex-wrap gap-5 justify-between">
          <div className="flex flex-col items-end w-fit">
            <div className="flex justify-between items-center gap-4">
              <img
                className="w-4 h-4 object-contain"
                src="../../assets/images/svg/calendar.svg"
                alt=""
              />
              <p className="opacity-25 text-[13px]">Check-in</p>
            </div>
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              dateFormat="yyyy-MM-dd"
              customInput={<p className="text-[12px] cursor-pointer active:opacity-50">{date.toDateString()}</p>}
            />
          </div>
          <div className="flex flex-col items-end w-fit">
            <div className="flex justify-between items-center gap-4">
              <img
                className="w-4 h-4 object-contain"
                src="../../assets/images/svg/calendar.svg"
                alt=""
              />
              <p className="opacity-25 text-[13px]">Check-out</p>
            </div>
            <DatePicker
 minDate={new Date(date)}
              selected={date1}
              onChange={(date) => setDate1(date)}
              dateFormat="yyyy-MM-dd"
              customInput={
                <p className="text-[12px] cursor-pointer active:opacity-50">{date1.toDateString()}</p>
              }
            />
          </div>
          <div 
          id="overlayGuest"
          onClick={HandlerforHide}
          
          className=" flex flex-col items-end w-fit">
            <div
              
              className=" relative flex justify-between items-center gap-4"
            >
              <img
                className="w-4 h-4 object-contain"
                src="../../assets/images/svg/user.svg"
                alt=""
              />
              <p className="opacity-25  text-[13px]">Guests</p>

              <div
              
                className={
                  guestDropdown
                    ? "absolute p-5 bg-white top-16 shadow-md rounded-[5px]"
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
            <p  className="text-[12px] cursor-pointer active:opacity-50" id="Guestbtn"
                onClick={HandlerforHide}
                >{guest} Guests</p>
          </div>
        </div>
        <p
          onClick={onSubmit}
          className="px-5 py-2 cursor-pointer bg-red-500 capitalize w-fit text-white rounded-md"
        >
          plan your trip
        </p>
      </div>

      <div className="w-full fixed bottom-0 left-0 bg-white MobileView-DesktopHide-block z-30 shadow-lg">
        <div className="flex justify-between items-center p-4 ">
          {/* <div className="flex flex-col gap-5">
            <div className="flex gap-x-2">
              <p className="text-md">25,000</p>
              <p className="text-red-500 text-sm">5d/3n</p>
            </div>
            <p className="underline underline-offset-4">{date1.toDateString()}</p>
          </div> */}
          <div className="bg-gray-300/20 p-5 rounded-lg flex flex-wrap gap-5 justify-between">
          <div className="flex flex-col items-end w-fit">
            <div className="flex justify-between items-center gap-4">
              <img
                className="w-4 h-4 object-contain"
                src="../../assets/images/svg/calendar.svg"
                alt=""
              />
              <p className="opacity-25 text-[13px]">Check-in</p>
            </div>
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              dateFormat="yyyy-MM-dd"
              customInput={<p className="text-[12px] cursor-pointer active:opacity-50">{date.toDateString()}</p>}
            />
          </div>
          <div className="flex flex-col items-end w-fit">
            <div className="flex justify-between items-center gap-4">
              <img
                className="w-4 h-4 object-contain"
                src="../../assets/images/svg/calendar.svg"
                alt=""
              />
              <p className="opacity-25 text-[13px]">Check-out</p>
            </div>
            <DatePicker
 minDate={new Date(date)}
              selected={date1}
              onChange={(date) => setDate1(date)}
              dateFormat="yyyy-MM-dd"
              customInput={
                <p className="text-[12px] cursor-pointer active:opacity-50">{date1.toDateString()}</p>
              }
            />
          </div>
          <div 
          id="overlayGuest"
          onClick={HandlerforHide}
          
          className=" flex flex-col items-end w-fit">
            <div
              
              className=" relative flex justify-between items-center gap-4"
            >
              <img
                className="w-4 h-4 object-contain"
                src="../../assets/images/svg/user.svg"
                alt=""
              />
              <p className="opacity-25  text-[13px]">Guests</p>

              <div
              
                className={
                  guestDropdown
                    ? "absolute p-5 bg-white top-16 shadow-md rounded-[5px]"
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
            <p  className="text-[12px] cursor-pointer active:opacity-50" id="Guestbtn"
                onClick={HandlerforHide}
                >{guest} Guests</p>
          </div>
        </div>

         
        </div>
        <div className="flex justify-center items-center mb-6">
        <p onClick={onSubmit} className="px-5 py-2 bg-red-500 capitalize w-fit text-white rounded-md">
            plan your trip
          </p>
          </div>
      </div>
    </>
  );
}

export default DetailCard;
