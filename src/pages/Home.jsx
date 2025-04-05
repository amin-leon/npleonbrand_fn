import NavBar from "../components/common/Navbar";
import SubHeroSection from "../components/sections/SubHeroSection";
import Typing from "../components/utils/Typing";
import Wrapper from "../components/utils/Wrapper";
import "../styles/Section.css"
import "../styles/Bounce.css";
import Services from "../components/sections/Services";
import Hero from '../components/sections/Hero';
import Testimonials from '../components/sections/Testimonials';
import Client from "../components/sections/Client";
import Footer from "../components/sections/Footer";

function Home() {
  return (
    <div className="">
      <div className="flex h-[100vh] w-screen relative overflow-hidden">
        <div className="w-1/2 bg-[#08182F]"></div>
        <div className="w-1/2 bg-white justify-center items-center">
          <Typing />
        </div>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 transform p-4 shadow-lg rounded-lg border-amber-300 w-full h-[100vh]">
          {/* <NavBar /> */}
          <div className="relative flex justify-center items-center">
            <Hero />
          </div>
          {/* Hero-footer */}
          <div className="absolute bottom-0 left-0 right-0  h-36 flex justify-between ">
            <div className=""></div>
          </div>
        </div>
      </div>
      <div className="services h-screen w-screen pt-0">
        <Services />
      </div>
      <div className="client w-screen">
        <Client />
      </div>
      <div className="relative w-screen">
        <Testimonials />
      </div>
    </div>
  );
}

export default Home;
