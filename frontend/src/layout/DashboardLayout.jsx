import { useUser } from '@clerk/clerk-react'
import React from 'react'
import Navbar from '../components/Navbar';
import Sidemenu from '../components/Sidemenu';

const DashboardLayout = ({children, activeMenu}) => {
  
  const {user} = useUser();
  
  return (

    <div>
        {/* Navbar */}
        <Navbar activeMenu={activeMenu}/>
        {user && (
            <div className="flex">
                <div className='max-[1080px]:hidden'>
                    {/* Sidemenu */}
                    <Sidemenu activeMenu={activeMenu}/>
                </div>
                <div className="grow mx-5">
                    {children}
                </div>
            </div>
        )}
    </div>

  )
}

export default DashboardLayout
