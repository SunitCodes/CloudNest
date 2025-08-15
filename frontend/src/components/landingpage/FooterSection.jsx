// Footer.jsx
import {
  Facebook,
  Twitter,
  X,
  Cookie,
  ArrowUp
} from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-white border-t-[2px] border-gray-300 mt-16 mx-20 text-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">
        {/* Left: Logo and Description */}
        <div className="md:w-1/3">
          <h2 className="text-2xl font-bold text-purple-600">CloudNest</h2>
          <p className="mt-2 leading-relaxed text-sm md:text-base">
            Run all challenging software from any device, anywhere with your own supercomputer on the cloud.
          </p>
          {/* Socials */}
          <div className="flex space-x-4 mt-6">
            <a href="#" aria-label="Facebook" className="hover:scale-110 transition">
              <Facebook className="text-blue-600 w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:scale-110 transition">
              <Twitter className="text-blue-400 w-5 h-5" />
            </a>
            <a href="#" aria-label="X" className="hover:scale-110 transition">
              <X className="w-5 h-5" />
            </a>
          </div>
        </div>
        {/* Links */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
          <div>
            <h6 className="font-semibold mb-3">Company</h6>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-600">About Us</a></li>
              <li><a href="#" className="hover:text-purple-600">Careers at Virries</a></li>
              <li><a href="#" className="hover:text-purple-600">Customer Reviews</a></li>
              <li><a href="#" className="hover:text-purple-600">Investor Relations</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-3">Products</h6>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-600">Product Overview</a></li>
              <li><a href="#" className="hover:text-purple-600">Managed Databases</a></li>
              <li><a href="#" className="hover:text-purple-600">Functions</a></li>
              <li><a href="#" className="hover:text-purple-600">App Platform</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-3">Solutions</h6>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-600">Databases</a></li>
              <li><a href="#" className="hover:text-purple-600">Virtual Machines</a></li>
              <li><a href="#" className="hover:text-purple-600">Data Analytics</a></li>
              <li><a href="#" className="hover:text-purple-600">AI and Machine Learning</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-3">Contact</h6>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-600">Support</a></li>
              <li><a href="#" className="hover:text-purple-600">System Status</a></li>
              <li><a href="#" className="hover:text-purple-600">Report Issues</a></li>
              <li><a href="#" className="hover:text-purple-600">Share Your Ideas</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Row */}
      <div className="border-t-[2px] border-gray-300 px-4 py-4 flex flex-col gap-2 sm:flex-row sm:justify-between items-center text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <span>&copy; 2025 CloudNest, LLC.</span>
          <a href="#" aria-label="Facebook" className="ml-2"><Facebook className="w-4 h-4" /></a>
          <a href="#" aria-label="Twitter" className="ml-2"><Twitter className="w-4 h-4" /></a>
          <a href="#" aria-label="X" className="ml-2"><X className="w-4 h-4" /></a>
        </div>
        <div className="flex items-center gap-4 mt-2 sm:mt-0">
          <a href="#" className="flex items-center gap-1 hover:text-purple-600"><Cookie className="w-4 h-4" /> Cookie Preferences</a>
          <a href="#" className="flex items-center gap-1 hover:text-purple-600"><ArrowUp className="w-4 h-4" /> Back to Top</a>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;