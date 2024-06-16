import React from 'react'
import Output from './Output'
import Input from './Input'

function InOpDisplay() {
  return (
    <div className='h-full w-full flex gap-2 flex-col pb-2 lg:pb-0 font-mate '>
      <div className='h-1/2 w-full '><Input></Input></div>
      <div className='h-1/2 w-full '><Output></Output></div>
    </div>
  )
}

export default InOpDisplay