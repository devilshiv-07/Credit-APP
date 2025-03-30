import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, NotFound, UserDashboard, AdminDashboard, VerifierDashboard } from "./pages";

const App = () => {
  return (
    <>
    <Router > 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<UserDashboard />} />
        <Route path='/verifier' element={<VerifierDashboard />} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
    </>
  )
}

export default App