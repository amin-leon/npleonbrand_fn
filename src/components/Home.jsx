import React from 'react'

function Home() {
  return (
    <div>
        <div className="flex h-screen w-screen relative">
            <div className="w-1/2 bg-[#08182F]"></div>
            
            <div className="w-1/2 bg-white"></div>

            <div className="absolute left-1/2 top-1/6 -translate-x-1/2 transform bg-green-400 opacity-8 p-4 shadow-lg rounded-lg border-4 border-amber-300 w-3/5 h-1/2">
            Center Div
            </div>
        </div>

    </div>
  )
}

export default Home