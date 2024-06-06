import React from 'react'
import Image from 'next/image'

function TestImage() {
  return (
    <div className='relative h-screen w-screen landscapes:h-[1200px]'>
        <Image src='/MissionsUpdate.jpg' layout='fill' />
    </div>
  )
}

export default TestImage;