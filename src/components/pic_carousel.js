import React,{useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



    function Pic_carousel({data,setAnimateType, setTimeout, setMockupPic, setMockupSofa, setPicName,setPicDescription}) {
      const [clickedIndex, setClickedIndex] = useState(1);
      
      return (
        <>
     
 <Swiper className='pic_carousle'
 breakpoints={{
  300: {
    // width: 576,
    slidesPerView: 3,
  },
  576: {
    // width: 576,
    slidesPerView: 5,
  },
  768: {
    // width: 576,
    slidesPerView: 6,
  },
  1250: {
    // width: 768,
    slidesPerView: 9,
  },
}}
  slidesPerView={3} 
  navigation={true}
  pagination={{ clickable: true }}


scrollbar={{
  draggable: true
}} onSwiper={swiper => console.log(swiper)} onSlideChange={() => console.log('slide change')}>
        
      {data.map((item,index) => <SwiperSlide>
          <img  className={clickedIndex === index ? 'clicked_pic_carousel' : 'pic_carousel'}   src={item.src} alt={item.title} onClickCapture={value => setAnimateType("out")} onClick={value => {
            
        setClickedIndex(index)
        setPicDescription(item.price[0]['size'])
        setMockupPic(item.src);
        setMockupSofa(item.sofa_url);
        setPicName(item.name);
        setAnimateType("in");
      
    }} />
        </SwiperSlide>)}
</Swiper> 
         
</>

);
    }
  
    export default Pic_carousel;
  