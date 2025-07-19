import userSearch from "../heplers/img/search.png";
import Doctor1 from "../heplers/img/Doctor1.png";
import Doctor2 from "../heplers/img/Doctor2.png";
import Doctor3 from "../heplers/img/Doctor3.png";
import Doctor4 from "../heplers/img/Doctor4.png";
import FiveStar from "../heplers/img/5Star.png";
import Baby1 from "../heplers/img/Section7/Baby1.jpg";
import { useState } from "react";
function Section6() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      <div className="w-full relative mb-5  ">
        <div className="relative w-full h-full overflow-hidden">
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
          xl:w-[600px] xl:h-[600px]
          left-[-25%] top-[-10%]
          z-0
        "
          ></div>
          
          <div className="4k:max-w-[75%] sm:max-w-[80%] max-w-[95%] mx-auto ">
            {/* Hình tròn */}

            {/* Title + thanh tim kiem bac si*/}
            <div className="flex justify-around z-20 sm:py-5 py-2 mb-0 xl:my-15 mx-auto items-center">
              <div className="font-medium text-[13px] sm:text-[13px] md:text-[13px] lg:text-lg xl:text-4xl">Đội ngũ bác sĩ bệnh viện đa khoa Phương Đông</div>
              {/* Custom Navigation Buttons */}
              <div className="relative flex items-center gap-2 transition-all">
                {/* Nút Toggle */}
                <button
                  onClick={() => setShowSearch(!showSearch)}
                  className={`p-1 sm:px-6 sm:py-2.5 mb1:px-3 mb1:w-[100px] sm:w-auto rounded-full flex sm:gap-1 font-bold transition-all duration-300 ease-in-out items-center text-[10px] sm:text-[13px] md:text-[13px] lg:text-[16px] bg_button text-white shadow-md hover:bg-gradient-to-b hover:from-[var(--main-color-hover-from)] hover:to-[var(--main-color-hover-to)]`}
                >
                  <div className="aspect-[1] scale-75">
                    <img src={userSearch} alt="Doctor search" />
                  </div>
                  {showSearch ? "Đóng" : "Tìm bác sĩ"}
                </button>

                {/* Input tìm kiếm */}
                <input
                  type="text"
                  placeholder="Nhập tên bác sĩ..."
                  className={`absolute right-0 sm:top-full mb1:top-[80%] mt-2 transition-all duration-500 ease-in-out bg-white border border-gray-300 rounded-full px-4 py-2 text-sm mb1:w-40 shadow-md
      ${showSearch ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}
    `}
                />
              </div>

            </div>
            {/* Doi ngu bac si */}

            <div className=" items-center  sm:pt-[5%] pt-[15%] md:mt-0
         md:gap-y-[25%] xl:gap-y-[15%] mb1:gap-y-[10%]  px-2 mb4:px-2 
         grid md:grid-cols-2 grid-cols-1 gap-[3%] sm:mt-5 justify-center  bg-white">
              {/* Container chính */}
              <div className="col-span-1 grid grid-cols-2 gap-x-2 items-center justify-around">
                {/* Doctor1 */}

                <div className=" col-span-1 relative z-[1] items-center justify-around gap-2 lg:gap-6">
                  {/* Khung bác sĩ */}
                  {/* Nền xanh hình tròn, chỉ bo dưới */}
                  <div className="aspect-[1] flex justify-center p-5 bg-gradient-to-r from-green-600 to-blue-400 rounded-full pt-16 relative z-0">
                    <div className="absolute bottom-0 z-[2]  rounded-b-full overflow-hidden">
                      {/* Ảnh bác sĩ – nổi phần đầu lên */}
                      <img src={Doctor1} alt="Doctor" className="w-[85%] mx-auto aspect-[2/3]" />
                    </div>
                  </div>
                </div>
                {/* Thông tin */}
                <div className="flex w-full relative z-[1] justify-center ">
                  <div className="  col-span-1 mr-[5%]  text-left max-w-sm">
                    <h3 className="text-[15px] sm:text-[20px] md:text-[16px] lg:text-xl  4k:text-3xl font-medium">BS: NGUYỄN TRUNG CHÍNH</h3>
                    <p className="text-gray-600 mt-1 text-[12px] sm:text-[16px] md:text-sm xl:text-sm ">
                      PGS.TS. Bác sĩ Ung bướu - Giám đốc Bệnh viện Đa khoa Phương Đông</p>

                    <p className="lg:mt-3 font-medium text-[12px] sm:text-[16px] md:text-sm xl:text-sm 4k:text-[16px]">
                      Kinh nghiệm: 20 năm
                    </p>
                    <p className="lg:mt-1  flex gap-0.5 justify-start text-[12px] mb1:aspect-[10/1] sm:text-[16px] md:text-[13px] xl:text-sm ">
                      <span className="flex items-center">Xếp hạng:</span> <img src={FiveStar} alt="" className="sm:aspect-1 " />
                    </p>
                  </div>
                </div>
              </div>
              {/* ENd 1 bac si */}
              <div className="col-span-1 grid grid-cols-2 gap-x-2 items-center justify-around">
                {/* DOctor2 */}
                <div className=" col-span-1 relative z-[1] items-center justify-around gap-2 lg:gap-6">
                  {/* Khung bác sĩ */}
                  {/* Nền xanh hình tròn, chỉ bo dưới */}
                  <div className="aspect-[1] flex justify-center p-5 bg-gradient-to-r from-green-600 to-blue-400 rounded-full pt-16 relative z-0">
                    <div className="absolute bottom-0 z-[2]  rounded-b-full overflow-hidden">
                      {/* Ảnh bác sĩ – nổi phần đầu lên */}
                      <img src={Doctor2} alt="Doctor" className="w-[85%] mx-auto aspect-[2/3]" />
                    </div>
                  </div>
                </div>
                {/* Thông tin */}
                <div className="flex w-full relative z-[1] justify-center ">
                  <div className="  col-span-1 mr-[5%]  text-left max-w-sm">
                    <h3 className="text-[15px] sm:text-[20px] md:text-[16px] lg:text-xl  4k:text-3xl font-medium">BS: NGUYỄN HUY BẠO</h3>
                    <p className="text-gray-600 mt-1 text-[12px] sm:text-[16px] md:text-sm xl:text-sm ">
                      PGS.TS. Bác sĩ Ung bướu - Phó giám đốc Bệnh viện Đa khoa Phương Đông</p>

                    <p className="lg:mt-3 font-medium text-[12px] sm:text-[16px] md:text-sm xl:text-sm 4k:text-[16px]">
                      Kinh nghiệm: 20 năm
                    </p>
                    <p className="lg:mt-1  flex gap-0.5 justify-start text-[12px] mb1:aspect-[10/1] sm:text-[16px] md:text-[13px] xl:text-sm ">
                      <span className="flex items-center">Xếp hạng:</span> <img src={FiveStar} alt="" className="sm:aspect-1 " />
                    </p>
                  </div>
                </div></div>
              {/* ENd 1 bac si */}
              {/* Doctor3 */}
              <div className="col-span-1 grid grid-cols-2 gap-x-2 items-center justify-around">
                {/* Thông tin */}
                <div className="flex w-full relative z-[1] justify-center ">
                  <div className="  col-span-1 mr-[5%]  text-left max-w-sm">
                    <h3 className="text-[15px] sm:text-[20px] md:text-[16px] lg:text-xl  4k:text-3xl font-medium">BS: TRẦN KINH TRANG</h3>
                    <p className="text-gray-600 mt-1 text-[12px] sm:text-[16px] md:text-sm xl:text-sm ">
                      PGS.TS. Bác sĩ Ung bướu - Phó giám đốc Bệnh viện Đa khoa Phương Đông</p>

                    <p className="lg:mt-3 font-medium text-[12px] sm:text-[16px] md:text-sm xl:text-sm 4k:text-[16px]">
                      Kinh nghiệm: 20 năm
                    </p>
                    <p className="lg:mt-1  flex gap-0.5 justify-start text-[12px] mb1:aspect-[10/1] sm:text-[16px] md:text-[13px] xl:text-sm ">
                      <span className="flex items-center">Xếp hạng:</span> <img src={FiveStar} alt="" className="sm:aspect-1 " />
                    </p>
                  </div>
                </div>
                {/* Khung bác sĩ */}
                <div className=" col-span-1 relative z-[1] items-center justify-around gap-2 lg:gap-6">

                  {/* Nền xanh hình tròn, chỉ bo dưới */}
                  <div className="aspect-[1] flex justify-center p-5 bg-gradient-to-r from-green-600 to-blue-400 rounded-full pt-16 relative z-0">
                    <div className="absolute bottom-0 z-[2]  rounded-b-full overflow-hidden">
                      {/* Ảnh bác sĩ – nổi phần đầu lên */}
                      <img src={Doctor3} alt="Doctor" className="w-[85%] mx-auto aspect-[2/3]" />
                    </div>
                  </div>
                </div></div>
              {/* ENd 1 bac si */}
              {/* Doctor 4 */}
              <div className="col-span-1 grid grid-cols-2 gap-x-2 items-center justify-around">
                {/* Thông tin */}
                <div className="flex w-full relative z-[1] justify-center ">
                  <div className="  col-span-1 mr-[5%]  text-left max-w-sm">
                    <h3 className="text-[15px] sm:text-[20px] md:text-[16px] lg:text-xl  4k:text-3xl font-medium">DS: NGUYỄN THỊ KIM YẾN</h3>
                    <p className="text-gray-600 mt-1 text-[12px] sm:text-[16px] md:text-sm xl:text-sm ">
                      PGS.TS. Bác sĩ Ung bướu - Phó giám đốc Bệnh viện Đa khoa Phương Đông</p>

                    <p className="lg:mt-3 font-medium text-[12px] sm:text-[16px] md:text-sm xl:text-sm 4k:text-[16px]">
                      Kinh nghiệm: 20 năm
                    </p>
                    <p className="lg:mt-1  flex gap-0.5 justify-start text-[12px] mb1:aspect-[10/1] sm:text-[16px] md:text-[13px] xl:text-sm ">
                      <span className="flex items-center">Xếp hạng:</span> <img src={FiveStar} alt="" className="sm:aspect-1 " />
                    </p>
                  </div>
                </div>
                {/* Khung bác sĩ */}
                <div className=" col-span-1 relative z-[1] items-center justify-around gap-2 lg:gap-6">

                  {/* Nền xanh hình tròn, chỉ bo dưới */}
                  <div className="aspect-[1] flex justify-center p-5 bg-gradient-to-r from-green-600 to-blue-400 rounded-full pt-16 relative z-0">
                    <div className="absolute bottom-0 z-[2]  rounded-b-full overflow-hidden">
                      {/* Ảnh bác sĩ – nổi phần đầu lên */}
                      <img src={Doctor4} alt="Doctor" className="w-[85%] object-contain mx-auto aspect-[2/3]" />
                    </div>
                  </div>
                </div></div>
              {/* ENd 1 bac si */}
            </div>

          </div>
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
          xl:w-[600px] xl:h-[600px]
          right-[-20%] top-[45%]
          z-0
        "
        >
        </div>{
        /* Section tiep */}
        <div className="max-w-[78%] mx-auto my-50 ">
              
                <div className="grid  grid-cols-2">
                  <div className="relative z-[1] aspect-[4/3]">
                    <img src={Baby1} alt="Baby1" className="lg:rounded-[80px] rounded-4xl rounded-br-none lg:rounded-br-none"/>
                  </div>
                </div>
        
            </div>
        </div>
        
        
        
       

      </div> 
      
    </>
  )
}
export default Section6;
// fix ten bac si, thanh tim kiem fix width + tim kiem that, anh bac si