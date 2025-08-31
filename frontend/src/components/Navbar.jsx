import { SignedIn, UserButton } from '@clerk/clerk-react';
import { Menu, Share2, Wallet, X } from 'lucide-react';
import { CreditCard, Files, LayoutDashboard, Receipt, Upload } from "lucide-react";
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SideMenu from './Sidemenu';
import CreditsDisplay from './CreditsDisplay';

const Navbar = ({activeMenu}) => {
        
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <div className="flex items-center justify-between gap-5 bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-4 sm:px-7 sticky top-0 z-30">


      {/* Left side - menu button and title */}
      <div className="flex items-center gap-5">
        <button
          onClick={() => setOpenSideMenu(!openSideMenu)}
          className="block lg:hidden text-black hover:bg-gray-100 p-1 rounded transition-colors"
        >
          {openSideMenu ? (
            <X className="text-2xl" />
          ) : (
            <Menu className="text-2xl" />
          )}
        </button>
        <div className="flex items-center gap-2">
          <img 
            src='/CloudNestLogo.png' 
            alt="CloudNest Logo" 
            className="w-12 sm:w-6 md:w-8 lg:w-10 object-contain"
          />
          <span className="text-xl font-semibold text-black truncate">
            CloudNest
          </span>
        </div>
      </div>



      {/* Right side - credits and user button */}
      <SignedIn>
        <div className="flex items-center gap-4">
          <Link to="/subscription">
            <CreditsDisplay credits={5}/>
          </Link>
          <div className="relative pt-2">
            <UserButton/>
          </div>
        </div>
      </SignedIn>



      {/* Mobile side menu */}
      {/* Side menu component goes here */}
      {openSideMenu && (
          <div className="fixed top-[73px] left-0 right-0 bg-white border-b border-gray-200 lg:hidden z-20">
            {/* Sidemenu */}
            <SideMenu activeMenu={activeMenu}/>
          </div>
        )
      }

    </div>
  );
}

export default Navbar