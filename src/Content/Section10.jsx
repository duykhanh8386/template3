import Frame from "../heplers/img/Section10/Frame.png"
import Frame1 from "../heplers/img/Section10/Frame1.png"
import Frame2 from "../heplers/img/Section10/Frame2.png"
import Frame3 from "../heplers/img/Section10/Frame3.png"
import Chambi from "../heplers/img/Section10/ChamBi.png"
function Section10(){
  return(
    <>
    <div className="4k:max-w-[75%] h-[700px] relative sm:max-w-[80%] max-w-[95%] mx-auto md:mt-[5%] 4k:mb-[5%] xl:mb-[5%] 2xl:mb-[%] lg:mb-[-10%] md:mb-[-5%]  mb4:mb-[-10%] mb2:mb-[10%] mb1:mb-[30%] ">
      <div className="grid grid-cols-4  lg:gap-y-0 gap-y-[5%] lg:gap-x-0 gap-x-[5%]">
        <div className="col-span-4 mb4:text-center text-left">
          <div className="grid grid-cols-8 pb-[5%]">
            <div className="md:col-start-2 md:col-end-8 col-start-1  col-end-9">
              <p className="font-medium text-lg lg:text-xl xl:text-[22px] 2xl:text-2xl 4k:text-4xl mb-2">Hậu quả chuyển dạ và sinh non nếu không điều trị kịp thời</p>
              <p className="mt-0.5 text-[14px] lg:text-[12px]  text-gray-700 xl:text-lg opacity-70 4k:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, odio in turpis nunc mollis diam viverra dictum. Tortor sed sapien ut tellus. Nunc etiam consectetur consectetur amet Habitant facilisis malesuada suscipit mus</p>
            </div>
          </div>
          
        </div>

        <div className="col-span-2 ">
          <div className="grid grid-cols-2 gap-y-5">
            <div className="col-start-1"><img src={Frame} alt="" /></div>
            <div className="lg:col-start-1 lg:col-span-1 col-span-2">
              <div className="font-medium mt-0.5 text-[14px] relative text-gray-700 xl:text-xl 4k:text-xl mb-2">
                <div className="absolute left-[-7px] top-[-7px] z-0"><img src={Chambi} alt="Cham bi" className="w-full"/></div>
                <div className="relative z-1">Gây sảy thai</div></div>
              <p className="mt-0.5 text-[14px] lg:text-[12px] text-justify text-gray-700 opacity-70 xl:text-lg 4k:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, nec morbi mauris, turpis fringilla condimentum urna sagittis </p>
            </div>
          </div>
        </div>

        
       
        <div className="col-span-2 ">
          <div className="grid grid-cols-2 gap-y-5">
            <div className="col-start-1"><img src={Frame1} alt="" /></div>
            <div className="lg:col-start-1 lg:col-span-1 col-span-2">
              <div className="font-medium mt-0.5 text-[14px] relative text-gray-700 xl:text-xl 4k:text-xl mb-2">
                <div className="absolute left-[-7px] top-[-7px] z-0"><img src={Chambi} alt="Cham bi" className="w-full"/></div>
                <div className="relative z-1">Nguy hiểm cho cả 2 mẹ con</div></div>
              <p className="mt-0.5 text-[14px] lg:text-[12px] text-justify text-gray-700 opacity-70 xl:text-lg 4k:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, nec morbi mauris, turpis fringilla condimentum urna sagittis </p>
            </div>
          </div>
        </div>

        
      
        <div className="col-span-2 ">
          <div className="grid grid-cols-2 gap-y-5">
            <div className="lg:col-start-2 col-start-1"><img src={Frame2} alt="" /></div>
            <div className="lg:col-start-2 lg:col-span-1 col-span-2">
              <div className="font-medium mt-0.5 text-[14px] relative text-gray-700 xl:text-xl 4k:text-xl mb-2">
                <div className="absolute left-[-7px] top-[-7px] z-0"><img src={Chambi} alt="Cham bi" className="w-full"/></div>
                <div className="relative z-1">Sinh sản gặp khó khăn</div></div>
              <p className="mt-0.5 text-[14px] lg:text-[12px] text-justify text-gray-700 opacity-70 xl:text-lg 4k:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, nec morbi mauris, turpis fringilla condimentum urna sagittis </p>
            </div>
          </div>
        </div>

        
        
        <div className="col-span-2 ">
          <div className="grid grid-cols-2 gap-y-5">
            <div className="lg:col-start-2 col-start-1"><img src={Frame3} alt="" /></div>
            <div className="lg:col-start-2 col-start-1 lg:col-span-1 col-span-2">
              <div className="font-medium mt-0.5 text-[14px] relative text-gray-700 xl:text-xl 4k:text-xl mb-2">
                <div className="absolute left-[-7px] top-[-7px] z-0"><img src={Chambi} alt="Cham bi" className="w-full"/></div>
                <div className="relative z-1">Gây mất khả năng sinh sản</div></div>
              <p className="mt-0.5 text-[14px] lg:text-[12px] text-justify text-gray-700 opacity-70 xl:text-lg 4k:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, nec morbi mauris, turpis fringilla condimentum urna sagittis </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    </>
  )
}
export default Section10;