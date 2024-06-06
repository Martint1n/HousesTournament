import React, { useEffect, useState, useRef } from 'react';
import Heart from './Heart';
import Spade from './Spade';
import Club from './Club';
import Diamond from './Diamond';
import Moon from './Moon';
import Star from './Star';
import Image from 'next/image';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css/bundle';
import HouseScore from './HouseScore';
import Rules from './Rules';


function Home() {
  const [artistRow, setArtistRow] = useState({
    coeur: [],
    trefle: [],
    pique: [],
    carreau: [],
    lune: [],
    etoile: []
  });

  const [heartScore, setHeartScore] = useState(0);
  const [spadeScore, setSpadeScore] = useState(0);
  const [clubScore, setClubScore] = useState(0);
  const [diamondScore, setDiamondScore] = useState(0);
  const [moonScore, setMoonScore] = useState(0);
  const [starScore, setStarScore] = useState(0);

  const [heartColor, setHeartColor] = useState('#fff');
  const [spadeColor, setSpadeColor] = useState('#fff');
  const [clubColor, setClubColor] = useState('#fff');
  const [diamondColor, setDiamondColor] = useState('#ddb758');
  const [starColor, setStarColor] = useState('#fff');
  const [moonColor, setMoonColor] = useState('#fff');
  
  const [classNameDiamond, setClassNameDiamond] = useState('flex border border-gold rounded-full w-[40px] h-[40px] p-2 justify-center items-center');
  const [classNameHeart, setClassNameHeart] = useState('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center');
  const [classNameSpade, setClassNameSpade] = useState('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center');
  const [classNameClub, setClassNameClub] = useState('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center');
  const [classNameStar, setClassNameStar] = useState('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center');
  const [classNameMoon, setClassNameMoon] = useState('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center');

   // Fonction de comparaison personnalisée pour trier les cartes dans l'ordre voulu
  const cardOrder = {
    '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'V': 11, 'D': 12, 'R': 13,
  };

  const compareCards = (a, b) => {
    return cardOrder[a.carte] - cardOrder[b.carte];
  };

  
  useEffect(() => {
    (async () => {
      const response = await fetch('https://house-tournament-backend.vercel.app/users');
      const artist = await response.json();
      
      artist.artist.sort(compareCards);
      
      const maisonComponents = {
        coeur: [],
        trefle: [],
        pique: [],
        carreau: [],
        lune: [],
        etoile: []
      };

      let heartTotal = 0;
      let clubTotal = 0;
      let spadeTotal = 0;
      let diamondTotal = 0;
      let moonTotal = 0;
      let starTotal = 0;

      const maisonCounters = {
        coeur: 0,
        trèfle: 0,
        pique: 0,
        carreau: 0,
        lune: 0,
        étoile: 0,
      };
      
      artist.artist.forEach((data) => {
        const maison = data.maison;
        const isEven = maisonCounters[maison] % 2 === 0;
        const colorClass = isEven ? 'text-white' : 'text-gray';
        const instagramLink = `instagram://user?username=${data.pseudo.slice(1)}`;
        const webLink = `https://www.instagram.com/${data.pseudo.slice(1)}/`;

        const artistComponent = (
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }} key={`${maison}-${maisonCounters[maison]}`}>
            <div className={`${colorClass} w-10`}>{data.carte}</div>
            {data.maison === 'coeur' && <Image src='/Coeur_white.svg' width={15} height={15} />}
            {data.maison === 'trèfle' && <Image src='/Trefle_white.svg' width={15} height={15} />}
            {data.maison === 'pique' && <Image src='/Pique_white.svg' width={15} height={15} />}
            {data.maison === 'carreau' && <Image src='/Carreau_white.svg' width={15} height={15} />}
            {data.maison === 'lune' && <Image src='/Lune.svg' width={15} height={15} />}
            {data.maison === 'étoile' && <Image src='/Etoile.svg' width={15} height={15} />}
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" className={`${colorClass} w-1/2`}>
            {data.pseudo}
            </a>
            <div className={`${colorClass} w-14 text-left`}>{data.points}</div>
          </div>
        );

        switch (maison) {
          case 'coeur':
            heartTotal += data.points;
            maisonComponents.coeur.push(artistComponent);
            break;
          case 'trèfle':
            clubTotal += data.points;
            maisonComponents.trefle.push(artistComponent);
            break;
          case 'pique':
            spadeTotal += data.points;
            maisonComponents.pique.push(artistComponent);
            break;
          case 'carreau':
            diamondTotal += data.points;
            maisonComponents.carreau.push(artistComponent);
            break;
          case 'lune':
            moonTotal += data.points;
            maisonComponents.lune.push(artistComponent);
            break;
          case 'étoile':
            starTotal += data.points;
            maisonComponents.etoile.push(artistComponent);
            break;
        }
        maisonCounters[maison]++;
      });


      setArtistRow(maisonComponents);
      setHeartScore(heartTotal);
      setClubScore(clubTotal);
      setSpadeScore(spadeTotal);
      setDiamondScore(diamondTotal);
      setMoonScore(moonTotal);
      setStarScore(starTotal);
    })();
  }, []);

  const swiperRef = useRef();


  const handleSlideChange = () => {
    const currentIndex = swiperRef.current.swiper.activeIndex;
    if (currentIndex === 0) {
      setClassNameDiamond('flex border border-gold rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setDiamondColor('#ddb758');
      setClassNameHeart('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setHeartColor('#fff')
      setClassNameSpade('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setSpadeColor('#fff')
      setClassNameClub('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setClubColor('#fff')
      setClassNameStar('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setStarColor('#fff')
      setClassNameMoon('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setMoonColor('#fff')

    } else if (currentIndex === 1){
      setClassNameDiamond('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setDiamondColor('#fff')
      setClassNameHeart('flex border border-gold rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setHeartColor('#ddb758');
      setClassNameSpade('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setSpadeColor('#fff')
      setClassNameClub('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setClubColor('#fff')
      setClassNameStar('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setStarColor('#fff')
      setClassNameMoon('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setMoonColor('#fff')

    }else if (currentIndex === 2) {
      setClassNameDiamond('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setDiamondColor('#fff')
      setClassNameHeart('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setHeartColor('#fff')
      setClassNameSpade('flex border border-gold rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setSpadeColor('#ddb758');
      setClassNameClub('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setClubColor('#fff')
      setClassNameStar('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setStarColor('#fff')
      setClassNameMoon('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setMoonColor('#fff')

    }else if (currentIndex === 3) {
      setClassNameDiamond('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setDiamondColor('#fff')
      setClassNameHeart('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setHeartColor('#fff')
      setClassNameSpade('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setSpadeColor('#fff');
      setClassNameClub('flex border border-gold rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setClubColor('#ddb758')
      setClassNameStar('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setStarColor('#fff')
      setClassNameMoon('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setMoonColor('#fff')
      
    }
    else if (currentIndex === 4) {
      setClassNameDiamond('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setDiamondColor('#fff')
      setClassNameHeart('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setHeartColor('#fff')
      setClassNameSpade('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setSpadeColor('#fff');
      setClassNameClub('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setClubColor('#fff')
      setClassNameStar('flex border border-gold rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setStarColor('#ddb758')
      setClassNameMoon('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setMoonColor('#fff')
      
    }
    else if (currentIndex === 5) {
      setClassNameDiamond('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setDiamondColor('#fff')
      setClassNameHeart('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setHeartColor('#fff')
      setClassNameSpade('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setSpadeColor('#fff');
      setClassNameClub('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setClubColor('#fff')
      setClassNameStar('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setStarColor('#fff')
      setClassNameMoon('flex border border-gold rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setMoonColor('#ddb758')
      
    }
  };

  return (
    <div className='w-screen h-screen bg-[url(/main_background.webp)] bg-cover bg-no-repeat landscapes:h-max'>

      <div className='flex items-center justify-center'>
        <Image src={'/Logo.svg'} width={150} height={150} />
        <h1 className="text-white text-xl font-['Cormorand_Garamond'] font-semibold">LUNETOILE</h1>
      </div>

      <HouseScore
        heartScore={{ score: heartScore, icon: '/Coeur.svg' }}
        clubScore={{ score: clubScore, icon: '/Trefle.svg' }}
        diamondScore={{ score: diamondScore, icon: '/Carreau.svg' }}
        spadeScore={{ score: spadeScore, icon: '/Pique.svg' }}
        moonScore={{ score: moonScore, icon: '/Lune_gold.svg' }}
        starScore={{ score: starScore, icon: '/Etoile_gold.svg' }}
      />
      <div className='flex w-screen justify-center mt-4 pb-4'>
        <div className='flex w-4/5 justify-around self-center'>
          <div className={classNameDiamond} onClick={() => { swiperRef.current.swiper.slideTo(0) }}>
            <Diamond color={diamondColor} width={30} height={30} />
          </div>
          <div className={classNameHeart} onClick={() => {swiperRef.current.swiper.slideTo(1)}}>
            <Heart color={heartColor} width={30} height={30} />
          </div>
          <div className={classNameSpade} onClick={() => { swiperRef.current.swiper.slideTo(2)}}>
            <Spade color={spadeColor} width={30} height={30} />
          </div>
          <div className={classNameClub} onClick={() => { swiperRef.current.swiper.slideTo(3)}}>
            <Club color={clubColor} width={30} height={30} />
          </div>
          <div className={classNameStar} onClick={() => { swiperRef.current.swiper.slideTo(4)}}>
            <Star color={starColor} width={30} height={30} />
          </div>
          <div className={classNameMoon} onClick={() => { swiperRef.current.swiper.slideTo(5)}}>
            <Moon color={moonColor} width={30} height={30} />
          </div>
        </div>
      </div>
      <Swiper
        ref={swiperRef}
        spaceBetween={-10}
        slidesPerView={1}
        onSlideChange= {handleSlideChange}
        centeredSlides={false}
        style={{display: 'flex'}}
      >
        <SwiperSlide className= 'w-3/4'>{artistRow.carreau}</SwiperSlide>
        <SwiperSlide className=' w-3/4'>{artistRow.coeur}</SwiperSlide>
        <SwiperSlide className=' w-3/4'>{artistRow.pique}</SwiperSlide>
        <SwiperSlide className=' w-3/4'>{artistRow.trefle}</SwiperSlide>
        <SwiperSlide className=' w-3/4'>{artistRow.etoile}</SwiperSlide>
        <SwiperSlide className=' w-3/4'>{artistRow.lune}</SwiperSlide>
      </Swiper>
      <Rules />
    </div>
  );
}

export default Home;
