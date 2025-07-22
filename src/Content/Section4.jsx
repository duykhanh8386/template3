import { useState } from "react";
import Mother from "../heplers/img/Mother.jpg"
function Section4() {
  const [showModal, setShowModal] = useState(false);
const [isClosing, setIsClosing] = useState(false);

const handleShowModal = () => {
  setShowModal(true);
};

const handleCloseModal = () => {
  setIsClosing(true);
  setTimeout(() => {
    setIsClosing(false);
    setShowModal(false);
  }, ); // Thời gian trùng với animation duration
};
  return (
    <>
      {/* Section 4 */}
      <div className="max-w-7xl 4k:max-w-[80%] py-[5%] relative grid grid-cols-1 mb-[5%] items-center self-center sm:grid-cols-10">
        {/* do chua biet config custom man hinh 4k nen chua responsive dep cho 4k duoc */}
        <div className="aspect-[9/5] flex items-center relative col-span-1 sm:col-span-6 [&>img]:rounded-tr-[70px] mt-[5%] z-[1] w-full h-auto [&>img]:object-cover [&>img]:w-full [&>img]:h-full ">
          <img src={Mother} alt="Mother and baby" />
          {/* Text box chỉ absolute từ lg trở lên */}
          <div className="hidden lg:block lg z-[2] absolute bg-white xl:right-[-80%] lg:right-[-50%] 
            lg:mt-0 lg:col-start-auto shadow-xl 4k:right-[-50%]
              drop-shadow-2xl rounded-3xl rounded-bl-none sm:p-5 p-3 sm:max-w-md lg:max-w-sm xl:max-w-2xl">
            <div className=" px-1 sm:px-2 py-3 font-medium text-lg lg:text-xl xl:text-[22px] 2xl:text-2xl 4k:text-4xl">Bệnh viên Phương Đông tiên phong
              trong dịch vụ thai sản trọn gói</div>
            <div className="opacity-60 px-1 text-[9px] sm:text-xs md:text-xs lg:text-sm xl:text-base sm:px-2 pb-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est earum dicta ut repellendus omnis. Earum exercitationem nam eveniet, nesciunt velit temporibus nobis explicabo, porro maiores iure consequuntur, quod modi non.
            </div>
            <div className="px-2 pb-3 sm:mt-2 flex justify-center sm:justify-start"><button onClick={handleShowModal} className={` p-1.5  sm:px-6 sm:py-2.5 rounded-full font-bold transition-all duration-300 ease-in-out 
                            text-[10px]  cursor-pointer
                             sm:text-[13px] md:text-[13px] lg:text-[16px] bg_button text-white shadow-md hover:bg-gradient-to-b hover:from-[var(--main-color-hover-from)] hover:to-[var(--main-color-hover-to)]`}
            >Đăng ký tư vấn</button></div>

          </div>
        </div>
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
          xl:w-[600px] xl:h-[600px]
          left-[25%] xl:bottom-[-45%] 
           sm:bottom-[-15%]
           md:bottom-[-20%]
           lg:bottom-[-50%]
           bottom-[-20%]
          z-0
        "
        ></div>
        {/* text box tu lg do xuong dung grid */}
        <div className="block lg:hidden z-[1]   bg-white lg:mt-0  sm:col-span-4 shadow-xl  
      drop-shadow-2xl rounded-3xl rounded-bl-none sm:p-5 p-3 sm:max-w-md ">
          <div className="font-medium px-1 sm:px-2 py-3 text-lg lg:text-xl xl:text-[22px] 2xl:text-2xl 4k:text-4xl ">Bệnh viên Phương Đông tiên phong
            trong dịch vụ thai sản trọn gói</div>
          <div className="opacity-60 px-1 text-[12px] sm:text-xs md:text-xs lg:text-sm xl:text-base sm:px-2 pb-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est earum dicta ut repellendus omnis. Earum exercitationem nam eveniet, nesciunt velit temporibus nobis explicabo, porro maiores iure consequuntur, quod modi non.
          </div>
          <div className="px-2 pb-3 sm:mt-2 flex justify-center sm:justify-start"><button onClick={handleShowModal} className={` p-1.5 px-3  sm:px-6 sm:py-2.5 rounded-full font-bold transition-all duration-300 ease-in-out 
                            text-[13px] cursor-pointer
                             sm:text-[13px] md:text-[13px] lg:text-[16px] bg_button text-white shadow-md hover:bg-gradient-to-b hover:from-[var(--main-color-hover-from)] hover:to-[var(--main-color-hover-to)]`}
          >Đăng ký tư vấn</button></div>

        </div>

      </div>
      {showModal && (
        <>
          <div className="fixed inset-0 z-[99999]  ease-in-out flex items-center justify-center">
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
                      onClick={handleCloseModal}
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
        </>
      )}



    </>
  )
}
export default Section4;