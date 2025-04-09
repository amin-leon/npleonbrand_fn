import { useState } from "react";
import SubHeroSection from "../components/sections/SubHeroSection";
import Wrapper from "../components/utils/Wrapper";
import All from "../components/sections/All";

function Projects() {
  const [selected, setSelected] = useState("all");

  return (
    <div className="all-projects w-screen h-auto">
      <SubHeroSection title="Projects Page" navigateTo="Home" />
      <div className="projects">
        <Wrapper>
          <div className="filter pt-5 pb-16">
            <div className="selectors py-10 flex justify-center items-center gap-2">
              <button
                className={`active px-10 py-2 border cursor-pointer rounded-sm hover:text-white hover:bg-blue-600`}
              >
                All
              </button>
              <button
                className={`px-10 py-2 border rounded-sm cursor-pointer hover:text-white hover:bg-blue-600`}
              >
                Web
              </button>
              <button
                className={`px-10 py-2 border rounded-sm cursor-pointer hover:text-white hover:bg-blue-600`}
              >
                Apps
              </button>
              <button
                className={`px-10 py-2 border rounded-sm cursor-pointer hover:text-white hover:bg-blue-600`}
              >
                Designs
              </button>
            </div>
            <div>
              <All />
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}

export default Projects;
