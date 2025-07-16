import banner from "../heplers/img/Banner.png"
import baby from "../heplers/img/Baby.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
function Banner() {
  return (
    <>
      <div className=" mt-17 w-full h-[170px] sm:h-[300px] md:h-[300px] lg:h-[300px] 
     xl:h-[450px] 2xl:h-[650px] relative overflow-hidden
     [&>img]:absolute  [&>img]:top-0  [&>img]:left-1/2   [&>img]:-translate-x-1/2  [&>img]:h-full  [&>img]:min-w-full
     [&>img]:object-cover
     ">
        <img
          src={banner}
          alt="Banner"

        />
      </div>

      <div className="relative bg-white min-h-[800px] overflow-hidden">
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
          left-[15%] xl:top-[-45%] 
           sm:top-[-15%]
           md:top-[-20%]
           lg:top-[-30%]
           top-[-10%]
          z-0
        "
        ></div>
        {/* Nội dung */}
        <div className="relative mx-auto  z-10 text-center pt-4 lg:pt-8 flex ml-2 pl-5 sm:pl-6 md:pl-6 lg:pl-8 xl:pl-10 2xl:pl-10">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">

            <div className="md:col-span-3 lg:col-span-4 xl:col-span-2 px-4 sm:px-6 lg:px-8 text-left">
              <h1 className="font-bold text-[20px] sm:text-[20px] md:text-[20px] lg:text-xl xl:text-2xl 2xl:text-2xl">Chương trình ưu đãi:</h1>
              <p className="text-gray-600 2xl:text-lg xl:text-lg lg:text-base text sm:text-[10px] md:text-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, numquam rerum inventore maxime quos sint dolores nobis reprehenderit.
                Quod debitis alias earum placeat blanditiis quia inventore iste, numquam magnam veniam.</p>
            </div>
           

            {/* Bên phải: Slider */}
            <div className="lg:col-span-4 col-span-4 ">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  425:{ slidesPerView: 2 },
                  640: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                  1440: {slidesPerView: 3}
                }}
                className="!px-2"
              >
                {[1, 2, 3, 4].map((_, index) => (
                  <SwiperSlide key={index}>
                    {({ isActive }) => (
                      <div className={`transition-all duration-300 flex flex-col items-center rounded-tl-[40px] text-center rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl border-2 ${isActive ? "border-orange-500 scale-105" : "border-transparent"}`}>
                        <div className="w-full relative h-auto aspect-[3/4] overflow-hidden rounded-tl-[40px]">
                          <img
                            src={baby}
                            alt={`Ưu đãi ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-3 absolute top-[60%] bg-amber-50">
                          <h1 className="font-semibold text-sm sm:text-base text-orange-600">Ưu đãi 50%</h1>
                          <h3 className="text-xs sm:text-sm font-medium">Gói khám thai tổng quát</h3>
                          <p className="text-xs text-gray-500 mt-1 px-2">
                            Lorem ipsum dolor sit amet tarancebe consectetur adipiscing elit turpis.
                          </p>
                        </div>
                      </div>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            </div> <div>
            {/* responsive grid dang bi sai, sua lai menu, slice dung thu vien */}
          </div>
        </div>
      </div>
    </>
  )
}
export default Banner;