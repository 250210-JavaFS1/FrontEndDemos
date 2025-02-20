import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Login } from './components/LoginRegister/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Register } from './components/LoginRegister/Register'
import { UserDashBoard } from './components/MainComponent/UserDashboard'
import { ManagerDashBoard } from './components/MainComponent/ManagerDashBorad'

function App() {



  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path='/userdashboard' element={<UserDashBoard/>}/>
        <Route path='/managerdashboard' element={<ManagerDashBoard/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
