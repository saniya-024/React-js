import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = () => {
  return (
    <div className='h-full flex flex-nowrap gap-10 p-6 w-2/3'>
      <RightCard /> 
      <RightCard />
      <RightCard />
    </div>
  )
}

export default RightContent
