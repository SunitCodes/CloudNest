import { ArrowLeftRight, CloudUpload, MonitorSmartphone } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
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
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-6 py-3 rounded-full cursor-pointer">
            Get Started
          </button>
          <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium px-6 py-3 rounded-full cursor-pointer">
            Sign In
          </button>
        </div>

        {/* Bottom Boxes */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Left Box */}
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden max-w-m mx-auto">
            {/* 3 dots */}
            <div className="flex items-center space-x-2 px-4 py-4 bg-gray-50">
              <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
              <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
              <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
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
                CloudNest povides all the tools you need to manage your digital content
              </p>
            </div>
          </div>

           {/* Right Box */}
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden max-w-m mx-auto">
            {/* 3 dots */}
            <div className="flex items-center space-x-2 px-4 py-4 bg-gray-50">
              <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
              <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
              <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
            </div>
            {/* Content */}
            <div className="p-6">
              <h3 className="font-semibold text-lg text-purple-600">Virries</h3>
              <input
                type="text"
                placeholder="Search by resource name or public IP"
                className="mt-2 w-full border rounded-lg px-3 py-2 text-sm"
              />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <div className="bg-blue-100 p-4 rounded-lg">
                  <p className="font-medium">Small package</p>
                  <p className="text-sm text-gray-600">Processor: 4 Cores</p>
                  <p className="text-sm text-gray-600">GPU: 16 GB</p>
                  <p className="text-sm text-gray-600">RAM: 16 GB</p>
                </div>
                <div className="bg-purple-100 p-4 rounded-lg">
                  <p className="font-medium">Medium package</p>
                  <p className="text-sm text-gray-600">Processor: 16 Cores</p>
                  <p className="text-sm text-gray-600">GPU: 16 GB</p>
                  <p className="text-sm text-gray-600">RAM: 64 GB</p>
                </div>
                <div className="bg-indigo-900 text-white p-4 rounded-lg">
                  <p className="font-medium">Large package</p>
                  <p className="text-sm">Processor: 48 Cores</p>
                  <p className="text-sm">GPU: 4*16 GB</p>
                  <p className="text-sm">RAM: 192 GB</p>
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