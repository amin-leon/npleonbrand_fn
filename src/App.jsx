import { useState } from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from "react-router";
import ErrorPage from './components/common/ErrorPage';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
