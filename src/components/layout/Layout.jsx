import { Outlet } from "react-router";
import Footer from "../sections/Footer";
import NavBar from "../common/Navbar";

function Layout() {
  return (
    <>
      <div className="bg-blue-500 w-screen">
        <NavBar />
      </div>
      <main className="h-auto">
        <Outlet />
      </main>
      <div className="w-screen pt-16">
        <Footer />
      </div>
    </>
  );
}

export default Layout;
