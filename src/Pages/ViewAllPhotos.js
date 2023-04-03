import React, { useEffect } from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { useLocation } from 'react-router';
import { ScrolltoTop } from '../Utility'

function ViewAllPhotos() {

    const {state} = useLocation();


console.log()
    // Document title
    document.title = 'Truimp Holiday'

    useEffect(() => {
        ScrolltoTop()
    }, [])

    return (
        <>
            <div className='brand-container my-10'>
                <div className='  lg:mx-72 '>
                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 2 }} >
                        <Masonry gutter={"10px"}>
                        {state && state.map((item, index) => (

                            <img className='w-full h-full object-cover ' src={item.trip_image} alt="" />
                        ))}
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </div>
        </>
    )
}

export default ViewAllPhotos