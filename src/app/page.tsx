"use client";
import Header from "./components/header";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import data from './MOCK_DATA.json'
import 'swiper/css';
import { useState, useRef } from "react";


export default function Home() {
  const [slides] = useState(data)
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const handleSlideChange = () => {
    if (swiperInstance) {
      setIsFirstSlide(swiperInstance.isBeginning)
      setIsLastSlide(swiperInstance.isEnd)
    }
  }

  const goToNextSlide = () => {
    console.log(swiperInstance);
    if (swiperInstance) {
      swiperInstance.slideNext();

    }
  };
  const goToPrevSlide = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  return (
    <div className=" items-center justify-items-center min-h-screen p-5 pb-20 gap-16   font-[family-name:var(--font-geist-sans)]">
      <Header />

      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        navigation
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
      >
        {slides.map((slide, index) =>
          <SwiperSlide key={index}>
            <div className="mt-10 flex flex-col md:flex-row item-start w-full relative ">
              <div className="w-full mb-3 md:mb-0 md:w-1/2 h-[600px] min-h-[500px] overflow-hidden rounded-3xl">
                <Image src={slide.image} alt="" width="800" height="800" className="w-full h-full object-cover" />
              </div>
              <div className=" w-full mb-3 md:mb-0 md:w-1/2">
                {/* SHIPPING DETAIL */}
                <div className="m-8 mx-0 md:mx-8 mt-0 mb-6 p-3 rounded-2xl border-2 border-gray-300  bg-white shadow-sm">
                  <div className="rounded-xl p-4  bg-[#95d98547]">
                    <h2 className="text-primary font-bold text-xl">Shipping Details</h2>
                  </div>
                  <table className="border-collapse border-y-0 border-slate-300 w-full mt-2">
                    <tbody>
                      <tr className=" border-b-2  border-slate-300 ">
                        <td className="p-3 font-semibold text-slate-800">Order No.</td>
                        <td className="p-3 text-slate-700">{slide.order_number}</td>
                      </tr>
                      <tr className=" border-b-2  border-slate-300 ">
                        <td className="p-3 font-semibold text-slate-800">Packaging</td>
                        <td className="p-3 text-slate-700">{slide.packaging}</td>
                      </tr>
                      <tr className=" border-b-2  border-slate-300 ">
                        <td className="p-3 font-semibold text-slate-800">Weight</td>
                        <td className="p-3 text-slate-700">{slide.weight} Oz</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-800">Quantity</td>
                        <td className="p-3 text-slate-700">{slide.quantity}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="m-8 mx-0 md:mx-8 mt-0 p-3 rounded-2xl border-2 border-gray-300  bg-white shadow-sm">
                  <div className="rounded-xl p-4  bg-[#95d98547]">
                    <h2 className="text-primary font-bold text-xl">Customer Details</h2>
                  </div>
                  <table className="border-collapse border-y-0 border-slate-300 w-full mt-2">
                    <tbody>
                      <tr className=" border-b-2  border-slate-300 ">
                        <td className="p-3 font-semibold text-slate-800">Name</td>
                        <td className="p-3 text-slate-700">{slide.name}</td>
                      </tr>
                      <tr className=" border-b-2  border-slate-300 ">
                        <td className="p-3 font-semibold text-slate-800">Street</td>
                        <td className="p-3 text-slate-700">{slide.street}</td>
                      </tr>
                      <tr className=" border-b-2  border-slate-300 ">
                        <td className="p-3 font-semibold text-slate-800">City</td>
                        <td className="p-3 text-slate-700">{slide.city}</td>
                      </tr>
                      <tr className=" border-b-2  border-slate-300 ">
                        <td className="p-3 font-semibold text-slate-800">State</td>
                        <td className="p-3 text-slate-700">{slide.state}</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-800">Zip Code</td>
                        <td className="p-3 text-slate-700">{slide.zip_code}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}

        <div className="flex item-center justify-center p-2 px-4 gap-2 absolute bottom-0 right-10 z-10 border bg-white border-gray-300 rounded-3xl">

          <button disabled={isFirstSlide} className="button flex items-center justify-center bg-primary text-white disabled:bg-gray-600 disabled:cursor-not-allowed" onClick={goToPrevSlide}>
            <FaAnglesLeft />
            <span className="ml-2">Prev</span>
          </button>

          <button disabled={isLastSlide} className="button flex items-center justify-center bg-primary text-white disabled:bg-gray-600 disabled:cursor-not-allowed" onClick={goToNextSlide}>
            <span className="mr-2">Next</span>
            <FaAnglesRight />

          </button>

        </div>

      </Swiper>



    </div>
  );
}
