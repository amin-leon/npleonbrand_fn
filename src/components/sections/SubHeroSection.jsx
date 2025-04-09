import { FaLongArrowAltRight } from 'react-icons/fa';
import '../../styles/SubHeroSection.css'

function SubHeroSection({ title, navigateTo }) {
  return (
    <div className="subhero-content flex flex-col justify-center items-center gap-1 py-10 h-64 bg-blue-500 rounded-bl-[30%] rounded-br-[30%]">
      <h1 className="text-5xl text-[#f8fafc] font-bold">{title}</h1>
      <div>
        <div className="flex justify-center items-center flex-row gap-1">
          <span className="text-[#84858E] cursor-pointer">{navigateTo}</span>{" "}
          <span className="text-[#84858E]">
            <FaLongArrowAltRight />
          </span>{" "}
          <span className="text-[#f8fafc] cursor-pointer">{title}</span>
        </div>
      </div>
    </div>
  );
}

export default SubHeroSection;
