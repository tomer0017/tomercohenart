import React,{useState,useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



    function Pic_carousel({data,setPicWidth,setAnimateType, setTimeout, setMockupPic, setMockupSofa, setPicName,setPicDescription}) {
      

      const [clickedIndex, setClickedIndex] = useState(1);
      const [showElement,setShowElement] = useState(true);

      useEffect(()=>{
        setTimeout(function() {
          setShowElement(false)
             }, 15000);
           },
       [])
      


      return (

        <>
     
 {/* <Swiper className='pic_carousle'
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
        const temp=item.width>=item.height?'120px':140*item.width/item.height+'px'    
        setPicWidth(temp)    
        setClickedIndex(index)
        setPicDescription(item.price[0]['size'])
        setMockupPic(item.src);
        setMockupSofa(item.sofa_url);
        setPicName(item.name);
        setAnimateType("in");
      
    }} />
        </SwiperSlide>)}
</Swiper>  */}


<div class="gallery-container">
        <div class="gallery">
{data.map((item,index) => 
  <img  className={clickedIndex === index ? 'clicked_gallery_carousel' : 'gallery_carousel'}   src={item.src} alt={item.title} onClickCapture={value => setAnimateType("out")} onClick={value => {
    const temp=item.width>=item.height?'120px':140*item.width/item.height+'px'    
    setPicWidth(temp)    
    setClickedIndex(index)
    setPicDescription(item.price[0]['size'])
    setMockupPic(item.src);
    setMockupSofa(item.sofa_url);
    setPicName(item.name);
    setAnimateType("in");
  
}} />


)}

</div>
</div>
{showElement?<img className='swipe_gif' src='https://cliply.co/wp-content/uploads/2021/07/392107620_SWIPE_RIGHT_400px.gif' />:''}
         
</>

);
    }
  
    export default Pic_carousel;
  