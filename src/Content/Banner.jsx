import banner from "../heplers/img/Banner.png"
import baby from "../heplers/img/Baby.jpg"
import Doctor from "../heplers/img/Doctor.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
function Banner() {
  const [click, setClick] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOpenModal = () => {
    setClick(!click);
  }
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  return (
    <>
      <div className="  w-full aspect-[3/1] relative overflow-hidden
          [&>img]:h-full  [&>img]:w-full
     [&>img]:object-cover
     ">
        <img
          src={banner}
          alt="Banner"

        />
      </div>

      <div className="relative bg-white  overflow-hidden">
        {/* Hình tròn */}
        <div
          className="
          absolute rounded-full border-[30px]
          xl:border-[100px] 
           sm:border-[40px]
           md:border-[60px]
           lg:border-[80px]
            border-[#C1E3DA] opacity-30
          w-[200px] h-[200px]
          sm:w-[250px] sm:h-[250px]
          md:w-[300px] md:h-[300px]
          lg:w-[450px] lg:h-[450px]
          xl:w-[672px] xl:h-[672px]
          left-[15%] xl:top-[-35%] 
          
           sm:top-[-5%]
           md:top-[-15%]
           lg:top-[-20%]
           top-[-5%]
          z-0
        "
        ></div>
        <div className="overflow-hidden">
          {/* Nội dung section1 */}
          <div className="relative mx-auto xl:py-5 z-10 text-center pt-4 lg:pt-8 flex ml-2 p-1 sm:p-6 md:p-6 lg:p-8 xl:p-10 2xl:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 sm:gap-4 md:gap-2 gap-0">

              <div className="md:col-span-3 lg:col-span-4 xl:col-span-2 px-0 sm:px-6 lg:px-8 text-left">
                <h1 className="font-bold sm:py-2.5 py-0 text-[20px] sm:text-[20px] md:text-[20px] lg:text-xl xl:text-4xl 2xl:text-4xl">Chương trình ưu đãi:</h1>
                <p className="text-gray-600  opacity-60 py-1.5 text-justify 2xl:text-lg xl:text-lg lg:text-base text sm:text-[10px] md:text-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, numquam rerum inventore maxime quos sint dolores nobis reprehenderit.
                  Quod debitis alias earum placeat blanditiis quia inventore iste, numquam magnam veniam.</p>
                {/* Custom Navigation Buttons */}
                <div className="flex col-span-1 gap-4 sm:mt-4 my-3 justify-center xl:justify-start z-50">
                  <button ref={prevRef} className="w-8 h-8 rounded-full bg-gradient-to-b from-orange-400 to-orange-600 text-white flex items-center justify-center shadow-md hover:scale-105 transition">
                    <FaChevronLeft size={12} />
                  </button>
                  <button ref={nextRef} className="w-8 h-8 rounded-full bg-gradient-to-b from-orange-400 to-orange-600 text-white flex items-center justify-center shadow-md hover:scale-105 transition">
                    <FaChevronRight size={12} />
                  </button>
                </div>
              </div>



              {/* Bên phải: Slider */}
              <div className="lg:col-span-4 col-span-4 relative  overflow-visible">
                <Swiper loop={true}
                  modules={[Navigation, Pagination]}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}

                  speed={700} // 👈 Thêm dòng này để tăng độ mượt
                  effect="slide"
                  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  onInit={(swiper) => {

                    if (prevRef.current && nextRef.current) {
                      swiper.params.navigation.prevEl = prevRef.current;
                      swiper.params.navigation.nextEl = nextRef.current;
                      swiper.navigation.init();
                      swiper.navigation.update();
                    }
                  }}
                  pagination={{ clickable: true }}
                  centeredSlides={false}
                  spaceBetween={20}
                  slidesPerView={2.2}
                  breakpoints={{
                    425: { slidesPerView: 2.5 },
                    640: { slidesPerView: 3.2 },
                    1024: { slidesPerView: 3.2 },
                    1240: { slidesPerView: 3.2 }
                  }}
                  className="!px-0 !pb-6"
                >

                  {[1, 2, 3, 4].map((_, index) => (
                    <SwiperSlide key={index} className="!w-[45vw] sm:!w-[50vw] md:!w-[33vw] lg:!w-[31vw] xl:!w-[18vw] 2xl:!w-[18vw]">


                      <div
                        onMouseEnter={() => setActiveIndex(index)}
                        className={`transition-all w-full duration-300 h-[250px] sm:h-[450px] flex flex-col items-center rounded-br-4xl rounded-tl-4xl text-center bg-white shadow-md hover:shadow-xl border-0`}
                      >

                        <div className="w-full relative aspect-[3/4] overflow-hidden rounded-tl-4xl">
                          <img
                            src={baby}
                            alt={`Ưu đãi ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className={`${index === activeIndex ? "bg-[linear-gradient(90deg,_#26BA5F_0%,_#26BA5F_0.01%,_#08B2FB_100%)]" : "bg-white"} 
                      transition-all duration-500 ease-in-out

                      p-3 rounded-t-3xl relative -mt-6 z-50  bg-amber-50 h-auto w-full rounded-br-4xl`}>
                          <h1 className={`${index === activeIndex
                            ? ' bg-white opacity-100 scale-100'
                            : 'opacity-70 scale-95 bg-[linear-gradient(90deg,_#26BA5F_0%,_#26BA5F_0.01%,_#08B2FB_100%)]'
                            } font-sale transition-all duration-500 ease-in-out  text-[16px] sm:text-[22px] md:text-[22px] lg:text-xl xl:text-[32px] 2xl:text-[36px] text-sm sm:text-base
                                 `}>Ưu đãi 50%</h1>
                          <h3 className={` ${index === activeIndex ? "text-transparent opacity-100 scale-100 bg-clip-text bg-white" : "opacity-70 scale-95"} text-[11px] transition-all duration-500 ease-in-out font-sans sm:text-[13px] md:text-[16px] lg:text-xl xl:text-xl 2xl:text-xl font-bold `}>Gói khám thai tổng quát</h3>
                          <p className={`${index === activeIndex ? "text-transparent opacity-100 scale-100 bg-clip-text bg-white" : "opacity-70 scale-95 text-gray-500"} transition-all duration-500 ease-in-out text-center text-[9px] sm:text-[13px] md:text-[13px] xl:text-lg 2xl:text-xl mt-1 px-2`}>
                            Lorem ipsum dolor sit amet tarancebe consectetur adipiscing elit turpis.
                          </p>
                          <div onClick={handleOpenModal} className=" m-0 sm:m-2
                                   ">
                            <button className={`w-full  sm:px-4 sm:py-1.5 rounded-full font-bold transition-all duration-300 ease-in-out 
                            text-[9px]  sm:text-[13px] md:text-[13px] lg:text-[16px] 
                              ${index === activeIndex
                                ? 'bg_button border  text-white border-[var(--main-color-to)]  shadow-md hover:bg-gradient-to-b hover:from-[var(--main-color-hover-from)] hover:to-[var(--main-color-hover-to)]'
                                : 'border border-[var(--main-color-to)] text-[var(--main-color-to)] bg-white hover:bg-orange-50'
                              }
                              `}>Đăng ký nhận ưu đãi</button>
                          </div>
                        </div>
                      </div>

                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* Custom Navigation Buttons */}

            </div> <div>
            </div>

            {click && (
              <>
                <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 relative">
                    <button
                      onClick={() => setClick(false)}
                      className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl"
                    >
                      &times;
                    </button>
                    <h2 className="text-lg font-bold mb-4">Modal Title</h2>
                    <p className="text-sm text-gray-700">Nội dung form dki ở đây</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>


        {/* Section2 */}
        <div className="grid grid-cols-1 mb-5 lg:mb-0 xl:py-15 relative sm:grid-cols-2 pt-4 mx-5 lg:pt-8 gap-5 sm:ml-6 md:ml-6 lg:ml-8 xl:ml-20 2xl:ml-20 ">

         
            <div className="w-full aspect-[4/3] [&>img]:w-full z-10 [&>img]:object-cover col-span-1 overflow-hidden [&>img]:rounded-4xl [&>img]:h-[100%]">
              <img src={Doctor} alt="Doctors" />
            </div>
            <div className="col-span-1 relative z-10 overflow-hidden">
              <h3 className="font-roboto font-bold py-2.5 text-[20px] sm:text-[20px] md:text-[20px] lg:text-2xl xl:text-4xl 2xl:text-4xl">Dịch vụ thai sản trọn gói</h3>
              <p className="xl:text-[16px] my-1.5 2xl:text-lg xl:text-lg lg:text-base text sm:text-[10px] md:text-[12px] opacity-60">Mang thai và sinh nở là một hành trình vô cùng kỳ diệu nhưng cũng lắm mệt mỏi, áp lực, thậm chí là nguy hiểm. Thấu hiểu nỗi niềm đó, dịch vụ thai sản trọn gói Phương Đông nhằm mang tới trải nghiệm nhẹ nhàng, an tâm cho người mẹ trong suốt thai kỳ, ngày vượt cạn đến sau sinh và sự chăm sóc toàn diện với em bé ngay từ giây phút đầu tiên chào đời.</p>
              <div className="flex items-center py-1 sm:p-1.5 gap-1">
                <div className="w-3 m-1 h-3 rounded-full bg-[linear-gradient(90deg,_#73D090_0%,_#C4EACE_0.01%,_#53CAFB_100%)] flex-none order-0 flex-grow-0"></div>
                <div className="font-bold 2xl:text-lg xl:text-lg lg:text-base text sm:text-[10px] md:text-[12px] ">Đội ngũ bác sĩ sản khoa giàu kinh nghiệm</div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center py-1 sm:p-1.5 gap-1 sm:ml-4">
                <div className="w-3 m-1 h-3 rounded-full bg-[linear-gradient(90deg,_#73D090_0%,_#C4EACE_0.01%,_#53CAFB_100%)] flex-none order-0 flex-grow-0"></div>
                <div className="font-bold 2xl:text-lg xl:text-lg lg:text-base text sm:text-[10px] md:text-[12px]">Chăm sóc mẹ và bé toàn diện trước trong và sau sinh</div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center py-1 sm:p-1.5 gap-1">
                <div className="w-3 m-1 h-3 rounded-full bg-[linear-gradient(90deg,_#73D090_0%,_#C4EACE_0.01%,_#53CAFB_100%)] flex-none order-0 flex-grow-0"></div>
                <div className="font-bold 2xl:text-lg xl:text-lg lg:text-base text sm:text-[10px] md:text-[12px]">Không gian đẳng cấp với trang tihiết bị y tế hiện đại</div>
              </div>

              {/* Item 4 */}
              <div className="flex items-center py-1 sm:p-1.5 gap-1 sm:ml-4">
                <div className="w-3 m-1 h-3 rounded-full bg-[linear-gradient(90deg,_#73D090_0%,_#C4EACE_0.01%,_#53CAFB_100%)] flex-none order-0 flex-grow-0"></div>
                <div className="font-bold 2xl:text-lg xl:text-lg lg:text-base text sm:text-[10px] md:text-[12px]">Đi sinh sung sướng như đi nghỉ dưỡng</div>
              </div>

              {/* Item 5 */}
              <div className="flex items-center py-1 sm:p-1.5 gap-1 ">
                <div className="w-3 m-1 h-3 rounded-full bg-[linear-gradient(90deg,_#73D090_0%,_#C4EACE_0.01%,_#53CAFB_100%)] flex-none order-0 flex-grow-0"></div>
                <div className="font-bold 2xl:text-lg xl:text-lg lg:text-base text sm:text-[10px] md:text-[12px]">Con yêu chào đời với những điều kiện tốt nhất</div>
              </div>

              {/* Item 6 */}
              <div className="flex items-center py-1 sm:p-1.5 gap-1 sm:ml-4">
                <div className="w-3 m-1 h-3 rounded-full bg-[linear-gradient(90deg,_#73D090_0%,_#C4EACE_0.01%,_#53CAFB_100%)] flex-none order-0 flex-grow-0"></div>
                <div className="font-bold 2xl:text-lg xl:text-lg lg:text-base text sm:text-[10px] md:text-[12px]">Thanh toán đồng thời bảo hiểm Y tế, bảo hiểm bảo lãnh</div>
              </div>

              {/* Item 7 */}
              <div className="flex items-center py-1 sm:p-1.5 gap-1 ">
                <div className="w-3 m-1 h-3 rounded-full bg-[linear-gradient(90deg,_#73D090_0%,_#C4EACE_0.01%,_#53CAFB_100%)] flex-none order-0 flex-grow-0"></div>
                <div className="font-bold 2xl:text-lg xl:text-lg lg:text-base text sm:text-[10px] md:text-[12px]">Bảng giá các gói sinh tại Bệnh viện Phương Đông</div>
              </div>

              {/* Item 8 */}
              <div className="flex items-center py-1 sm:p-1.5 gap-1 sm:ml-4">
                <div className="w-3 m-1 h-3 rounded-full bg-[linear-gradient(90deg,_#73D090_0%,_#C4EACE_0.01%,_#53CAFB_100%)] flex-none order-0 flex-grow-0"></div>
                <div className="font-bold 2xl:text-lg xl:text-lg lg:text-base text sm:text-[10px] md:text-[12px]">Bảng giá các gói sinh tại Bệnh viện Phương Đông</div>
              </div>
              <div className="px-1.5 py-0.5 mt-3 sm:mt-5 flex justify-center sm:justify-start"><a href="tel:1900 1806" className={` p-1.5  sm:px-6 sm:py-2.5 rounded-full font-bold transition-all duration-300 ease-in-out 
                            text-[10px] 
                             sm:text-[13px] md:text-[13px] lg:text-[16px] bg_button text-white shadow-md hover:bg-gradient-to-b hover:from-[var(--main-color-hover-from)] hover:to-[var(--main-color-hover-to)]`}
              >Liên hệ</a></div>
          </div> {/* Hình tròn */}
          <div
            className="
          absolute rounded-full border-[30px]
          xl:border-[100px] 
           sm:border-[40px]
           md:border-[60px]
           lg:border-[80px]
            border-[#C1E3DA] opacity-30
          w-[200px] h-[200px]
          sm:w-[250px] sm:h-[250px]
          md:w-[300px] md:h-[300px]
          lg:w-[450px] lg:h-[450px]
          xl:w-[672px] xl:h-[672px]
          -left-[20%] xl:bottom-[-45%] 
           sm:bottom-[-15%]
           md:bottom-[-20%]
           lg:bottom-[-30%]
           bottom-[-10%]
          z-0
        "
          ></div>
        </div>
      </div>
    </>
  )
}
export default Banner;
// section 3 , liên hệ, 