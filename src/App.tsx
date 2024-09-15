import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/home/home'
import SignUp from './pages/signup/signup'
import Login from './pages/login/login'
import Profile from './pages/profile/profile'
import ProjectList from './pages/projectList/projectList'
import ProjectDetails from './pages/projectDetails/projectDetails'
import ProjectSubmission from './pages/projectSubmission/projectSubmission'
import EscrowManage from './pages/escrowManage/escrowManage'
import ReviewPage from './pages/reviewPage/reviewPage'
import PaymentIntegration from './pages/paymentIntegration/paymentIntegration'
import ResolutionPage from './pages/resolutionPage/resolutionPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/signup' element = {<SignUp />} /> 
      <Route path='/login' element = {<Login />} /> 
      <Route path='/profile' element = {<Profile />} /> 
      <Route path='/projectList' element = {<ProjectList/>} /> 
      <Route path='/projectDetails' element = {<ProjectDetails/>} /> 
      <Route path='/projectSubmission' element = {<ProjectSubmission/>} /> 
      <Route path='/escrowManage' element = {<EscrowManage/>} /> 
      <Route path='/reviewPage' element = {<ReviewPage/>} /> 
      <Route path='/paymentIntegration' element = {<PaymentIntegration/>} /> 
      <Route path='/resolution' element = {<ResolutionPage/>} /> 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
