import { useState } from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from "react-router";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import Layout from './components/Layout';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path='profile' element={<Home />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
