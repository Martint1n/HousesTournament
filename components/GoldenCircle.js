import React from 'react'
import Image from 'next/image'

function GoldenCircle(props) {
  return (
    <div className='bg-deep-blue w-screen flex'>
        {props.showGoldenCircle ? 
        <>
          <div className='w-3/5 pt-5 pl-3 pr-2'>
            <h2 className='font-["Cormorant_Garamond"] text-white pb-2 pt-5'>LE CERCLE DORÉ</h2>
            <p className='text-xs text-white pb-2'>Pour<span className='text-xs text-white font-bold'> nous reconnaître </span>
            et renforcer le
            <span className='text-xs text-white font-bold'> sentiment d'appartenance ajoutons un cercle doré autour de nos phots de profil. </span>
            </p>
            <p className='text-xs text-gold italic pb-2'>Pour rejoindre le Cercle Doré <span className='text-xs text-gold font-bold italic'>envoyez-moi votre photo de profil</span> en MP.</p>
          </div>
          <div className='w-2/5 pt-5 flex flex-col justify-center items-center landscapes:pb-2 landscapes:pt-2'>
            <Image src='/UMB.PNG' width={60} height={60} /> 
            <div className='pt-2 pb-2'>
              <Image src='/Fleche.svg' width={50} height={50} /> 
            </div>
            <Image src='/UMBD.PNG' width={60} height={60} />
            <p className='text-white text-[8px] pt-1'>«Le cercle d'or c'est fantastique.»</p>
            <p className='text-white text-[10px] pb-10'>@uneminibiche</p>
          </div>
            </>
              : 
        <h2 className='text-gold pl-3 pb-2 pt-5'>LE CERCLE DORÉ</h2>
        }
    </div>
  )
}

export default GoldenCircle;