import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import MyFiles from './pages/MyFiles'
import UploadFiles from './pages/UploadFiles'
import Subscription from './pages/Subscription'
import Transaction from './pages/Transaction'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/myfiles' element={<MyFiles/>}/>
        <Route path='/upload' element={<UploadFiles/>}/>
        <Route path='/subscription' element={<Subscription/>}/>
        <Route path='/transaction' element={<Transaction/>}/> 
      </Routes>
    </BrowserRouter>
  );
}
