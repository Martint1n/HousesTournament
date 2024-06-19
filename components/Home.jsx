import React, { useEffect, useState, useRef } from 'react';
import Heart from './Heart';
import Spade from './Spade';
import Club from './Club';
import Diamond from './Diamond';
import Moon from './Moon';
import Star from './Star';
import Image from 'next/image';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
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

  const [heartColor, setHeartColor] = useState('#000');
  const [spadeColor, setSpadeColor] = useState('#000');
  const [clubColor, setClubColor] = useState('#000');
  const [diamondColor, setDiamondColor] = useState('#fff');
  const [starColor, setStarColor] = useState('#000');
  const [moonColor, setMoonColor] = useState('#000');
  
  const [classNameDiamond, setClassNameDiamond] = useState('flex bg-black rounded-full w-[40px] h-[40px] p-2 justify-center items-center');
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
        const instagramLink = `instagram://user?username=${data.pseudo.slice(1)}`;
        const webLink = `https://www.instagram.com/${data.pseudo.slice(1)}/`;

        const artistComponent = (
          <div className='flex justify-center'>
          <div className='pb-2 pt-2 flex justify-center items-center border-b border-gray w-[90vw]' key={`${maison}-${maisonCounters[maison]}`}>
            <div className='w-10 mr-3 flex justify-around'>{data.carte}
              {data.maison === 'coeur' && <Image src='/Coeur.svg' width={15} height={15} />}
              {data.maison === 'trèfle' && <Image src='/Trefle.svg' width={15} height={15} />}
              {data.maison === 'pique' && <Image src='/Pique.svg' width={15} height={15} />}
              {data.maison === 'carreau' && <Image src='/Carreau.svg' width={15} height={15} />}
              {data.maison === 'lune' && <Image src='/Lune_gold.svg' width={15} height={15} />}
              {data.maison === 'étoile' && <Image src='/Etoile_gold.svg' width={15} height={15} />}
            </div>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" className={`text-urlInsta w-1/3 italic text-[12px]`}>
            {data.pseudo}
            </a>
            <div className='w-14 text-right ml-3'>{data.points}</div>
          </div>
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
          case 'jokerDP':
            heartTotal += data.points;
            diamondTotal += data.points;
            maisonComponents.coeur.push(<div className='flex justify-center'>
              <div className='pb-2 pt-2 flex justify-center items-center border-b border-gray w-[90vw]' key={`${maison}-${maisonCounters[maison]}`}>
              <div className='w-10 mr-3 flex justify-around '>
                {data.carte}
                <Image src='/Coeur.svg' width={15} height={15} />
              </div>
              <a href={instagramLink} target="_blank" rel="noopener noreferrer" className={`text-urlInsta italic w-1/2`}>
              {data.pseudo}
              </a>
              <div className='w-14 text-right ml-3'>{data.points}</div>
            </div>
          </div>)
            maisonComponents.carreau.push(<div className='flex justify-center'>
              <div className='pb-2 pt-2 flex justify-center items-center border-b border-gray w-[90vw]' key={`${maison}-${maisonCounters[maison]}`}>
              <div className='w-10 mr-3 flex justify-around'>
              {data.carte}
              <Image src='/Carreau.svg' width={15} height={15} />
            </div>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" className={`text-urlInsta w-1/2`}>
            {data.pseudo}
            </a>
            <div className='w-14 text-right ml-3'>{data.points}</div>
            </div>
          </div>)
            break;
            
          case 'jokerSC':
            spadeTotal += data.points;
            clubTotal += data.points;
            maisonComponents.pique.push(<div className='flex justify-center'>
              <div className='pb-2 pt-2 flex justify-center items-center border-b border-gray w-[90vw]' key={`${maison}-${maisonCounters[maison]}`}>
              <div className='w-10 mr-3 flex justify-around'>{data.carte}
                <Image src='/Pique.svg' width={15} height={15} />
              </div>
              <a href={instagramLink} target="_blank" rel="noopener noreferrer" className={`text-urlInsta w-1/2`}>
              {data.pseudo}
              </a>
              <div className='w-14 text-right ml-3'>{data.points}</div>
            </div>
          </div>)
            maisonComponents.trefle.push(<div className='flex justify-center'>
              <div className='pb-2 pt-2 flex justify-center items-center border-b border-gray w-[90vw]' key={`${maison}-${maisonCounters[maison]}`}>
              <div className='w-10 mr-3 flex justify-around'>{data.carte}
                <Image src='/Trefle.svg' width={15} height={15} />
              </div>
              <a href={instagramLink} target="_blank" rel="noopener noreferrer" className={`text-urlInsta w-1/2`}>
              {data.pseudo}
              </a>
              <div className='w-14 text-right ml-3'>{data.points}</div>
            </div>
          </div>)
            break;

            case 'jokerMS':
              moonTotal += data.points;
              starTotal += data.points;
              maisonComponents.lune.push(<div className='flex justify-center'>
                <div className='pb-2 pt-2 flex justify-center items-center border-b border-gray w-[90vw]' key={`${maison}-${maisonCounters[maison]}`}>
                <div className='w-10 mr-3 flex justify-around'>{data.carte}
                  <Image src='/Lune_gold.svg' width={15} height={15} />
                </div>
                <a href={instagramLink} target="_blank" rel="noopener noreferrer" className={`text-urlInsta w-1/2`}>
                {data.pseudo}
                </a>
                <div className='w-14 text-right ml-3'>{data.points}</div>
              </div>
            </div>)
              maisonComponents.etoile.push(<div className='flex justify-center'>
                <div className='pb-2 pt-2 flex justify-center items-center border-b border-gray w-[90vw]' key={`${maison}-${maisonCounters[maison]}`}>
                <div className='w-10 mr-3 flex justify-around'>{data.carte}
                  <Image src='/Etoile_gold.svg' width={15} height={15} />
                </div>
                <a href={instagramLink} target="_blank" rel="noopener noreferrer" className={`text-urlInsta w-1/2`}>
                {data.pseudo}
                </a>
                <div className='w-14 text-right ml-3'>{data.points}</div>
              </div>
            </div>)
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
      setClassNameDiamond('flex bg-black rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setDiamondColor('#fff');
      setClassNameHeart('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setHeartColor('#000')
      setClassNameSpade('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setSpadeColor('#000')
      setClassNameClub('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setClubColor('#000')
      setClassNameStar('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setStarColor('#000')
      setClassNameMoon('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setMoonColor('#000')

    } else if (currentIndex === 1){
      setClassNameDiamond('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setDiamondColor('#000')
      setClassNameHeart('flex bg-black rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setHeartColor('#fff');
      setClassNameSpade('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setSpadeColor('#000')
      setClassNameClub('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setClubColor('#000')
      setClassNameStar('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setStarColor('#000')
      setClassNameMoon('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setMoonColor('#000')

    }else if (currentIndex === 2) {
      setClassNameDiamond('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setDiamondColor('#000')
      setClassNameHeart('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setHeartColor('#000')
      setClassNameSpade('flex bg-black rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setSpadeColor('#fff');
      setClassNameClub('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setClubColor('#000')
      setClassNameStar('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setStarColor('#000')
      setClassNameMoon('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setMoonColor('#000')

    }else if (currentIndex === 3) {
      setClassNameDiamond('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setDiamondColor('#000')
      setClassNameHeart('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setHeartColor('#000')
      setClassNameSpade('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setSpadeColor('#000');
      setClassNameClub('flex bg-black rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setClubColor('#fff')
      setClassNameStar('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setStarColor('#000')
      setClassNameMoon('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setMoonColor('#000')
      
    }
    else if (currentIndex === 4) {
      setClassNameDiamond('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setDiamondColor('#000')
      setClassNameHeart('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setHeartColor('#000')
      setClassNameSpade('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setSpadeColor('#000');
      setClassNameClub('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setClubColor('#000')
      setClassNameStar('flex bg-black rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setStarColor('#fff')
      setClassNameMoon('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setMoonColor('#000')
      
    }
    else if (currentIndex === 5) {
      setClassNameDiamond('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setDiamondColor('#000')
      setClassNameHeart('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setHeartColor('#000')
      setClassNameSpade('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setSpadeColor('#000');
      setClassNameClub('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setClubColor('#000')
      setClassNameStar('flex border-transparent rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setStarColor('#000')
      setClassNameMoon('flex bg-black rounded-full w-[40px] h-[40px] p-2 justify-center items-center')
      setMoonColor('#fff')
      
    }
  };

  return (
    <>
    <div className='w-screen h-[70vh] rounded-b-[145px] bg-deep-blue landscapes:h-max'>
      <div className='flex items-center justify-center'>
        <Image src={'/Logo.svg'} width={100} height={100} />
        <h1 className="text-white text-2xl font-['Cormorant_Garamond']">LUNÉTOILE</h1>
      </div>
      <HouseScore
        heartScore={{ score: heartScore, icon: '/Coeur.svg' }}
        clubScore={{ score: clubScore, icon: '/Trefle.svg' }}
        diamondScore={{ score: diamondScore, icon: '/Carreau.svg' }}
        spadeScore={{ score: spadeScore, icon: '/Pique.svg' }}
        moonScore={{ score: moonScore, icon: '/Lune_gold.svg' }}
        starScore={{ score: starScore, icon: '/Etoile_gold.svg' }}
      />
    </div>
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
      <div className='flex justify-center'>
      <div className='flex w-[90vw] justify-around'>
        <p className='italic'>Cartes</p>
        <div className='flex flex-col items-center'>
          <p className='italic'>Artistes</p>
          <p className='italic text-gray'>Instagram</p>
        </div>
        <p className='italic'>Points</p>
      </div>
      </div>
    <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange= {handleSlideChange}
        style={{display: 'flex', paddingBottom: 10}}
      >
        <SwiperSlide >{artistRow.carreau}</SwiperSlide>
        <SwiperSlide >{artistRow.coeur}</SwiperSlide>
        <SwiperSlide >{artistRow.pique}</SwiperSlide>
        <SwiperSlide >{artistRow.trefle}</SwiperSlide>
        <SwiperSlide >{artistRow.etoile}</SwiperSlide>
        <SwiperSlide >{artistRow.lune}</SwiperSlide>

        <div class="swiper-button-prev" onClick={() => swiperRef.current?.slidePrev()}></div>
        <div class="swiper-button-next" onClick={() => swiperRef.current?.slideNext()}></div>
      </Swiper>
      <Rules />
    </>
  );
}

export default Home;
