
import Logo from "../heplers/img/Logo.png"
import Ellipse from "../heplers/img/Ellipse1126.png";
import Global from "../heplers/img/Global.png";
import Phone from "../heplers/img/Phone.png";

function Section3() {
 

  return (
    <>
      <div className="bg-[linear-gradient(90deg,_#73D090_0%,_#C4EACE_0.01%,_#53CAFB_100%)] relative overflow-hidden z-0 py-13 ">

        <div className=" w-full ">
          <div className="bg-white 4k:max-w-[75%] sm:max-w-[80%] max-w-[95%] mx-auto shadow-lg relative rounded-b-2xl sm:pt-5 z-10">

            {/* Tiêu đề */}
            <div className="grid grid-cols-8 gap-1 items-center sm:px-6 px-2 sm:py-4 py-2 pb-0 sm:pb-4 text-center relative">
              <h2 className="sm:block hidden text-[15px] col-span-8  xl:text-lg 2xl:text-xl font-medium mb-1">
                  Bảng giá các dịch vụ khám và chữa bệnh:
                </h2>
              {/* Logo bên trái */}
              <div className="sm:self-end col-start-4 col-end-6 place-items-center sm:col-span-2 lg:col-span-1">
                <div className="aspect-[4/1]">
                  <img src={Logo} alt="Logo" className="w-full h-full object-contain" />
                </div>
              </div>
              {/* trong 1 block de can space */}
             
              {/* Tiêu đề ở giữa */}
               
              <div className="sm:col-start-3 sm:col-end-7  col-span-8 place-items-center">
                <h2 className="block sm:hidden text-[15px] col-span-8  xl:text-lg 2xl:text-xl font-medium mb-1">
                  Bảng giá các dịch vụ khám và chữa bệnh:
                </h2>
                <p className="text-gray-500 text-[12px]   xl:text-lg 2xl:text-xl">
                  Ghi chú: Lorem ipsum dolor sit amet, consectetur adipiscing elit lis iaculis ac felis
                </p>
              </div>

              {/* Bên phải để trống cho cân đối */}
              <div className="hidden sm:block" />
            </div>

            {/* Bảng */}
            <div  className=" sm:m-5 sm:mt-5 mt-1 ">
              {/* Table Head */}
              <table className="sm:table-auto table-fixed text-center text-[9px] sm:text-[13px] md:text-[13px] xl:text-[16px] 2xl:text-[16px] w-full border-separate border-spacing-0">
                <thead className="sticky overflow-y-auto top-0 z-10 rounded-t-xl">
                  <tr className="bg-gradient-to-r from-green-600 to-blue-400 text-white text-center">
                    <th className="p-1 sm:p-2.5 border border-[#EBEBEB] w-[10%]  sm:w-[7%] whitespace-nowrap rounded-tl-xl" rowSpan="2">STT</th>
                    <th className="p-1 sm:p-3 border border-[#EBEBEB] sm:w-[45.15%] w-[35%] whitespace-nowrap" rowSpan="2">Tên dịch vụ</th>
                    <th className="p-1 sm:p-3.5 border border-[#EBEBEB]  text-center" colSpan="2">
                      GIÁ DỊCH VỤ DÀNH CHO NHỮNG KHÁCH HÀNG CÓ QUỐC TỊCH
                    </th>
                    <th className="p-1.5 w-0.5 border border-[#EBEBEB] rounded-tr-xl" rowSpan={2}></th>
                  </tr>
                  <tr className="bg-gradient-to-r from-green-600 to-blue-400 text-white text-center">
                    <th className="p-1 sm:p-3 border border-[#EBEBEB] sm:w-[24%]  whitespace-nowrap">Việt Nam</th>
                    <th className="p-1 sm:p-3 border border-[#EBEBEB] sm:w-[24%] whitespace-nowrap">Nước ngoài</th>
                    
                  </tr>
                  
                </thead>
              </table>
              {/* Table Body with Scroll */}
              <div  className="scrollbar-custom overflow-y-auto max-h-[40vh] sm:max-h-[60vh]">
                <table className="sm:table-auto table-fixed text-center text-[12px] sm:text-[13px] md:text-[13px] xl:text-lg 2xl:text-xl w-full border-separate border-spacing-0">
                  <tbody>
                    {[
                      ["1", "Chăm sóc điều dưỡng tại nhà - Bệnh nhân nặng", "200,000/giờ", "400,000/giờ"],
                      ["2", "Cắt chỉ", "300,000/lần", "300,000/lần"],
                      ["3", "Phương tiện bảo hộ lấy máu", "300,000/lần", "300,000/lần"],
                      ["4", "Tắm bé tại nhà", "300,000/lần", "300,000/lần"],
                      ["5", "Dẫn lưu nước tiểu bàng quang", "300,000/lần", "300,000/lần"],
                      ["6", "Điều dưỡng tại nhà - Bệnh nhân nặng", "200,000/giờ", "400,000/giờ"],
                      ["7", "Điều dưỡng tại nhà - Bệnh nhân nặng", "200,000/giờ", "400,000/giờ"],
                      ["8", "Xét nghiệm tại nhà", "Theo giá BVĐK", "-"],
                      ["9", "Điều dưỡng tại nhà - Bệnh nhân nặng", "400,000/giờ", "400,000/giờ"],
                       ["10", "Chăm sóc điều dưỡng tại nhà - Bệnh nhân nặng", "200,000/giờ", "400,000/giờ"],
                      ["11", "Cắt chỉ", "300,000/lần", "300,000/lần"],
                      ["12", "Phương tiện bảo hộ lấy máu", "300,000/lần", "300,000/lần"],
                      ["12", "Tắm bé tại nhà", "300,000/lần", "300,000/lần"],
                      ["13", "Dẫn lưu nước tiểu bàng quang", "300,000/lần", "300,000/lần"],
                    ].map(([stt, ten, vn, nn], i, arr) => (
                      <tr
                        key={i}
                        className="[&>td]:border-[1.5px] [&>td]:border-[#EBEBEB] hover:bg-gray-50"
                      >
                        <td className="sm:p-3 p-1 sm:w-[7%] w-[10%] opacity-60">{stt}</td>
                        <td className="sm:p-3 p-1 sm:w-[45%] w-[37%] opacity-60 text-left">{ten}</td>
                        <td className="sm:p-3 p-1 sm:w-[24%]  opacity-60">{vn}</td>
                        <td className="sm:p-3 p-1 sm:w-[24%] opacity-60">{nn}</td>


                      </tr>
                    ))}
                    <tr className="[&>td]:border-[1.5px] [&>td]:border-[#EBEBEB] hover:bg-gray-50">
                      <td className="sm:p-3 p-1 sm:w-[7%] w-[10%] opacity-60">10</td>
                        <td className="sm:p-3 p-1 sm:w-[45%] w-[37%] opacity-60 text-left">Xét nghiệm tại nhà</td>
                        <td className="sm:p-3 p-1 sm:w-[24%]  opacity-60 text-center" colSpan={2}>Theo giá BVĐK</td>
                    </tr>
                    <tr className="[&>td]:border-[1.5px] [&>td]:border-[#EBEBEB] hover:bg-gray-50">
                      <td className="sm:p-3 p-1 sm:w-[7%] w-[10%] opacity-60 rounded-bl-xl">11</td>
                        <td className="sm:p-3 p-1 sm:w-[45%] w-[37%] opacity-60 text-left">Xét nghiệm tại nhà</td>
                        <td className="sm:p-3 p-1 sm:w-[24%]  opacity-60 text-center" >Theo giá BVĐK</td>
                        <td className="sm:p-3 p-1 sm:w-[24%]  opacity-60 text-center rounded-br-xl" >Theo giá BVĐK</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>


            {/* Footer */}
            <div className="bg-gradient-to-r  rounded-b-2xl from-green-500 z-50 to-blue-500 text-white text-center py-3 text-sm flex flex-col sm:flex-row justify-center items-center gap-2">
              <span className="flex gap-0.5"><img src={Phone} alt="" /> Hotline: 1900 1806</span>
              <span className="flex gap-0.5"><img src={Global} alt="icon" /> <a href="https://benhvienphuongdong.vn/" target="_blank" className="">https://benhvienphuongdong.vn/</a></span>
            </div>
          </div>
        </div>
        <div className="absolute right-[-15%] sm:right-[-20%] md:sm:right-[-15%] 2xl:sm:right-[-4%] bottom-[-20%] max-w-[500px]  scale-75 [&>img]:w-full [&>img]:h-full [&>img]:object-cover z-0">
          <img src={Ellipse} alt="Hinh tron" />
        </div>

      </div>
    </>
  )
}
export default Section3;