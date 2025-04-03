import Wrapper from "../utils/Wrapper";
import { IoHappyOutline } from "react-icons/io5";
import { CiMedicalCase } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";

function Client() {
  return (
    <div className="bg-[#091B34]">
      <Wrapper>
        <div className="all-client-container grid grid-cols-3 gap-3 p-10">
          <div className="happy-client flex justify-start items-center gap-7 bg-[#08182F] p-6 rounded-md">
            <div className="icon p-2 border border-[#84858E] rounded-md">
              <IoHappyOutline className="text-6xl text-[#84858E]" />
            </div>
            <div className="number-desc">
              <h1 className="text-3xl font-bold text-[#f8fafc]">25+</h1>
              <p className="pt-2 text-[#84858E]">Happy clients</p>
            </div>
          </div>
          <div className="happy-client flex justify-start items-center gap-7 bg-[#08182F] p-6 rounded-md">
            <div className="icon p-2 border border-[#84858E] rounded-md">
              <CiMedicalCase className="text-6xl text-[#84858E]" />
            </div>
            <div className="number-desc">
              <h1 className="text-3xl font-bold text-[#f8fafc]">10+</h1>
              <p className="pt-2 text-[#84858E]">Project Done</p>
            </div>
          </div>
          <div className="happy-client flex justify-start items-center gap-7 bg-[#08182F] p-6 rounded-md">
            <div className="icon p-2 border border-[#84858E] rounded-md">
              <CiCalendarDate className="text-6xl text-[#84858E]" />
            </div>
            <div className="number-desc">
              <h1 className="text-3xl font-bold text-[#f8fafc]">5+</h1>
              <p className="pt-2 text-[#84858E]">Year of Experience</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Client;
