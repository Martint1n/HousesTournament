import React from 'react';
import Image from 'next/image';
import GoldenCircle from './GoldenCircle';
import TestImage from './TestImage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons';


function Rules() {
    const [showGoldenCircle, setShowGoldenCircle] = React.useState(false);
console.log(showGoldenCircle)
  return (
    <div className='h-[45vh] w-screen mt-10 landscapes:h-[80vh]'>
        <div className='bg-white h-2/5 pt-4 landscapes:h-1/2 landscapes:pt-6'> 
            <h2 className="font-['Cormorant_Garamond'] font-semibold pl-3 pb-2">LE TOURNOI DES MAISONS</h2>
            <p className='text-xs pl-3 pb-2'>Chers Artisans, </p>
            <p className='text-xs pl-3'>
                Afin de renforcer l'engagement et l'aspect collaboratif du projet.<br/>
                J'ai décidé de mettre en place un <span className='font-bold'>grand jeu</span> fil rouge appelé
                <span className='font-bold'> Tournoi des maisons.</span>
            </p>
        </div>
        <div className='bg-[url(/main_background.webp)] bg-cover bg-no-repeat flex flex-row items-center pb-5 mt-5 landscapes:mt-0 landscapes:h-screen'>
            <div className='w-3/5 pr-2 mt-5 pt-3'>
                <h3 className="font-['Cormorant_Garamond'] font-semibold text-white underline underline-offset-4 pl-3 pb-2 mt-5">POINTS ET MISSIONS</h3>
                <p className='text-white text-xs pl-3 pb-3'>
                    Vous <span className='text-white font-bold'>gagnez des points</span> en fonction de vos interactions
                    avec les stories et avec les autres artisans Lunétoile.
                </p>
                <p className='text-xs font-bold text-white pl-3 pb-3'>Consultez la liste des missions pour connaître toutes les manières de gagner des points.</p>
                <p className='text-xs text-white pl-3 pb-3'>Les scores seront régulièrement mis à jour sur le site.</p>
                <h2 className="font-['Cormorant_Garamond'] font-bold text-white pl-3 pb-2 underline underline-offset-4">RECOMPENSES</h2>
                <p className='text-white text-xs pl-3 pb-2' >
                    La <span className='text-white font-bold'>personne avec le plus haut score</span> individuel
                    sera récompensée <br/>(détails à venir).
                </p>
                <p className='text-white text-xs pl-3 pb-2'>
                    L'ensemble des <span className='text-white font-bold '>membres de la maison</span> avec
                    le plus haut score sera récompensé <br/>(détails à venir).
                </p>
                <p className='text-white text-xs pl-3 pb-5'>
                    Tous les <span className='text-white font-bold'>participants impliqués</span> seront récompensés.
                </p>
            </div>
            <div className='pl-2 pr-2 pt-4 flex flex-col mr-2 border border-gold border-solid bg-black h-[280px] w-2/5 rounded-b-full landscapes:w-1/4 landscapes:m-auto landscapes:h-2/3'>
                <h2 className='text-gold pb-2'>MAISONS</h2>
                <div className='flex pb-2 justify-between'>
                    <Image src='/Diamond_gold.svg' width={10} height={10}/>
                    <Image src='/Heart_gold.svg' width={10} height={10} />
                    <Image src='/Pique_gold.svg' width={10} height={10} />
                    <Image src='/Trefle_gold.svg' width={10} height={10} />
                    <Image src='/Etoile_gold.svg' width={10} height={10} />
                    <Image src='/Lune_gold.svg' width={10} height={10} />
                </div>
                <p className='text-gold text-xs pb-1'>vous êtes <span className='text-gold font-bold'>affilié à une maison</span> en fonction de la carte que vous avez illustrée</p>
                <p className='text-gold text-xs'>le cumul des points des 13 personnes d'une maison constitue un <span className='text-gold font-bold'>score de maison</span></p>
            </div>
        </div>
        <div className='pl-3 mt-5 w-3/5'>
            <p className="font-['Cormorant_Garamond'] font-bold pt-2">PRINCIPE DES STORIES</p>
            <p className='pt-2 text-xs'>Les stories seront 
            <span className='text-xs font-bold'> quotidiennes </span> 
            et alterneront entre 
            <span className='text-xs font-bold'> teasers et révélations </span> 
            de cartes. <br/>
            Tous les deux jours, une nouvelle carte sera révélée et sera précédée d'un teaser pour créer de l'anticipation.
            </p>
            <p className='text-xs pt-2'>Les teasers montreront une image assombrie et 
            <span className='text-xs font-bold'> vous pourrez deviner de quelle carte il s'agit.</span> 
            </p>
            <p className='pt-2 text-xs'>Le lendemain, 
            <span className='text-xs font-bold'> la carte complète sera dévoilée </span> 
            avec un tag de l'artiste qui l'a illustrée.</p>
            <p className='text-xs pt-2 pb-3'><span className='text-xs font-bold'>Participez </span> 
            activement aux stories pour 
            <span className='text-xs font-bold'> accumuler des points </span> 
            pour vous et votre maison !</p>
        </div>
        <GoldenCircle showGoldenCircle={true} /> 
        <div className='bg-deep-blue w-screen flex pt-5 pb-5 justify-center'>
            <h2 className="text-gold font-['Cormorant_Garamond'] font-semibold">ENGAGEMENT STORY</h2>
        </div>
        <div className='pl-3 flex pt-3 pb-3 items-center'>
            <ul className='list-disc pl-3'>
                <li className='text-xs'>Liker une story : <span className='text-xs font-bold pr-3'>+1 point</span></li>
            </ul>
            <Image src='/MissionsICON/Coeur_black.svg' width={30} height={30}/>
        </div>
        <div className='flex pl-3 pt-3 pb-3 bg-lightGray items-center'>
            <ul className='list-disc pl-3'>
                <li className='text-xs'>Envoyer une réaction <br/> emoji à une story : <span className='text-xs font-bold pr-3'>+2 points</span>
                </li>
            </ul>
            <Image src='/MissionsICON/Smiley.svg' height={30} width={30}/>
        </div>
        <div className='pl-3 flex pt-3 pb-3 items-center'>
        <ul className='list-disc pl-3'>
            <li className='text-xs'>Répondre à une question <br/>ou un sondage en story : <span className='text-xs font-bold pr-3'>+2 points</span>
            </li>
        </ul>
        <Image src='/MissionsICON/Question.svg' height={50} width={100}/>
        </div>
        <div className='flex pl-3 pt-3 pb-3 bg-lightGray items-center'>
            <ul className='list-disc pl-3'>
                <li className='text-xs'>Trouver la procchaine carte révélée : <span className='text-xs font-bold pr-3'>+10 points</span>
                </li>
            </ul>
            <Image src='/MissionsICON/Mystère.svg' height={30} width={30}/>
        </div>
        <div className='pl-3 flex pt-3 pb-3 items-center'>
        <ul className='list-disc pl-3'>
            <li className='text-xs'>Me taguer sur vos story personnelles<br/>(Maximum une fois par jour) : <span className='text-xs font-bold pr-3'>+1 points</span>
            </li>
        </ul>
        <Image src='/MissionsICON/arthurbicyclette.svg' height={50} width={100}/>
        </div>


        <div className='bg-deep-blue w-screen flex pt-5 pb-5 flex-col'>
            <h2 className="text-gold font-['Cormorant_Garamond'] font-semibold self-center">COLLABORATIONS</h2>
            <p className='text-xs italic text-white leading-5 pl-3 self-center'>Si vous effectuez ces missions avec des personnes <br/>hors de vos cercles sociaux, vos points sont doublés</p>
        </div>
        <div className='pl-3 flex pt-3 pb-3 items-center'>
        <ul className='list-disc pl-3'>
            <li className='text-xs pr-3'>Me partager en MP le dernier réel <br/>d'un autre artiste : <span className='text-xs font-bold pr-3'>+1 points</span>
            </li>
        </ul>
        <Image src='/MissionsICON/MP.svg' height={20} width={20}/>
        </div>
        <div className='flex pl-3 pt-3 pb-3 bg-lightGray items-center'>
            <ul className='list-disc pl-3'>
                <li className='text-xs pr-3'>Poster un selfie avec un autre artiste<br/>en me taguant : <span className='text-xs font-bold pr-3'>+5 points</span>
                </li>
            </ul>
            <Image src='/MissionsICON/Photo.svg' height={20} width={20}/>
        </div>
        <div className='pl-3 flex pt-3 pb-3 items-center'>
        <ul className='list-disc pl-3'>
            <li className='text-xs pr-3'>Faire une collaboration avec un autre artiste<br/>en me taguant : <span className='text-xs font-bold pr-3'>+5 points</span>
            </li>
        </ul>
        <Image src='/MissionsICON/Collab.svg' height={30} width={40}/>
        </div>
        <div className='flex pl-3 pt-3 pb-3 bg-lightGray items-center'>
            <ul className='list-disc pl-3'>
                <li className='text-xs pr-3'>Faire un trade avec<br/>une personne du projet : <span className='text-xs font-bold pr-3'>+10 points</span>
                </li>
            </ul>
            <Image src='/MissionsICON/Trade.svg' height={20} width={30}/>
        </div>


        <div className='bg-deep-blue w-screen flex pt-5 pb-5 flex-col'>
            <h2 className="text-gold font-['Cormorant_Garamond'] font-semibold self-center">AUTRES</h2>
        </div>
        <div className='pl-3 flex pt-3 pb-3 items-center'>
        <ul className='list-disc pl-3'>
            <li className='text-xs pr-3'>Faire parti du Cercle Doré : <span className='text-xs font-bold'>+5 points</span>
            </li>
        </ul>
        <Image src='/MissionsICON/Circle.svg' height={30} width={40}/>
        </div>
        <div className='flex pl-3 pt-3 pb-3 bg-lightGray items-center'>
            <ul className='list-disc pl-3'>
                <li className='text-xs pr-3'>Rejoindre le serveur discord : <span className='text-xs font-bold'>+3 points</span>
                </li>
            </ul>
            <Image src='/MissionsICON/Discord.svg' height={20} width={30}/>
        </div>
        <div className='pl-3 flex pt-3 pb-3 items-center'>
        <ul className='list-disc pl-3'>
            <li className='text-xs pr-3'>Likez mon dernier message<br/>sur instagram : <span className='text-xs font-bold'>+5 points</span>
            </li>
        </ul>
        <Image src='/MissionsICON/Coeur_black.svg' height={30} width={30}/>
        </div>


        <div className='bg-deep-blue w-screen flex pt-5 pb-5 flex-col'>
            <h2 className="text-red font-['Cormorant_Garamond'] font-semibold self-center pb-3">ANTIMISSIONS</h2>
            <div className='flex pl-3 pr-3 justify-between'>
                <p className='text-xs text-white leading-5'>Actions entrainant<br/>une perte de points</p>
                <div className=' flex justify-center items-center w-[35px] h-[40px] border-2 border-red rounded-b-full'>
                    <FontAwesomeIcon icon={faExclamation} width={5} height={30} color='red'/>
                </div>
                <div className='w-1/3 landscapes:w-1/6'></div>
            </div>
        </div>
        <div className='pl-3 flex pt-3 pb-3 items-center bg-charcoal'>
        <ul className='list-disc pl-3'>
            <li className='text-xs text-white pr-3'>Poster un <span className='text-xs text-wite font-bold'>message sur<br/>le groupe principale</span> Lunétoile : <span className='text-xs font-bold'>-10 points</span>
            </li>
        </ul>
        </div>
        <div className='pl-3 flex pt-3 pb-3 items-center bg-deep-blue'>
        <ul className='list-disc pl-3'>
            <li className='text-xs text-white pr-3'><span className='text-xs text-wite font-bold'>Ne pas trouver votre propre carte</span> <br/>avant sa révélation : <span className='text-xs font-bold'>-10 points</span>
            </li>
        </ul>
        </div>
        {/* <TestImage/> */}
    </div>

    )
}

export default Rules