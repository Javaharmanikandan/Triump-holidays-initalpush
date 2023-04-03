
import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { useNavigate } from "react-router";

import { EncodeUrl } from "../../Utility";

function ChoosebyTheme(props) {

    console.log(props.data)

    const Data = [
        {
            image:"assets/images/grid4.png",
        },
        {
            image:"assets/images/grid1.png",
        },
        
        {
            image:"assets/images/grid2.png",
        },
        {
            image:"assets/images/grid5.png",
        },
        {
            image:"assets/images/grid6.png",
        },
        {
            image:"assets/images/grid3.png",
        },
    ]

    return (
        <>

            <div className='container-wrapper'>
                <p className='text-2xl mb-10 text-center font-bold capitalize'>Choose by <span className='text-red-500'>theme</span></p>
                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 3 }} >
                    <Masonry gutter={"10px"}>
                        {props.data && props.data.map((item, index)=> 
                                <CustomCard image={item.trip_image} id={item.trippackage_id} duration={item.durations} keyid={index} />
                        )}

                    </Masonry>
                </ResponsiveMasonry>
                <div className='grid grid-cols-2 sm:grid-col-2 md:grid-col-3 lg:grid-cols-3 xl:grid-cols-3 grou grid-row-4   container-wrapper gap-3'>


                </div>
            </div>

        </>
    )
}

export default ChoosebyTheme

const CustomCard = (props) =>{

    const navigate = useNavigate();

    return(
        <div  onClick={() => navigate("/detail/" + EncodeUrl(props.id))}  key={props.keyid} className='relative group w-full h-full cursor-pointer'>
        <img className='w-full h-full object-cover' src={props.image} alt="" />
        <div className=' hidden group-hover:flex absolute inset-0 bg-gradient-to-b from-white/0 to-black/50  items-end'>
            <div className='flex justify-between w-full px-2 py-4 items-center'>
                <p className='text-white font-Gloom'>City life</p>
                <div className='flex gap-x-2 bg-red-500 rounded-full px-2 py-1 cursor-pointer'>
                    <p className='text-white'>{props.duration} tour</p>
                    <img src="assets/images/svg/right-arrow.svg" alt=""/>
                </div>
            </div>
        </div>
    </div>
    )
}