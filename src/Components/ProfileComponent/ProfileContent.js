import React from 'react'
import { useNavigate } from 'react-router'

function ProfileContent(props) {
       const navigate =useNavigate();


    const Logout = async ()=>{

        const dataRemove= await localStorage.removeItem('Truimp-UserData');
        navigate('/');
    }
    return (
        <>
            <div className='flex flex-row sm:flex-col md:flex-col lg:flex-col items-center gap-5'>
                <img className='w-14 h-14 rounded-full object-cover' src="assets/images/ddt1.png" alt="ddt1.png" />
                <div className='flex flex-col items-start sm:items-center md:items-center lg:items-center xl:items-center'> 
                    <div className='flex items-center gap-3'>
                        <p className='capitalize font-bold'>Name : <sapn className='font-normal'>{props.data && props.data.name}</sapn></p>
                        <div className='p-2 rounded-full bg-gray-400/10 cursor-pointer selection:outline-none'>
                            <img className='w-4 h-auto' src="assets/images/svg/pencil.svg" alt="" />
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <p className='capitalize font-bold'>Email : <sapn className='font-normal'>{props.data && props.data.email}</sapn></p>
                        <div className='p-2 rounded-full bg-gray-400/10 cursor-pointer selection:outline-none'>
                            <img className='w-4 h-auto' src="assets/images/svg/pencil.svg" alt="" />
                        </div>
                    </div>

                    <div className='flex items-center gap-3' onClick={Logout}>
                        <p className='capitalize font-bold px-4 py-2 rounded-lg bg-red-500 text-white'>Logout</p>
                    
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProfileContent