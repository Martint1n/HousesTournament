import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function GoldenCircle(props) {
  return (
    <div className='bg-deep-blue w-screen flex flex-col'>

        <div className='self-end pt-2 pr-2'>
          <FontAwesomeIcon icon={faXmark} width={30} height={30} color='white' onClick={props.handleClose}/>
        </div>
        <h2 className='font-["Cormorant_Garamond"] font-semibold text-white text-center pt-5'>LE CERCLE DORÉ</h2>
        <p className='text-xs pt-5 text-white pb-2 text-center w-4/5 self-center'>Pour<span className='text-xs text-white font-bold'> nous reconnaître </span>
        et renforcer le
        <span className='text-xs text-white font-bold'> sentiment d'appartenance </span>
        ajoutons un cercle doré autour de nos photos de profil.
        </p>
        <p className='text-xs text-gold italic pb-2 text-center w-4/5 self-center'>Pour rejoindre le Cercle Doré <span className='text-xs text-gold font-bold italic'>envoyez-moi votre photo </span> de profil en MP.</p>
          <div className='pt-5 w-4/5 self-center flex justify-around items-center landscapes:pb-2 landscapes:pt-2'>
            <Image src='/UMB.PNG' width={60} height={60} /> 
            <div className='pt-2 pb-2 -rotate-90'>
              <Image src='/Fleche.svg' width={50} height={50} /> 
            </div>
            <Image src='/UMBD.PNG' width={60} height={60} />
          </div>
          <p className='text-white text-[10px] pt-3 text-center'>«Le cercle doré c'est fantastique.»</p>
          <p className='text-white text-[12px] pb-10 text-center'>@uneminibiche</p>
          <div className='flex flex-col pb-5 pt-5 justify-center bg-white'>
            <p className='text-center pb-5'>LE DISCORD</p>
            <Image src='/MissionsICON/Discord.svg' height={30} width={30}/>
            <a href={'https://discord.com/invite/dgU5ad3H'} target="_blank" rel="noopener noreferrer" className='text-black italic text-center pt-5'>
            https://discord.com/invite/dgU5ad3H
            </a>
          </div>
    </div>
  )
}

export default GoldenCircle;