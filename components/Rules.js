import React from 'react'

function Rules() {
  return (
    <div className='h-[40vh] w-screen'>
        <div className='bg-white' >
            <h2 className='pl-3 pb-3'>REGLES DU JEU</h2>
            <p className='text-xs pl-3 pb-3'>Chers Artisans, </p>
            <p className='text-xs pl-3 pb-3'>
                Afin de renforcer l'engagement et l'aspect collaboratif du projet.<br/>
                J'ai décidé de mettre en place un <span className='font-bold'>grand jeu</span> fil rouge appelé <br/>
                <span className='font-bold'>Tournoi des maisons.</span>
            </p>
        </div>
        <div className='bg-[url(/main_background.webp)] bg-cover bg-no-repeat'>
            <div className='w-2/3'>
            <h2 className='text-white pl-3 pb-3'>POINTS</h2>
            <p className='text-white text-xs pl-3 pb-3'>
                Vous <span className='text-white font-bold'>gagnez des points</span> en fonction de vos interactions
                avec les stories et avec les autres artisans Lunétoile.
            </p>
            <h2 className='text-white pl-3 pb-3'>RECOMPENSES</h2>
            <p className='text-white text-xs pl-3 pb-3' >
                La <span className='text-white font-bold'>personne avec le plus haut score</span> individuel
                sera récompensée <br/>(détails à venir).
            </p>
            <p className='text-white text-xs pl-3 pb-3'>
                L'ensemble des <span className='text-white font-bold '>membres de la maison</span> avec
                le plus haut score sera récompensé <br/>(détails à venir).
            </p>
            <p className='text-white text-xs pl-3 pb-3'>
                Tous les <span className='text-white font-bold'>participants impliqués</span> seront récompensés
            </p>
            </div>
        </div>
    </div>

    )
}

export default Rules