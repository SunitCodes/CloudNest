import { ArrowLeftRight, CloudUpload, MonitorSmartphone } from 'lucide-react'
import React from 'react'

const HeroSection = ({openSignIn, openSignUp}) => {
  return (
    <section className="bg-[#f9f7ff] py-12">

      <div className="absolute top-4 left-4">
        <img 
          src='/CloudNestLogo.png' 
          alt="CloudNest Logo" 
          className="w-20 sm:w-12 md:w-16 lg:w-20 object-contain ml-4"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Top Badge */}
        <div className="inline-block bg-white text-sm text-gray-500 px-4 py-1 rounded-full shadow ">
          Introduce Cloud Platforms
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-3xl md:text-5xl font-bold leading-tight">
          With <span className="text-purple-500">CloudNest</span> <br />
          Share Files Securely
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Upload, manage and share your files securely. Accessible anywhere, anytime.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => openSignUp()} 
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-6 py-3 rounded-full cursor-pointer">
            Get Started
          </button>
          <button
            onClick={() => openSignIn()} 
            className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium px-6 py-3 rounded-full cursor-pointer">
            Sign In
          </button>
        </div>

        {/* Bottom Boxes */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Left Box */}
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden max-w-m mx-auto">
            {/* 3 dots */}
            <div className="flex items-center space-x-2 px-4 py-4 bg-gray-50">
              <span className="w-3 h-3 bg-red-400 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
            </div>
            {/* Content */}
            <div className="p-8  text-center px-10 ">
              <MonitorSmartphone className='inline w-12 h-12 mr-4'/>
              <ArrowLeftRight className='inline mr-4'/>
              <span className='text-purple-500'><CloudUpload className='inline w-12 h-12 '/></span>
            </div>
            <div className="p-2 text-center px-10">
              <h3 className="font-bold text-xl">Welcome to CloudNest</h3>
              <p className="text-gray-500 mt-2 text-m">
                Everything you need for the file sharing
              </p>
              <p className="text-gray-500 mt-2 text-sm">
                CloudNest povides all the tools you need to manage your digital content. <br/>
                Create a free CloudNest account today.
              </p>
            </div>
          </div>

           {/* Right Box */}
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden max-w-2xl mx-auto">
            {/* 3 dots */}
            <div className="flex items-center space-x-2 px-4 py-4 bg-gray-50">
              <span className="w-3 h-3 bg-red-400 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
            </div>

            {/* Content */}
            <div className="p-8 text-center relative">
              {/* Heading */}
              <h2 className="text-2xl font-semibold text-purple-700">
                Simple way
              </h2>
              <h3 className="text-xl font-medium text-gray-800 mt-1">
                to manage & acces your files
              </h3>
              <p className="text-sm text-gray-500 mt-3 max-w-md mx-auto">
                CloudNest gives you secure access to all of your files. Manage your files easily & 
                collaborate with friends, family from any device. 
              </p>

              {/* Decorative arcs */}
              <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <div className="w-[85%] h-[85%] border-t-2 border-dotted border-blue-200 rounded-full absolute"></div>
                <div className="w-[95%] h-[95%] border-t-2 border-dotted border-blue-300 rounded-full absolute"></div>
              </div>

              {/* Floating files */}
              <div className="relative flex justify-center gap-8 mt-4 ">
                <div className="bg-white shadow-md rounded-md px-3 py-6 w-20 rotate-[-8deg]">
                  <div className="h-2 w-8 bg-blue-400 rounded mb-2"></div>
                  <div className="h-2 w-10 bg-gray-300 rounded mb-2"></div>
                  <div className="h-2 w-7 bg-gray-300 rounded"></div>
                </div>
                <div className="bg-white shadow-md rounded-md px-3 py-6 w-20 rotate-[5deg]">
                  <div className="h-2 w-8 bg-purple-400 rounded mb-2"></div>
                  <div className="h-2 w-10 bg-gray-300 rounded mb-2"></div>
                  <div className="h-2 w-7 bg-gray-300 rounded"></div>
                </div>
                <div className="bg-white shadow-md rounded-md px-3 py-6 w-20 rotate-[10deg]">
                  <div className="h-2 w-10 bg-orange-400 rounded mb-2"></div>
                  <div className="h-2 w-7 bg-gray-300 rounded mb-2"></div>
                  <div className="h-2 w-12 bg-gray-300 rounded"></div>
                </div>
              </div> 

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection