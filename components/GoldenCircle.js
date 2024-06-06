import React from 'react'
import Image from 'next/image'

function GoldenCircle(props) {
  return (
    <div className='bg-deep-blue w-screen flex'>
        {props.showGoldenCircle ? 
        <>
          <div className='w-3/5 pl-3 pr-2'>
            <h2 className='font-["Cormorant_Garamond"] text-gold pb-2 pt-5'>LE CERCLE DORÉ</h2>
            <p className='text-xs text-gold italic pb-2'>Pour rejoindre le Cercle Doré <span className='text-xs text-gold font-bold italic'>envoyez-moi la photo de profil</span> de votre choix en MP et je vous ajouterai le cercle doré.</p>
            <p className='text-xs text-white pb-2'>Le cercle doré est une initiative qui vise à <span className='text-xs text-white font-bold'>ajouter un cercle doré autour de la photo de profil</span> d'un maximum d'artistes du projet.</p>
            <p className='text-xs text-white pb-2'>Le but est de nous reconnaître plus facilement et de renforcer le sentiment d'appartenance.</p>
            <p className='text-xs text-white pb-2'>Cela est tout à fait optionnel, ne vous forcez pas si l'idée ne vous plait pas !</p>
          </div>
          <div className='w-2/5 flex flex-col justify-center items-center landscapes:pb-2 landscapes:pt-2'>
            <Image src='/UMB.PNG' width={60} height={60} /> 
            <div className='pt-2 pb-2'>
              <Image src='/Fleche.svg' width={50} height={50} /> 
            </div>
            <Image src='/UMBD.PNG' width={60} height={60} />
            <p className='text-white text-[8px] pt-1'>«Le cercle d'or c'est fantastique.»</p>
            <p className='text-white text-[10px]'>@uneminibiche</p>
          </div>
            </>
              : 
        <h2 className='text-gold pl-3 pb-2 pt-5'>LE CERCLE DORÉ</h2>
        }
    </div>
  )
}

export default GoldenCircle;