// import "../styles/Section.css"
// import "../styles/Bounce.css";
// import Services from "../components/sections/Services";
// import Testimonials from '../components/sections/Testimonials';
// import Client from "../components/sections/Client";
// import HeroSection from "../components/sections/HeroSection";

// function Home() {
//   return (
//     <div className="">

//       <HeroSection />
// <div className="services h-screen w-screen pt-0">
//   <Services />
// </div>
// <div className="client w-screen">
//   <Client />
// </div>
      // <div className="relative w-screen">
      //   <Testimonials />
      // </div>
//     </div>
//   );
// }

// export default Home;

import HeroSection from "../components/sections/HeroSection";
import Services from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";

const Home = () => {
  return (
    <div className="min-h-screen w-screen bg-gray-50">
      {/* Main container with the blue curved background */}
      <div className="relative overflow-hidden">
        {/* Blue background with curves */}
        <div className="absolute top-0 left-0 right-0 h-96 bg-blue-500 rounded-bl-[30%] rounded-br-[30%] z-0"></div>

        {/* Content container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeroSection />
        </div>
      </div>

      {/* Feature boxes */}
      <div className="container mx-auto px-4 pb-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="bg-blue-500 p-4 rounded-lg text-center text-white">
            <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
              {/* <IoHappyOutline className="text-xl text-white w-6 h-6" /> */}
              <p className="text-white text-2xl">10+</p>
            </div>
            <div className="text-xs">Happy clients</div>
          </div>
          <div className="bg-blue-500 p-4 rounded-lg text-center text-white">
            <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
              <p className="text-white text-2xl">20+</p>
            </div>
            <div className="text-xs">Projects Done</div>
          </div>
          <div className="bg-blue-500 p-4 rounded-lg text-center text-white">
            <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
              <p className="text-white text-2xl">4+</p>
            </div>
            <div className="text-xs">Years of Experience</div>
          </div>
          <div className="bg-blue-500 p-4 rounded-lg text-center text-white">
            <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
              <p className="text-white text-2xl">7+</p>
            </div>
            <div className="text-xs">Programming Languages</div>
          </div>
        </div>
      </div>

      {/* You can put the feature boxes code here, or modularize them further */}
      <div className="services h-screen w-screen pt-0">
        <Services />
      </div>
      <div className="relative w-screen">
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
