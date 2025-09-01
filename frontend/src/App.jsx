import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import MyFiles from './pages/MyFiles'
import UploadFiles from './pages/UploadFiles'
import Subscription from './pages/Subscription'
import Transaction from './pages/Transaction'
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <BrowserRouter>

      <Toaster/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={
          <>
            <SignedIn><Dashboard/></SignedIn>
            <SignedOut><RedirectToSignIn/></SignedOut>
          </>
        } />
        <Route path='/myfiles' element={<MyFiles/>}/>
        <Route path='/upload' element={<UploadFiles/>}/>
        <Route path='/subscription' element={<Subscription/>}/>
        <Route path='/transactions' element={<Transaction/>}/> 
      </Routes>
    </BrowserRouter>
  );
}
