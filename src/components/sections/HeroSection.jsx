const HeroSection = () => {
  return (
    <div className="pt-16 pb-20 md:pt-24 md:pb-32 flex flex-col md:flex-row items-center">
      {/* Left column - Text content */}
      <div className="w-full md:w-1/2 text-left">
        <p className="text-blue-100 mb-2">Anywhere Access Easy Learning</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
          The Best <span className="text-blue-300">Platform</span> For
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Enhancing Skills
        </h2>
        <p className="text-white text-sm max-w-md mb-8">
          Working collaboratively to ensure every student achieves academically,
          socially, and emotional
        </p>

        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium">
            Get Started
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-full text-sm font-medium">
            Hire Me
          </button>
        </div>
      </div>

      {/* Right column - Image */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500 rounded-full transform scale-90 translate-x-4 translate-y-4"></div>
          <div className="relative bg-blue-500 rounded-full overflow-hidden p-4">
            <img
              src="https://parspng.com/wp-content/uploads/2022/12/studentpng.parspng.com-9.png"
              alt="Student with books"
              className="rounded-full object-cover h-96"
            />
          </div>

          {/* Navigation dots */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
            <button className="w-3 h-3 rounded-full border border-white"></button>
            <button className="w-3 h-3 rounded-full bg-white"></button>
            <button className="w-3 h-3 rounded-full border border-white"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
