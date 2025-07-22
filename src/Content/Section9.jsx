import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Radar from "../heplers/img/Section9/Radar.png";
import { faPhoneVolume, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function Section9(){
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
  return(
    <>
    <div className="4k:max-w-[75%] relative sm:max-w-[80%] max-w-[95%] mx-auto xm:mt-[5%]">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-[3%] items-stretch">
        <div className="w-full h-full block sm:hidden">
            <img src={Radar} alt="Radar" className="h-full object-contain"/>
          </div>
          <div className="col-span-1 self-center sm:pb-0 pb-10">
            <div className="font-medium text-lg lg:text-xl xl:text-[22px] 2xl:text-2xl 4k:text-4xl mb-2">Tại sao bạn nên chọn gói dịch vụ thai sản tại bệnh viện Phương Đông</div>
            <div className="flex flex-col gap-y-[2%]">
              <div className="font-medium 2xl:mt-3 mt-0.5 text-[14px] lg:text-[12px] text-gray-700 xl:text-sm 2xl:text-xl sm:mb-4 mb-1">Khám định kỳ với Bác sĩ sản khoa.</div>
              <div className="2xl:mt-3 mt-0.5 text-[14px] lg:text-[12px] text-gray-700 xl:text-sm 2xl:text-xl sm:mb-4 mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat risus </div>
              <div className="font-medium 2xl:mt-3 mt-0.5 text-[14px] lg:text-[12px] text-gray-700 xl:text-sm 2xl:text-xl sm:mb-4 mb-1">Chăm sóc thai kỳ cùng bác sĩ Sản khoa hàng đầuKhám định kỳ với Bác sĩ sản khoa.</div>
              <div className="2xl:mt-3 mt-0.5 text-[14px] lg:text-[12px] text-gray-700 xl:text-sm 2xl:text-xl sm:mb-4 mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat risus </div>
              <div className="font-medium 2xl:mt-3 mt-0.5 text-[14px] lg:text-[12px] text-gray-700 xl:text-sm 2xl:text-xl sm:mb-4 mb-1">Ekip đón bé chuyên môn cao, có khả năng xử lý nhiều ca khó</div>
              <div className="2xl:mt-3 mt-0.5 text-[14px] lg:text-[12px] text-gray-700 xl:text-sm 2xl:text-xl sm:mb-4 mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat risus </div>
              <div className="font-medium 2xl:mt-3 mt-0.5 text-[14px] lg:text-[12px] text-gray-700 xl:text-sm 2xl:text-xl sm:mb-4 mb-1">Chăm lo cho mẹ và bé chu đáo - Cả nhà nhàn tênh</div>
              <div className="2xl:mt-3 mt-0.5 text-[14px] lg:text-[12px] text-gray-700 xl:text-sm 2xl:text-xl sm:mb-4 mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat risus </div>
               <div className="mt-2 flex justify-center"><button onClick={handleShowModal} className={` p-1.5 px-3 sm:px-6 sm:py-2.5 rounded-full font-bold transition-all duration-300 ease-in-out 
                            text-[13px] cursor-pointer
                             lg:text-[16px] bg_button text-white shadow-md hover:bg-gradient-to-b hover:from-[var(--main-color-hover-from)] hover:to-[var(--main-color-hover-to)]`}
            ><FontAwesomeIcon icon={faPhoneVolume} /> Liên hệ ngay</button></div>
            </div>
          </div>

          <div className="w-full h-full sm:block hidden">
            <img src={Radar} alt="Radar" className="h-full object-contain"/>
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
    </div>
    </>
  )
}
export default Section9;