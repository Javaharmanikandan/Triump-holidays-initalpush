import React from "react";
import useFetchData from "../../CustomHooks/useFetchData";

function Footer() {
  const {
    data: ProfileDetails,
    loading,
    error,
    refetch,
  } = useFetchData("/triumph/company-profile", "get");
  const FooderoneData = [
    {
      type: "heading",
      content: "quick links",
      link: "",
      img: "",
    },
    {
      type: "subheading",
      content: "Top packages",
      link: "",
      img: "",
    },
    {
      type: "subheading",
      content: "domestic packages",
      link: "",
      img: "",
    },
    {
      type: "subheading",
      content: "international packages",
      link: "",
      img: "",
    },
    {
      type: "subheading",
      content: "international",
      link: "",
      img: "",
    },
  ];

  const FoodertwoData = [
    {
      type: "heading",
      content: "contact",
      link: "",
      img: "",
    },
    {
      type: "subheading",
      content: "9677033863",
      link: "",
      img: "assets/images/svg/call.svg",
    },
    {
      type: "subheading",
      content: "info@truimphholidays.com",
      link: "",
      img: "assets/images/svg/mail-red.svg",
    },
    {
      type: "subheading",
      content: "",
      link: "",
      img: [
        "assets/images/svg/black-insta.svg",
        "assets/images/svg/black-fb.svg",
        "assets/images/svg/black-wp.svg",
      ],
    },
  ];

  const telephoneRedirect = async () => {
    const phone =
      (await ProfileDetails) && ProfileDetails.data.triumph_profile.phone;
    document.location.href = `tel://${phone}`;
  };



  const MailRedirect =async ()=>{
    const email =await ProfileDetails && ProfileDetails.data.triumph_profile.email;
    document.location.href = `mailto://${email}`;
 }
  return (
    <>
      <div className="py-10 bg-[#F4F7FE]">
        <div className="brand-container">
          <div className="flex gap-y-4 gap-x-10 flex-col-reverse sm:flex-row md:flex-row lg:flex-row xl:flex-row   justify-between items-center sm:items-start md:items-start lg:items-start xl:items-start my-2">
            <div className="flex gap-y-10 flex-col items-center sm:items-start md:items-start lg:items-start xl:items-start w-full sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5">
              <img src="assets/images/logo.png" alt="" />
              <p className="text-center sm:text-start md:text-start lg:text-start xl:text-start text-sm text-black/40">
                Triumph Holidays, a leading travel company based in Chennai
                handling specialised in International & Domestic Holidays.
              </p>
            </div>

            <div className="flex gap-x-2 sm:gap-x-10 md:gap-x-12 lg:gap-x-28 xl:gap-x-40 flex-col gap-y-4 sm:flex-row md:flex-row lg:flex-row xl:flex-row">
              <div className="flex gap-x-10 sm:gap-x-10 md:gap-x-28 lg:gap-x-28 xl:gap-x-40 gap-y-4 flex-col-reverse sm:flex-row md:flex-row lg:flex-row xl:flex-row">
                <ul className="flex flex-col items-center sm:items-start md:items-start lg:items-start xl:items-start gap-y-2">
                  {FooderoneData.map((item, index) => (
                    <li
                      key={index}
                      className={
                        item.type === "heading"
                          ? "text-md mb-1 text-[#1E1E1E] font-medium "
                          : "text-sm font-normal text-black/60 "
                      }
                    >
                      {item.content}
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-col items-center sm:items-start md:items-start lg:items-start xl:items-start gap-y-2">
                  <li>
                    <div onClick={() => { telephoneRedirect();}} className="flex gap-x-2 cursor-pointer ml-3">
                      <img
                        
                        className="w-4 h-5"
                        src={"../../assets/images/svg/call.svg"}
                        alt=""
                      />
                      <p className="hidden sm:hidden md:hidden lg:block xl:block ">
                        {ProfileDetails &&
                          ProfileDetails.data.triumph_profile.phone}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div  onClick={() => { MailRedirect();}} className="flex gap-x-2 cursor-pointer ml-3 mt-2 mb-2">
                      <img
                       
                        className="w-4 h-5"
                        src={"../../assets/images/svg/mail-red.svg"}
                        alt=""
                      />
                      <p className="hidden sm:hidden md:hidden lg:block xl:block ">
                        {ProfileDetails &&
                          ProfileDetails.data.triumph_profile.email}
                      </p>
                    </div>
                  </li>


                  <li className="flex gap-2 ml-3">

                  {ProfileDetails &&
                    ProfileDetails.data.social_media.map((list, index) => (
                      
                        <div
                          onClick={() => {
                            window.open(list.links);
                          }}
                          className="flex gap-x-2 cursor-pointer"
                        >
                          <img className="w-5 h-5 aspect-square object-contain" src={list.image} alt="" />
                        </div>
                      
                    ))}
                  </li>
                  </ul>

                 
                  
            
              </div>

              <div className="flex flex-col gap-y-3">
                <div className="flex gap-x-3">
                  <img
                    className="h-20 w-auto"
                    src="assets/images/footer1.png"
                    alt=""
                  />
                  <img
                    className="h-20 w-auto"
                    src="assets/images/footer2.png"
                    alt=""
                  />
                </div>
                <div className="flex gap-x-3">
                  <img
                    className="h-20 w-auto"
                    src="assets/images/footer3.png"
                    alt=""
                  />
                  <img
                    className="h-20 w-auto"
                    src="assets/images/footer4.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <p className="text-center my-2 text-md text-black/20">
            &#169; All rights reserved 2023
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
