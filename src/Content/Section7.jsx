import Baby1 from "../heplers/img/Section7/Baby1.jpg";

import Baby2 from "../heplers/img/Section7/Baby2.jpg";

function Section7(){
  return(
    <>
    <div className="w-full relative overflow-hidden">
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
          right-[-20%] bottom-[5%]
          z-0
        "
        ></div>
    <div className="max-w-[78%] mt-[10%] mx-auto relative ">
      
        <div className="grid  grid-cols-2">
          <div className="relative z-[1] aspect-[4/3]">
            <img src={Baby1} alt="Baby1" />
          </div>
        </div>

    </div>
    </div>
    </>
  )
}
export default Section7;