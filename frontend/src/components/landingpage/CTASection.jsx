import React from 'react'

const CTASection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-purple-50 to-purple-30 py-16 mt-8">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-purple-900">
                Ready to get started?<br />
                Create your account today.
            </h2>
            </div>
            <button
            className="bg-white hover:bg-gray-100 text-purple-600 cursor-pointer font-semibold rounded-xl px-8 py-4 shadow transition duration-200"
            >
            Sign up for free
            </button>
        </div>
    </section>

  )
}

export default CTASection