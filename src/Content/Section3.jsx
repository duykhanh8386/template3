function Section3() {
  return (
    <>
      <div className="bg-[linear-gradient(90deg,_#73D090_0%,_#C4EACE_0.01%,_#53CAFB_100%)] py-13">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Tiêu đề */}
            <div className="p-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Bảng giá các dịch vụ khám và chữa bệnh:</h2>
              <p className="text-gray-500 text-sm">Ghi chú: Lorem ipsum dolor sit amet, consectetur adipiscing elit lis iaculis ac felis</p>
            </div>

            {/* Bảng */}
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-green-600 to-blue-400 text-white text-left">
                    <th className="p-3 border border-white whitespace-nowrap" rowSpan="2">STT</th>
                    <th className="p-3 border border-white whitespace-nowrap" rowSpan="2">Tên dịch vụ</th>
                    <th className="p-3 border border-white whitespace-nowrap text-center" colSpan="2">
                      GIÁ DỊCH VỤ DÀNH CHO NHỮNG KHÁCH HÀNG CÓ QUỐC TỊCH
                    </th>
                  </tr>
                  <tr className="bg-gradient-to-r from-green-600 to-blue-400 text-white text-left">
                    <th className="p-3 border border-white whitespace-nowrap">Việt Nam</th>
                    <th className="p-3 border border-white whitespace-nowrap">Nước ngoài</th>
                  </tr>
                </thead>

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
                  ].map(([stt, ten, vn, nn], i) => (
                    <tr key={i} className="border border-x-0 border-b hover:bg-gray-50">
                      <td className="p-3">{stt}</td>
                      <td className="p-3">{ten}</td>
                      <td className="p-3">{vn}</td>
                      <td className="p-3">{nn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-center py-3 text-sm flex flex-col sm:flex-row justify-center items-center gap-2">
              <span>📞 Hotline: 1900 1806</span>
              <span>🌐 <a href="https://benhvienphuongdong.vn/" target="_blank" className="underline">https://benhvienphuongdong.vn/</a></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Section3;