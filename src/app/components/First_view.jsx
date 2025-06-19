"use client";

import React from "react";
import styles from "./First_view.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const images = ["/pc_photo1.jpeg", "/pc_photo2.jpeg", "/pc_photo3.jpeg"];

export default function First_view() {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFade, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      effect="fade"
      speed={1000}
      // navigation
      // pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop
      className={styles.kvSwiper}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img
            src={src}
            alt={`KV ${index + 1}`}
            className="w-full h-auto object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
