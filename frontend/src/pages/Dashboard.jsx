import React, { useEffect } from 'react'
import DashboardLayout from '../layout/DashboardLayout'
import { useAuth } from '@clerk/clerk-react'

const Dashboard = () => {

  const {getToken} = useAuth();
  useEffect( () => {
    const displayToken = async () => {
      const token = await getToken();
      console.log("token: ",token);

    }
    displayToken();
  }, [])

  return (
    <DashboardLayout activeMenu="Dashboard">
      <div>
        Dashboard Content
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
