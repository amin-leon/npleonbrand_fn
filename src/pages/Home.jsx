import NavBar from "../components/common/Navbar"
import Hero from "../components/sections/Hero"
import Wrapper from "../components/utils/Wrapper"
import { Theme } from "../styles/Colors"

function Home() {
  return (
    <div>
        <div className="flex h-screen w-screen relative">
            <div style={{ backgroundColor: Theme.primary_1 }} className="w-1/2"></div>
            <div className="w-1/2 bg-white"></div>
            <div className="absolute left-1/2 top-0 -translate-x-1/2 transform p-4 shadow-lg rounded-lg border-amber-300 w-full h-1/2">
              <Wrapper>
                  <NavBar />
                  <div className="relative">
                    <Hero />
                  </div>
              </Wrapper>
            </div>
        </div>
    </div>
  )
}

export default Home