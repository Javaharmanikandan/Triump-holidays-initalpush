import React from 'react'
import { useNavigate } from 'react-router'

function NavbarTwo() {
    const navigate = useNavigate()

    const NavigationData = [
        {
            title: "domestic package",
            img: 'assets/images/svg/email.svg',
            link: "",
        },
        {
            title: "international package",
            img: "assets/images/svg/whatsapp.svg",
            link: "",
        },
        {
            title: "",
            img: "assets/images/svg/glob-black.svg",
            link: "",
        },
        {
            title: "",
            img: "assets/images/svg/circle-user-black.svg",
            link: "",
        },
    ]
    return (
        <div className='bg-white '>
            <div className='brand-container flex justify-between items-center'>
                <img onClick={()=> navigate('/')} className='h-[60px] cursor-pointer w-auto p-4 bg-white rounded-[5px]' src="assets/images/logo.png" alt="" />
                <ul className='  hidden sm:flex md:flex lg:flex xl:flex   items-center gap-x-3 text-black '>
                    {NavigationData.map((list, index) => (
                        <li key={index}>
                            <div className='flex gap-x-2 cursor-pointer'>
                                <img className='w-5 h-auto' src={list.img} alt="" />
                                <p className='hidden sm:hidden md:hidden lg:block xl:block '>{list.title}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <img onClick={()=>alert('hai')} className='block sm:hidden md:hidden lg:hidden xl:hidden ' src="assets/images/svg/circle-user-black.svg" alt="" />
            </div>
        </div>
    )
}

export default NavbarTwo