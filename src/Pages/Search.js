import React, { useContext, useEffect } from 'react'
import SearchSection from '../Components/SearchComponent/SearchSection'
import ProductCard from '../Elements/ProductCard'
import { ScrolltoTop } from '../Utility'
import useFetchData from '../CustomHooks/useFetchData'
import { AuthContext } from '../Context/AuthContext'
import { useLocation, useNavigate } from 'react-router';
import Loader from '../Components/Loader'

function Search() {
const navigate =useNavigate()
	const [ currentUser, setCurrentUser ] = useContext(AuthContext);
const {state}= useLocation();
console.log(state,"no state ")

 const payload ={
    "user_id":currentUser &&currentUser.user_id ,
    "destination_id":state && state.designationId,
    "guests":"2",
    "checkIn":"2022-03-02",
    "checkOut":"2022-03-02"
}
  const { data: SearchData, loading, error, refetch } = useFetchData(
    "/trippackage/search","post",payload);


    console.log(SearchData && SearchData,"SearchData")
  // Document title
  document.title = 'Truimp Holiday'

  useEffect(() => {
      ScrolltoTop()
  }, [])


  if(loading) return <Loader active={loading} />
  if(SearchData && !SearchData.status) {
    alert("No Data Found");
    navigate("/")
  }


  const nodata = () =>{
    return(
      <div>
        <h1>No data Found</h1>
      </div>
    )
  }
  return (
    <>
    <div>
        <SearchSection data={state}/>
    </div>

    <div className='brand-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
       
    {SearchData && SearchData.data.map((item,index) =>  
        <ProductCard data={item}/>
    )}
      
    </div>

    </>
  )
}

export default Search