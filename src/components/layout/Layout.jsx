import { Outlet } from "react-router";
import Footer from "../sections/Footer";
import NavBar from "../common/Navbar";

function Layout() {
  return (
    <>
      <div className="bg-[#091B34] w-screen">
        <NavBar />
      </div>
      <main className="h-auto">
        <Outlet />
      </main>
      <div className="w-screen bg-[#091B34] pt-16">
        <Footer />
      </div>
    </>
  );
}

export default Layout;
