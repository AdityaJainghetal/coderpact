import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import CompareCard from '../components/CompareCard'

const CompareProduct = () => {
  return (
    <>
        <BreadCrumb title='Compare Product'/>
        <div className='w-full px-[5%] bg-[#F5F5F7] py-10 flex gap-10 flex-wrap'>
            <CompareCard/>
            <CompareCard/>
            <CompareCard/>
            <CompareCard/>
        </div>
    </>
  )
}

export default CompareProduct