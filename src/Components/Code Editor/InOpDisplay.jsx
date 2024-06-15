import React from 'react'
import Output from './Output'
import Input from './Input'

function InOpDisplay() {
  return (
    <div className='h-full w-full flex  flex-col pb-2 lg:pb-0 font-mate '>
      <div className='h-1/2 w-full pb-1'><Input></Input></div>
      <div className='h-1/2 w-full pt-1'><Output></Output></div>
    </div>
  )
}

export default InOpDisplay