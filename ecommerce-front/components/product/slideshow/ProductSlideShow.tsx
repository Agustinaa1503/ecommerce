"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperObjet } from "swiper";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";

import "./Slider.css";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const ProductSlideShow = ({ images, title, className }: Props) => {
  
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObjet>();


  return (
    <div className={className}>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        spaceBetween={5}
        navigation={true}
        autoplay={{
          delay: 2500,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2">

        {
            images.map(images => (
            <SwiperSlide key={images}>
                <Image
                src={`/products/${images}`}
                alt={title}
                width={1024}
                height={500}
                className="object-fill"
                />
            </SwiperSlide>
            ))
        }
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {
            images.map(images => (
            <SwiperSlide key={images}>
                <Image
                src={`/products/${images}`}
                alt={title}
                width={300}
                height={300}
                className="object-fill"
                />
            </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  );
};
