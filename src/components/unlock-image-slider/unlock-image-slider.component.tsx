import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

import { EffectFade, Autoplay } from "swiper/modules";
import { SliderContainer } from "./unlock-image-slider.styles";

const ImageSlider = () => {
  const imageUrls = [
    "/images/automation/automation-1.jpg",
    "/images/automation/automation-2.jpg",
    "/images/automation/automation-3.jpg",
  ];

  return (
    <SliderContainer>
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect='fade'
        autoplay={{ delay: 500 }}
        loop={true}
        speed={1500}
        className='mySwiper'
      >
        {imageUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                width: "100%",
                height: "100vh",
                backgroundImage: `url(${url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default ImageSlider;
