import React, { useContext,useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import LoginDesktopModal from '../../Modal/LoginDesktopModal';
import LoginMobileModal from '../../Modal/LoginMobileModal'
import { reDirect } from '../../Utility';
import { AuthApi } from '../../_api_/AuthApi';
import { AuthContext } from '../../Context/AuthContext';
import useFetchData from '../../CustomHooks/useFetchData';


function NavbarOne() {

    const { data: ProfileDetails, loading, error, refetch } = useFetchData(
        "/triumph/company-profile","get");

        // console.log(ProfileDetails.data.triumph_profile.phone,"sds")


    const navigate = useNavigate();
    const [activeMobileModal, setActiveMobileModal] = useState(false)
    const [activeMobileModalDesk, setActiveMobileModalDesk] = useState(false);  
     const [ currentUser, setCurrentUser ] = useContext(AuthContext);

    // console.log(currentUser,"Current users login navbar");

  const CheckLogin = async ()=>{

     let dataCheck =await localStorage.getItem('Truimp-UserData')
       let isAuth =JSON.parse(dataCheck);
       console.log(isAuth)
      if(isAuth===null || isAuth === 'undefined') {
        setActiveMobileModal(true)

      }
      else{
        navigate('/');

      }

  }

    const NavigationData = [
        {
            title: "",
            img: '../../assets/images/svg/instagram.svg',
            type: "link",
            url: "https://www.instagram.com/",
        },
        {
            title: "",
            img: '../../assets/images/svg/email.svg',
            type: "email",
            url: "http://localhost:3000/",
        },
        {
            title: "",
            img: "../../assets/images/svg/whatsapp.svg",
            type: "whatsapp",
            url: "9677033863",
        },
        {
            title: "",
            img: "../../assets/images/svg/phone.svg",
            type: "number",
            url: "9677033863",
        },
        {
            title: "",
            img: "../../assets/images/svg/circle-user.svg",
            type: "redirect",
            url: "/profile",
        },
    ]



    const MailRedirect =async ()=>{
        const email =await ProfileDetails && ProfileDetails.data.triumph_profile.email;
        document.location.href = `mailto://${email}`;
     }

 const telephoneRedirect =async ()=>{
    const phone =await ProfileDetails && ProfileDetails.data.triumph_profile.phone;
    document.location.href = `tel://${phone}`;
 }


    return (
        <>
            <div className='bg-white sm:bg-red-500 md:bg-red-500 lg:bg-red-500 xl:bg-red-500'>
                <div className='brand-container flex justify-between items-center'>
                    <img  onClick={()=>{navigate('/')}}className='h-auto w-[150px] p-2  bg-white/90 rounded-[5px] cursor-pointer' src="../../assets/images/logo.png" alt="" />
                    <ul className='  hidden sm:flex md:flex lg:flex xl:flex   items-center gap-x-3 text-white '>
                        {ProfileDetails && ProfileDetails.data.social_media.map((list, index) => (
                            <li key={index}>
                                <div onClick={ ()=>  {
                                    
                                    window.open(list.links);
                                     
                                }} className='flex gap-x-2 cursor-pointer'>
                                    <img  onClick={()=>{navigate('/profile')}} className="w-5 h-5 aspect-square object-contain logo-color-fill" src={list.image} alt="" />   
                                </div>
                            </li>
                        ))}
                         <li>
                                <div className='flex gap-x-2 cursor-pointer ml-3'>
                                    <img  onClick={()=>{telephoneRedirect()}} className="w-4 h-5 aspect-square object-contain" src={"../../assets/images/svg/phone.svg"} alt="" />
                                    {/* <p className='hidden sm:hidden md:hidden lg:block xl:block '>{"Profile"}</p> */}
                                </div>
                            </li>

                             <li>
                                <div className='flex gap-x-2 cursor-pointer'>
                                    <img  onClick={()=>{MailRedirect()}} className="w-5 h-5 aspect-square object-contain" src={"../../assets/images/svg/email.svg"} alt="" />
                                    {/* <p className='hidden sm:hidden md:hidden lg:block xl:block '>{"Profile"}</p> */}
                                </div>
                            </li>

                         <li>
                                <div className='flex gap-x-2 cursor-pointer ml-3'>
                                    <img  onClick={()=>{navigate('/profile')}} className='w-7 h-auto' src={"../../assets/images/svg/circle-user.svg"} alt="" />
                                    {/* <p className='hidden sm:hidden md:hidden lg:block xl:block '>{"Profile"}</p> */}
                                </div>
                            </li>
                    </ul>
                    <img onClick={CheckLogin} className='block sm:hidden md:hidden lg:hidden xl:hidden ' src="../../assets/images/svg/circle-user-black.svg" alt="" />
                </div>
            </div>

            <LoginMobileModal active={activeMobileModal} />
                    </>
    )
}

export default NavbarOne