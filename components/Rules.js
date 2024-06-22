import React from 'react';
import Image from 'next/image';
import GoldenCircle from './GoldenCircle';
import TestImage from './TestImage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation, faQuestion, faAt, faXmark } from '@fortawesome/free-solid-svg-icons';
import '../styles/Rules.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function Rules() {
    const [showGoldenCircle, setShowGoldenCircle] = React.useState(false);
    const [showStory, setShowStory] = React.useState(false);
    const handleOpenStory = () => setShowStory(true);
    const handleCloseStory = () => setShowStory(false);
    const handleOpen = () => setShowGoldenCircle(true);
    const handleClose = () => setShowGoldenCircle(false);
    console.log(showGoldenCircle)
  return (
    <div className='h-[45vh] w-screen mt-10 landscapes:h-[80vh]'>
        <div className='bg-white pt-4 pb-4 landscapes:h-1/2 landscapes:pt-6 flex'> 
            <div className='shadow-top-only flex flex-col justify-center items-center'>
                <h2 className="pt-4 font-['Cormorant_Garamond'] pl-3 pb-4 text-2xl text-center">LE TOURNOI DES MAISONS</h2>
                <p className='text-base pb-3 text-center'>Chers Artistes,</p>
                <div className='w-3/4'>
                    <p className='pl-3 pb-4 text-center'>
                        Afin de renforcer l'engagement et l'aspect collaboratif du projet, je lance un <span className='font-bold'>grand jeu</span> fil rouge appelé
                        <span className='font-bold'> Tournoi des maisons.</span>
                    </p>
                </div>
            </div>
        </div>
        <div className='pl-2 pr-2 pt-4 flex flex-col justify-around items-center mr-2 bg-deep-blue h-[200px] w-screen rounded-b-[145px] landscapes:w-1/5 landscapes:m-auto landscapes:h-4/5'>
            <h2 className='font-["Cormorant_Garamond"] text-gold pb-2 self-center font-bold'>MAISONS</h2>
            <div className='flex pb-2 justify-between w-3/5'>
                <Image src='/Diamond_gold.svg' width={20} height={20}/>
                <Image src='/Heart_gold.svg' width={20} height={20} />
                <Image src='/Pique_gold.svg' width={20} height={20} />
                <Image src='/Trefle_gold.svg' width={20} height={20} />
                <Image src='/Etoile_gold.svg' width={20} height={20} />
                <Image src='/Lune_gold.svg' width={20} height={20} />
            </div>
            <p className='text-gold text-xs pb-4 w-2/5 text-center'>vous êtes <span className='text-gold font-bold'>affilié à une maison</span> en fonction de la carte que vous avez illustrée</p>                
        </div>
        <div className='pt-10 pb-14 flex flex-col items-center landscapes:mt-0 landscapes:h-screen'>
            <h2 className='font-["Cormorant_Garamond"] text-2xl pl-3 pb-5 self-center'>LES RÈGLES</h2>
            <div className=' flex flex-col justify-between w-4/5 pr-2'>
                    <p className=' text-xs pl-3 pb-2 text-center'>Effectuez un maximum de <span className='text-xs font-bold'>missions pour gagner des points.</span></p>
                    <p className=' text-xs pl-3 pb-2 text-center' >
                        La <span className='font-bold'>personne avec le plus haut score </span> 
                        ainsi que <span className='font-bold'>la maison</span> avec le plus haut score et tous les 
                        <span className='font-bold'> participants investis </span>seront récompensés.
                    </p>
            </div>
        </div>
        <div className='shadow-top-only-2 flex justify-center items-center'>
            <p className='pt-5 pb-8 font-["Cormorant_Garamond"] text-2xl'>LES MISSIONS</p>
        </div>
        <div className='bg-deep-blue w-screen flex pt-5 pb-5 pl-5'>
            <h2 className="text-gold font-['Cormorant_Garamond']">ENGAGEMENT STORY</h2>
            <button className='bg-lightGray rounded ml-5 pl-2 pr-2' onClick={handleOpenStory}>en savoir plus</button>
        </div>
        <Modal
            open={showStory}
            onClose={handleCloseStory}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className='absolute top-1/2 bottom-1/2 self-center'>
            <div className='bg-white w-screen flex flex-col items-center'>
                <div className='self-end'>
                <FontAwesomeIcon icon={faXmark} width={30} height={30} color='#02091d' onClick={handleCloseStory}/>
                </div>
                <p className="font-['Cormorant_Garamond'] font-bold text-center">STORIES</p>
                <p className='pt-5 text-xs text-center w-4/5'>Les stories seront 
                <span className='text-xs font-bold'> quotidiennes </span> 
                et alterneront entre 
                <span className='text-xs font-bold'> teasers et révélations </span> 
                </p>
                <p className='text-xs pt-2 pb-3 text-center w-4/5'><span className='text-xs font-bold'>Participez </span> 
                activement aux stories pour 
                <span className='text-xs font-bold'> accumuler des points !</span> 
                </p>
            <div className='flex w-full justify-around pb-5'>
                <div className='flex flex-col items-center justify-center pt-5 pb-5'>
                    <p className='text-gold'>J1</p>
                    <Image src='/story1.svg' width={100} height={200}/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className='text-gold'>J2</p>
                    <Image src='/story2.svg' width={100} height={200}/>
                </div>
            </div>
        </div>
        </Box>
        </Modal>
        <div className='pl-3 flex pt-3 pb-3 items-center justify-between'>
            <div className='flex items-center pl-3'>
                <Image src='/MissionsICON/Coeur_black.svg' width={30} height={30}/>
                <p className='text-xs pl-3'>Liker une story</p>
            </div>
            <div className='text-xs font-bold pr-3'>+1 point</div>
        </div>
        <div className='flex pl-3 pt-3 pb-3 bg-lightGray justify-between items-center'>
            <div className='flex items-center pl-3'>
                <Image src='/MissionsICON/Smiley.svg' height={30} width={30}/>
                <p className='text-xs pl-3'>Envoyer une réaction <br/> emoji à une story</p>
            </div>
            <div className='text-xs font-bold pr-3'>+2 points</div>
        </div>
        <div className='pl-3 flex pt-3 pb-3 items-center justify-between'>
            <div className='flex items-center pl-3'>
                <FontAwesomeIcon icon={faQuestion} width={30} height={30} />
                <p className='text-xs pl-3'>Répondre à une question <br/>ou un sondage en story</p>
            </div>
            <div className='text-xs font-bold pr-3'>+2 points</div>
        </div>
        <div className='flex pl-3 pt-3 pb-3 bg-lightGray justify-between items-center'>
            <div className='flex items-center pl-3'>
                <Image src='/MissionsICON/Mystère.svg' height={30} width={30}/>
                <p className='text-xs pl-3'>Trouver la prochaine carte révélée</p>
            </div>
            <div className='text-xs font-bold pr-3'>+10 points</div>
        </div>
        <div className='pl-3 flex pt-3 pb-3 justify-between items-center'>
            <div className='flex items-center pl-3'>
                <FontAwesomeIcon icon={faAt} width={30} height={30} />
                <p className='text-xs pl-3'>Me taguer sur vos story personnelles<br/>(Maximum une fois par jour)</p>
            </div>
            <div className='text-xs font-bold pr-3'>+1 point</div>
        </div>


        <div className='bg-deep-blue w-screen flex pt-5 pb-5 pl-5 flex-col'>
            <h2 className="text-gold font-['Cormorant_Garamond']">COLLABORATIONS</h2>
            <p className='w-[80vw] text-xs italic text-white leading-5'>Si vous effectuez ces missions avec des personnes hors de vos cercles sociaux, vos points sont doublés</p>
        </div>
        <div className='pl-3 flex pt-3 pb-3 justify-between items-center'>
            <div className='flex items-center pl-3'>
                <Image src='/MissionsICON/MP.svg' height={30} width={30}/>
                <p className='text-xs pl-3'>Me partager en MP le dernier réel <br/>d'un autre artiste</p>
            </div>
            <div className='text-xs font-bold pr-3'>+1 point</div>
        </div>
        <div className='flex pl-3 pt-3 pb-3 bg-lightGray justify-between items-center'>
            <div className='flex items-center pl-3'>
                <Image src='/MissionsICON/Photo.svg' height={30} width={30}/>
                <p className='text-xs pl-3'>Poster un selfie avec un autre <br/>artiste en me taguant</p>
            </div>
            <div className='text-xs font-bold pr-3'>+5 points</div>
            
        </div>
        <div className='pl-3 flex pt-3 pb-3 justify-between items-center'>
            <div className='flex items-center pl-3'>
                <Image src='/MissionsICON/Collab.svg' height={30} width={30}/>
                <p className='text-xs pl-3'>Faire une collaboration avec <br/>une personne du projet</p>
            </div>
            <div className='text-xs font-bold pr-3'>+5 points</div>
        </div>
        <div className='flex pl-3 pt-3 pb-3 bg-lightGray justify-between items-center'>
            <div className='flex items-center pl-3'>
                <Image src='/MissionsICON/Trade.svg' height={20} width={30}/>
                <p className='text-xs pl-3'>Faire un trade avec<br/>une personne du projet</p>
            </div>
            <div className='text-xs font-bold pr-3'>+10 points</div>
        </div>


        <div className='bg-deep-blue w-screen flex pt-5 pb-5'>
            <h2 className="text-gold font-['Cormorant_Garamond'] ml-5">AUTRES</h2>
            <button className='bg-lightGray rounded ml-5 pl-2 pr-2' onClick={handleOpen}>en savoir plus</button>
        </div>
        <Modal
            open={showGoldenCircle}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <Box className='absolute top-1/2 bottom-1/2 self-center'>
            <GoldenCircle handleClose={handleClose}/>
        </Box>
        </Modal>
        <div className='pl-3 flex pt-3 pb-3 justify-between items-center'>
            <div className='flex items-center pl-3'>
                <Image src='/MissionsICON/Circle.svg' height={30} width={30}/>
                <p className='text-xs pl-3'>Faire partie du Cercle Doré</p>
            </div>
            <div className='text-xs pr-5 font-bold'>+5 points</div>
        </div>
        <div className='flex pl-3 pt-3 pb-3 bg-lightGray justify-between items-center'>
            <div className='flex items-center pl-3'>
                <Image src='/MissionsICON/Discord.svg' height={30} width={30}/>
                <p className='text-xs pl-3'>Rejoindre le serveur discord</p>
            </div>
            <div className='text-xs pr-5 font-bold'>+3 points</div>
        </div>
        <div className='flex pl-3 pt-3 pb-3 justify-between items-center'>
            <div className='flex items-center pl-3'>
                <Image src='/MissionsICON/Coeur_black.svg' height={30} width={30}/>
                <p className='text-xs pl-3'>Liker mon dernier message<br/>sur instagram</p>
            </div>
            <div className='text-xs pr-5 font-bold'>+5 points</div>
        </div>


        <div className='bg-deep-blue w-screen flex pt-5 pb-5 flex-col items-center'>
            <h2 className="text-red font-['Cormorant_Garamond'] font-semibold self-center pb-3">ANTIMISSIONS</h2>
            <div className=' flex justify-center items-center w-[35px] h-[40px] border-2 border-red rounded-b-full'>
                <FontAwesomeIcon icon={faExclamation} width={30} height={30} color='#F15A24'/>
            </div>
            <p className='text-xs text-white leading-5 pt-3'>Actions entrainant une perte de points</p>
        </div>
        <div className='flex pt-3 pb-3 items-center justify-between bg-charcoal'>
            <p className='text-xs text-white pl-5'>Poster un <span className='text-xs text-wite font-bold'>message sur<br/>le groupe principale</span> Lunétoile</p>
            <div className='text-xs text-white pr-5 font-bold'>-10 points</div>
        </div>
        <div className='flex pt-3 pb-3 items-center justify-between bg-deep-blue'>
            <p className='text-xs text-white pl-5'><span className='text-xs text-wite font-bold'>Ne pas trouver votre propre carte</span> <br/>avant sa révélation</p>
            <div className='text-xs text-white pr-5 font-bold'>-10 points</div>
        </div>
        {/* <TestImage/> */}
    </div>

    )
}

export default Rules