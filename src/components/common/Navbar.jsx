import { Link, NavLink } from "react-router"
import { Theme } from "../../styles/Colors"
import Wrapper from "../utils/Wrapper"

function NavBar() {
  return (
    <Wrapper>
      <nav className="pt-3 pb-3 bg-primary-main">
        <div className="links flex justify-between flex-row border-secondary-alertenative">
          <div className="flex justify-center items-center">
            <h6 style={{color: Theme.textColor_2}} className="text-4xl font-extrabold">NP Leon</h6>
          </div>
          <div className="menus-login flex gap-10">
            <div className="menus flex items-center gap-1 p-3">
              <Link
                  to="/"
                  className='text-black pr-5 pl-5 pt-2 pb-2 rounded-sm text-sm hover:bg-[#08182F] hover:text-white'
                >
                  Home
              </Link>
              <NavLink
                  to="/aboutme"
                  className='text-black pr-5 pl-5 pt-2 pb-2 rounded-sm text-sm hover:bg-[#08182F] hover:text-white'
                >
                  About
              </NavLink>
              <NavLink
                  to="/blogs"
                  className='text-black pr-5 pl-5 pt-2 pb-2 rounded-sm text-sm hover:bg-[#08182F] hover:text-white'
                >
                  Blogs
              </NavLink>
              <NavLink
                  to="/projects"
                  className='text-black pr-5 pl-5 pt-2 pb-2 rounded-sm text-sm hover:bg-[#08182F] hover:text-white'
                >
                  Projects
              </NavLink>
              <NavLink
                  to="/contact"
                  className='text-black pr-5 pl-5 pt-2 pb-2 rounded-sm text-sm hover:bg-[#08182F] hover:text-white'
                >
                  Contact
              </NavLink>
            </div>
            <div className="login-section flex justify-center items-center">
              <NavLink
                  to="/login"
                  className='text-black pr-5 pl-5 pt-2 pb-2 rounded-sm text-sm hover:bg-[#08182F] hover:text-white'
                >
                  Login
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </Wrapper>

  )
}

export default NavBar