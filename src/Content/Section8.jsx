import { useState } from "react";
import Modal from "react-modal";
import DoctorThumbnail from "../heplers/img/Section8/DoctorVideo.jpg"; // ảnh preview
import LogoYoutube from "../heplers/img/Section8/LogoYoutube.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faBars } from "@fortawesome/free-solid-svg-icons";
Modal.setAppElement("#root");
function Section8() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
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
    }, 0); // Thời gian trùng với animation duration
  };
  const videoUrl = "https://www.youtube.com/embed/a_goYp8jSa8"; // hoặc "https://youtube.com/shorts/..."
  const isShorts = videoUrl.includes("shorts") || videoUrl.includes("embed/") && videoUrl.includes("si=");
  return (
    <>
      <div className="4k:max-w-[75%] relative sm:max-w-[80%] max-w-[95%] mx-auto mt-[15%] mb4:mt-[5%] xl:mt-0 ">
        <div
          className="
          absolute rounded-full border-[30px]
          xl:border-[100px] 
           sm:border-[40px]
           md:border-[60px]
           lg:border-[80px]
            border-[#C1E3DA] opacity-30
          w-[300px] h-[300px]
         
          sm:w-[500px] sm:h-[500px]
          lg:w-[600px] lg:h-[600px]
          xl:w-[800px] xl:h-[800px]
           lg:translate-x-4/9 md:translate-x-4/5 sm:translate-x-2/3 mb1:translate-x-1/3
          z-0
        "
        >

        </div>
        <div
  className="invisible relative xl:h-[200px] lg:h-[100px] md:h-[50px] sm:h-[25px] mb1:h-[20px]"
/>
        <div className="relative z-[1] flex flex-col lg:grid lg:grid-cols-2 items-center justify-center gap-6">
          {/* Ảnh với icon play */}
          <div
            className="relative cursor-pointer lg:col-span-1 mt-[5%] xl:mt-0  w-full rounded-2xl overflow-hidden shadow-md"
            onClick={() => setModalIsOpen(true)}
          >
            <img src={DoctorThumbnail} alt="Doctor Video" className="w-full h-auto" />
            <div className="absolute inset-0 flex justify-center items-center">
              <img src={LogoYoutube} alt="Play" className="aspect-auto" />
            </div>
          </div>

          {/* Text bên cạnh */}
          <div className="relative z-[1]">
            <h2 className="font-medium text-lg lg:text-xl xl:text-[22px] 2xl:text-2xl 4k:text-4xl mb-2">
              Giải pháp an toàn hãy lựa chọn dịch vụ thai sản trọn gói tại bệnh viện Phương Đông
            </h2>
            <p className="2xl:mt-3 mt-0.5 text-[14px] 2xl:text-xl lg:text-[12px] text-gray-700 xl:text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut risus luctus donec  Lorem malesuada scelerisque euismod ullamcorper ac lacus aliquet quisque. Pulvinar aenean fusce pulvinar elementum odio dolor lorem aenean quis. Ridiculus mattis.
            </p>
            <div className="mt-2 flex justify-center"><button onClick={handleShowModal} className={` p-1.5  sm:px-6 sm:py-2.5 rounded-full font-bold transition-all duration-300 ease-in-out 
                            text-[13px] cursor-pointer px-3
                             lg:text-[16px] bg_button text-white shadow-md hover:bg-gradient-to-b hover:from-[var(--main-color-hover-from)] hover:to-[var(--main-color-hover-to)]`}
            ><FontAwesomeIcon icon={faPhoneVolume} /> Liên hệ ngay</button></div>
          </div>

          {/* Modal hiển thị video */}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)} // <-- bắt sự kiện click ngoài
            className="relative w-full max-w-3xl  rounded-lg shadow-lg outline-none"
            overlayClassName="fixed inset-0 bg-black/40 backdrop-blur-sm bg-opacity-60 z-[3] flex justify-center items-center"
          >
            <div className="relative w-full">
              <button
                onClick={() => setModalIsOpen(false)}
                className="absolute top-[-17px] right-[-8px] text-white text-2xl z-10 cursor-pointer"
              >
                ✕
              </button>
              <div className={`relative w-full ${isShorts ? "aspect-[9/16]" : "aspect-[16/9]"}`}>
                <iframe
                  className="w-full h-full rounded-lg"
                  src={videoUrl}
                  title="YouTube video"

                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Modal>
        </div>
        <div
  className="invisible relative xl:h-[200px] lg:h-[100px] md:h-[50px] sm:h-[25px] mb1:h-[20px]"
/>
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
                  className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg transition-all duration-200 hover:scale-105"
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
export default Section8;
// suar slide cho muot hon nhay hon, khong choi mat, button dep hon,