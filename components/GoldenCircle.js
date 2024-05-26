import React from 'react'

function GoldenCircle(props) {
  return (
    <div className='bg-deep-blue w-screen'>
        <h2 className='text-gold'>LE CERCLE DORÉ</h2>
        {props.showGoldenCircle ? 
        <div className='bg-deep-blue w-screen'>
            <h2 className='text-white'>LE CERCLE DORÉ</h2>
        </div> : 
        <></>}
    </div>
  )
}

export default GoldenCircle