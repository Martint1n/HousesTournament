import React from 'react';
import Image from 'next/image';
import GoldenCircle from './GoldenCircle';

function Rules() {
    const [showGoldenCircle, setShowGoldenCircle] = React.useState(false);
console.log(showGoldenCircle)
  return (
    <div className='h-[40vh] w-screen'>
        <div className='bg-white h-2/5 pt-2' >
            <h2 className='pl-3 pb-2'>REGLES DU JEU</h2>
            <p className='text-xs pl-3 pb-2'>Chers Artisans, </p>
            <p className='text-xs pl-3 pb-3'>
                Afin de renforcer l'engagement et l'aspect collaboratif du projet.<br/>
                J'ai décidé de mettre en place un <span className='font-bold'>grand jeu</span> fil rouge appelé <br/>
                <span className='font-bold'>Tournoi des maisons.</span>
            </p>
        </div>
        <div className='bg-[url(/main_background.webp)] h-full bg-cover bg-no-repeat flex flex-row items-center'>
            <div className='w-3/5 pr-2'>
                <h2 className='text-white pl-3 pb-2'>POINTS</h2>
                <p className='text-white text-xs pl-3 pb-3'>
                    Vous <span className='text-white font-bold'>gagnez des points</span> en fonction de vos interactions
                    avec les stories et avec les autres artisans Lunétoile.
                </p>
                <h2 className='text-white pl-3 pb-2'>RECOMPENSES</h2>
                <p className='text-white text-xs pl-3 pb-2' >
                    La <span className='text-white font-bold'>personne avec le plus haut score</span> individuel
                    sera récompensée <br/>(détails à venir).
                </p>
                <p className='text-white text-xs pl-3 pb-2'>
                    L'ensemble des <span className='text-white font-bold '>membres de la maison</span> avec
                    le plus haut score sera récompensé <br/>(détails à venir).
                </p>
                <p className='text-white text-xs pl-3 pb-2'>
                    Tous les <span className='text-white font-bold'>participants impliqués</span> seront récompensés
                </p>
            </div>
            <div className='pl-2 pr-2 pt-4 flex flex-col mr-2 border border-gold border-solid bg-black h-4/5 w-2/5 rounded-b-full'>
                <h2 className='text-gold pb-2'>MAISONS</h2>
                <div className='flex pb-2'>
                    <Image src='/Etoile_gold.svg' width={10} height={10} />
                    <Image src='/Lune_gold.svg' width={10} height={10} />
                </div>
                <p className='text-gold text-xs pb-1'>vous êtes <span className='text-gold font-bold'>affilié à une maison</span> en fonction de la carte que vous avez illustrée</p>
                <p className='text-gold text-xs'>le cumul des points des 13 personnes d'une maison constitue un <span className='text-gold font-bold'>score de maison</span></p>
            </div>
        </div>
        <div onClick={()=> setShowGoldenCircle(!showGoldenCircle)}>
        <GoldenCircle showGoldenCircle={showGoldenCircle} /> 
        </div>

    </div>

    )
}

export default Rules