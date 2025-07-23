import banner from "../heplers/img/Banner.png"
import baby from "../heplers/img/Baby.jpg"
import Doctor from "../heplers/img/Doctor.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
const [delayedActiveIndex, setDelayedActiveIndex] = useState(null);
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setShowModal(false);
    }); // Thời gian trùng với animation duration
  };
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  useEffect(() => {
  const timer = setTimeout(() => {
    setDelayedActiveIndex(activeIndex);
  }, 200); // Delay 200ms khi hover mới được active

  return () => clearTimeout(timer);
}, [activeIndex]);
  return (
    <>
      <div className="  w-full aspect-[3/1] relative overflow-hidden mt-[66px]
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
          <div className="relative ml-auto 4k:max-w-[86%] sm:max-w-[90%] max-w-[95%] xl:py-5 z-[2] text-center pt-4 lg:pt-8 flex  !pr-0">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 sm:gap-4 md:gap-2 gap-0">

              <div className="md:col-span-3 lg:col-span-4 xl:col-span-2 px-0 sm:pr-6 lg:pr-8 text-left">
                <h1 className="font-medium sm:py-2.5 pr-0  text-lg lg:text-xl xl:text-[22px] 2xl:text-2xl 4k:text-4xl">Chương trình ưu đãi:</h1>
                <p className="text-gray-600 pr-2.5 opacity-60  text-justify 2xl:text-lg xl:text-lg lg:text-base text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, numquam rerum inventore maxime quos sint dolores nobis reprehenderit.
                  Quod debitis alias earum placeat blanditiis quia inventore iste, numquam magnam veniam.</p>
                {/* Custom Navigation Buttons */}
                <div className="flex col-span-1 gap-4 sm:mt-4 my-3 justify-center xl:justify-start z-50">
                  <button
                    ref={prevRef}
                    className="transition-all duration-100 hover:scale-110 w-8 h-8 rounded-full bg_button text-white shadow-md flex items-center justify-center"
                  >
                    <FaChevronLeft size={14} />
                  </button>

                  <button
                    ref={nextRef}
                    className="transition-all duration-100 hover:scale-110 w-8 h-8 rounded-full bg_button text-white shadow-md flex items-center justify-center"
                  >
                    <FaChevronRight size={14} />
                  </button>

                </div>
              </div>



              {/* Bên phải: Slider */}
              <div className="lg:col-span-4 col-span-4 relative  z-[2]">
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  onInit={(swiper) => {
                    // gắn navigation refs
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }}
                  speed={100} // ✅ tốc độ mượt như bản demo
                  
                  effect="slide"
                  watchOverflow={true}
                  grabCursor={true}
                  loop={true}
                  breakpoints={{

                    320: { slidesPerView: 1.5 },
                    425: { slidesPerView: 2.5 },
                    640: { slidesPerView: 3.2 },
                    1024: { slidesPerView: 3.2 },
                    1240: { slidesPerView: 3.2 }
                  }}
                  className="!px-0 !pb-6"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_,index) => (
                    <SwiperSlide key={index}  className="mx-1"  onMouseEnter={() => setActiveIndex(index)}>


                      <div
                        onMouseEnter={() => setActiveIndex(index)}
                        className='transition-all duration-300 h-[250px] sm:h-[450px] flex flex-col items-center rounded-br-4xl rounded-tl-4xl text-center bg-white shadow-md hover:shadow-xl border-0'>

                        <div className="w-full relative aspect-[3/4] overflow-hidden rounded-tl-4xl">
                          <img
                            src={baby}
                            alt={`Ưu đãi ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className={` ${index === delayedActiveIndex  ? "bg-main-gradient animate-gradient " : "bg-white"}
                       
                      p-3 rounded-t-3xl relative -mt-6 z-50  h-auto w-full rounded-br-4xl`}>
                          <h1 className={`${index === activeIndex
                            ? ' bg-white opacity-100 scale-100'
                            : 'opacity-70 bg-[linear-gradient(90deg,_#26BA5F_0%,_#26BA5F_0.01%,_#08B2FB_100%)]'
                            } font-sale transition-all duration-400 ease-in-out  text-[16px] sm:text-[22px] md:text-[22px] lg:text-xl xl:text-[32px] 2xl:text-[36px] text-sm sm:text-base
                                 `}>Ưu đãi 50%</h1>
                          <h3 className={` ${index === activeIndex ? "text-white opacity-100" : "opacity-70 "} text-[12px] transition-all duration-400 font-sans sm:text-[13px] md:text-[16px] lg:text-xl xl:text-xl 2xl:text-xl font-medium `}>Gói khám thai tổng quát</h3>
                          <p className={`${index === activeIndex ? "text-white opacity-100" : "opacity-70  text-gray-500"}  transition-all duration-400 text-center text-[12px] sm:text-[13px] md:text-[13px] xl:text-lg 2xl:text-xl mt-1 px-2`}>
                            Lorem ipsum dolor sit amet tarancebe consectetur adipiscing elit turpis.
                          </p>
                          <div onClick={handleShowModal} className=" m-0 sm:m-2
                                   ">
                            <button className={`w-full px-4 py-1.5 rounded-full font-medium transition-all duration-300 ease-in-out 
                            text-[12px]  sm:text-[13px] md:text-[13px] lg:text-[16px] cursor-pointer 
                              ${index === activeIndex
                                ? 'bg_button border  text-white border-[var(--main-color-to)]  shadow-md '
                                : 'border border-[var(--main-color-to)] text-[var(--main-color-to)] bg-white '
                              }
                              `}>Đăng ký nhận ưu đãi</button>
                          </div>
                        </div>
                      </div>

                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>


            </div> <div>
            </div>

            {/* // Thay thế phần modal hiện tại của bạn bằng code này: */}

          
          </div>
        </div>
  {showModal && (
              <div className="fixed inset-0 z-[3]  ease-in-out flex items-center justify-center">
                {/* Overlay nền */}
                <div
                  onClick={handleCloseModal}
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
                ></div>

                {/* Modal content */}
                <div className={`relative bg-white rounded-lg shadow-2xl w-11/12 max-w-md p-6 mx-4 transform transition-all
                 duration-300 ease-out scale-100 ${isClosing ? 'animate-[fadeOut_0.3s_ease-in]' : 'animate-[scaleIn_0.3s_ease-out]'}`}>
                  <button
                    onClick={handleCloseModal}
                    className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg transition-all duration-200 hover:scale-110"
                  >
                    ×
                  </button>

                  <h2 className="text-xl font-bold mb-4 text-gray-800">Modal Title</h2>
                  <p className="text-sm text-gray-700 mb-6">
                    Nội dung form đăng ký ở đây. Bạn có thể thêm form, input fields và các nội dung khác.
                  </p>

                  {/* Thêm nút action nếu cần */}
                  <div className="flex gap-3 justify-end">
                    <button
                      onClick={handleShowModal}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                    >
                      Hủy
                    </button>
                    <button
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                    >
                      Xác nhận
                    </button>
                  </div>
                </div>
              </div>
            )}

        {/* Section2 */}
        <div className="grid grid-cols-1 mb-5 lg:mb-0 xl:py-15 relative sm:grid-cols-2 pt-4 lg:pt-8 gap-5 4k:max-w-[75%] sm:max-w-[80%] max-w-[95%] mx-auto">


          <div className="w-full  h-full [&>img]:w-full z-[1] [&>img]:object-cover col-span-1 overflow-hidden [&>img]:rounded-4xl [&>img]:h-full">
            <img src={Doctor} alt="Doctors" className="" />
          </div>
          <div className="col-span-1 relative z-[1] self-center overflow-hidden">
            <h3 className="font-roboto sm:py-2.5 font-medium text-lg lg:text-xl xl:text-[22px] 2xl:text-2xl 4k:text-4xl ">Dịch vụ thai sản trọn gói</h3>
            <p className="xl:text-[16px] my-1.5 2xl:text-lg xl:text-lg lg:text-base text-[12px] opacity-60">Mang thai và sinh nở là một hành trình vô cùng kỳ diệu nhưng cũng lắm mệt mỏi, áp lực, thậm chí là nguy hiểm. Thấu hiểu nỗi niềm đó, dịch vụ thai sản trọn gói Phương Đông nhằm mang tới trải nghiệm nhẹ nhàng, an tâm cho người mẹ trong suốt thai kỳ, ngày vượt cạn đến sau sinh và sự chăm sóc toàn diện với em bé ngay từ giây phút đầu tiên chào đời.</p>
            <div className="flex items-center py-1 sm:p-1.5 gap-1">
              <div className="w-3 m-1 h-3 rounded-full bg-[linear-gradient(90deg,_#73D090_0%,_#C4EACE_0.01%,_#53CAFB_100%)] flex-none order-0 flex-grow-0"></div>
              <div className="font-medium 2xl:text-lg xl:text-lg lg:text-base text-[12px] ">Đội ngũ bác sĩ sản khoa giàu kinh nghiệm</div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center py-1 sm:p-1.5 gap-1 sm:ml-4">
              <div className="w-3 m-1 h-3 rounded-full bg-[linear-gradient(90deg,_#73D090_0%,_#C4EACE_0.01%,_#53CAFB_100%)] flex-none order-0 flex-grow-0"></div>
              <div className="font-medium 2xl:text-lg xl:text-lg lg:text-base text text-[12px]">Chăm sóc mẹ và bé toàn diện trước trong và sau sinh</div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center py-1 sm:p-1.5 gap-1">
              <div className="w-3 m-1 h-3 rounded-full bg-[linear-gradient(90deg,_#73D090_0%,_#C4EACE_0.01%,_#53CAFB_100%)] flex-none order-0 flex-grow-0"></div>
              <div className="font-medium 2xl:text-lg xl:text-lg lg:text-base text-[12px]">Không gian đẳng cấp với trang tihiết bị y tế hiện đại</div>
            </div>

            {/* Item 4 */}
            <div className="flex items-center py-1 sm:p-1.5 gap-1 sm:ml-4">
              <div className="w-3 m-1 h-3 rounded-full bg-[linear-gradient(90deg,_#73D090_0%,_#C4EACE_0.01%,_#53CAFB_100%)] flex-none order-0 flex-grow-0"></div>
              <div className="font-medium 2xl:text-lg xl:text-lg lg:text-base text-[12px]">Đi sinh sung sướng như đi nghỉ dưỡng</div>
            </div>

            {/* Item 5 */}
            <div className="flex items-center py-1 sm:p-1.5 gap-1 ">
              <div className="w-3 m-1 h-3 rounded-full bg-[linear-gradient(90deg,_#73D090_0%,_#C4EACE_0.01%,_#53CAFB_100%)] flex-none order-0 flex-grow-0"></div>
              <div className="font-medium 2xl:text-lg xl:text-lg lg:text-base text-[12px]">Con yêu chào đời với những điều kiện tốt nhất</div>
            </div>

            {/* Item 6 */}
            <div className="flex items-center py-1 sm:p-1.5 gap-1 sm:ml-4">
              <div className="w-3 m-1 h-3 rounded-full bg-[linear-gradient(90deg,_#73D090_0%,_#C4EACE_0.01%,_#53CAFB_100%)] flex-none order-0 flex-grow-0"></div>
              <div className="font-medium 2xl:text-lg xl:text-lg lg:text-base text-[12px]">Thanh toán đồng thời bảo hiểm Y tế, bảo hiểm bảo lãnh</div>
            </div>

            {/* Item 7 */}
            <div className="flex items-center py-1 sm:p-1.5 gap-1 ">
              <div className="w-3 m-1 h-3 rounded-full bg-[linear-gradient(90deg,_#73D090_0%,_#C4EACE_0.01%,_#53CAFB_100%)] flex-none order-0 flex-grow-0"></div>
              <div className="font-medium 2xl:text-lg xl:text-lg lg:text-base text-[12px]">Bảng giá các gói sinh tại Bệnh viện Phương Đông</div>
            </div>

            {/* Item 8 */}
            <div className="flex items-center py-1 sm:p-1.5 gap-1 sm:ml-4">
              <div className="w-3 m-1 h-3 rounded-full bg-[linear-gradient(90deg,_#73D090_0%,_#C4EACE_0.01%,_#53CAFB_100%)] flex-none order-0 flex-grow-0"></div>
              <div className="font-medium 2xl:text-lg xl:text-lg lg:text-base text-[12px]">Bảng giá các gói sinh tại Bệnh viện Phương Đông</div>
            </div>
            <div className="sm:px-1.5 sm:py-0.5 mt-3 sm:mt-5 flex justify-center sm:justify-start"><a href="tel:1900 1806" className={` px-3 py-1.5  sm:px-6 sm:py-2.5 rounded-full font-bold transition-all duration-300 ease-in-out 
                            text-[13px] 
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
// backround ?? không biết khắc phục hơn như hướng nào để đỡ lóa