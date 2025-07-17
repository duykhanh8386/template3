
import Logo from "../heplers/img/Logo.png"
import Ellipse from "../heplers/img/Ellipse1126.png";
import Global from "../heplers/img/Global.png";
import Phone from "../heplers/img/Phone.png";
function Section3() {
  return (
    <>
      <div className="bg-[linear-gradient(90deg,_#73D090_0%,_#C4EACE_0.01%,_#53CAFB_100%)] relative z-0 py-13 ">

        <div className="max-w-7xl mx-auto sm:px-4 ">
          <div className="bg-white shadow-lg relative rounded-b-2xl sm:pt-5 z-10">

            {/* Tiêu đề */}
            <div className="grid grid-cols-6 items-center sm:px-6 px-2 sm:py-4 py-2 pb-0 sm:pb-4 text-center relative">
              {/* Logo bên trái */}
              <div className="flex justify-start">
                <div className="w-20 ml-1 sm:w-28 md:w-36 lg:w-40 xl:w-48 2xl:w-52 aspect-[4/1]">
                  <img src={Logo} alt="Logo" className="w-full h-full object-contain" />
                </div>
              </div>

              {/* Tiêu đề ở giữa */}
              <div className="col-span-4 text-[9px]  sm:text-[13px] md:text-[13px] xl:text-lg 2xl:text-xl">
                <h2 className=" font-bold mb-1">
                  Bảng giá các dịch vụ khám và chữa bệnh:
                </h2>
                <p className="text-gray-500 ">
                  Ghi chú: Lorem ipsum dolor sit amet, consectetur adipiscing elit lis iaculis ac felis
                </p>
              </div>

              {/* Bên phải để trống cho cân đối */}
              <div className="hidden sm:block" />
            </div>

            {/* Bảng */}
            <div className="overflow-y-auto sm:m-5 sm:mt-5 mt-1 h-[70vh] rounded-xl overflow-hidden">
              <table className="table-auto text-center text-[9px]  sm:text-[13px] md:text-[13px] xl:text-lg 2xl:text-xl border-separate border-spacing-0  mx-auto">
                <thead className="sticky top-0 z-10  rounded-t-2xl">
                  <tr className="bg-gradient-to-r from-green-600 to-blue-400 text-white text-center">
                    <th className="p-1  sm:p-3 border border-[#EBEBEB]  whitespace-nowrap rounded-tl-xl" rowSpan="2">STT</th>
                    <th className="p-1 sm:p-3 border border-[#EBEBEB] whitespace-nowrap" rowSpan="2">Tên dịch vụ</th>
                    <th className="p-1 sm:p-3 border border-[#EBEBEB]  text-center rounded-tr-xl" colSpan="3">
                      GIÁ DỊCH VỤ DÀNH CHO NHỮNG KHÁCH HÀNG CÓ QUỐC TỊCH
                    </th>
                  </tr>
                  <tr className="bg-gradient-to-r from-green-600 to-blue-400 text-white text-center">
                    <th className="p-1 sm:p-3 border border-[#EBEBEB] whitespace-nowrap">Việt Nam</th>
                    <th className="p-1 sm:p-3 border border-[#EBEBEB] whitespace-nowrap">Nước ngoài</th>
                    <th className="p-1 sm:p-3 border border-[#EBEBEB] whitespace-nowrap"></th>
                  </tr>
                </thead>

                <tbody className="">
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
                  ].map(([stt, ten, vn, nn], i, arr) => (

                    <tr key={i} colSpan className="[&>td]:border-[1.5px]   [&>td]:border-[#EBEBEB] hover:bg-gray-50">
                      <td className={`p-3 opacity-60 ${i === arr.length - 1 ? "rounded-br-2xl" : ""}`}>{stt}</td>
                      <td className="p-3 opacity-60 text-left">{ten}</td>
                      <td className="p-3 opacity-60">{vn}</td>
                      <td className="p-3 opacity-60">{nn}</td>
                      <td className={`p-3 opacity-60 ${i === arr.length - 1 ? "rounded-br-2xl" : ""}`}></td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>

            {/* Footer */}
            <div className="bg-gradient-to-r  rounded-b-2xl from-green-500 z-50 to-blue-500 text-white text-center py-3 text-sm flex flex-col sm:flex-row justify-center items-center gap-2">
              <span className="flex gap-0.5"><img src={Phone} alt="" /> Hotline: 1900 1806</span>
              <span className="flex gap-0.5"><img src={Global} alt="icon" /> <a href="https://benhvienphuongdong.vn/" target="_blank" className="">https://benhvienphuongdong.vn/</a></span>
            </div>
          </div>
        </div>
        <div className="absolute right-[-10%] bottom-[-20%] aspect-[3/4] scale-75 [&>img]:w-full [&>img]:h-full [&>img]:object-contain z-0">
          <img src={Ellipse} alt="Hinh tron" />
        </div>

      </div>
    </>
  )
}
export default Section3;