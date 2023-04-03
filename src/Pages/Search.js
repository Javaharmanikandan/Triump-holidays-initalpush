import React, { useEffect } from 'react'
import SearchSection from '../Components/SearchComponent/SearchSection'
import ProductCard from '../Elements/ProductCard'
import { ScrolltoTop } from '../Utility'

function Search() {
  // Document title
  document.title = 'Truimp Holiday'

  useEffect(() => {
      ScrolltoTop()
  }, [])

  return (
    <>
    <div>
        <SearchSection />
    </div>

    <div className='brand-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

    </div>

    </>
  )
}

export default Search