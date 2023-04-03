import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import LoginDesktopModal from '../../Modal/LoginDesktopModal';
import LoginMobileModal from '../../Modal/LoginMobileModal'
import { reDirect } from '../../Utility';


function NavbarOne() {
    const [activeMobileModal, setActiveMobileModal] = useState(false)
    const [activeMobileModalDesk, setActiveMobileModalDesk] = useState(false)


    const MobileModalHandler = () => {
        setActiveMobileModal(!activeMobileModal);
    }
    const DesktopModalHandler = () => {
        setActiveMobileModalDesk(!activeMobileModalDesk);
    }

    const navigate = useNavigate();

   

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
    return (
        <>
            <div className='bg-white sm:bg-red-500 md:bg-red-500 lg:bg-red-500 xl:bg-red-500'>
                <div className='brand-container flex justify-between items-center'>
                    <img onClick={() => navigate('/')} className='h-auto w-[150px] p-2  bg-white/90 rounded-[5px] cursor-pointer' src="../../assets/images/logo.png" alt="" />
                    <ul className='  hidden sm:flex md:flex lg:flex xl:flex   items-center gap-x-3 text-white '>
                        {NavigationData.map((list, index) => (
                            <li key={index}>
                                <div onClick={ ()=>  {
                                    if(list.type !== 'redirect'){
                                        reDirect(list.type, list.url);
                                    }else {
                                        navigate(list.url)
                                    }
                                }} className='flex gap-x-2 cursor-pointer'>
                                    <img className='w-5 h-auto' src={list.img} alt="" />
                                    <p className='hidden sm:hidden md:hidden lg:block xl:block '>{list.title}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <img onClick={MobileModalHandler} className='block sm:hidden md:hidden lg:hidden xl:hidden ' src="../../assets/images/svg/circle-user-black.svg" alt="" />
                </div>
            </div>
            <LoginMobileModal active={activeMobileModal} Handler={MobileModalHandler} />
            <LoginDesktopModal active={activeMobileModalDesk} Handler={DesktopModalHandler} />
        </>

    )
}

export default NavbarOne