import Machine1 from "../heplers/img/Machine1.jpg"
import Machine2 from "../heplers/img/Machine2.jpg"
import Machine3 from "../heplers/img/Machine3.jpg"
import Machine4 from "../heplers/img/Machine4.jpg"
import Machine5 from "../heplers/img/Machine5.jpg"
import Machine6 from "../heplers/img/Machine6.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
function Section5() {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const image = [
    {
      src: Machine1
    },
    {
      src: Machine2
    },
    {
      src: Machine3
    },
    {
      src: Machine4
    },
    {
      src: Machine5
    },
    {
      src: Machine6
    },
    {
      src: Machine1
    },
    {
      src: Machine2
    },
    {
      src: Machine3
    },
    {
      src: Machine4
    },
    {
      src: Machine5
    },
    {
      src: Machine6
    },
  ];
  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);
  return (
    <>
      {/* Title + thanh dieu huong */}
      <div className="flex justify-around relative z-[2] sm:py-5 py-2 px-2 sm:px-0 items-center">
        <div className="font-medium text-[13px] sm:text-[13px] md:text-[13px] lg:text-lg xl:text-4xl">Hình ảnh về cơ sở vật chất, trang thiết bị</div>
        {/* Custom Navigation Buttons */}
        <div className="flex sm:gap-4 gap-2 sm:mt-4 my-3  z-1">
          <button ref={prevRef} className="sm:w-8 w-6 bg_button sm:h-8 h-6 rounded-full cursor-pointer text-white flex items-center justify-center shadow-md hover:scale-105 transition">
            <FaChevronLeft size={12} />
          </button>
          <button ref={nextRef} className="sm:w-8 w-6  bg_button sm:h-8 h-6 rounded-full cursor-pointer text-white flex items-center justify-center shadow-md hover:scale-105 transition">
            <FaChevronRight size={12} />
          </button>
        </div>
      </div>
      {/* Slider */}
      <div className="relative z-1 overflow-visible">
        <Swiper loop={true}
          modules={[Navigation, Pagination]}
          loopedSlides={7}
          watchSlidesProgress={true}
          watchOverflow={true}
          grabCursor={true}
          speed={600} // 👈 Thêm dòng này để tăng độ mượt
          effect="slide"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          pagination={{ clickable: true }}
          centeredSlides={false}
          spaceBetween={20}
          slidesPerView={3.2}

          breakpoints={{
            425: { slidesPerView: 3.8 },
            640: { slidesPerView: 4.2 },
            1024: { slidesPerView: 5.8 },
            1240: { slidesPerView: 5.8 }
          }}
          className="!px-0 !pb-0"
        >

          {image.map((img, index) => (
            <SwiperSlide key={index} onClick={() => {
                    setImageSrc(img.src);
                    setIsOpen(true);
                  }} >
              <div  
                className={`transition-all w-full duration-300  flex flex-col rounded-2xl rounded-bl-none items-center rounded-br-4xl rounded-tl-4xl text-center bg-white shadow-md hover:shadow-xl border-0`}
              >
                <div className="w-full  aspect-[3/4] overflow-hidden rounded-2xl rounded-bl-none">
                  <img 
                  
                    src={img.src}
                    alt={`Machine`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div >
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9999] flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={imageSrc}
            className="max-w-full max-h-full object-contain"
            alt="Full view"
          />
        </div>
      )}
    </>
  )
}
export default Section5;