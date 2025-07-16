import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../heplers/img/Logo.png"
import { useState } from "react";
function Header(){
  const menu = [
    {
      id: 1,
      name: "Ưu đãi",
      title: "Ưu đãi",
    },
    {
      id: 2,
      name: "Dịch vụ",
      title: "Dịch vụ",
    },
    {
      id: 3,
      name: "Giới thiệu",
      title: "Giới thiệu"
    },
    {
      id: 4,
      name: "Đội ngũ bác sĩ",
      title: "Đội ngũ bác sĩ"
    },
    {
      id: 5,
      name: "Bảng giá",
      title: "Bảng giá"
    },
    {
      id: 6,
      name: "Thư viện",
      title: "Thư viện",
    },
    {
      id: 7,
      name: "Liên hệ",
      title: "Liên hệ",
    },
  ];
  const [dropdown, setMenu] = useState(false);
  const handleClick = () => {
    setMenu(!dropdown);
  }
  return(
    <>
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md w-full">
    <div className="max-w-full mx-auto flex justify-between sm:justify-around items-center pt-3.5 sticky top-0 bg-white pb-3 lg:px-15">
        <a href="#" title="Home page" >
          <div className="basis-[20%] flex items-center justify-center ml-1 md:ml-1.5 lg:ml-0 h-10 sm:h-8 md:h-10 lg:h-10 xl:h-10 2xl:h-10 w-full
           [&>img]:w-full [&>img]:h-full [&>img]:object-contain">
            <img src={Logo} width="100%" height='100%' alt="Logo" />
          </div></a>
        <div className="sm:basis-[60%] hidden sm:flex justify-around  font-bold">
          {menu.map(item => (
            <div className="h-10 flex text border-b-2 border-white sm:text-[10px] md:text-[12px] lg:text-base xl:text-base 2xl:text-base
              text-gray-900 items-center hover:text-green-400 hover:border-green-400 ">
              <a href="#" title={item.title}>{item.name}</a></div>
          ))}
        </div>
        <div className="sm:basis-[20%] flex h-10 justify-center items-center
         
         ">
          <div className="hidden sm:flex bg_button
         shadow-lg text-white font-bold p-2 px-5 ml-2 
         sm:text-[8px] md:text-[10px] lg:text-xs xl:text-base 2xl:text-base
         transition-all duration-300 ease-in-out
  hover:scale-105 hover:shadow-xl
         ">
            <a href="tel:19001806" title="Hotline"><FontAwesomeIcon icon={faPhoneVolume} /> Hotline:1900 1806</a></div>
        </div>
        <div className="sm:hidden mr-1 flex relative"><FontAwesomeIcon icon={faBars} onClick={handleClick} />
          {dropdown ?

            (
              <>
              {/* tam giac */}
                <div className="w-0 h-0 
                    border-l-[10px] border-l-transparent
                    border-r-[10px] border-r-transparent
                    border-b-[20px] border-b-gray-100 absolute top-7">
                </div>
                {/* dropdown menu */}
                <div className="absolute top-12 -right-10 w-52 p-3  text-white bg-gray-100 font-bold">
                  {menu.map(item1 => (
                    <div className="h-10   text sm:text-[10px] text-left md:text-[10px] lg:text-base xl:text-base 2xl:text-base
              text-gray-900  hover:text-green-400 hover:border-b-2
              ">
                      <a href="#" title={item1.title}>{item1.name}</a></div>
                  ))}
                </div></>
            )
            :
            (
              <>
              </>
            )}</div>

      </div>
      </div></>
  )
}
export default Header;