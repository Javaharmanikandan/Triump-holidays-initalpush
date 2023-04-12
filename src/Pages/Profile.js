import React, { useContext, useEffect ,useState} from 'react'
import PackageComponent from '../Components/ProfileComponent/PackageComponent'
import ProfileContent from '../Components/ProfileComponent/ProfileContent'
import { ScrolltoTop } from '../Utility'
import { useNavigate } from 'react-router'
import { AuthContext } from '../Context/AuthContext'
import useFetchData from '../CustomHooks/useFetchData'
import { ApiCall } from '../_api_/Api';

function Profile() {

  const navigate=useNavigate();
    // Document title
    document.title = 'Truimp Holidays';
    
    const [currentUser]  = useContext(AuthContext);
    const [profileInfo ,setProfileInfo] =useState(null);

    const {  refetch } = useFetchData();


    useEffect(() => {
        ScrolltoTop()
    }, []);


    useEffect(() => {

      const dataChack =async()=>{
      let dataCheck =await localStorage.getItem('Truimp-UserData')
       let isAuth =JSON.parse(dataCheck);
       console.log(isAuth)
      if(!isAuth || isAuth === 'undefined') {
          console.log("isAuth")
         navigate('/login')
      }
      else{
      
       const pay = {user_id:isAuth.user_id}
       const profileInfo = await refetch( "/user/profile","post",pay)

       setProfileInfo(profileInfo)
      }
      
  }
  dataChack();
},[])


  return (
    <>
    <div className='brand-container py-10'>
        <ProfileContent data={profileInfo && profileInfo.data.user_data} /> 
            <p className='brand-title mt-5 capitalize text-red-500 text-start sm:text-center md:text-center lg:text-center xl:text-center'> your booking</p>
        <div className='flex flex-col items-center my-2'>
                    {profileInfo && profileInfo.data.trip_plan.map((item, index) => (

          <PackageComponent data={item}/>))}
        
        </div>
    </div>
    </>
  )
}

export default Profile