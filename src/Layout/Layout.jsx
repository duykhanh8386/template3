import Banner from "../Content/Banner";
import Header from "../Content/Header";
import Section3 from "../Content/Section3";
import Section4 from "../Content/Section4";
import Section5 from "../Content/Section5";
import Section6 from "../Content/Section6";
import Section7 from "../Content/Section7";
import Section8 from "../Content/Section8";
import Section9 from "../Content/Section9";

function Layout() {
  
  return (
    <>
    <div className="max-w-[100%] overflow-hidden">
      <Header/>
      <Banner/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
      <Section9/>
      </div>
    </>
  )
}
export default Layout;