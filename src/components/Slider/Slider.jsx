
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import cssBtn from "../../components/UI/button/MyButton.module.css"
import cssMain from "../../style.module.css"

import "./slider.css"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { MyButton } from '../UI/button/MyButton';

// import "../../style.module.css";
import classNames from 'classnames';
import { Calculator } from '../CalculatorModal';
import { useState } from 'react';
export const Slider = ({swiperImages}) => {


  const [modalActive, setModalActive] = useState(false)
console.log(modalActive);

  let circleClasses = classNames({
    'circle': true,
    [cssMain.centering]: true
  });

  let titleClasses = classNames({
    'title': true,
    [cssMain.centering]: true
  });

  let subTitleClasses = classNames({
    'subTitle': true,
    [cssMain.centering]: true
  });

  let btnClasses = classNames({
    [cssBtn.btn]: true,
    [cssMain.centering]: true,
    "btnSlider": true
  });

  const openModal = (event) => {
event.preventDefault()
    setModalActive(true)
  }

    return (
      <div className="wrapper">

                <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={1}
        
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }} 
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
       
      >
        {swiperImages.map((swiperImage) => (
            <SwiperSlide key={swiperImage.image}>
             
                      <img className="img" src={swiperImage.image} alt="" />
                <span className={circleClasses}></span>
                <span className={titleClasses}>{swiperImage.title}</span>
                <span className={subTitleClasses}>{swiperImage.subtitle}</span>
           <MyButton to={`/${swiperImage.path}`} className={btnClasses} onClick={openModal}>{swiperImage.btn}</MyButton>
       <Calculator active={modalActive} setActive={setModalActive}/>
         
            </SwiperSlide>
        ))}
      </Swiper>
      </div>


    )
}

