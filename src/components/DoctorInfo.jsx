import FiveStar from "../heplers/img/5Star.png";
export const DoctorImage = ({ image }) => (
  <div className="col-span-1 relative z-[1] items-center justify-around gap-2 lg:gap-6">
    <div className="aspect-[1] flex justify-center p-5 bg-gradient-to-r from-green-600 to-blue-400 rounded-full pt-16 relative z-0">
      <div className="absolute bottom-0 z-[2] rounded-b-full overflow-hidden">
        <img src={image} alt="Doctor" className="w-[85%] mx-auto" />
      </div>
    </div>
  </div>
);

export const DoctorInfo = ({ item }) => (
  <div className="flex w-full relative z-[1] justify-center">
    <div className="col-span-1 mr-[5%] text-left max-w-sm">
      <h3 className="text-[15px] sm:text-[20px] md:text-[16px] lg:text-xl 4k:text-3xl font-medium">{item?.name}</h3>
      <p className="text-gray-600 mt-1 lg:mt-3 text-[12px] opacity-70 sm:text-[16px] md:text-sm xl:text-sm">
        {item?.level}
      </p>
      <p className="lg:mt-3 mt-1 opacity-75 text-[12px] sm:text-[16px] md:text-sm xl:text-sm 4k:text-[16px]">
        Kinh nghiệm: <span className="font-medium">20 năm</span>
      </p>
      <p className="lg:mt-3 mt-1 flex gap-0.5 justify-start text-[12px] sm:text-[16px] md:text-[13px] xl:text-sm">
        <span className="flex items-center opacity-75">Xếp hạng:</span>
        <img src={FiveStar} alt="rating" className="sm:aspect-1" />
      </p>
    </div>
  </div>
);
