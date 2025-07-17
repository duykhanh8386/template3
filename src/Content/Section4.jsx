import { useState } from "react";
import Mother from "../heplers/img/Mother.jpg"
import Ellispe from "../heplers/img/Ellipse1126.png"
function Section4(){
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = ()=>{
    setShowModal(!showModal)
  }
  return(
    <>
    <div className="max-w-7xl relative grid grid-cols-1 items-center self-center sm:grid-cols-10">
     {/* do chua biet config custom man hinh 4k nen chua responsive dep cho 4k duoc */}
      <div className="aspect-[9/5] relative col-span-1 sm:col-span-6 [&>img]:rounded-tr-[70px] mt-[5%] z-10 w-full h-auto [&>img]:object-cover [&>img]:w-full [&>img]:h-full ">
        <img src={Mother} alt="Mother and baby" />
         {/* Text box chỉ absolute từ lg trở lên */}
     <div className="hidden lg:block lg z-20 absolute bg-white xl:right-[-80%] lg:right-[-50%] 
     lg:top-[40%] xl:top-[25%] lg:mt-0 lg:col-start-auto shadow-xl 
      drop-shadow-2xl rounded-3xl rounded-bl-none sm:p-5 p-3 sm:max-w-md lg:max-w-sm xl:max-w-2xl">
        <div className="font-bold px-1 sm:px-2 py-3 text-[13px] sm:text-[13px] md:text-[13px] lg:text-lg xl:text-4xl ">Bệnh viên Phương Đông tiên phong
            trong dịch vụ thai sản trọn gói</div>
        <div className="opacity-60 px-1 text-[9px] sm:text-xs md:text-xs lg:text-sm xl:text-base sm:px-2 pb-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est earum dicta ut repellendus omnis. Earum exercitationem nam eveniet, nesciunt velit temporibus nobis explicabo, porro maiores iure consequuntur, quod modi non.
        </div>
        <div className="px-2 pb-3 sm:mt-2 flex justify-center sm:justify-start"><button onClick={handleShowModal} className={` p-1.5  sm:px-6 sm:py-2.5 rounded-full font-bold transition-all duration-300 ease-in-out 
                            text-[10px] 
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
      <div className="block lg:hidden z-20   bg-white lg:mt-0  sm:col-span-4 shadow-xl 
      drop-shadow-2xl rounded-3xl rounded-bl-none sm:p-5 p-3 sm:max-w-md ">
        <div className="font-bold px-1 sm:px-2 py-3 text-[13px] sm:text-[13px] md:text-[13px] lg:text-lg xl:text-4xl ">Bệnh viên Phương Đông tiên phong
            trong dịch vụ thai sản trọn gói</div>
        <div className="opacity-60 px-1 text-[9px] sm:text-xs md:text-xs lg:text-sm xl:text-base sm:px-2 pb-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est earum dicta ut repellendus omnis. Earum exercitationem nam eveniet, nesciunt velit temporibus nobis explicabo, porro maiores iure consequuntur, quod modi non.
        </div>
        <div className="px-2 pb-3 sm:mt-2 flex justify-center sm:justify-start"><button onClick={handleShowModal} className={` p-1.5  sm:px-6 sm:py-2.5 rounded-full font-bold transition-all duration-300 ease-in-out 
                            text-[10px] 
                             sm:text-[13px] md:text-[13px] lg:text-[16px] bg_button text-white shadow-md hover:bg-gradient-to-b hover:from-[var(--main-color-hover-from)] hover:to-[var(--main-color-hover-to)]`}
              >Đăng ký tư vấn</button></div>
              
      </div>
      
    </div>
    {showModal && (
              <>
                <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 relative">
                    <button
                      onClick={() => setShowModal(false)}
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

    </>
  )
}
export default Section4;