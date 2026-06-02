import React from 'react';
import Masonry from '../../components/Masonry/Masonry.jsx';
import { useLanguage } from '../../context/LanguageContext';

function PhotoWallSection(){
  const { lang } = useLanguage();

  const photos = [
    {
      id: "1",
      img: '/assets/photos/01.jpg',
      height: 300, 
      url: 'http://www.iden.cn/home/showreel/event?id=40'
    },
    {
      id: "2",
      img: '/assets/photos/188.jpg',
      height: 250,
      url: 'https://mp.weixin.qq.com/s/hsL5RSYYdfb_SUd7PCSPpA'
    },
    {
      id: "3",
      isText: true,
      text: { zh: '部分线上活动', en: 'Some Online Events' },
      height: 150,
    },
    {
      id: "4",
      img: "/assets/photos/20.jpg",
      height: 350,
      url: 'http://www.iden.cn/home/showreel/event?id=42'
    },
    {
      id: "5",
      img: "/assets/photos/18.jpg",
      height: 350,
      url: 'http://www.iden.cn/home/showreel/event?id=46'
    },
    {
      id: "6",
      img: "/assets/photos/07.jpg",
      height: 350,
      url: 'https://mp.weixin.qq.com/s/KISprIL1f07v58RZKI01IA'
    },
    {
      id: "7",
      img: "/assets/photos/08.jpg",
      height: 200,
    },
    {
      id: "8",
      img: "/assets/photos/10.jpg",
      height: 300,
      url: 'https://mp.weixin.qq.com/s/DQQ7okT6_Mh5sdSPAAql3Q'
    },
    {
      id: "9",
      img: "/assets/photos/11.jpg",
      height: 250,
    },
    {
      id: "10",
      img: "/assets/photos/19.jpg",
      height: 400,
      position: 'top center',
    },
    {
      id: "14",
      isText: true,
      text: { zh: 'AI生成海报', en: 'AI Generated Posters' },
      height: 120,
    },
    {
      id: "16",
      img: "/assets/photos/图片1.jpg",
      height: 400,
    },
    {
      id: "17",
      img: "/assets/photos/图片2.png",
      height: 400,
    },
  ];

  return(
    <section id='photowall' className='section black-bg'>
      <h2>{lang === 'zh' ? '瞬间' : 'Moments'}</h2>
      <div className='photos-content'>
        <Masonry
          items={photos}
          lang={lang}
          ease="power3.out"
          duration={0.5}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>
    </section>
  )
}

export default PhotoWallSection;