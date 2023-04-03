import React, { useEffect } from 'react'
import PackageComponent from '../Components/ProfileComponent/PackageComponent'
import ProfileContent from '../Components/ProfileComponent/ProfileContent'
import { ScrolltoTop } from '../Utility'

function Profile() {
    // Document title
    document.title = 'Truimp Holiday'

    useEffect(() => {
        ScrolltoTop()
    }, [])

  return (
    <>
    <div className='brand-container py-10'>
        <ProfileContent />
            <p className='brand-title mt-5 capitalize text-red-500 text-start sm:text-center md:text-center lg:text-center xl:text-center'> your booking</p>
        <div className='flex flex-col items-center my-2'>
        <PackageComponent />
        <PackageComponent /><PackageComponent /><PackageComponent /><PackageComponent />
        </div>
    </div>
    </>
  )
}

export default Profile