import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Login } from './components/LoginRegister/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Register } from './components/LoginRegister/Register'
import { UserDashBoard } from './components/MainComponent/UserTasks/UserDashboard'
import { ManagerDashBoard } from './components/MainComponent/ManagerTasks/ManagerDashBorad'
import { AddReimbursement } from './components/MainComponent/UserTasks/AddReimbursement'
import { UIAReimbursement } from './components/MainComponent/UserTasks/UIAddReimbursement'
import { UIEditReimbursement } from './components/MainComponent/UserTasks/UIEditReimbursement'
import { UIAllPendingReimbursements } from './components/MainComponent/UserTasks/UIAllPendingReimbursements'
import { UIManagerAllReimbursement } from './components/MainComponent/ManagerTasks/UIManagerAllReimbursement'
import { UIManagerAllPendingReimbursements } from './components/MainComponent/ManagerTasks/UIManagerAllPendingReimbursements'
import { AccessCheck } from './components/MainComponent/UserTasks/AccessCheck'


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path='/userdashboard' element={<UserDashBoard/>}/>
        <Route path="/addreimbursement" element={<UIAReimbursement/>}/>
        <Route path="/editReimbursement" element={<UIEditReimbursement/>}/>
        <Route path="/allPendingReimbursementByUser" element={<UIAllPendingReimbursements/>}/>
        <Route path='/managerdashboard' element={<ManagerDashBoard/>}/>
        <Route path='/managerAllReimbursement' element={< UIManagerAllReimbursement/>}/>
        <Route path='/managerAllPendingReimbursement' element={< UIManagerAllPendingReimbursements/>}/>
        <Route path='/accesscheck' element={<AccessCheck/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
