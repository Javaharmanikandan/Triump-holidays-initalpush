import React from 'react'
import ProductCard from './ProductCard';
function HotelsCategoryCard(props) {


  return (
    <div className="my-5">
          <p className="brand-title my-2">
            {props.title} <span className="text-red-500">Packages</span>
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {props.data && props.data.map((item,index) => 
          <ProductCard data={item}/>
          )}
          </div>
        </div>
  )
}

export default HotelsCategoryCard