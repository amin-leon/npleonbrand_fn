import { useState } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router";
import ErrorPage from "./components/common/ErrorPage";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Education, Experience, Training } from "./components/sections/Education";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}>
              <Route path="education" element={<Education />} />
              <Route path="experience" element={<Experience />} />
              <Route path="training" element={<Training />} />
            </Route>
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* Error page should not use Layout */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
