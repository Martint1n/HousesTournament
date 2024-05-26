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
  const swiper = useSwiper();

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

  const changeColor = (heartColor, diamondColor, spadeColor, clubColor, starColor, moonColor, borderHeart, borderColorHeart, borderDiamond, borderColorDiamond, borderSpade, borderColorSpade, borderClub, borderColorClub, borderStar, borderColorStar, borderMoon, borderColorMoon) => {
    setHeartColor(heartColor);
    setClassNameHeart(`flex ${borderHeart} border-${borderColorHeart} rounded-full w-[40px] h-[40px] p-2 justify-center items-center`);
    
    setDiamondColor(diamondColor);
    setClassNameDiamond(`flex ${borderDiamond} border-${borderColorDiamond} rounded-full w-[40px] h-[40px] p-2 justify-center items-center`);
    
    setSpadeColor(spadeColor);
    setClassNameSpade(`flex ${borderSpade} border-${borderColorSpade} rounded-full w-[40px] h-[40px] p-2 justify-center items-center`);


    setClubColor(clubColor);
    setClassNameClub(`flex ${borderClub} border-${borderColorClub} rounded-full w-[40px] h-[40px] p-2 justify-center items-center`);

    setStarColor(starColor);
    setClassNameStar(`flex ${borderStar} border-${borderColorStar} rounded-full w-[40px] h-[40px] p-2 justify-center items-center`);

    setMoonColor(moonColor);
    setClassNameMoon(`flex ${borderMoon} border-${borderColorMoon} rounded-full w-[40px] h-[40px] p-2 justify-center items-center`);

  }
  console.log('test', diamondColor)


  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3000/users');
      const artist = await response.json();
      
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

      artist.artist.forEach((data, i) => {
        const artistComponent = (
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }} key={i}>
            <div className='text-white w-10'>{data.carte}</div>
            {data.maison === 'coeur' && <Image src='/Coeur_white.svg' width={15} height={15}/>}
            {data.maison === 'trèfle' && <Image src='/Trefle_white.svg' width={15} height={15}/>}
            {data.maison === 'pique' && <Image src='/Pique_white.svg' width={15} height={15}/>}
            {data.maison === 'carreau' && <Image src='/Carreau_white.svg' width={15} height={15}/>}
            {data.maison === 'lune' && <Image src='/Lune.svg' width={15} height={15} />}
            {data.maison === 'étoile' && <Image src='/Etoile.svg' width={15} height={15} />}
            <p className='text-white w-1/2'>{data.pseudo}</p>
            <div className='text-white w-14 text-left'>{data.points}</div>
          </div>
        );

        switch (data.maison) {
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

  return (
    <div className='w-screen h-screen bg-[url(/main_background.webp)] bg-cover bg-no-repeat'>

      <div className='flex items-center justify-center p-2 pb-5'>
        <Image src={'/Logo.svg'} width={50} height={50} />
        <h1 className='text-white'>LUNETOILE</h1>
      </div>

      <HouseScore
        heartScore={{ score: heartScore, icon: '/Coeur.svg' }}
        clubScore={{ score: clubScore, icon: '/Trefle.svg' }}
        diamondScore={{ score: diamondScore, icon: '/Carreau.svg' }}
        spadeScore={{ score: spadeScore, icon: '/Pique.svg' }}
        moonScore={{ score: moonScore, icon: '/Lune_gold.svg' }}
        starScore={{ score: starScore, icon: '/Etoile_gold.svg' }}
      />
      <div className='flex w-screen justify-center mt-8 pb-8'>
        <div className='flex w-4/5 justify-around self-center'>
          <div className={classNameDiamond} onClick={() => { swiperRef.current.swiper.slideTo(0), changeColor('#fff', 'gold', '#fff', '#fff', '#fff', '#fff', '0', '0', 'border', 'gold', '0', '0', '0', '0',) }}>
            <Diamond color={diamondColor} width={30} height={30} />
          </div>
          <div className={classNameHeart} onClick={() => {swiperRef.current.swiper.slideTo(1), changeColor('gold', '#fff', '#fff', '#fff', '#fff', '#fff', 'border','gold', '0', '0', '0', '0', '0', '0' ) }}>
            <Heart color={heartColor} width={30} height={30} />
          </div>
          <div className={classNameSpade} onClick={() => { swiperRef.current.swiper.slideTo(2), changeColor('#fff', '#fff', 'gold', '#fff', '#fff', '#fff', '0', '0', '0', '0', 'border', 'gold','0', '0', '0', '0', '0', '0',) }}>
            <Spade color={spadeColor} width={30} height={30} />
          </div>
          <div className={classNameClub} onClick={() => { swiperRef.current.swiper.slideTo(3), changeColor('#fff', '#fff', '#fff', 'gold', '#fff', '#fff', '0', '0', '0', '0', '0', '0', 'border', 'gold', '0', '0', '0', '0',) }}>
            <Club color={clubColor} width={30} height={30} />
          </div>
          <div className={classNameStar} onClick={() => { swiperRef.current.swiper.slideTo(4), changeColor('#fff', '#fff', '#fff', '#fff', 'gold', '#fff', '0', '0','0', '0', '0', '0', '0', '0', 'border', 'gold', '0', '0',) }}>
            <Star color={starColor} width={30} height={30} />
          </div>
          <div className={classNameMoon} onClick={() => { swiperRef.current.swiper.slideTo(5), changeColor('#fff', '#fff', '#fff', '#fff', '#fff', 'gold', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'border', 'gold') }}>
            <Moon color={moonColor} width={30} height={30} />
          </div>
        </div>
      </div>
      <Swiper
        ref={swiperRef}
        spaceBetween={-10}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        centeredSlides={false}
        effect='coverFlow'
        coverflowEffect={{ 'slideShadow': true, 'rotate': 30 }}
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
