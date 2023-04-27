import React, { useEffect, useState } from "react";
import Itenerary from "../Elements/Itenerary";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ScrolltoTop,DecodeUrl } from "../Utility";
import ProductCard from "../Elements/ProductCard";
import DetailCard from "../Components/HotelDetailcomponents/DetailCard";
import TripModal from "../Modal/TripModal";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import useFetchData from "../CustomHooks/useFetchData";
import Loader from "../Components/Loader";
import HotelsCategoryCard from "../Elements/HotelsCategoryCard";
import ViewAllPhotos from './ViewAllPhotos';

function HotelDetail() {
  const { id } = useParams();
  const [showCard, setCard] = useState(false);
  const [iteneraryActive, setitenearyActive] = useState(0);
  const navigate = useNavigate();
  const payLoad = {
    trippackage_id: DecodeUrl(id),
  };


  const {
    data: HotelDetails,
    loading,
    error,
    refetch,
  } = useFetchData("/trippackage/details", "post", payLoad,id);

  const PackageDetails = HotelDetails && HotelDetails.data.trip_package_details[0];
  const PackageCategory = HotelDetails && HotelDetails.data.trip_package.category;

  // console.log(HotelDetails && HotelDetails.data.trip_package_details[0].title," Hotel Get")

  const CardHandler = () => {
    setCard(false);
  };

  // Document title
  document.title = "Truimp Holiday";

  useEffect(() => {
    ScrolltoTop();
  }, []);

  const ImageData = [
    "assets/images/ddt1.png",
    "assets/images/ddt2.png",
    "assets/images/ddt3.png",
    "assets/images/ddt4.png",
    "assets/images/ddt5.png",
    "assets/images/grid6.png",
  ];

  const onclickHandler = (imageData) =>{

    navigate('/photos', { state: imageData });

  }


  const ActiveToggler=(id)=>{

  if(id===iteneraryActive){
    setitenearyActive(0)
  }
  else{
    setitenearyActive(id)
  }

  }

  
if (loading) return <Loader active={loading} />;

  return (
    <>
    
      <div className="brand-container my-10">
        <div className="mb-5">
          <div className=" lg:block xl:block">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 4 }}
            >
              <Masonry gutter={"10px"}>
              {PackageDetails && PackageDetails.trip_images.map((item, index ) => (
                  <>
                  {index <= 5?
                  <div key={index} className="relative group w-full h-full">
                    <img
                      className="w-full h-full object-cover "
                      src={item.trip_image}
                      alt=""
                    />
                    <div className="hidden group-hover:block">
                      <div className="absolute  items-center cursor-pointer flex gap-x-2 rounded-full bottom-0 right-0 py-2 px-3 m-2 bg-white/40 backdrop-blur-sm text-white">
                        <img
                          className=""
                          src="assets/images/svg/window.svg"
                          alt=""
                        />
                        <p
                          onClick={() =>{onclickHandler(PackageDetails && PackageDetails.trip_images)}}
                        >
                          see all photo
                        </p>
                      </div>
                    </div>
                  </div> 
                  : <></>}
                  </>
                ))}
              </Masonry>


            

              
            </ResponsiveMasonry>
          </div>
          <div className=" hidden relative block sm:block md:block lg:hidden xl:hidden">
            <img
              className="w-full h-full object-cover "
              src="assets/images/grid6.png"
              alt=""
            />
            <div className="absolute items-center cursor-pointer flex gap-x-2 rounded-full bottom-0 right-0 py-2 px-3 m-2 bg-white/40 backdrop-blur-sm text-white">
              <img className="" src="assets/images/svg/window.svg" alt="" />
              <p className="text-sm">see all photo</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row justify-between gap-x-3">
          <div className="w-full sm:w-full md:w-2/3 lg:w-2/3 xl:2/3 ">
            <div className="flex justify-between gap-x-2">
              <div className="flex flex-col items-start">
                <p className="brand-title ">
                  {PackageDetails && PackageDetails.title}
                </p>
                <div className="flex gap-x-2 items-center">
                  <img
                    className="h-4 w-auto opacity-40"
                    src="../../assets/images/svg/location.svg"
                    alt=""
                  />
                  <p className="brand-sub-title mt-1  text-sm opacity-40">
                    {PackageDetails && PackageDetails.location}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex gap-x-2 items-center justify-end">
                  <img
                    className="h-4 w-auto opacity-40"
                    src="../../assets/images/svg/cal-time.svg"
                    alt=""
                  />
                  <p className="brand-sub-title opacity-40 text-sm">Duration</p>
                </div>
                <p className="text-red-500 brand-sub-title">{ PackageDetails && PackageDetails.duration}</p>
              </div>
            </div>

            <p className="text-[#757575] text-sm sm:text-md my-5 lg:text-md xl:text-md w-full sm:w-2/3  md:w-3/5 lg:w-3/5 xl:w-3/5">
              {PackageDetails && PackageDetails.description}
            </p>

            <div className="flex flex-col items-start gap-y-4">
              <p className="brand-title">Amenities</p>
              <div className="grid grid-flow-row-dense gap-5 md:gap-10 grid-cols-3 md:grid-cols-4 grid-rows-2 mt-1 mb-5">


                {PackageDetails && PackageDetails.amenity.map((item,index)=>
                <div className="flex gap-x-2 items-center ">
                  <img src={item.amenity_image} alt=""  style={{width:"20px",height:"20px"}}/>
                  <p className="brand-sub-title text-[14px] opacity-50 whitespace-nowrap col-span-2 ml-3">
                    {item.amenity_name}
                  </p>
                </div>
                )}
                

              </div>
              {/* <div className="flex flex-wrap gap-3">
                <div className="flex gap-x-2 items-center">
                  <img src="assets/images/svg/building.svg" alt="" />
                  <p className="brand-sub-title opacity-50 whitespace-nowrap">
                    Kids playing area
                  </p>
                </div>
                <div className="flex gap-x-2 items-center">
                  <img src="assets/images/svg/umb.svg" alt="" />
                  <p className="brand-sub-title opacity-50 whitespace-nowrap">
                    Multi cusine
                  </p>
                </div>
                <div className="flex gap-x-2 items-center">
                  <img src="assets/images/svg/umb.svg" alt="" />
                  <p className="brand-sub-title opacity-50 whitespace-nowrap">
                    Multi cusine
                  </p>
                </div>
              </div> */}
            </div>

            <div className="flex flex-col gap-y-2 my-5">
            <p className="brand-title">Itienerary</p>


            {PackageDetails && PackageDetails.itienerary.map((itemIti,indexIti) =>           
              <Itenerary data={itemIti} index={indexIti} id={indexIti+1} active={iteneraryActive} activeHandler={ActiveToggler} />
            )}
            </div>
          </div>

          <div className="w-full sm:w-2/6 md:w-2/6 lg:w-2/6 xl:w-2/6 mx-2">
            <div className="w-full border rounded-lg px-2 py-4 flex justify-between items-center">
              <img src="../../assets/images/svg/left-solid-arrow.svg" alt="" />
              <div style={{marginLeft:20}} className="flex flex-col justify-between items-center gap-5">
                <p style={{fontSize:14}}>
                  {PackageDetails && PackageDetails.review[0].review_content}
                </p>
                <div className="flex gap-x-2 items-center">
                  <img
                    className="w-7 h-7 rounded-full object-cover"
                    src={PackageDetails && PackageDetails.review[0].profile_image}
                    alt=""
                  />
                  <p style={{fontSize:14}}>{PackageDetails && PackageDetails.review[0].name}, <span>{PackageDetails && PackageDetails.review[0].location}</span></p>
                </div>
              </div>
            </div>
            <DetailCard Handler={CardHandler} id={DecodeUrl(id)} data={PackageDetails && PackageDetails}/>
            <div className="w-full p-5">
              <div className="">
                <img
                  className="w-full h-auto "
                  src="../assets/images/mb-word.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <HotelsCategoryCard  title={PackageCategory && PackageCategory[0].category_name}  data={PackageCategory && PackageCategory[0].category_data}/>

        <HotelsCategoryCard  title={PackageCategory && PackageCategory[1].category_name}  data={PackageCategory && PackageCategory[1].category_data}/>

        
      </div>

      <TripModal active={showCard} Handler={CardHandler} />
    </>
  );
}

export default HotelDetail;
