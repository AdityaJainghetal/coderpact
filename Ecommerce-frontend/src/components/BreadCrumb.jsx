import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = ({title}) => {

  return (
    <div className='w-full text-center my-5'>
        <Link to='/'>Home</Link>/{title}
    </div>
  )
}

export default BreadCrumb