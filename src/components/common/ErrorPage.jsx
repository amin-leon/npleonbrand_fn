import React from 'react'

function ErrorPage() {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
        <div className="error flex flex-col items-center font-bold">
            <h2 className='text-4xl'>Route Not Found</h2>
            <h1 className='text-8xl '>404</h1>
        </div>
    </div>
  )
}

export default ErrorPage