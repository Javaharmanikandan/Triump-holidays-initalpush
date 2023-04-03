import React from 'react'

function Footer() {

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

  ]

  const FoodertwoData = [
    {
      type: "heading",
      content: "contact",
      link: "",
      img: "",

    },
    {
      type: "subheading",
      content: "9677033863s",
      link: "",
      img: "assets/images/svg/call.svg",

    },
    {
      type: "subheading",
      content: "info@truimph.comholidays",
      link: "",
      img: "assets/images/svg/mail-red.svg",

    },
    {
      type: "subheading",
      content: "",
      link: "",
      img: ["assets/images/svg/black-insta.svg", "assets/images/svg/black-fb.svg", "assets/images/svg/black-wp.svg"],

    },
  ]

  return (
    <>
      <div className='py-10 bg-[#F4F7FE]'>
        <div className='brand-container'>
          <div className='flex gap-y-4 gap-x-10 flex-col-reverse sm:flex-row md:flex-row lg:flex-row xl:flex-row   justify-between items-center sm:items-start md:items-start lg:items-start xl:items-start my-2'>

            <div className='flex gap-y-10 flex-col items-center sm:items-start md:items-start lg:items-start xl:items-start w-full sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5'>
              <img src="assets/images/logo.png" alt="" />
              <p className='text-center sm:text-start md:text-start lg:text-start xl:text-start text-sm text-black/40'>Triumph Holidays, a leading travel company based in Chennai handling specialised in International & Domestic Holidays.</p>
            </div>

            <div className='flex gap-x-2 sm:gap-x-10 md:gap-x-12 lg:gap-x-28 xl:gap-x-40 flex-col gap-y-4 sm:flex-row md:flex-row lg:flex-row xl:flex-row'>   
            <div className='flex gap-x-10 sm:gap-x-10 md:gap-x-28 lg:gap-x-28 xl:gap-x-40 gap-y-4 flex-col-reverse sm:flex-row md:flex-row lg:flex-row xl:flex-row'>
              <ul className='flex flex-col items-center sm:items-start md:items-start lg:items-start xl:items-start gap-y-2'>
                {FooderoneData.map((item, index) => (
                  <li key={index} className={item.type === "heading" ? 'text-md mb-1 text-[#1E1E1E] font-medium capitalize' : 'text-sm font-normal text-black/60 capitalize'}>{item.content}</li>
                ))}
              </ul>


              <ul className='flex flex-col items-center sm:items-start md:items-start lg:items-start xl:items-start gap-y-2'>
                {FoodertwoData.map((item, index) => (
                  <li key={index} className=''>
                    <div className='flex gap-x-2'>
                      {
                        Array.isArray(item.img) ?
                        <>
                         {item.img.map((list,index)=>(

                          <img className='w-7' key={index} src={list} alt="" />

                         ))}
                        </>
                        :
                        <img src={item.img} alt="" />
                      }
                      <p className={item.type === "heading" ? 'text-md mb-1 text-[#1E1E1E] font-medium capitalize' : 'text-sm font-normal text-black/60 capitalize'}>{item.content}</p>
                    
                    </div>
                  </li>
                ))}
              </ul>
            </div>


            <div className='flex flex-col gap-y-3'>
              <div className='flex gap-x-3'>
                <img className='h-20 w-auto' src="assets/images/footer-img.png" alt="" />
                <img className='h-20 w-auto' src="assets/images/footer-img.png" alt="" />
              </div>
              <div className='flex gap-x-3'>
                <img className='h-20 w-auto' src="assets/images/footer-img.png" alt="" />
                <img className='h-20 w-auto' src="assets/images/footer-img.png" alt="" />
              </div>
            </div>
            </div>
          </div>
          <hr />
          <p className='text-center my-2 text-md text-black/20'>&#169; All rights reserved 2023</p>


        </div>
      </div>

    </>
  )
}

export default Footer