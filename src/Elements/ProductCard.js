import React from "react";
import { useNavigate } from "react-router";
import { EncodeUrl } from "../Utility";
 
function ProductCard(props) {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => navigate("/detail/" + EncodeUrl(props.data.tripackage_id))}
        className="flex cursor-pointer flex-col w-fit p-3 border border-black/10 rounded-[10px] relative mx-2 my-3"
      >
        <img
          className="object-cover h-[150px] sm:h-[200px] md:h-[300px] lg:h-[300px] xl:h-[300px] w-auto  rounded-[15px]"
          src={props.data && props.data.thumbnail_image}
          alt={props.data && props.data.title}
        />
        <div className="flex flex-col gap-y-5 mt-3">
          <p className=" text-sm sm:text-md md:text-md lg:text-md xl:text-md">
            {props.data && props.data.title}
          </p>
          <div className="flex justify-between">
            <div className="flex flex-col gap-y-0.5">
              <p className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm">
                {props.data && props.data.location}
              </p>
              <p className="opacity-40 text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm">
                {props.data && props.data.ratings}
              </p>
            </div>
            <div className="flex items-end flex-col gap-y-0.5">
              <p className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm font-bold">
                ${props.data && props.data.price}
              </p>
              <p className="o text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-red-500">
                {props.data && props.data.duration}
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-white p-2 rounded-full cursor-pointer">
          <img
            className="  h-[20px] w-[20px] "
            src="../../assets/images/svg/bookmark.svg"
            alt=""
          />
        </div>
        {props.data && props.data.discount != 0 ? (
          <div className="px-1 py-1 bg-red-500 w-fit rounded-[5px] absolute -top-3 -right-3 ">
            <p className="text-white text-xs font-medium">
              {props.data && props.data.discount_type === "percentage"
                ? props.data.discount + "% off"
                : "$ " + props.data.discount}
            </p>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default ProductCard;
