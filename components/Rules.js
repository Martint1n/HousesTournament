import React from 'react'

function Rules() {
  return (
    <div className='h-[40vh] w-screen'>
        <div className='bg-white '>
            <h2>REGLES DU JEU</h2>
            <p>Chers Artisans, </p>
            <p>
                Afin de renforcer l'engagement et l'aspect collaboratif du projet.<br/>
                J'ai décidé de mettre en place un <span className='font-bold'>grand jeu</span> fil rouge appelé <span className='font-bold'>Tournoi des maisons.</span>
            </p>
        </div>
        <div className='bg-[url(/main_background.webp)] bg-cover bg-no-repeat'>
            <div className='w-2/3'>
            <h2 className='text-white'>POINTS</h2>
            <p className='text-white'>
                Vous <span className='text-white font-bold'>gagnez des points</span> en fonction de vos interactions <br/>
                avec les stories et avec les autres artisans Lunétoile.
            </p>
            <h2 className='text-white'>RECOMPENSES</h2>
            <p className='text-white'>
                La <span className='text-white font-bold'>personne avec le plus haut score</span> individuel <br/>
                sera récompensée (détails à venir).
            </p>
            <p className='text-white'>
                L'ensemble des <span className='text-white font-bold'>membres de la maison</span> avec <br/>
                le plus haut score sera récompensé (détails à venir).
            </p>
            <p className='text-white'>
                Tous les <span className='text-white font-bold'>participants impliqués</span> seront récompensés
            </p>
            </div>
        </div>
    </div>

    )
}

export default Rules