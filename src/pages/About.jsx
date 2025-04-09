import { VscCloudDownload } from "react-icons/vsc";
import SubHeroSection from "../components/sections/SubHeroSection";
import Wrapper from "../components/utils/Wrapper";
import "../styles/SubHeroSection.css";
import { FaPlay } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router";
import { Typing2 } from "../components/utils/Typing2";
import { Typing } from "../components/utils/Typing";
import "../styles/PlayButton.css";

function About() {
  return (
    <div className="w-screen h-auto">
      <div className="subhero-content">
        <div className="w-full">
          <SubHeroSection title="About Me" navigateTo="Home" />
        </div>
      </div>
      <div className="w-screen bg-white">
        <Wrapper>
          <div className="background h-auto bg-transparent">
            <div className="video-intro flex flex-col gap-2 py-4">
              <div className="video col-span-1 flex flex-col justify-center items-center gap-4 py-5">
                <div className="video-play-icon h-16 w-16 rounded-full flex justify-center items-center">
                  <FaPlay className="text-red-600 " />
                </div>
                <div className="resume">
                  <NavLink className="px-10 bg-blue-500 hover:bg-blue-600 text-white rounded-sm flex justify-center gap-3 items-center flex-row py-3">
                    Get resume <VscCloudDownload />
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="selectors py-4 text-gray-500 flex justify-center items-center gap-5">
              <NavLink
                to="/about"
                className={`px-4 py-2 border-b-1 cursor-pointer hover:text-blue-600`}
              >
                Education
              </NavLink>
              <NavLink
                to="experience"
                className={`px-4 py-2 border-b-1 border-gray-200 cursor-pointer hover:text-white`}
              >
                Experience
              </NavLink>
              <NavLink
                to="training"
                className={`px-4 py-2 border-b-1 border-gray-200 cursor-pointer hover:text-white`}
              >
                Traings & Certifactions
              </NavLink>
            </div>
            <div className="flex flex-row w-full">
              <div className="outlet basis-2/3">
                <Outlet />
              </div>
              <div className="type basis-1/3">
                <Typing />
              </div>
            </div>
          </div>
          <div className="intro w-full col-span-3 flex flex-col gap-3 justify-center items-center self-center">
            <Typing2 />
            <h2 className="text-[#84858E] text-3xl font-bold pt-3 self-center">
              Web app, Mob app, and UI/UX designer specializing in shopify &
              webflow.
            </h2>
            <p className="text-sm text-[#84858E]">
              Lorem Ipsum is simply dummy text of the printing and pesetting
              industry has been the industry's standard dummy text ever since
              the 1500s. Lorem Ipsum is simply dummy text of the printing and
              pesetting industry has been the industry's standard dummy text
              ever since the 1500s.Lorem Ipsum is simply dummy text of the
              printing and pesetting industry has been the industry's standard
              dummy text ever since the 1500s. Lorem
            </p>
          </div>
          ;
        </Wrapper>
      </div>
    </div>
  );
}

export default About;
