import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={4000}
      >
        <div>
          <Image
            fill
            width={3000}
            height={1200}
            priority
            src="https://links.papareact.com/gi1"
            alt="Banner photo 1"
          />
        </div>

        <div>
          <Image
            fill
            width={3000}
            height={1100}
            priority
            src="https://links.papareact.com/6ff"
            alt="Banner photo 2"
          />
        </div>

        <div>
          <Image
            fill
            width={3000}
            height={1200}
            priority
            src="https://links.papareact.com/7ma"
            alt="Banner photo 3"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
