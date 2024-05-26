import React, { useEffect, useState} from 'react'
import Heart from './Heart';
import Spade from './Spade';
import Club from './Club';
import Diamond from './Diamond';
import Moon from './Moon';
import Star from './Star';
import Image from 'next/image';

function HouseScore(props) {

    // useEffect(() => {
    //     (async () => {
    //       const response = await fetch('http://localhost:3000/users')
    //       const artist = await response.json()
    //       let test = 0
    //     for (let i = 0; i < artist.artist.length; i++) {
            
    //         if (artist.artist[i].maison === 'coeur'){
    //             test += parseInt(artist.artist[i].points)
    //         }
    //     }
    //     setHeartScore(test)
    // })()
    // }, [])
  const scoreArray = [props];

  // trier par ordre décroissant 
//   scoreArray.sort(function(a, b) {
//     return a[1] - b[1];
// })
// const obj = scoreArray[0]
// const newScoreArray = [];
// for (let house in obj) {
//   newScoreArray.push([house, obj[house]]);
// }

// newScoreArray.sort(function(a, b) {
//   return b[1] - a[1];
// });
//   console.log('newScoreArray', newScoreArray)


console.log(scoreArray)

const scores = scoreArray[0]

const maisons = []
const newArr=[]
for (const maison in scores){
  maisons.push(maison)
}
for (let i = 0; i < maisons.length; i++){
  console.log(scores[maisons[i]])
  newArr.push(scores[maisons[i]])
}

const sortedScores = newArr.sort((a, b) => b.score - a.score);
console.log(sortedScores)

const houses = sortedScores.map((data, i) => {
  return (
    <div className='bg-white w-1/2 h-5 mb-1 flex justify-around items-center rounded-md mt-1'>
      <Image src={data.icon} width={15} height={15}/>
      <div >{data.score}</div>
    </div>
  )
})


  return (
    <div className='flex h-1/3 w-full justify-center mt-3'>
      <div className='flex flex-col justify-center items-center mr-2 border border-gold border-solid bg-black h-full w-2/5 rounded-b-full'>
      {houses}
      </div>
      <div className='flex flex-col justify-center items-center ml-2 border-2 border-gold border-solid bg-deep-blue h-full w-2/5 rounded-b-full'>
        <h2 className='pb-2'>
          <span style={{display: 'block', color: '#ddb758', textAlign: 'center'}}>TOURNOI</span>
          <span style={{display: 'block', color: 'white'}}>DES MAISONS</span>
        </h2>
        <Image src={'/TDM_Logo.svg'} width={100} height={100}/>
      </div>
    </div>
  )
}

export default HouseScore