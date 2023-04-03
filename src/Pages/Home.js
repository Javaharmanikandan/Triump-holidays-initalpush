import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
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


const data= {
        "trip_package": {
            "category": [
                {
                    "category_id": 12,
                    "category_name": "International Package",
                    "category_data": [
                        {
                            "tripackage_id": 37,
                            "thumbnail_image": "http://127.0.0.1:8000/admin/assets/application/trippackage/16803394226427f1dea6470.jpg",
                            "title": "Enjoy beauty of the USA",
                            "location": "USA",
                            "duration": "7D/6N",
                            "price": 5455,
                            "ratings": 4.5
                        },
                        {
                            "tripackage_id": 38,
                            "thumbnail_image": "http://127.0.0.1:8000/admin/assets/application/trippackage/16803394776427f215dba8b.jpg",
                            "title": "Enjoy th summer",
                            "location": "Singapore",
                            "duration": "7D/6N",
                            "price": 5455,
                            "ratings": 4.5
                        }
                    ]
                },
                {
                    "category_id": 13,
                    "category_name": "Domastic",
                    "category_data": [
                        {
                            "tripackage_id": 36,
                            "thumbnail_image": "http://127.0.0.1:8000/admin/assets/application/trippackage/16803393496427f195a9bc4.jpg",
                            "title": "Enjoy the beauty of the singapore",
                            "location": "Singapore",
                            "duration": "7D/6N",
                            "price": 5455,
                            "ratings": 4.5
                        },
                        {
                            "tripackage_id": 39,
                            "thumbnail_image": "http://127.0.0.1:8000/admin/assets/application/trippackage/16803395086427f234ae568.jpg",
                            "title": "Enjoy th summer of the week",
                            "location": "Singapore",
                            "duration": "7D/6N",
                            "price": 5455,
                            "ratings": 4.5
                        }
                    ]
                }
            ]
        },
        "trip_theme": [
            {
                "trip_image": "http://127.0.0.1:8000/admin/assets/application/trippackage/16803393496427f195f0b45.jpg",
                "durations": 7,
                "trippackage_id": 36
            },
            {
                "trip_image": "http://127.0.0.1:8000/admin/assets/application/trippackage/16803393506427f196007bb.jpg",
                "durations": 7,
                "trippackage_id": 36
            },
            {
                "trip_image": "http://127.0.0.1:8000/admin/assets/application/trippackage/16803393506427f196029f2.png",
                "durations": 7,
                "trippackage_id": 36
            },
            {
                "trip_image": "http://127.0.0.1:8000/admin/assets/application/trippackage/16803393506427f19603d1e.png",
                "durations": 7,
                "trippackage_id": 36
            },
            {
                "trip_image": "http://127.0.0.1:8000/admin/assets/application/trippackage/16803393506427f19605191.png",
                "durations": 7,
                "trippackage_id": 36
            },
            {
                "trip_image": "http://127.0.0.1:8000/admin/assets/application/trippackage/16803393506427f196065b0.png",
                "durations": 7,
                "trippackage_id": 36
            }
        ]
};


function Home() {


    const { data: HomeDetails, loading, error, refetch } = useFetchData(
        "/trippackage/list","get",[]);

       
  


    // useState 
    const [HomeData, SetHomeData] = useState({bannerText:"Ticket to dream destination", bannerImage:"assets/images/bnr-img.png"})

    const dispatch =useDispatch()

    // Document title
    document.title = 'Truimp Holiday'


    // const HomeDataGetting = async () =>{
    //     dispatch(Trigger({LoaderState: true}))
    //    const Data = await HomeApi.GetHOmeData();
    //    SetHomeData({bannerText: Data.banner_text, bannerImage: Data.banner_image})
    //    dispatch(Trigger({LoaderState: false}))

    // }


    // useEffect(() => {
    //     HomeDataGetting();
    //     ScrolltoTop()
    // }, [])

if(loading) return <Loader active={loading} />


    return (
        <>
            <HeaderSection Data={HomeData} />
            <MobileSearchSection />
            <Sliders title={HomeDetails && HomeDetails.data.trip_package.category[0].category_name}  data={HomeDetails && HomeDetails.data.trip_package.category[0].category_data}/>
            <SectionBanner />
            <ChoosebyTheme data={HomeDetails && HomeDetails.data.trip_theme}/>
            <Sliders title={HomeDetails && HomeDetails.data.trip_package.category[1].category_name} data={HomeDetails && HomeDetails.data.trip_package.category[1].category_data}/>
            <div>
          <p className='text-2xl my-2 text-center font-bold capitalize'>Don’t take our <span className='text-red-500'>words</span> for it</p>

                <img className='w-full h-auto MobileHide-DesktopView-block' src="assets/images/svg/word.svg" alt="" />
                <img className='w-full h-auto MobileView-DesktopHide-block' src="assets/images/mb-word.png" alt="" />
            </div>
            <FrequentlyAskQuestion />
            <BottomMenu />

            
        </>

    )
}

export default Home