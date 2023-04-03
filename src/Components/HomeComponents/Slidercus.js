import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from '../../Elements/ProductCard';

export default function Slidercus(props) {

   const numOfData=props.data ? props.data.length :0;
  
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    autoplay:true,
    speed: 2000,
    slidesToShow: numOfData >= 4 ? 4 :numOfData ,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",


    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: numOfData >= 3 ? 3 :numOfData,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: numOfData >= 2 ? 2 :numOfData,
          slidesToScroll: 1,
  
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: numOfData >= 2 ? 2 :numOfData,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className='container-wrapper'>
      <p className='text-2xl my-2 mb-10 text-center font-bold capitalize'>{props.title}<span className='text-red-500'> packages</span></p>
        <Slider  {...settings}>
        {props.data ? props.data.map((item) =><ProductCard data={item}/>):null}
          
        </Slider>
      </div>
    </>
  )
}
