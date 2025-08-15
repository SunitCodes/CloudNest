import { IndianRupee } from "lucide-react";
import React, { useState } from "react";

const PricingSection = () => {
  const [billing, setBilling] = useState("annual");

  return (
    <section className="bg-[#f9f7ff] min-h-screen flex flex-col items-center py-12 px-2">
      <span className="bg-purple-50 text-purple-600 text-xs font-semibold px-4 py-1 rounded-xl mb-8">
        Transparent Pricing
      </span>
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-3">
        Better Prices. <span className="text-purple-600">No Worries.</span>
      </h1>
      <p className="text-gray-500 text-center max-w-3xl mb-12 mt-2">
        From Simple Tools And Predictable Pricing To Support Designed For Growing Businesses, CloudNest Is Built To Serve The Unique Needs Of Startups And SMBs.
      </p>

      {/* Billing Toggle */}
      <div className="flex space-x-2 mb-16">
        <button
          onClick={() => setBilling("annual")}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition cursor-pointer ${
            billing === "annual"
              ? "bg-purple-600 text-white shadow"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          Billed Annually <span className="bg-white text-purple-600 ml-2 px-2 py-0.5 rounded-full text-xs font-bold">Save 20%</span>
        </button>
        <button
          onClick={() => setBilling("monthly")}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition cursor-pointer ${
            billing === "monthly"
              ? "bg-purple-600 text-white shadow"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          Billed Monthly
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-4">
        {/* Free */}
        <div className="bg-white rounded-3xl shadow p-8 flex flex-col items-center md:items-start">
          <span className="text-lg font-medium mb-2">Free</span>
          <span className="text-4xl font-bold mb-1">
            <IndianRupee className="inline mr-1"/>{billing === "annual" ? "0" : "0"}
            <span className="text-lg font-medium text-gray-400"> /Month</span>
          </span>
          <span className="text-gray-500 text-sm mb-6 text-center md:text-left">
            Perfect for getting started
          </span>
          <button className="bg-white border border-purple-600 text-purple-600 cursor-pointer font-semibold px-7 py-2 rounded-full mb-6 hover:bg-purple-50 transition">
            Get Started
          </button>
          <ul className="space-y-2 text-gray-700 w-full">
            <li className="flex items-center">
              <span className="text-purple-600 mr-2">✔</span> 5 file uploads
            </li>
            <li className="flex items-center">
              <span className="text-purple-600 mr-2">✔</span> Basic file sharing
            </li>
            <li className="flex items-center">
              <span className="text-purple-600 mr-2">✔</span> 7 day file retention
            </li>
            <li className="flex items-center">
              <span className="text-purple-600 mr-2">✔</span> Email support
            </li>
          </ul>
        </div>

        {/* Premium */}
        <div className="bg-purple-900 text-white rounded-3xl shadow-xl p-8 flex flex-col items-center md:items-start relative z-10">
          <span className="text-lg font-medium mb-2">Premium</span>
          <span className="text-4xl font-bold mb-1">
            <IndianRupee className="inline mr-1"/>{billing === "annual" ? "299" : "1299"}
            <span className="text-lg font-medium text-purple-200"> /Month</span>
          </span>
          <span className="text-purple-200 text-sm mb-6 text-center md:text-left">
            For individuals with larger needs
          </span>
          <button className="bg-purple-500 hover:bg-purple-600 text-white cursor-pointer font-semibold px-7 py-2 rounded-full mb-6 transition">
            Go Premium
          </button>
          <ul className="space-y-2 text-purple-100 w-full">
            <li className="flex items-center">
              <span className="text-purple-300 mr-2">✔</span> 500 file uploads
            </li>
            <li className="flex items-center">
              <span className="text-purple-300 mr-2">✔</span> Advanced file sharing
            </li>
            <li className="flex items-center">
              <span className="text-purple-300 mr-2">✔</span> 30 day file retention
            </li>
            <li className="flex items-center">
              <span className="text-purple-300 mr-2">✔</span> Priority email support
            </li>
            <li className="flex items-center">
              <span className="text-purple-300 mr-2">✔</span> File analytics 
            </li>
          </ul>
        </div>

        {/* Scale */}
        <div className="bg-white rounded-3xl shadow p-8 flex flex-col items-center md:items-start">
          <span className="text-lg font-medium mb-2">Ultimate</span>
          <span className="text-4xl font-bold mb-1">Custom</span>
          <span className="text-gray-500 text-sm mb-6 text-center md:text-left">
            For teams and Businesses
          </span>
          <button className="bg-white border border-purple-600 text-purple-600 cursor-pointer font-semibold px-7 py-2 rounded-full mb-6 hover:bg-purple-50 transition">
            Go Ultimate
          </button>
          <ul className="space-y-2 text-gray-700 w-full">
            <li className="flex items-center">
              <span className="text-purple-600 mr-2">✔</span> 5000 file uploads
            </li>
            <li className="flex items-center">
              <span className="text-purple-600 mr-2">✔</span> Team sharing capabilities
            </li>
            <li className="flex items-center">
              <span className="text-purple-600 mr-2">✔</span> Unlimited file retention
            </li>
            <li className="flex items-center">
              <span className="text-purple-600 mr-2">✔</span> 24/7 priority support
            </li>
            <li className="flex items-center">
              <span className="text-purple-600 mr-2">✔</span> Advanced Analytics
            </li>
            <li className="flex items-center">
              <span className="text-purple-600 mr-2">✔</span> API access
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
