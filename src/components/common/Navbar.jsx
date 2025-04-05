import { Link, NavLink } from "react-router"
import { Theme } from "../../styles/Colors"
import Wrapper from "../utils/Wrapper"
import { RiHome9Line } from "react-icons/ri";
import { BsPersonAdd } from "react-icons/bs";
import { PiNewspaperThin } from "react-icons/pi";
import { BsFolderPlus } from "react-icons/bs";
import { BiMessageAltAdd } from "react-icons/bi";
import { IoCodeSlash, IoCodeSlashOutline } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";

function NavBar() {
  return (
    <Wrapper>
      <nav className="py-3">
        <div className="links flex justify-between flex-row">
          <div className="flex basis-1/2 justify-start">
            <h6
              style={{ color: Theme.textColor_2 }}
              className="text-5xl font-extrabold"
            >
              <IoCodeSlash />
            </h6>
          </div>
          <div className="menus-login flex gap-10 basis-1/2 justify-end">
            <div className="menus flex items-center gap-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 bg-amber-50 px-3 pr-5 pl-5 pt-2 pb-2 flex flex-col justify-center items-center rounded-sm text-sm"
                    : "text-white pr-5 pl-5 pt-2 pb-2  flex flex-col justify-center items-center rounded-sm text-sm hover:bg-[#f8fafc] hover:text-black"
                }
              >
                <RiHome9Line className="text-xl" />
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 bg-amber-50 px-3 pr-5 pl-5 pt-2 pb-2 flex flex-col justify-center items-center rounded-sm text-sm"
                    : "text-white pr-5 pl-5 pt-2 pb-2  flex flex-col justify-center items-center rounded-sm text-sm hover:bg-[#f8fafc] hover:text-black"
                }
              >
                <BsPersonAdd className="text-xl" />
                About
              </NavLink>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 bg-amber-50 px-3 pr-5 pl-5 pt-2 pb-2 flex flex-col justify-center items-center rounded-sm text-sm"
                    : "text-white pr-5 pl-5 pt-2 pb-2  flex flex-col justify-center items-center rounded-sm text-sm hover:bg-[#f8fafc] hover:text-black"
                }
              >
                <PiNewspaperThin className="text-xl" />
                Blogs
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 bg-amber-50 px-3 pr-5 pl-5 pt-2 pb-2 flex flex-col justify-center items-center rounded-sm text-sm"
                    : "text-white pr-5 pl-5 pt-2 pb-2  flex flex-col justify-center items-center rounded-sm text-sm hover:bg-[#f8fafc] hover:text-black"
                }
              >
                <BsFolderPlus className="text-xl" />
                Projects
              </NavLink>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 bg-amber-50 px-3 pr-5 pl-5 pt-2 pb-2 flex flex-col justify-center items-center rounded-sm text-sm"
                    : "text-white pr-5 pl-5 pt-2 pb-2  flex flex-col justify-center items-center rounded-sm text-sm hover:bg-[#f8fafc] hover:text-black"
                }
              >
                <IoCodeSlashOutline className="text-xl" />
                Skills
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 bg-amber-50 px-3 pr-5 pl-5 pt-2 pb-2 flex flex-col justify-center items-center rounded-sm text-sm"
                    : "text-white pr-5 pl-5 pt-2 pb-2  flex flex-col justify-center items-center rounded-sm text-sm hover:bg-[#f8fafc] hover:text-black"
                }
              >
                <BiMessageAltAdd className="text-xl" />
                Contact Me
              </NavLink>
            </div>
            <div className="login-section flex justify-center items-center">
              <NavLink
                to="/login"
                className="text-white bg-red-500 pr-5 pl-5 pt-2 pb-2 rounded-sm text-sm hover:bg-[#f8fafc] hover:text-black"
              >
                Hire Me
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
}

export default NavBar