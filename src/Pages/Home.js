import React, { useContext, useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux'
import BottomMenu from '../Components/HomeComponents/BottomMenu'
import ChoosebyTheme from '../Components/HomeComponents/ChoosebyTheme'
import FrequentlyAskQuestion from '../Components/HomeComponents/FrequentlyAskQuestion'
import HeaderSection from '../Components/HomeComponents/HeaderSection'
import MobileSearchSection from '../Components/HomeComponents/MobileSearchSection'
import SectionBanner from '../Components/HomeComponents/SectionBanner'
import Sliders from '../Components/HomeComponents/Slidercus'
import Loader from '../Components/Loader'
import useFetchData from '../CustomHooks/useFetchData'
// import ProductCard from '../Elements/ProductCard'
import { Trigger } from '../StateManagement/Store'
import { ScrolltoTop } from '../Utility';
import { AuthContext } from '../Context/AuthContext'



function Home() {

	const [ currentUser, setCurrentUser ] = useContext(AuthContext);

  const userId = {
    "user_id":currentUser != undefined && currentUser !=null && currentUser ? currentUser.user_id : null,
};
 

    const { data: HomeDetails, loading, error, refetch } = useFetchData(
        "/trippackage/list","post",userId);

  console.log(HomeDetails&& HomeDetails.data.trip_package.category[0],"Got Success")
    // Document title
    document.title = 'Truimp Holiday'


  if(loading) return <Loader active={loading} />


    return (
        <>
            <HeaderSection  />
            {/* <MobileSearchSection /> */}
            <Sliders title={HomeDetails && HomeDetails.data.trip_package.category[0].category_name}  data={HomeDetails && HomeDetails.data.trip_package.category[0].category_data}/>
            <SectionBanner />
            <ChoosebyTheme data={HomeDetails && HomeDetails.data.trip_theme}/>
            <Sliders title={HomeDetails && HomeDetails.data.trip_package.category[1].category_name} data={HomeDetails && HomeDetails.data.trip_package.category[1].category_data}/>
            <div>
          <p  className='text-2xl my-2 text-center font-bold capitalize'>Don’t take our <span className='text-red-500'>words</span> for it</p>

                <img className='w-full h-auto MobileHide-DesktopView-block' src="assets/images/svg/word.svg" alt="" />
                <img className='w-full h-auto MobileView-DesktopHide-block' src="assets/images/mb-word.png" alt="" />
            </div>
            <FrequentlyAskQuestion />
            <BottomMenu />

            
        </>

    )
}

export default Home