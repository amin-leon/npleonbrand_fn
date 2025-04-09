import { FaArrowTrendUp } from "react-icons/fa6";

function Projectcard({ image }) {
  return (
    <div className="relative h-auto w-full cursor-pointer overflow-hidden">
      <img
        src={image}
        alt="Project_screenShot"
        className="block w-full h-8xl rounded-md"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 flex items-center justify-center">
        <div className="relative -top-10 right-0 left-0 flex flex-col gap-5 text-white transform translate-y-full hover:translate-y-0 transition-transform duration-[1s] ease-in-out">
          <div>Framework: React, Node, MongoDB</div>
          <button className="bg-blue-500 px-5 py-2 text-white flex justify-center items-center gap-2">
            Preview <FaArrowTrendUp />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projectcard;
