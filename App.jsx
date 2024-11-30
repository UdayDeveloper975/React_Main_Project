import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Components/Landingpage'
import AdminPortal from './Components/AdminLogin/AdminPortal'
import UserPortal from './Components/UserLogin/UserPortal'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage />} path='/' />
          <Route element={<AdminPortal />} path='/adminportal/*' />
          <Route element={<UserPortal/>} path='/userportal/*'/>
         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
