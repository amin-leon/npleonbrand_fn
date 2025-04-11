// import { Link, NavLink } from "react-router"
// import { Theme } from "../../styles/Colors"
// import Wrapper from "../utils/Wrapper"
// import { RiHome9Line } from "react-icons/ri";
// import { BsPersonAdd } from "react-icons/bs";
// import { PiNewspaperThin } from "react-icons/pi";
// import { BsFolderPlus } from "react-icons/bs";
// import { BiMessageAltAdd } from "react-icons/bi";
// import { IoCodeSlash, IoCodeSlashOutline } from "react-icons/io5";
// import { GiSkills } from "react-icons/gi";

// function NavBar() {
//   return (
//     <Wrapper>
//       <nav className="py-3">
//         <div className="links flex justify-between flex-row">
//           <div className="flex basis-1/2 justify-start">
//             <h6
//               style={{ color: Theme.textColor_2 }}
//               className="text-5xl font-extrabold"
//             >
//               <IoCodeSlash />
//             </h6>
//           </div>
//           <div className="menus-login flex gap-10 basis-1/2 justify-end">
//             <div className="menus flex items-center gap-1">
//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-red-600 bg-amber-50 px-3 pr-5 pl-5 pt-2 pb-2 flex flex-col justify-center items-center rounded-sm text-sm"
//                     : "text-white pr-5 pl-5 pt-2 pb-2  flex flex-col justify-center items-center rounded-sm text-sm hover:bg-[#f8fafc] hover:text-black"
//                 }
//               >
//                 <RiHome9Line className="text-xl" />
//                 Home
//               </NavLink>
//               <NavLink
//                 to="/about"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-red-600 bg-amber-50 px-3 pr-5 pl-5 pt-2 pb-2 flex flex-col justify-center items-center rounded-sm text-sm"
//                     : "text-white pr-5 pl-5 pt-2 pb-2  flex flex-col justify-center items-center rounded-sm text-sm hover:bg-[#f8fafc] hover:text-black"
//                 }
//               >
//                 <BsPersonAdd className="text-xl" />
//                 About
//               </NavLink>
//               <NavLink
//                 to="/blogs"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-red-600 bg-amber-50 px-3 pr-5 pl-5 pt-2 pb-2 flex flex-col justify-center items-center rounded-sm text-sm"
//                     : "text-white pr-5 pl-5 pt-2 pb-2  flex flex-col justify-center items-center rounded-sm text-sm hover:bg-[#f8fafc] hover:text-black"
//                 }
//               >
//                 <PiNewspaperThin className="text-xl" />
//                 Blogs
//               </NavLink>
//               <NavLink
//                 to="/projects"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-red-600 bg-amber-50 px-3 pr-5 pl-5 pt-2 pb-2 flex flex-col justify-center items-center rounded-sm text-sm"
//                     : "text-white pr-5 pl-5 pt-2 pb-2  flex flex-col justify-center items-center rounded-sm text-sm hover:bg-[#f8fafc] hover:text-black"
//                 }
//               >
//                 <BsFolderPlus className="text-xl" />
//                 Projects
//               </NavLink>
//               <NavLink
//                 to="/skills"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-red-600 bg-amber-50 px-3 pr-5 pl-5 pt-2 pb-2 flex flex-col justify-center items-center rounded-sm text-sm"
//                     : "text-white pr-5 pl-5 pt-2 pb-2  flex flex-col justify-center items-center rounded-sm text-sm hover:bg-[#f8fafc] hover:text-black"
//                 }
//               >
//                 <IoCodeSlashOutline className="text-xl" />
//                 Skills
//               </NavLink>
//               <NavLink
//                 to="/contact"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-red-600 bg-amber-50 px-3 pr-5 pl-5 pt-2 pb-2 flex flex-col justify-center items-center rounded-sm text-sm"
//                     : "text-white pr-5 pl-5 pt-2 pb-2  flex flex-col justify-center items-center rounded-sm text-sm hover:bg-[#f8fafc] hover:text-black"
//                 }
//               >
//                 <BiMessageAltAdd className="text-xl" />
//                 Contact Me
//               </NavLink>
//             </div>
//             <div className="login-section flex justify-center items-center">
              // <NavLink
              //   to="/login"
              //   className="text-white bg-red-500 pr-5 pl-5 pt-2 pb-2 rounded-sm text-sm hover:bg-[#f8fafc] hover:text-black"
              // >
              //   Hire Me
              // </NavLink>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </Wrapper>
//   );
// }

// export default NavBar

import { useState } from "react";
import { NavLink } from "react-router";
import Wrapper from "../utils/Wrapper";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Wrapper>
      <nav className="pt-6 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-white font-bold text-4xl">NP Leon</div>

          <div className="hidden md:flex ml-10 space-x-8">
            <NavLink to="/" className="text-white text-sm hover:text-blue-100">
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-white text-sm hover:text-blue-100"
            >
              About
            </NavLink>
            <NavLink
              to="/blogs"
              className="text-white text-sm hover:text-blue-100"
            >
              Blogs
            </NavLink>
            <NavLink
              to="/skills"
              className="text-white text-sm hover:text-blue-100"
            >
              Skills
            </NavLink>
            <NavLink
              to="/projects"
              className="text-white text-sm hover:text-blue-100"
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className="text-white text-sm hover:text-blue-100"
            >
              Contact Me
            </NavLink>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <NavLink
            to="/login"
            className="text-blue-500 bg-white rounded-full px-4 py-1 text-sm hover:bg-gray-100"
          >
            Login
          </NavLink>
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden bg-blue-600 rounded-lg mt-2 py-2 px-4 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <NavLink to="/" className="block text-white py-2">
            Home
          </NavLink>
          <NavLink to="/" className="block text-white py-2">
            About
          </NavLink>
          <NavLink to="/" className="block text-white py-2">
            Blogs
          </NavLink>
          <NavLink to="/" className="block text-white py-2">
            Skills
          </NavLink>
          <NavLink to="/" className="block text-white py-2">
            Projects
          </NavLink>
          <NavLink to="/" className="block text-white py-2">
            Contact
          </NavLink>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
