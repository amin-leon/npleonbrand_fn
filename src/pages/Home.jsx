import NavBar from "../components/common/Navbar"
import Hero from "../components/sections/Hero"
import { Typing } from "../components/utils/Typing"
import Wrapper from "../components/utils/Wrapper"
import { Theme } from "../styles/Colors"
import  '../styles/Bounce.css'


function Home() {
  return (
    <div>
        <div className="flex h-[100vh] w-screen relative overflow-hidden">
            <div className="w-1/2 bg-[#08182F]"></div>
            <div className="w-1/2 bg-white"></div>
            <div className="absolute left-1/2 top-0 -translate-x-1/2 transform p-4 shadow-lg rounded-lg border-amber-300 w-full h-[100vh]">
              <NavBar />
              <div className="relative flex justify-center items-center">
                  <Hero />
              </div>
              {/* Hero-footer */}
              <div className="absolute bottom-0 left-0 right-0  h-36 flex justify-between ">
                <div className=""></div>
                <div className="bounce-icon w-36 rounded-t-full rounded-l-full bg-gray-200 flex justify-center items-center">
                  <Typing />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home